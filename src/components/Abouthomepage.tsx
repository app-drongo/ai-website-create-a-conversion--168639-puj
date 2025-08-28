// Abouthomepage Component
// Generated: 2025-08-28T15:32:48.524Z
// Template: about-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ChefHat, 
  Users, 
  Award, 
  MapPin,
  ArrowRight,
  Quote,
  Star,
  Clock,
  Heart,
  Utensils
} from "lucide-react"

export default function Abouthomepage() {
  const values = [
    {
      icon: ChefHat,
      title: "Authentic Recipes",
      description: "Every dish is crafted using traditional Moroccan recipes passed down through generations, ensuring authentic flavors in every bite."
    },
    {
      icon: Utensils,
      title: "Fresh Ingredients",
      description: "We source the finest spices directly from Marrakech markets and use only the freshest local ingredients for exceptional quality."
    },
    {
      icon: Heart,
      title: "Passionate Service",
      description: "Our team is dedicated to sharing the warmth of Moroccan hospitality, making every dining experience memorable and welcoming."
    },
    {
      icon: MapPin,
      title: "Cultural Heritage",
      description: "We celebrate the rich culinary traditions of Morocco, bringing the vibrant culture and flavors of Marrakech to your table."
    }
  ]

  const stats = [
    { value: "2015", label: "Established", icon: Award },
    { value: "15K+", label: "Happy Diners", icon: Users },
    { value: "4.9★", label: "Average Rating", icon: Star },
    { value: "50+", label: "Authentic Dishes", icon: ChefHat }
  ]

  const team = [
    {
      name: "Chef Youssef Benali",
      role: "Head Chef & Owner",
      image: "YB",
      bio: "Master chef trained in Marrakech. 20+ years perfecting traditional Moroccan cuisine."
    },
    {
      name: "Amina Kassimi",
      role: "Sous Chef", 
      image: "AK",
      bio: "Specialist in tagines and couscous. Expert in authentic spice blending techniques."
    },
    {
      name: "Omar Ziani",
      role: "Restaurant Manager",
      image: "OZ",
      bio: "Hospitality expert ensuring every guest experiences true Moroccan warmth."
    },
    {
      name: "Fatima Alaoui",
      role: "Pastry Chef",
      image: "FA",
      bio: "Creates exquisite Moroccan desserts and traditional mint tea ceremonies."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Bringing Authentic Morocco to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Dining Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From the bustling souks of Marrakech to your table, we're passionate about sharing 
            the rich culinary heritage and warm hospitality of Morocco with food lovers everywhere.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Culinary Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by Chef Youssef Benali, Marrakech Spice began as a dream to bring 
                the authentic flavors of his grandmother's kitchen from Morocco to discerning diners.
              </p>
              <p>
                After training in the traditional riads of Marrakech and mastering centuries-old 
                cooking techniques, Chef Youssef knew he had to share these extraordinary flavors 
                and the warmth of Moroccan hospitality with the world.
              </p>
              <p>
                Today, we're proud to serve thousands of guests annually, each experiencing 
                the magic of authentic tagines, aromatic couscous, and exotic spices that 
                transport you straight to the heart of Morocco.
              </p>
            </div>
            <Button className="group">
              Discover Our Menu
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every dish tells the story of Morocco's rich culinary heritage and the love we put into our craft."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Chef Youssef Benali, Owner</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Makes Us Special</h3>
            <p className="text-muted-foreground">
              The principles that guide our kitchen and every dish we serve to create an unforgettable dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Culinary Team</h3>
            <p className="text-muted-foreground">
              The passionate chefs and hospitality experts who bring the authentic taste of Morocco to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Book a Table Tonight
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "An absolutely incredible dining experience! The tagine was perfectly spiced and the atmosphere 
                transported us straight to Marrakech. This is authentic Moroccan cuisine at its finest."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  MR
                </div>
                <div className="text-left">
                  <div className="font-semibold">Maria Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Food Critic, Culinary Digest</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}