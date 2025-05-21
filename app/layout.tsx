import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rescue Hero in the Canadian Rockies - Social Game",
  description:
    "A free social game for entertainment purposes only. Explore the Canadian Rockies, save hikers, and enjoy the adventure. No real money, no prizes, ages 19+.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          <DisclaimerBanner />
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
