import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Award, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      experience: "15+ years CRM expertise",
      certifications: "Salesforce Certified, HubSpot Partner",
      image: "/placeholder.svg?height=300&width=300&text=Michael",
    },
    {
      name: "Sarah Chen",
      role: "Lead Implementation Specialist",
      experience: "12+ years system integration",
      certifications: "Zoho Certified, Microsoft Dynamics",
      image: "/placeholder.svg?height=300&width=300&text=Sarah",
    },
    {
      name: "David Thompson",
      role: "Data Migration Expert",
      experience: "10+ years data management",
      certifications: "AWS Certified, Data Analytics",
      image: "/placeholder.svg?height=300&width=300&text=David",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Landoffish Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Founded in 2018 in Savannah, Georgia, Landoffish Solutions has been helping businesses transform their
                sales processes through expert CRM implementation and optimization.
              </p>
              <p className="text-gray-300 mb-8">
                Our mission is simple: to streamline your sales operations, enhance team efficiency, and drive
                measurable growth through strategic CRM solutions. We believe that the right CRM implementation can
                transform not just your sales process, but your entire business.
              </p>
              <Link href="https://salescentri.com/get-started/free-trial" target="_blank">
                <Button className="gradient-bg text-black hover:opacity-90">Start Your Transformation</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-[#1f1f1f] rounded-lg p-8 border border-[#333333]">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Savannah Office"
                  alt="Landoffish Solutions Office in Savannah"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <p className="text-gray-300">Successful Implementations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#ec4899] mb-2">6</div>
              <p className="text-gray-300">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#ec4899] mb-2">Local</div>
              <p className="text-gray-300">Savannah-Based Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our certified CRM specialists bring decades of combined experience to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-[#1f1f1f] border-[#333333] card-hover">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#6ee7b7] font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-2">{member.experience}</p>
                  <p className="text-gray-400 text-xs">{member.certifications}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Savannah Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="gradient-text">Savannah-Based</span> Service?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6ee7b7] mb-2">Local Expertise</h3>
                    <p className="text-gray-300">
                      Deep understanding of Georgia business landscape and local market dynamics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#ec4899] rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#ec4899] mb-2">Same Time Zone</h3>
                    <p className="text-gray-300">Real-time communication and support during your business hours.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6ee7b7] mb-2">Personal Touch</h3>
                    <p className="text-gray-300">
                      Direct access to our team with personalized service and attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#333333] rounded-lg p-8 border border-[#6ee7b7]/20">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Savannah Historic District"
                  alt="Savannah Historic District"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
                <div className="mt-4 text-center">
                  <p className="text-gray-300 text-sm">Proudly serving businesses from Historic Savannah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Mission & Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1f1f1f] border-[#6ee7b7]/20 card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#6ee7b7] mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with seamless CRM solutions that transform sales processes, enhance team
                  productivity, and drive sustainable growth. We believe every business deserves a CRM system that works
                  as hard as they do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1f1f1f] border-[#ec4899]/20 card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#ec4899] mb-4">Our Values</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ec4899] rounded-full mr-3"></div>
                    Excellence in every implementation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ec4899] rounded-full mr-3"></div>
                    Transparent communication
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ec4899] rounded-full mr-3"></div>
                    Long-term partnerships
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#ec4899] rounded-full mr-3"></div>
                    Continuous innovation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with <span className="gradient-text">Savannah's CRM Experts?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our local expertise and proven methodology can transform your sales process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://salescentri.com/get-started/book-demo" target="_blank">
              <Button size="lg" className="gradient-bg text-black hover:opacity-90 px-8 py-3">
                Launch Your Project
              </Button>
            </Link>
            <Link href="https://salescentri.com/get-started/calendly" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7] hover:text-black px-8 py-3 bg-transparent"
              >
                Schedule Expert Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
