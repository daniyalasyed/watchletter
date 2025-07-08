"use client"

import { Button } from "@/components/ui/button"
import { Send, LogOut, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function EmailSentPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [iconPulse, setIconPulse] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
    // Trigger confetti animation
    setShowConfetti(true)

    // Trigger icon pulse/shimmer after a short delay
    const timer = setTimeout(() => {
      setIconPulse(true)
    }, 500)

    // Remove confetti after animation completes
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(confettiTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {/* Generate confetti pieces */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                animationIterationCount: "1",
                animationFillMode: "forwards",
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <div
                className={`w-2 h-2 ${
                  Math.random() > 0.5
                    ? Math.random() > 0.5
                      ? "bg-blue-400"
                      : "bg-purple-400"
                    : Math.random() > 0.5
                      ? "bg-pink-400"
                      : "bg-yellow-400"
                } rounded-sm`}
                style={{
                  animation: `confetti-fall ${2 + Math.random() * 2}s ease-out forwards`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-8">
          {/* Top Message */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h1 className="text-2xl md:text-3xl font-bold">
              You're all set,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Daniyal
              </span>
              ! 🎉
            </h1>
          </div>

          {/* Main Area */}
          <div
            className={`max-w-md mx-auto text-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Visual Icon */}
            <div className="mb-8 relative">
              <div
                className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30 transition-all duration-700 ${
                  iconPulse ? "scale-105" : "scale-100"
                }`}
              >
                <Send className="w-10 h-10 text-white" />
                {/* Subtle shimmer/sparkle effect */}
                <Sparkles className="absolute top-0 right-0 w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Your first Watchletter is on its way.
            </h2>

            {/* Subtext */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We've sent it to your inbox. Give it a read — you might just see yourself in it.
            </p>

            {/* Primary CTA */}
            <Button
              size="lg"
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://mail.google.com", "_blank")}
            >
              Open Gmail
            </Button>
          </div>
        </div>
      </div>

      {/* Secondary Section */}
      <div
        className={`container mx-auto px-4 py-8 text-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          What's next?
        </h3>
        <p className="text-base text-gray-300 max-w-md mx-auto leading-relaxed mb-8">
          Add one video to your Watchletter Feed every day — you'll get a fresh email next morning.     </p>

        {/* Bottom Log out button */}
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-gray-300 text-sm h-auto p-2 hover:bg-transparent"
          onClick={() => router.push("/")}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log out
        </Button>
      </div>

      {/* Custom CSS for confetti animation */}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
