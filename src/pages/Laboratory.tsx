import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Microscope, FlaskConical, Shield, Users, Award, BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Laboratory = () => {
  const facilities = [
    {
      name: "Pharmaceutical Chemistry Lab",
      description: "Advanced analytical instruments for drug analysis and quality control",
      equipment: ["HPLC", "UV-Vis Spectrophotometer", "IR Spectrophotometer", "Melting Point Apparatus"],
      icon: FlaskConical,
      image: "/src/assets/LAB 1.jpg"
    },
    {
      name: "Pharmacology Lab",
      description: "Modern facilities for studying drug actions and interactions",
      equipment: ["Animal House", "Organ Bath", "Digital pH Meter", "Centrifuge"],
      icon: Microscope,
      image: "/src/assets/Lab 2.jpg"
    },
    {
      name: "Pharmaceutics Lab",
      description: "State-of-the-art equipment for drug formulation and development",
      equipment: ["Tablet Compression Machine", "Capsule Filling Machine", "Dissolution Apparatus", "Stability Chamber"],
      icon: Award,
      image: "/src/assets/LAB 1.jpg"
    }
  ];

  const safetyProtocols = [
    "Personal Protective Equipment (PPE) mandatory",
    "Proper chemical storage and handling procedures",
    "Emergency shower and eyewash stations available",
    "Fire safety equipment and evacuation procedures",
    "Regular safety training and assessments",
    "Waste disposal protocols for hazardous materials"
  ];

  const labStats = [
    { label: "Laboratory Facilities", value: "8+", icon: Microscope },
    { label: "Modern Equipment", value: "50+", icon: FlaskConical },
    { label: "Safety Protocols", value: "100%", icon: Shield },
    { label: "Student Capacity", value: "120", icon: Users }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/LAB 1.jpg"
              alt="Laboratory Facilities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/80"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  <Microscope className="w-4 h-4 mr-2" />
                  State-of-the-Art Facilities
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Laboratory Facilities</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Modern, well-equipped laboratories providing hands-on experience in pharmaceutical sciences
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    Lab Manual
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white hover:text-blue-900"
                  >
                    <Shield className="w-5 h-5" />
                    Safety Guidelines
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {labStats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <stat.icon className="w-8 h-8 text-white mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Laboratory Facilities */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Laboratory Facilities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our laboratories are equipped with modern instruments and equipment to provide comprehensive 
                practical training in all aspects of pharmaceutical sciences.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary/90 backdrop-blur-sm rounded-lg p-2">
                        <facility.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{facility.name}</CardTitle>
                    <CardDescription>{facility.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Key Equipment
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {facility.equipment.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Protocols */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-100 rounded-lg p-3">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Safety First</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  We maintain the highest safety standards in all our laboratory facilities to ensure 
                  a secure learning environment for our students and faculty.
                </p>
                <div className="space-y-4">
                  {safetyProtocols.map((protocol, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{protocol}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/src/assets/Lab 2.jpg"
                  alt="Laboratory Safety"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Experience Our Laboratories</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Visit our campus to see our state-of-the-art laboratory facilities and learn about our 
                hands-on approach to pharmaceutical education.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Schedule a Visit
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Contact Lab Coordinator
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Laboratory;
