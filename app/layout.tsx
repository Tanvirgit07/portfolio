import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanvir Ahmmed - Full Stack Developer",
  description:
    "Modern portfolio showcasing innovative web development projects and expertise in React, Next.js, and modern technologies.",
  keywords: ["developer", "portfolio", "react", "nextjs", "web development", "full stack"],
  authors: [{ name: "Tanvir Ahmmed" }],
  creator: "Tanvir",
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://johndoe.dev",
    title: "Tanvir Ahmmed - Full Stack Developer",
    description: "Modern portfolio showcasing innovative web development projects and expertise.",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer",
    description: "Modern portfolio showcasing innovative web development projects and expertise.",
    creator: "@johndoe",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
