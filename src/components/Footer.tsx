
import { TikTok, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Duskbin</h3>
            <p className="text-gray-400 mb-4">
              Malaysia's premier e-commerce enabler specializing in TikTok and Shopee platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TikTok className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <ShoppingBag className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">TikTok Shop Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shopee Store Excellence</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Live Streaming Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Affiliate Network Access</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-commerce Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Jalan Tun Razak, KL Eco City</li>
              <li>Kuala Lumpur, Malaysia</li>
              <li>hello@duskbin.my</li>
              <li>+60 3 1234 5678</li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Duskbin. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
