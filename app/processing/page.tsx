"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, LogOut } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProcessingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [pulsePhase, setPulsePhase] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true)

    // Create a pulsing animation cycle
    const pulseInterval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 3)
    }, 1000)

    // Simulate processing time and then navigate
    const navigationTimer = setTimeout(() => {
      router.push("/email-sent")
    }, 4000) // Navigate after 4 seconds

    return () => {
      clearInterval(pulseInterval)
      clearTimeout(navigationTimer)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-8">
          {/* Top Message */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h1 className="text-2xl md:text-3xl font-bold">
              Nice one,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Daniyal
              </span>
              ! 👌
            </h1>
          </div>

          {/* Main Content */}
          <div
            className={`max-w-md mx-auto text-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Animated Icon */}
            <div className="mb-8 relative">
              <div className="relative inline-flex items-center justify-center">
                {/* Main glowing orb */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center transition-all duration-1000 ${
                    pulsePhase === 0
                      ? "scale-100 shadow-lg shadow-blue-500/30"
                      : pulsePhase === 1
                        ? "scale-110 shadow-xl shadow-purple-500/40"
                        : "scale-105 shadow-lg shadow-pink-500/35"
                  }`}
                >
                  <Sparkles className="w-10 h-10 text-white animate-spin" style={{ animationDuration: "3s" }} />
                </div>

                {/* Floating sparkles */}
                <div className="absolute -top-2 -right-2 animate-bounce" style={{ animationDelay: "0.5s" }}>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
                </div>
                <div className="absolute -bottom-1 -left-3 animate-bounce" style={{ animationDelay: "1s" }}>
                  <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                </div>
                <div className="absolute top-1 left-8 animate-bounce" style={{ animationDelay: "1.5s" }}>
                  <div className="w-2 h-2 bg-purple-400 rounded-full opacity-70"></div>
                </div>

                {/* Pulsing rings */}
                <div
                  className={`absolute inset-0 rounded-full border-2 border-blue-400/30 transition-all duration-1000 ${
                    pulsePhase === 0 ? "scale-150 opacity-0" : "scale-100 opacity-100"
                  }`}
                ></div>
                <div
                  className={`absolute inset-0 rounded-full border-2 border-purple-400/20 transition-all duration-1000 delay-300 ${
                    pulsePhase === 1 ? "scale-200 opacity-0" : "scale-110 opacity-100"
                  }`}
                ></div>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              We're cooking up your Watchletter...
            </h2>

            {/* Subtext */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Hang tight — we're fetching your video and generating your personalized email.
            </p>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-2 mb-8">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    pulsePhase === index ? "bg-blue-400 scale-125" : "bg-gray-600 scale-100"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 pb-8">
        <div className="text-center">
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
      </div>
    </div>
  )
}
