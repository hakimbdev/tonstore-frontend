"use client"

import { useState } from "react"
import { connectTelegram, connectTON, buyStarsPackage, prepayGiveaway } from "@/app/actions"
import { useToast } from "@/components/ui/use-toast"

export function useButtonHandler(action: () => Promise<{ url: string }>) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const { url } = await action()
      window.location.href = url
    } catch (error) {
      console.error("Action failed:", error)
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, handleClick }
}

export function useTelegramConnect() {
  return useButtonHandler(connectTelegram)
}

export function useTONConnect() {
  return useButtonHandler(connectTON)
}

export function useBuyStars() {
  return useButtonHandler(buyStarsPackage)
}

export function usePrepayGiveaway() {
  return useButtonHandler(prepayGiveaway)
}

