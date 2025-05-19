
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Users, Video, TrendingUp } from "lucide-react";

const StrengthsSection = () => {
  return (
    <section id="strengths" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Unique Strengths</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What sets Duskbin apart as Malaysia's leading e-commerce enabler for TikTok and Shopee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative">
            <div className="bg-gradient-to-br from-duskbin-purple to-duskbin-deep-purple rounded-2xl p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Affiliate Network" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 animate-fade-in-up">
              <div className="flex items-center gap-4">
                <div className="bg-duskbin-light-purple/30 rounded-full p-3">
                  <Users className="h-6 w-6 text-duskbin-purple" />
                </div>
                <div>
                  <p className="font-bold text-xl">10,000+ Affiliates</p>
                  <p className="text-gray-600">Across all niches</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
              Largest Affiliate Network in Malaysia
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Access our exclusive network of over 10,000 carefully vetted influencers and affiliates across TikTok and Shopee ecosystems.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Targeted reach</span> to your specific audience demographics and niches.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Performance-based payouts</span> to ensure you get maximum ROI.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Advanced analytics</span> to track affiliate performance and optimize campaigns.
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-duskbin-purple">93%</p>
                <p className="text-gray-600 text-sm">Conversion Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-duskbin-purple">5.2x</p>
                <p className="text-gray-600 text-sm">Average ROAS</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-duskbin-purple">24hr</p>
                <p className="text-gray-600 text-sm">Campaign Launch</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
              Professional Live Streaming Hosts
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Our team of experienced live streaming hosts and production experts will showcase your products to thousands of engaged viewers.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Multilingual hosts</span> fluent in Bahasa Malaysia, English, Mandarin and more.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Full technical support</span> with professional equipment and production team.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Strategic scheduling</span> to maximize viewership and sales during peak hours.
                </p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-duskbin-purple">45+</p>
                <p className="text-gray-600 text-sm">Pro Hosts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-duskbin-purple">500K+</p>
                <p className="text-gray-600 text-sm">Monthly Viewers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-duskbin-purple">237%</p>
                <p className="text-gray-600 text-sm">Sales Increase</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-duskbin-orange to-duskbin-purple rounded-2xl p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Live Streaming Setup" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 animate-fade-in-up">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <Video className="h-6 w-6 text-duskbin-orange" />
                </div>
                <div>
                  <p className="font-bold text-xl">Live Commerce</p>
                  <p className="text-gray-600">Experts & Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
