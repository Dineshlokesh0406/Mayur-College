import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Star, Quote, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Deepak',
      content: 'At Mayur College of Pharmacy, I received an exceptional education and hands-on experience, which empowered me with the skills and confidence needed to thrive in the field of pharmacy.',
      rating: 5
    },
    {
      id: 2,
      name: 'Karthik',
      content: 'Mayur College of Pharmacy has been instrumental in shaping my career with its comprehensive curriculum and supportive faculty. I\'m grateful for the invaluable practical training that prepared me for real-world challenges in the pharmaceutical industry.',
      rating: 5
    },
    {
      id: 3,
      name: 'Rajesh',
      content: 'Mayur college of Pharmacy\'s unwavering commitment to excellence and the supportive environment helped me become a competent and compassionate nurse.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">


        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm relative animate-fade-in-up p-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Blue Quote Marks at Top */}
              <div className="flex justify-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-8 h-1 bg-blue-500 rounded"></div>
                  <Quote className="w-6 h-6 text-blue-500" />
                  <div className="w-8 h-1 bg-blue-500 rounded"></div>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed italic text-justify mb-6">
                "{testimonial.content}"
              </p>

              {/* Name */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col items-center space-y-4 p-8 bg-gradient-card rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold">Join Our Success Story</h3>
            <p className="text-muted-foreground max-w-md">
              Start your journey towards a successful career in pharmaceutical sciences
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span>4.8/5 Average Student Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;