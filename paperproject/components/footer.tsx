import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold">Paper Factory</div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <span>contact@paperfactory.com</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Paper Factory. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

