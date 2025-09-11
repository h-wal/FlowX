"use client"
import "./globals.css";
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault()
      router.push(window.location.pathname) // stay on the same page
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [router])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
