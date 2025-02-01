import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TONSTORE",
  description: "Telegram Stars and Giveaways Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#1C2128] text-gray-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
          © 2025 TONSTORE. All rights reserved.
        </footer>
        <Toaster />
      </body>
    </html>
  )
}

