import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  ArrowRight,
  Download,
  CheckCircle
} from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      id: 'dpharm',
      title: 'Diploma in Pharmacy (D.Pharm)',
      duration: '2 Years',
      seats: '60 Seats',
      description: 'A comprehensive diploma program in pharmaceutical sciences, preparing students for careers in pharmacy practice, drug manufacturing, and healthcare.',
      features: [
        'Pharmaceutical Chemistry',
        'Pharmacology & Toxicology',
        'Pharmaceutical Jurisprudence',
        'Hospital & Clinical Pharmacy',
        'Drug Store Management'
      ],
      eligibility: '10+2 with PCM/PCB',
      href: '/dpharm'
    },
    {
      id: 'bpharm',
      title: 'Bachelor of Pharmacy (B.Pharm)',
      duration: '4 Years',
      seats: '100 Seats',
      description: 'A professional degree program focusing on pharmaceutical sciences, drug development, clinical research, and advanced pharmacy practice.',
      features: [
        'Medicinal Chemistry',
        'Pharmaceutical Analysis',
        'Clinical Research',
        'Pharmacovigilance',
        'Regulatory Affairs'
      ],
      eligibility: '10+2 with PCM/PCB',
      href: '/bpharm'
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Academic Programs
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-bold">
            Choose Your <span className="text-gradient">Pharmacy Career</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our AICTE-approved programs designed to shape future pharmaceutical professionals with comprehensive theoretical knowledge and practical experience.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={program.id} className="card-medical group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="p-8">
                {/* Header */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{program.seats}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-primary" />
                    Key Subjects
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-2">
                    <Award className="w-3 h-3 mr-1" />
                    Eligibility: {program.eligibility}
                  </Badge>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="medical" 
                    className="flex-1"
                    onClick={() => window.location.href = program.href}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline" size="default">
                    <Download className="mr-2 w-4 h-4" />
                    Syllabus
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-card rounded-2xl shadow-soft">
            <div className="text-left">
              <h3 className="font-semibold text-lg">Need Admission Guidance?</h3>
              <p className="text-muted-foreground">Our counselors are here to help you choose the right program</p>
            </div>
            <Button variant="medical">
              Contact Admissions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;