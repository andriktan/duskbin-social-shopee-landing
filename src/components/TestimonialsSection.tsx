
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Duskbin transformed our TikTok presence and drove a 300% increase in sales through their affiliate network and livestream strategies.",
      name: "Sarah Tan",
      position: "Marketing Director",
      company: "BeautyMalaysia",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3"
    },
    {
      quote: "The livestreaming hosts were exceptional - they understood our products perfectly and created genuine excitement that converted to sales.",
      name: "Ahmad Zulkifli",
      position: "E-commerce Manager",
      company: "Tech Solutions MY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
    },
    {
      quote: "Their Shopee optimization strategy helped us achieve preferred seller status in just 3 months. The ROI has been phenomenal.",
      name: "Ming Wei",
      position: "CEO",
      company: "HomeStyle KL",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
    }
  ];

  const partners = [
    "TikTok Shop",
    "Shopee",
    "Lazada",
    "Malaysian Digital Economy Corporation",
    "SME Corporation Malaysia",
    "Malaysia External Trade Development Corporation"
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about their experience working with Duskbin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="text-4xl font-serif text-duskbin-purple/50 mb-4">"</div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-duskbin-purple">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16" />

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our <span className="text-gradient">Partners</span> & Accreditations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-20">
                <div className="bg-white border border-gray-100 rounded-md shadow-sm px-6 py-4 w-full h-full flex items-center justify-center">
                  <span className="text-gray-700 font-medium">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
