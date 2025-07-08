"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openWatchletterFeed = () => {
    window.open("https://youtube.com/playlist?list=PLACEHOLDER", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <div className="container mx-auto px-4 py-8">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Watchletter
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`max-w-md mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Greeting */}
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                  Welcome back,{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Daniyal
                  </span>
                  ! 👋
                </h1>

                {/* Subtext */}
                <p className="text-gray-300 text-center mb-8">
                  Add one video to your Watchletter Feed every day — you'll get a fresh watchletter the next morning.
                </p>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
                  onClick={openWatchletterFeed}
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Open Watchletter Feed
                </Button>
              </CardContent>
            </Card>
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
