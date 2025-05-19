
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-gradient">DUSKBIN</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-duskbin-purple font-medium transition-colors"
          >
            Services
          </a>
          <a
            href="#strengths"
            className="text-gray-700 hover:text-duskbin-purple font-medium transition-colors"
          >
            Strengths
          </a>
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-duskbin-purple font-medium transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-duskbin-purple font-medium transition-colors"
          >
            Partners
          </a>
          <Button className="gradient-cta ml-4">Contact Us</Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 transform transition-transform duration-300 md:hidden pt-20",
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center gap-6 p-4">
          <a
            href="#services"
            className="text-gray-700 hover:text-duskbin-purple font-medium text-lg transition-colors"
            onClick={() => setMobileNavOpen(false)}
          >
            Services
          </a>
          <a
            href="#strengths"
            className="text-gray-700 hover:text-duskbin-purple font-medium text-lg transition-colors"
            onClick={() => setMobileNavOpen(false)}
          >
            Strengths
          </a>
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-duskbin-purple font-medium text-lg transition-colors"
            onClick={() => setMobileNavOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-duskbin-purple font-medium text-lg transition-colors"
            onClick={() => setMobileNavOpen(false)}
          >
            Partners
          </a>
          <Button className="gradient-cta w-full mt-4">Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
