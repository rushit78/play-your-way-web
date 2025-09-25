import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Star, Heart, Calendar, Users } from 'lucide-react';

const FeaturedGrounds = () => {
  const grounds = [
    {
      id: 1,
      name: "Elite Sports Complex",
      location: "Downtown, Mumbai",
      distance: "2.5 km",
      rating: 4.8,
      reviews: 124,
      price: "₹800/hour",
      sports: ["Football", "Cricket", "Tennis"],
      features: ["Floodlights", "Parking", "Cafeteria"],
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      isWishlisted: false,
    },
    {
      id: 2,
      name: "Green Field Arena",
      location: "Andheri West, Mumbai",
      distance: "4.2 km",
      rating: 4.6,
      reviews: 89,
      price: "₹600/hour",
      sports: ["Football", "Basketball"],
      features: ["Floodlights", "Changing Rooms"],
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
      isWishlisted: true,
    },
    {
      id: 3,
      name: "Royal Tennis Academy",
      location: "Bandra, Mumbai",
      distance: "6.1 km",
      rating: 4.9,
      reviews: 156,
      price: "₹1000/hour",
      sports: ["Tennis", "Badminton"],
      features: ["AC Courts", "Pro Shop", "Coaching"],
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=250&fit=crop",
      isWishlisted: false,
    },
  ];

  return (
    <section className="py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Sports Grounds
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular and highly-rated sports facilities in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grounds.map((ground) => (
            <Card key={ground.id} className="overflow-hidden hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={ground.image} 
                  alt={ground.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`bg-white/90 hover:bg-white ${ground.isWishlisted ? 'text-red-500' : 'text-gray-600'}`}
                  >
                    <Heart className={`h-5 w-5 ${ground.isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {ground.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">{ground.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{ground.rating}</span>
                    <span className="text-sm text-muted-foreground">({ground.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{ground.location}</span>
                  <span className="text-sm">• {ground.distance}</span>
                </div>

                {/* Sports Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {ground.sports.map((sport) => (
                    <span 
                      key={sport}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {sport}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {ground.features.map((feature) => (
                    <span 
                      key={feature}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button variant="default" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Users className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Grounds
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrounds;