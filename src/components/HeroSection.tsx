
import { Button } from "@/components/ui/button";
import { Youtube, ShoppingBag } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-duskbin-light-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-duskbin-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elevate Your <span className="text-gradient">E-commerce</span> with{" "}
              <span className="text-gradient">Duskbin</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Malaysia's premier e-commerce enabler, specializing in TikTok and Shopee platforms with the strongest affiliate network and live streaming solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-cta text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8 border-duskbin-purple text-duskbin-purple">
                Book a Consultation
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center">
                <Youtube className="w-6 h-6 text-black mr-2" />
                <span className="font-semibold">TikTok Partner</span>
              </div>
              <div className="flex items-center">
                <ShoppingBag className="w-6 h-6 text-duskbin-orange mr-2" />
                <span className="font-semibold">Shopee Partner</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-br from-duskbin-purple/80 to-duskbin-deep-purple rounded-xl shadow-xl overflow-hidden animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="E-commerce success with Duskbin" 
                  className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <p className="text-xl font-semibold">Trusted by 500+ brands across Malaysia</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <span className="text-green-600 text-lg font-bold">↑</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Average Sales Growth</p>
                    <p className="text-xl font-bold text-duskbin-purple">237%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-float" style={{animationDelay: "0.5s"}}>
                <div className="flex items-center gap-3">
                  <div className="bg-duskbin-light-purple/30 rounded-full p-2">
                    <span className="text-duskbin-purple text-lg font-bold">★</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Affiliate Network</p>
                    <p className="text-xl font-bold text-duskbin-purple">10,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
