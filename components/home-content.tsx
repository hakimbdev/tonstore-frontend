"use client"

import { Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBuyStars, usePrepayGiveaway } from "@/components/button-handlers"
import { motion } from "framer-motion"
import { Spinner } from "@/components/ui/spinner"

export function HomeContent() {
  const { isLoading: isLoadingBuyStars, handleClick: handleBuyStars } = useBuyStars()
  const { isLoading: isLoadingPrepayGiveaway, handleClick: handlePrepayGiveaway } = usePrepayGiveaway()

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <h1 className="text-4xl font-bold mb-12 text-center">Welcome to TONSTORE</h1>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <Star className="w-16 h-16 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Telegram Stars</h2>
          <p className="text-gray-400 mb-8">Top up Stars Balance for yourself or your friends and colleagues.</p>
          <Button
            size="lg"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={handleBuyStars}
            disabled={isLoadingBuyStars}
          >
            {isLoadingBuyStars ? <Spinner /> : "Buy Stars Package"}
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-6 relative">
            <Zap className="w-16 h-16 text-blue-500" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-xs px-2 py-0.5 rounded-full animate-pulse">
              New
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Stars Giveaways</h2>
          <p className="text-gray-400 mb-8">
            Boost your Telegram channel by gifting Telegram Stars to your subscribers.
          </p>
          <Button
            size="lg"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={handlePrepayGiveaway}
            disabled={isLoadingPrepayGiveaway}
          >
            {isLoadingPrepayGiveaway ? <Spinner /> : "Prepay a Giveaway"}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

