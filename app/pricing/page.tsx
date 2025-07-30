import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for small businesses getting started with CRM",
      features: [
        "Basic CRM setup",
        "Data migration (up to 1,000 records)",
        "Standard integrations (3)",
        "Email support",
        "2 training sessions",
        "30-day support",
      ],
      notIncluded: ["Custom workflows", "Advanced automation", "Priority support"],
      popular: false,
      color: "border-[#333333]",
    },
    {
      name: "Professional",
      price: "$5,500",
      period: "one-time",
      description: "Ideal for growing businesses with complex needs",
      features: [
        "Complete CRM setup & customization",
        "Data migration (up to 10,000 records)",
        "Advanced integrations (10)",
        "Custom workflows & automation",
        "Priority email & phone support",
        "5 training sessions",
        "90-day support",
        "Custom reporting dashboards",
      ],
      notIncluded: ["Dedicated account manager", "On-site training"],
      popular: true,
      color: "border-[#6ee7b7]",
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "one-time",
      description: "Comprehensive solution for large organizations",
      features: [
        "Enterprise CRM implementation",
        "Unlimited data migration",
        "Unlimited integrations",
        "Advanced automation & AI",
        "Dedicated account manager",
        "24/7 priority support",
        "Unlimited training sessions",
        "On-site training available",
        "1-year support included",
        "Custom development",
        "Security audit & compliance",
      ],
      notIncluded: [],
      popular: false,
      color: "border-[#ec4899]",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect CRM implementation package for your business. No hidden fees, no monthly subscriptions.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-[#1f1f1f] ${plan.color} ${plan.popular ? "ring-2 ring-[#6ee7b7]" : ""} relative card-hover`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="gradient-bg text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#6ee7b7] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <X className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="https://salescentri.com/pricing/plans-overview" target="_blank">
                    <Button
                      className={`w-full ${plan.popular ? "gradient-bg text-black" : "border border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7] hover:text-black"} hover:opacity-90`}
                    >
                      View Detailed Pricing
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing <span className="gradient-text">FAQs</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="bg-[#333333] border-[#6ee7b7]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#6ee7b7] mb-3">What's included in the implementation?</h3>
                <p className="text-gray-300">
                  Each package includes complete CRM setup, data migration, integrations, team training, and ongoing
                  support. The scope varies by plan, with Enterprise including unlimited customization and dedicated
                  support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#ec4899]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#ec4899] mb-3">How long does implementation take?</h3>
                <p className="text-gray-300">
                  Starter: 2-3 weeks, Professional: 4-6 weeks, Enterprise: 8-12 weeks. Timeline depends on complexity
                  and data volume. We provide detailed project timelines during consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#6ee7b7]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#6ee7b7] mb-3">Do you offer payment plans?</h3>
                <p className="text-gray-300">
                  Yes! We offer flexible payment options including 50% upfront and 50% upon completion, or quarterly
                  payments for Enterprise clients. Contact us to discuss your preferred payment structure.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#ec4899]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#ec4899] mb-3">What if I need additional features later?</h3>
                <p className="text-gray-300">
                  We offer post-implementation support and can add features as your business grows. Additional
                  customizations are billed at $150/hour with detailed estimates provided upfront.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation to discuss your CRM needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://salescentri.com/pricing" target="_blank">
              <Button size="lg" className="gradient-bg text-black hover:opacity-90 px-8 py-3">
                Explore All Plans
              </Button>
            </Link>
            <Link href="https://salescentri.com/get-started/calendly" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7] hover:text-black px-8 py-3 bg-transparent"
              >
                Book Consultation Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
