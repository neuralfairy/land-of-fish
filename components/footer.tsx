import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white p-6 text-sm border-t border-[#333333]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LF</span>
              </div>
              <span className="text-lg font-bold">Landoffish Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional CRM implementation and optimization services in Savannah, Georgia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#6ee7b7]">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/features" className="hover:text-[#6ee7b7] transition-colors">
                  CRM Setup
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-[#6ee7b7] transition-colors">
                  Integration
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-[#6ee7b7] transition-colors">
                  Migration
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-[#6ee7b7] transition-colors">
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#6ee7b7]">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#6ee7b7] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#6ee7b7] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#6ee7b7] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#6ee7b7] transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#6ee7b7]">Contact Info</h3>
            <div className="text-gray-400 space-y-2">
              <p>Savannah, Georgia</p>
              <p>Phone: (912) 555-0123</p>
              <p>Email: info@landoffish.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              <a
                href="https://salescentri.com/?utm_source=landoffish.com&utm_medium=footer&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#6ee7b7] transition-colors"
              >
                Powered by Sales Intelligence Platform
              </a>
            </p>
            <ul className="flex space-x-6 text-gray-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#6ee7b7] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-[#6ee7b7] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#6ee7b7] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Landoffish Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
