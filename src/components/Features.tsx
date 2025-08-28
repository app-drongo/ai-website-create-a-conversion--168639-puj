// Features Component
// Generated: 2025-08-28T15:32:48.524Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.3

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Flame, 
  Award, 
  Clock, 
  MapPin, 
  Users, 
  Utensils,
  ChefHat,
  Heart,
  Star
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Flame,
      title: "Authentic Spice Blends",
      description: "Hand-selected spices imported directly from Moroccan souks, creating the most authentic flavors.",
      badge: "Authentic"
    },
    {
      icon: Award,
      title: "Award-Winning Cuisine",
      description: "Recognized by culinary experts for our commitment to traditional Moroccan cooking methods.",
      badge: "Excellence"
    },
    {
      icon: Clock,
      title: "Traditional Slow Cooking",
      description: "Time-honored techniques using authentic tagine pots for perfectly tender, flavorful dishes.",
      badge: "Traditional"
    },
    {
      icon: MapPin,
      title: "Marrakech Atmosphere",
      description: "Immersive dining environment with authentic Moroccan decor and ambient lighting.",
      badge: "Ambiance"
    },
    {
      icon: Users,
      title: "Cultural Experience",
      description: "More than dining - experience Moroccan hospitality and cultural traditions.",
      badge: "Culture"
    },
    {
      icon: Utensils,
      title: "Fresh Daily Ingredients",
      description: "Locally sourced produce and premium ingredients prepared fresh every day.",
      badge: "Quality"
    },
    {
      icon: ChefHat,
      title: "Master Moroccan Chefs",
      description: "Authentic recipes passed down through generations, prepared by skilled Moroccan chefs.",
      badge: "Expertise"
    },
    {
      icon: Heart,
      title: "Dietary Accommodations",
      description: "Vegetarian, vegan, and gluten-free options without compromising authentic flavors.",
      badge: "Inclusive"
    },
    {
      icon: Star,
      title: "Premium Dining Service",
      description: "Attentive service in the tradition of Moroccan hospitality for an unforgettable experience.",
      badge: "Service"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Marrakech Spice
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Where Tradition Meets
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Culinary Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the authentic flavors of Morocco through our commitment to traditional 
            cooking methods, premium ingredients, and genuine cultural hospitality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to taste the authentic flavors of Morocco?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Your Table
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Our Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}