import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Landoffish Solutions - CRM Implementation & Optimization",
  description:
    "Professional CRM implementation and optimization services in Savannah, Georgia. Streamline sales processes, enhance efficiency, and increase conversion rates.",
  keywords:
    "crm setup, crm implementation, sales process optimization, system integration, B2B sales tools, Savannah CRM",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Landoffish Solutions",
              description: "CRM Implementation and Optimization Services",
              url: "https://landoffish.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Savannah",
                addressRegion: "Georgia",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-912-555-0123",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#121212] text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
