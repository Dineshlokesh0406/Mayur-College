import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Download, Clock, Users, BookOpen, Award, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BPharm = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/bpharm-1.jpg"
              alt="B.Pharm Program"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Bachelor of Pharmacy</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  A comprehensive 4-year undergraduate program in pharmaceutical sciences
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open('/src/assets/pdfs/bpharm.pdf', '_blank')}
                  >
                    <Download className="w-5 h-5" />
                    Download Syllabus
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white hover:text-blue-900"
                  >
                    <BookOpen className="w-5 h-5" />
                    View Scope
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <img
                    src="/src/assets/B-PHARMA-SCOPE.jpeg"
                    alt="B.Pharm Scope"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
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
                  The Bachelor of Pharmacy (B.Pharm) is a 4-year undergraduate program approved by AICTE and PCI. 
                  This comprehensive program covers all aspects of pharmaceutical sciences including drug discovery, 
                  development, manufacturing, and clinical applications.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Duration</h4>
                      <p className="text-sm text-muted-foreground">4 Years</p>
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
                  src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="B.Pharm Research Lab" 
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  First Year
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pharmaceutics - I</li>
                  <li>• Pharmaceutical Chemistry - I</li>
                  <li>• Pharmacognosy</li>
                  <li>• Biochemistry</li>
                  <li>• Human Anatomy & Physiology</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Second Year
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pharmaceutics - II</li>
                  <li>• Pharmaceutical Chemistry - II</li>
                  <li>• Pharmacology - I</li>
                  <li>• Pathophysiology</li>
                  <li>• Environmental Sciences</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Third Year
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pharmaceutics - III</li>
                  <li>• Pharmaceutical Chemistry - III</li>
                  <li>• Pharmacology - II</li>
                  <li>• Pharmaceutical Analysis</li>
                  <li>• Pharmaceutical Biotechnology</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Final Year
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pharmaceutical Jurisprudence</li>
                  <li>• Clinical Pharmacy</li>
                  <li>• Pharmacovigilance</li>
                  <li>• Project Work</li>
                  <li>• Industry Training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Specialization Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Microscope className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3 text-foreground">Pharmaceutical Chemistry</h3>
                <p className="text-muted-foreground">Drug design, synthesis, and analysis of pharmaceutical compounds.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Microscope className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3 text-foreground">Pharmaceutics</h3>
                <p className="text-muted-foreground">Drug formulation, delivery systems, and manufacturing processes.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Microscope className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3 text-foreground">Pharmacology</h3>
                <p className="text-muted-foreground">Study of drug action, interaction, and therapeutic applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Career Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2 text-foreground">Industry</h4>
                <p className="text-sm text-muted-foreground">R&D, Production, Quality Control</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2 text-foreground">Clinical</h4>
                <p className="text-sm text-muted-foreground">Hospital Pharmacy, Clinical Research</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2 text-foreground">Regulatory</h4>
                <p className="text-sm text-muted-foreground">Drug Approval, Regulatory Affairs</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2 text-foreground">Academia</h4>
                <p className="text-sm text-muted-foreground">Teaching, Research, Higher Studies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Eligibility Criteria</h2>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Academic Requirements</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 10+2 with Physics, Chemistry, Mathematics/Biology</li>
                      <li>• Minimum 50% marks (45% for SC/ST/OBC)</li>
                      <li>• English as a compulsory subject</li>
                      <li>• Valid entrance exam score (KCET/COMEDK)</li>
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

export default BPharm;