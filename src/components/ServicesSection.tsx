
import { TikTok, ShoppingBag, Video, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "TikTok Shop Management",
      description: "Full-service TikTok Shop setup, optimization and management for maximum visibility and conversions.",
      icon: <TikTok className="h-10 w-10 text-duskbin-purple" />,
      bgClass: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      title: "Shopee Store Excellence",
      description: "Strategic Shopee store management with expert product listing, SEO, and promotional campaign execution.",
      icon: <ShoppingBag className="h-10 w-10 text-duskbin-orange" />,
      bgClass: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      title: "Live Streaming Solutions",
      description: "End-to-end live commerce streaming production with professional hosts and technical support.",
      icon: <Video className="h-10 w-10 text-duskbin-purple" />,
      bgClass: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      title: "Affiliate Network Access",
      description: "Connect with our curated network of 10,000+ affiliates and influencers to amplify your brand reach.",
      icon: <Users className="h-10 w-10 text-duskbin-orange" />,
      bgClass: "bg-gradient-to-br from-orange-50 to-orange-100"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Specialized</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive e-commerce solutions designed specifically for TikTok and Shopee platforms 
            to maximize your online sales potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`${service.bgClass} border-none shadow-md hover:shadow-xl transition-all duration-300 card-hover`}>
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-6">
            Trusted by leading brands in Malaysia and beyond
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"].map((brand, index) => (
              <div key={index} className="flex items-center justify-center h-16">
                <span className="text-gray-400 font-bold text-xl">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
