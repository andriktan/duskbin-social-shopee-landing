
import { Separator } from "@/components/ui/separator";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We begin with a thorough analysis of your products, target audience, and competitors to develop a customized e-commerce strategy.",
      color: "from-duskbin-purple to-duskbin-deep-purple"
    },
    {
      number: "02",
      title: "Platform Setup & Optimization",
      description: "Our experts set up and optimize your TikTok Shop and Shopee store with SEO-friendly listings and compelling content.",
      color: "from-duskbin-orange to-duskbin-purple"
    },
    {
      number: "03",
      title: "Affiliate & Livestream Activation",
      description: "We deploy our network of affiliates and schedule professional livestream events to showcase your products.",
      color: "from-duskbin-deep-purple to-duskbin-purple"
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "Continuous performance monitoring and optimization to maximize sales, conversions and return on investment.",
      color: "from-duskbin-purple to-duskbin-orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">We Work</span> With You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven four-step process to transform your e-commerce business on TikTok and Shopee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-xl opacity-80 blur-xl group-hover:opacity-100 transition-all duration-300`}></div>
              
              <div className="relative bg-white rounded-lg shadow-lg p-8 h-full card-hover">
                <div className={`text-4xl font-bold mb-4 bg-gradient-to-br ${step.color} text-transparent bg-clip-text`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to <span className="text-gradient">Elevate</span> Your E-commerce?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Book a free 30-minute consultation with our e-commerce specialists to discover how Duskbin can transform your online business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="gradient-cta py-3 px-6 rounded-lg">
                  Book Your Free Consultation
                </button>
                <button className="border border-duskbin-purple text-duskbin-purple hover:bg-duskbin-purple/5 py-3 px-6 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-duskbin-purple to-duskbin-deep-purple p-1 rounded-lg">
                <div className="bg-white rounded-md p-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-duskbin-purple">500+</p>
                    <Separator className="my-3" />
                    <p className="text-gray-700">Brands Successfully Enabled</p>
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

export default HowItWorksSection;
