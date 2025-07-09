"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Youtube, RefreshCw } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NoVideoDetectedClient() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openYouTube = () => {
    window.open("https://www.youtube.com", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col justify-center">
      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <div
          className={`max-w-md mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-yellow-500/25">
                  <Search className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">No new video found 😕</h1>

              {/* Message */}
              <div className="space-y-4 mb-8 text-gray-300">
                <p className="text-base leading-relaxed">
                  We didn't detect any new video in your Watchletter Feed playlist.
                </p>
                <p className="text-base leading-relaxed">Make sure you've added a video to the playlist.</p>
              </div>

              {/* Recovery Steps */}
              <div className="space-y-4 mb-8">
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Step 1:</p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-12 text-base font-medium border-gray-600 bg-gray-800/50 hover:bg-gray-700/50 text-white hover:text-white"
                    onClick={openYouTube}
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    Go to YouTube
                  </Button>
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Step 2:</p>
                  <Button
                    size="lg"
                    className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                    onClick={() => router.push("/processing")}
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    I've added a video now
                  </Button>
                </div>
              </div>

              {/* Helper Text */}
              <p className="text-xs text-gray-400">Open a video and "Save" it to the "Watchletter Feed" playlist.   </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}