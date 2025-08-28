// Services Component
// Generated: 2025-08-28T15:32:48.524Z
// Template: services-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  UtensilsCrossed,
  Clock,
  Users,
  ChefHat,
  Music,
  Sparkles,
  Heart,
  MapPin,
  ArrowRight
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "authentic-tagine",
      title: "Authentic Tagine Experience",
      description: "Traditional slow-cooked tagines prepared with authentic Moroccan spices and time-honored techniques.",
      icon: UtensilsCrossed,
      badge: "Signature",
      features: ["Traditional Clay Pots", "Aromatic Spices", "Slow-Cooked Perfection"],
      link: "/menu/tagines"
    },
    {
      id: "private-dining",
      title: "Private Dining Events",
      description: "Intimate dining experiences for special occasions with personalized Moroccan hospitality.",
      icon: Users,
      features: ["Custom Menus", "Traditional Decor", "Up to 20 Guests"],
      link: "/private-dining"
    },
    {
      id: "cooking-classes",
      title: "Moroccan Cooking Classes",
      description: "Learn the secrets of authentic Moroccan cuisine from our master chefs in hands-on workshops.",
      icon: ChefHat,
      badge: "Popular",
      features: ["Expert Instruction", "Take Home Recipes", "Small Groups"],
      link: "/cooking-classes"
    },
    {
      id: "catering-services",
      title: "Authentic Catering",
      description: "Bring the flavors of Morocco to your event with our full-service catering options.",
      icon: Heart,
      features: ["Event Planning", "Traditional Presentation", "Custom Portions"],
      link: "/catering"
    },
    {
      id: "cultural-nights",
      title: "Moroccan Cultural Nights",
      description: "Immersive dining experiences featuring traditional music, belly dancing, and storytelling.",
      icon: Music,
      features: ["Live Entertainment", "Traditional Music", "Cultural Stories"],
      link: "/events/cultural-nights"
    },
    {
      id: "spice-market",
      title: "Marrakech Spice Market",
      description: "Take home authentic Moroccan spices, teas, and specialty ingredients from our curated selection.",
      icon: Sparkles,
      features: ["Premium Spices", "Herbal Teas", "Gift Packages"],
      link: "/spice-market"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Experiences
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Authentic Moroccan
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Culinary Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the rich flavors and traditions of Morocco through our carefully crafted dining experiences and cultural offerings
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Explore Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Explore Experience</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to embark on your Moroccan culinary adventure?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Make Reservation
            </Button>
            <Button size="lg" variant="outline">
              View Full Menu
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}