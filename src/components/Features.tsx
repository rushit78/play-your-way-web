import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  MapPin, 
  Heart, 
  Star, 
  Calendar, 
  Clock, 
  CreditCard,
  Shield,
  Smartphone,
  Users,
  TrendingUp
} from 'lucide-react';

const Features = () => {
  const userFeatures = [
    {
      icon: MapPin,
      title: "Distance Filter",
      description: "Find sports grounds based on how far they are from your current location",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Wishlist",
      description: "Save your favorite grounds and access them quickly for future bookings",
      color: "text-red-500"
    },
    {
      icon: Star,
      title: "Ratings & Reviews",
      description: "Read authentic reviews and rate grounds to help the community",
      color: "text-yellow-500"
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Book slots instantly and manage all your bookings in one place",
      color: "text-sport-green"
    },
    {
      icon: Clock,
      title: "Flexible Rescheduling",
      description: "Reschedule your bookings dynamically based on availability",
      color: "text-blue-500"
    },
    {
      icon: CreditCard,
      title: "Smart Refunds",
      description: "Get refunds based on owner-defined rules with transparent policies",
      color: "text-secondary"
    }
  ];

  const ownerFeatures = [
    {
      icon: Users,
      title: "Ground Management",
      description: "Manage multiple grounds with different sports and custom working days",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Dynamic Pricing",
      description: "Set custom pricing per slot and optimize revenue with demand-based pricing",
      color: "text-sport-green"
    },
    {
      icon: Shield,
      title: "Booking Control",
      description: "Handle cancellations, refunds, and rescheduling requests efficiently",
      color: "text-blue-600"
    }
  ];

  const platformFeatures = [
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Access all features seamlessly across desktop, tablet, and mobile devices",
      color: "text-purple-600"
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
    const Icon = feature.icon;
    return (
      <Card className="p-6 h-full hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 group">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`p-4 rounded-2xl bg-accent/20 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
      </Card>
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Features */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              For Sports Enthusiasts
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to find, book, and enjoy your favorite sports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Owner Features */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              For Ground Owners
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to manage your sports facilities and maximize revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ownerFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built for Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern platform designed with user experience in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto">
            {platformFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-12 py-4 text-lg">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;