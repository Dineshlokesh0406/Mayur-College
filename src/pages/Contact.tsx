import React from 'react';
import Layout from '@/components/Layout/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Get in touch with us for admissions, inquiries, and more information
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                    <Input placeholder="Enter message subject" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                    <Textarea 
                      placeholder="Enter your message here..." 
                      className="h-32"
                    />
                  </div>
                  <Button size="lg" className="w-full gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        Mayur College of Pharmacy<br />
                        Bapuji Education Society Campus<br />
                        Davangere, Karnataka - 577004<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        Office: +91 8192 123456<br />
                        Admissions: +91 8192 123457<br />
                        Principal: +91 8192 123458
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@mayurpharmacy.edu.in<br />
                        admissions@mayurpharmacy.edu.in<br />
                        principal@mayurpharmacy.edu.in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Find Us</h2>
            <div className="bg-card rounded-lg p-4 shadow-lg">
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map Will Be Displayed Here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Mayur College of Pharmacy, Davangere, Karnataka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-foreground mb-2">What are the admission requirements?</h3>
                <p className="text-muted-foreground">
                  For D.Pharm: 10+2 with PCM/PCB and minimum 50% marks. For B.Pharm: 10+2 with PCM/PCB, 
                  minimum 50% marks, and valid entrance exam score.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-foreground mb-2">When do admissions open?</h3>
                <p className="text-muted-foreground">
                  Admissions typically open in May-June each year. Please check our website or contact 
                  the admissions office for exact dates.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-foreground mb-2">Do you provide hostel facilities?</h3>
                <p className="text-muted-foreground">
                  Yes, we have separate hostel facilities for boys and girls with all modern amenities. 
                  Contact us for availability and booking details.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;