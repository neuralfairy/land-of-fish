import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Zap, Shield, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Sales with <span className="gradient-text">Expert CRM Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Landoffish Solutions helps businesses implement and optimize CRM systems to streamline sales processes,
              enhance efficiency, and increase conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://salescentri.com/get-started/free-trial" target="_blank">
                <Button size="lg" className="gradient-bg text-black hover:opacity-90 px-8 py-3">
                  Launch Your Free Trial Now
                </Button>
              </Link>
              <Link href="https://salescentri.com/get-started/book-demo" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7] hover:text-black px-8 py-3 bg-transparent"
                >
                  Schedule Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Landoffish Solutions</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We deliver enterprise-grade CRM solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#333333] border-[#6ee7b7]/20 card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#6ee7b7]">Rapid Implementation</h3>
                <p className="text-gray-300">
                  Get your CRM up and running in weeks, not months. Our proven methodology ensures quick deployment with
                  minimal disruption.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#ec4899]/20 card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#ec4899]">Expert Team</h3>
                <p className="text-gray-300">
                  Our certified CRM specialists have 10+ years of experience with Salesforce, HubSpot, and Zoho
                  implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#6ee7b7]/20 card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#6ee7b7]">Secure & Compliant</h3>
                <p className="text-gray-300">
                  GDPR compliant solutions with enterprise-grade security. Your data is protected with industry-leading
                  standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner CRM Logos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted <span className="gradient-text">CRM Partners</span>
            </h2>
            <p className="text-gray-300">We specialize in the world's leading CRM platforms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#333333] w-full text-center">
              <Image
                src="/placeholder.svg?height=60&width=120&text=Salesforce"
                alt="Salesforce CRM Platform"
                width={120}
                height={60}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-400">Salesforce</p>
            </div>
            <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#333333] w-full text-center">
              <Image
                src="/placeholder.svg?height=60&width=120&text=HubSpot"
                alt="HubSpot CRM Platform"
                width={120}
                height={60}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-400">HubSpot</p>
            </div>
            <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#333333] w-full text-center">
              <Image
                src="/placeholder.svg?height=60&width=120&text=Zoho"
                alt="Zoho CRM Platform"
                width={120}
                height={60}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-400">Zoho</p>
            </div>
            <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#333333] w-full text-center">
              <Image
                src="/placeholder.svg?height=60&width=120&text=Pipedrive"
                alt="Pipedrive CRM Platform"
                width={120}
                height={60}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-400">Pipedrive</p>
            </div>
            <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#333333] w-full text-center">
              <Image
                src="/placeholder.svg?height=60&width=120&text=Microsoft"
                alt="Microsoft Dynamics 365 CRM"
                width={120}
                height={60}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-400">Microsoft Dynamics</p>
            </div>
            <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#333333] w-full text-center">
              <Image
                src="/placeholder.svg?height=60&width=120&text=Monday"
                alt="Monday.com CRM Platform"
                width={120}
                height={60}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-400">Monday.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#333333] border-[#6ee7b7]/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#6ee7b7] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Landoffish Solutions transformed our sales process. We saw a 40% increase in conversion rates within
                  3 months."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#6ee7b7] rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">John Davis</p>
                    <p className="text-sm text-gray-400">CEO, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#ec4899]/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#ec4899] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The migration from our old system was seamless. Their team handled everything professionally."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#ec4899] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sarah Miller</p>
                    <p className="text-sm text-gray-400">VP Sales, GrowthCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#6ee7b7]/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#6ee7b7] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Outstanding support and expertise. They truly understand CRM optimization."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#6ee7b7] rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Mike Johnson</p>
                    <p className="text-sm text-gray-400">Director, SalesPro</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform Your Sales?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses that have streamlined their sales processes with our expert CRM implementation
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://salescentri.com/get-started/free-trial" target="_blank">
              <Button size="lg" className="gradient-bg text-black hover:opacity-90 px-8 py-3">
                Begin Your CRM Journey
              </Button>
            </Link>
            <Link href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7] hover:text-black px-8 py-3 bg-transparent"
              >
                Access Expert Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
