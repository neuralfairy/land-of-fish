import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Settings, Database, Zap, Users, BarChart3, Workflow } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="gradient-text">CRM Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From setup to optimization, we provide end-to-end CRM services that drive real business results
          </p>
          <Link href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank">
            <Button size="lg" className="gradient-bg text-black hover:opacity-90">
              Experience Interactive Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#333333] border-[#6ee7b7]/20 card-hover">
              <CardHeader>
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#6ee7b7]">CRM Setup & Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Complete CRM setup tailored to your business processes, including custom fields, workflows, and user
                  permissions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#6ee7b7] mr-2" />
                    Custom field configuration
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#6ee7b7] mr-2" />
                    User role management
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#6ee7b7] mr-2" />
                    Pipeline customization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#ec4899]/20 card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ec4899] rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#ec4899]">Data Migration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Seamless migration of your existing customer data with zero data loss and minimal downtime.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] mr-2" />
                    Data cleansing & validation
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] mr-2" />
                    Duplicate removal
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] mr-2" />
                    Historical data preservation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#6ee7b7]/20 card-hover">
              <CardHeader>
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#6ee7b7]">System Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Connect your CRM with existing tools and platforms for a unified business ecosystem.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#6ee7b7] mr-2" />
                    Email marketing platforms
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#6ee7b7] mr-2" />
                    Accounting software
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#6ee7b7] mr-2" />
                    Communication tools
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#ec4899]/20 card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ec4899] rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#ec4899]">Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Automate repetitive tasks and streamline your sales processes for maximum efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] mr-2" />
                    Lead scoring automation
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] mr-2" />
                    Email sequences
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] mr-2" />
                    Task assignments
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#6ee7b7]/20 card-hover">
              <CardHeader>
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#6ee7b7]">Team Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive training programs to ensure your team maximizes CRM adoption and efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#6ee7b7] mr-2" />
                    Live training sessions
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#6ee7b7] mr-2" />
                    Video tutorials
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#6ee7b7] mr-2" />
                    Documentation & guides
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] border-[#ec4899]/20 card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ec4899] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#ec4899]">Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Custom dashboards and reports to track performance and make data-driven decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] mr-2" />
                    Sales performance metrics
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] mr-2" />
                    Pipeline analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] mr-2" />
                    ROI tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See Our <span className="gradient-text">Solutions in Action</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experience how our CRM implementation transforms your sales process
            </p>
          </div>

          <div className="bg-[#1f1f1f] rounded-lg p-8 border border-[#333333]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#6ee7b7]">Interactive CRM Demo</h3>
                <p className="text-gray-300 mb-6">
                  Explore our CRM implementation process with an interactive demo. See how we customize workflows,
                  automate processes, and integrate with your existing tools.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#6ee7b7] mr-3" />
                    Real-time data synchronization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#6ee7b7] mr-3" />
                    Automated lead nurturing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#6ee7b7] mr-3" />
                    Advanced reporting dashboards
                  </li>
                </ul>
                <Link href="https://salescentri.com/get-started/book-demo" target="_blank">
                  <Button className="gradient-bg text-black hover:opacity-90">Reserve Demo Session</Button>
                </Link>
              </div>
              <div className="bg-[#333333] rounded-lg p-6 border border-[#6ee7b7]/20">
                <div className="aspect-video bg-[#121212] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-300">Interactive Demo Preview</p>
                    <p className="text-sm text-gray-400 mt-2">Click "Book Demo" to see it live</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Optimize Your CRM?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you implement a CRM solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://salescentri.com/get-started/book-demo" target="_blank">
              <Button size="lg" className="gradient-bg text-black hover:opacity-90 px-8 py-3">
                Book Strategy Session
              </Button>
            </Link>
            <Link href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7] hover:text-black px-8 py-3 bg-transparent"
              >
                Request Custom Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
