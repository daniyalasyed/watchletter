"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube, Sparkles, Brain, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8 pb-16">
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

        {/* Headlines */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Turn your YouTube playlist into a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              personalized newsletter
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We send you a Watchletter every morning with AI notes on what you saved.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center space-y-4 mb-16">
          <Button
            size="lg"
            className="w-full max-w-sm h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
            onClick={() => router.push("/playlist-setup")}
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </Button>

          <button
            className="text-gray-400 hover:text-white transition-colors text-sm underline underline-offset-4"
            onClick={() => router.push("/dashboard")}
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>

      {/* Why Watchletter Section */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Watchletter?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm max-w-sm mx-auto w-full">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Personalized, not generic.</h3>
              <p className="text-gray-300 text-sm">Every Watchletter is tailored to your context.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm max-w-sm mx-auto w-full">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">One click = daily insights.</h3>
              <p className="text-gray-300 text-sm">Just add videos. We handle the rest.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm max-w-sm mx-auto w-full md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Built for curious minds.</h3>
              <p className="text-gray-300 text-sm">You get clarity, not fluff.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 pb-8">
        <p className="text-center text-sm text-gray-400 max-w-md mx-auto">
          We'll only create a private playlist in your YouTube. Nothing else.
        </p>
      </div>
    </div>
  )
}
