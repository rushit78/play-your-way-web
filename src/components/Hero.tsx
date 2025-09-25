import { Button } from '@/components/ui/button';
import { Search, MapPin, Star, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-sports.jpg';

const Hero = () => {
  const stats = [
    { value: '500+', label: 'Sports Grounds' },
    { value: '10k+', label: 'Happy Players' },
    { value: '50+', label: 'Cities' },
    { value: '4.8', label: 'Average Rating' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sports Facilities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="animate-float">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="block">Your Game,</span>
            <span className="block bg-energy-gradient bg-clip-text text-transparent">
              Your Way
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Discover and book the perfect sports ground near you. From football to tennis, 
            cricket to basketball - find your field of dreams.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
              <input 
                type="text" 
                placeholder="Search for sports or grounds..."
                className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-white/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
              <input 
                type="text" 
                placeholder="Location"
                className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-white/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <Button variant="energy" size="lg" className="px-8">
              Search
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            <Calendar className="mr-2 h-5 w-5" />
            Book Now
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white hover:text-primary">
            <Star className="mr-2 h-5 w-5" />
            Top Rated Grounds
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-pulse-glow">
              <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;