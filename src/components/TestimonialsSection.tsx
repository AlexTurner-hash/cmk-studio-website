import testimonialStefanie from "@/assets/testimonial-stefanie-diem.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Als Unternehmerin muss man sich auf seine Ziele und diversen Projekte konzentrieren. Ein Partner wie CMK setzt unsere Werte und unsere Ansprüche an Qualität und Verlässlichkeit um. Das ist ein echtes Geschenk.",
      client: "Stefanie Diem",
      company: "lila loves it",
      image: testimonialStefanie
    },
    {
      quote: "Claudias Erfahrung mit Fashion-Labels jeder Größe, gepaart mit ihrem Background als Designerin, ist selten. Ihr Input ist einfach wertvoll.",
      client: "Maiami",
      company: "",
      image: null
    },
    {
      quote: "CMK liefert Top-Qualität aus Europa, völlig individualisiert und zu wettbewerbsfähigen Preisen. Und das mit persönlicher Betreuung – das können die Großen nicht.",
      client: "Merz b. Schwanen",
      company: "",
      image: null
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Kundenstimmen
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              {testimonial.image && (
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* Quote Content */}
              <div className={`flex-1 ${!testimonial.image ? 'text-center max-w-3xl mx-auto' : ''}`}>
                <blockquote className="text-lg md:text-xl font-light tracking-wide leading-relaxed font-body mb-6 italic text-clay">
                  „{testimonial.quote}"
                </blockquote>
                
                <div className={!testimonial.image ? 'text-center' : ''}>
                  <div className="text-base font-medium text-clay font-body">
                    {testimonial.client}
                  </div>
                  {testimonial.company && (
                    <div className="text-clay/70 text-base font-body mt-1">
                      {testimonial.company}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;