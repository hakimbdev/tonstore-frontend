"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useTelegramConnect, useTONConnect } from "./button-handlers"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Spinner } from "@/components/ui/spinner"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { isLoading: isLoadingTelegram, handleClick: handleTelegramConnect } = useTelegramConnect()
  const { isLoading: isLoadingTON, handleClick: handleTONConnect } = useTONConnect()

  const navItems = [
    { name: "Usernames", href: "/usernames" },
    { name: "Numbers", href: "/numbers" },
    { name: "Stars", href: "/stars", isNew: true },
    { name: "Premium", href: "/premium" },
    { name: "Ads", href: "/ads" },
  ]

  return (
    <nav className="border-b border-gray-800 bg-[#1C2128]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">TONSTORE</span>
            </Link>

            <div className="hidden md:flex ml-10 space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium relative
                    ${
                      pathname === item.href
                        ? "text-white bg-gray-800"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    } transition-all duration-300 ease-in-out`}
                >
                  {item.name}
                  {item.isNew && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-xs px-1 rounded-full animate-pulse">
                      New
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
              onClick={handleTelegramConnect}
              disabled={isLoadingTelegram}
            >
              {isLoadingTelegram ? <Spinner className="mr-2" /> : null}
              Connect Telegram
            </Button>
            <Button
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out"
              onClick={handleTONConnect}
              disabled={isLoadingTON}
            >
              {isLoadingTON ? <Spinner className="mr-2" /> : null}
              Connect TON
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? "text-white bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  } transition-all duration-300 ease-in-out`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {item.isNew && <span className="ml-2 bg-blue-500 text-xs px-1 rounded-full animate-pulse">New</span>}
                </Link>
              ))}
              <div className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
                  onClick={() => {
                    handleTelegramConnect()
                    setIsOpen(false)
                  }}
                  disabled={isLoadingTelegram}
                >
                  {isLoadingTelegram ? <Spinner className="mr-2" /> : null}
                  Connect Telegram
                </Button>
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out"
                  onClick={() => {
                    handleTONConnect()
                    setIsOpen(false)
                  }}
                  disabled={isLoadingTON}
                >
                  {isLoadingTON ? <Spinner className="mr-2" /> : null}
                  Connect TON
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

