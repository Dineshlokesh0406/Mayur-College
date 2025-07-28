import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Download, Clock, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DPharm = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Diploma in Pharmacy</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                A comprehensive 2-year program designed to create skilled pharmacy technicians
              </p>
              <Button size="lg" variant="secondary" className="gap-2">
                <Download className="w-5 h-5" />
                Download Syllabus
              </Button>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Program Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Diploma in Pharmacy (D.Pharm) is a 2-year program approved by the Pharmacy Council of India (PCI). 
                  This program provides fundamental knowledge in pharmaceutical sciences and prepares students for entry-level 
                  positions in the pharmaceutical industry.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Duration</h4>
                      <p className="text-sm text-muted-foreground">2 Years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Intake</h4>
                      <p className="text-sm text-muted-foreground">60 Students</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="D.Pharm Laboratory" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Curriculum Structure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  First Year
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Pharmaceutics - I</li>
                  <li>• Pharmaceutical Chemistry - I</li>
                  <li>• Pharmacognosy</li>
                  <li>• Biochemistry & Clinical Pathology</li>
                  <li>• Human Anatomy & Physiology</li>
                  <li>• Health Education & Community Pharmacy</li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Second Year
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Pharmaceutics - II</li>
                  <li>• Pharmaceutical Chemistry - II</li>
                  <li>• Pharmacology & Toxicology</li>
                  <li>• Pharmaceutical Jurisprudence</li>
                  <li>• Drug Store & Business Management</li>
                  <li>• Hospital & Clinical Pharmacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Career Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3 text-foreground">Community Pharmacy</h3>
                <p className="text-muted-foreground">Work as a registered pharmacist in retail pharmacies and drug stores.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3 text-foreground">Hospital Pharmacy</h3>
                <p className="text-muted-foreground">Assist in hospital pharmacies and clinical settings.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3 text-foreground">Pharmaceutical Industry</h3>
                <p className="text-muted-foreground">Join pharmaceutical companies in production and quality control.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Eligibility Criteria</h2>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Academic Requirements</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 10+2 or equivalent with PCM/PCB</li>
                      <li>• Minimum 50% marks (45% for SC/ST)</li>
                      <li>• English as a compulsory subject</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Age Limit</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Minimum: 17 years</li>
                      <li>• Maximum: No upper age limit</li>
                      <li>• As on 31st December of admission year</li>
                    </ul>
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

export default DPharm;