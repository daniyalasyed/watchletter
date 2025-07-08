"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, Sparkles, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function PlaylistSetupPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [iconBounce, setIconBounce] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true)

    // Trigger icon bounce after a short delay
    const timer = setTimeout(() => {
      setIconBounce(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Greeting */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Daniyal</span>!
            🎉
          </h1>
        </div>

        {/* Main Content Card */}
        <div
          className={`max-w-md mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              {/* Icon with Animation */}
              <div className={`mb-6 transition-all duration-500 ${iconBounce ? "animate-bounce" : ""}`}>
                <div className="relative inline-flex">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/25">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Your playlist is ready.</h2>

              {/* Body Text */}
              <div className="space-y-4 mb-8 text-gray-300">
                <p className="text-base leading-relaxed">
                  We've created a YouTube playlist called{" "}
                  <span className="font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Watchletter Feed
                  </span>{" "}
                  in your account.
                </p>
                <p className="text-base leading-relaxed">
                  Add a video to it right now and we'll send you a personalized newsletter instantly.
                </p>
              </div>

              {/* Visual Indicator */}
              <div className="flex items-center justify-center space-x-3 mb-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                <PlayCircle className="w-6 h-6 text-blue-400" />
                <span className="text-sm text-gray-300">Look for "Watchletter Feed" in your YouTube playlists</span>
              </div>

              {/* Primary CTA */}
              <Button
                size="lg"
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
                onClick={() => router.push("/processing")}
              >
                I've added a video
                <span className="ml-2">→</span>
              </Button>

              {/* Helper Text */}
              <p className="text-xs text-gray-400 mt-4">Don't worry, you can add more videos anytime</p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Spacing */}
        <div className="h-16"></div>
      </div>
    </div>
  )
}
