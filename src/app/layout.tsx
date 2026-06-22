import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shubham Mittal — Backend Engineer",
  description:
    "Backend Engineer with 3+ years of experience building scalable systems, APIs, and distributed infrastructure. Java · Spring Boot · Kafka · PostgreSQL.",
  keywords: ["backend engineer", "Java", "Spring Boot", "Kafka", "PostgreSQL", "API", "distributed systems"],
  authors: [{ name: "Shubham Mittal" }],
  openGraph: {
    title: "Shubham Mittal — Backend Engineer",
    description:
      "Backend Engineer building scalable systems and APIs. 75M+ emails/day at tinyco.ai.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${GeistSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
