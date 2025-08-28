// Footer Component
// Generated: 2025-08-28T15:32:48.523Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  ChefHat,
  Clock,
  Star
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Menu",
      links: [
        { name: "Tagines", href: "#tagines" },
        { name: "Couscous", href: "#couscous" },
        { name: "Grilled Meats", href: "#grilled" },
        { name: "Vegetarian", href: "#vegetarian" },
        { name: "Desserts", href: "#desserts" },
        { name: "Beverages", href: "#beverages" }
      ]
    },
    {
      title: "Restaurant",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Story", href: "#story" },
        { name: "Chef's Special", href: "#special" },
        { name: "Events", href: "#events" },
        { name: "Catering", href: "#catering" },
        { name: "Private Dining", href: "#private" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Online Ordering", href: "#order" },
        { name: "Delivery", href: "#delivery" },
        { name: "Reservations", href: "#reservations" },
        { name: "Gift Cards", href: "#gifts" },
        { name: "Cooking Classes", href: "#classes" },
        { name: "Spice Shop", href: "#spices" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "FAQ", href: "#faq" },
        { name: "Dietary Info", href: "#dietary" },
        { name: "Allergen Guide", href: "#allergens" },
        { name: "Reviews", href: "#reviews" },
        { name: "Feedback", href: "#feedback" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/marrakechspice" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/marrakechspice" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/marrakechspice" }
  ]

  return (
    <footer className="bg-secondary text-background border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Restaurant Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <ChefHat className="size-6 text-background" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-background">Marrakech Spice</span>
                  <span className="text-sm text-primary font-medium">Authentic Moroccan Cuisine</span>
                </div>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Experience the authentic flavors of Morocco in the heart of the city. Our traditional recipes, 
                passed down through generations, bring you the true taste of Marrakech's vibrant spice markets.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">info@marrakechspice.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+1 (555) SPICE-01</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">456 Medina Street, Downtown</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Mon-Sun: 11:30 AM - 10:00 PM</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background flex items-center gap-2">
                <Star className="size-4 text-primary" />
                Special Offers & Events
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary backdrop-blur-sm"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/60">
                Get exclusive recipes, event invitations, and special dining offers.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background border-b border-primary/30 pb-2">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/70 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© 2024 Marrakech Spice. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-primary fill-current" /> and authentic spices
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/70 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/80 group-hover:text-background transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/20">
            <Link href="/nutrition" className="text-xs text-background/60 hover:text-primary transition-colors">
              Nutrition Info
            </Link>
            <Link href="/accessibility" className="text-xs text-background/60 hover:text-primary transition-colors">
              Accessibility
            </Link>
            <Link href="/privacy" className="text-xs text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}