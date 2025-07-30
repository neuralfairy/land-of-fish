"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What CRM platforms do you specialize in?",
      answer:
        "We specialize in Salesforce, HubSpot, Zoho, Microsoft Dynamics, and Pipedrive. Our team is certified in these platforms and can help you choose the best fit for your business needs and budget.",
    },
    {
      question: "How long does a typical CRM implementation take?",
      answer:
        "Implementation timelines vary by complexity: Starter packages (2-3 weeks), Professional packages (4-6 weeks), and Enterprise implementations (8-12 weeks). We provide detailed project timelines during our initial consultation.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes! All our packages include comprehensive team training. This includes live training sessions, video tutorials, documentation, and ongoing support to ensure your team maximizes CRM adoption.",
    },
    {
      question: "Can you migrate data from our existing system?",
      answer:
        "Absolutely. We handle complete data migration including contacts, leads, opportunities, and historical data. We ensure zero data loss and maintain data integrity throughout the migration process.",
    },
    {
      question: "What kind of ongoing support do you provide?",
      answer:
        "We offer various support levels depending on your package: email support, priority phone support, dedicated account management, and 24/7 support for Enterprise clients. Support periods range from 30 days to 1 year.",
    },
    {
      question: "Do you offer custom integrations?",
      answer:
        "Yes, we can integrate your CRM with existing tools including email marketing platforms, accounting software, communication tools, and custom applications. We assess integration needs during consultation.",
    },
    {
      question: "What if we need changes after implementation?",
      answer:
        "We offer post-implementation support and can make adjustments as your business evolves. Additional customizations are billed at $150/hour with detailed estimates provided upfront.",
    },
    {
      question: "Are your solutions GDPR compliant?",
      answer:
        "Yes, all our CRM implementations include GDPR compliance features including data encryption, user consent management, data portability, and deletion capabilities to meet regulatory requirements.",
    },
    {
      question: "Do you work with businesses outside of Savannah?",
      answer:
        "While we're based in Savannah, we serve clients throughout Georgia and the Southeast. We can work remotely for most projects, with on-site visits available for Enterprise clients.",
    },
    {
      question: "What's included in your pricing?",
      answer:
        "Our pricing includes CRM setup, data migration, integrations, team training, documentation, and ongoing support. The scope varies by package - see our pricing page for detailed breakdowns.",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our CRM implementation services and process.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-[#1f1f1f] border-[#333333]">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#333333]/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-[#6ee7b7] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#6ee7b7] flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our CRM experts are here to help. Get in touch for personalized answers to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://salescentri.com/contact" target="_blank">
              <Button size="lg" className="gradient-bg text-black hover:opacity-90 px-8 py-3">
                Connect With Experts
              </Button>
            </Link>
            <Link href="https://salescentri.com/get-started/calendly" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7] hover:text-black px-8 py-3 bg-transparent"
              >
                Book Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
