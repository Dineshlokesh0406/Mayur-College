import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Quote } from 'lucide-react';

const DirectorsMessage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Director's Message</h1>
              <p className="text-xl md:text-2xl text-white/90">
                A warm welcome from the Director of Mayur College of Pharmacy
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Director's Photo */}
                <div className="lg:col-span-1">
                  <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Director" 
                      className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-foreground">Dr. Rajesh Kumar</h3>
                    <p className="text-muted-foreground">Director</p>
                    <p className="text-sm text-muted-foreground mt-2">Ph.D. in Pharmaceutical Sciences</p>
                  </div>
                </div>

                {/* Message Content */}
                <div className="lg:col-span-2">
                  <div className="bg-card p-8 rounded-lg shadow-lg">
                    <Quote className="w-12 h-12 text-primary mb-6" />
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p>
                        Dear Students, Faculty, and Stakeholders,
                      </p>
                      
                      <p>
                        It gives me immense pleasure to welcome you to Mayur College of Pharmacy, an institution that has been 
                        at the forefront of pharmaceutical education for over 18 years. Since our establishment in 2005 under 
                        the aegis of Bapuji Education Society, we have consistently strived to maintain the highest standards 
                        of academic excellence and professional development.
                      </p>
                      
                      <p>
                        In today's rapidly evolving healthcare landscape, the role of pharmacists has become more crucial than ever. 
                        Our college is committed to preparing competent, ethical, and innovative pharmacy professionals who can 
                        address the complex challenges of modern healthcare delivery.
                      </p>
                      
                      <p>
                        We offer comprehensive D.Pharm and B.Pharm programs that combine theoretical knowledge with practical 
                        experience. Our state-of-the-art laboratories, experienced faculty, and industry partnerships ensure 
                        that our students receive the best possible education and training.
                      </p>
                      
                      <p>
                        I encourage all our students to make the most of the opportunities available at our institution. 
                        Engage actively in research, participate in co-curricular activities, and develop the leadership 
                        skills that will serve you well in your professional careers.
                      </p>
                      
                      <p>
                        Together, let us continue to uphold the values of excellence, integrity, and service that define 
                        Mayur College of Pharmacy.
                      </p>
                      
                      <div className="mt-8 pt-6 border-t border-border">
                        <p className="font-semibold text-foreground">Warm regards,</p>
                        <p className="font-bold text-primary">Dr. Rajesh Kumar</p>
                        <p className="text-sm">Director, Mayur College of Pharmacy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DirectorsMessage;