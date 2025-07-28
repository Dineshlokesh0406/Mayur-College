import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Quote } from 'lucide-react';

const PrincipalsMessage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Principal's Message</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Words of wisdom from our Principal
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Principal's Photo */}
                <div className="lg:col-span-1">
                  <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Principal" 
                      className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-foreground">Dr. Priya Sharma</h3>
                    <p className="text-muted-foreground">Principal</p>
                    <p className="text-sm text-muted-foreground mt-2">M.Pharm, Ph.D. in Pharmacology</p>
                  </div>
                </div>

                {/* Message Content */}
                <div className="lg:col-span-2">
                  <div className="bg-card p-8 rounded-lg shadow-lg">
                    <Quote className="w-12 h-12 text-primary mb-6" />
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p>
                        Dear Students and Faculty,
                      </p>
                      
                      <p>
                        As the Principal of Mayur College of Pharmacy, I am honored to be part of an institution that has 
                        consistently demonstrated excellence in pharmaceutical education and research. Our college stands 
                        as a beacon of quality education, fostering innovation and nurturing future leaders in the 
                        pharmaceutical industry.
                      </p>
                      
                      <p>
                        Education is not just about acquiring knowledge; it's about developing critical thinking, 
                        problem-solving abilities, and ethical values. At Mayur College, we believe in holistic 
                        development that prepares our students not just for careers, but for life.
                      </p>
                      
                      <p>
                        Our dedicated faculty members bring years of experience and expertise to the classroom, 
                        ensuring that students receive comprehensive education that meets international standards. 
                        We continuously update our curriculum to align with industry requirements and emerging 
                        trends in pharmaceutical sciences.
                      </p>
                      
                      <p>
                        I encourage our students to actively participate in research projects, seminars, and 
                        industry interactions. These experiences will broaden your perspective and enhance your 
                        practical understanding of pharmaceutical sciences.
                      </p>
                      
                      <p>
                        Remember, success is not just about academic achievements, but also about character building 
                        and contributing positively to society. As future pharmacists, you have the responsibility 
                        to serve humanity with dedication and compassion.
                      </p>
                      
                      <p>
                        I wish you all the best in your academic journey and look forward to seeing you excel in 
                        your chosen careers.
                      </p>
                      
                      <div className="mt-8 pt-6 border-t border-border">
                        <p className="font-semibold text-foreground">Best wishes,</p>
                        <p className="font-bold text-primary">Dr. Priya Sharma</p>
                        <p className="text-sm">Principal, Mayur College of Pharmacy</p>
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

export default PrincipalsMessage;