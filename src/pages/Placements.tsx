import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Briefcase, TrendingUp, Building, Users, Target, Clock, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Placements = () => {
  const placementStats = [
    { label: "Placement Rate", value: "85%", icon: TrendingUp, description: "Average placement success" },
    { label: "Partner Companies", value: "150+", icon: Building, description: "Recruiting partners" },
    { label: "Average Package", value: "₹3.5L", icon: Briefcase, description: "Annual starting salary" },
    { label: "Highest Package", value: "₹8L", icon: Target, description: "Best offer received" }
  ];

  const topRecruiters = [
    { name: "Cipla Ltd.", sector: "Pharmaceutical", positions: "Quality Control, R&D", packages: "₹3-6L" },
    { name: "Dr. Reddy's Laboratories", sector: "Pharmaceutical", positions: "Production, Quality Assurance", packages: "₹3.5-7L" },
    { name: "Sun Pharmaceutical", sector: "Pharmaceutical", positions: "Manufacturing, Regulatory Affairs", packages: "₹3-5.5L" },
    { name: "Lupin Limited", sector: "Pharmaceutical", positions: "Clinical Research, Marketing", packages: "₹3.2-6L" },
    { name: "Biocon", sector: "Biotechnology", positions: "Research, Process Development", packages: "₹4-8L" },
    { name: "Cadila Healthcare", sector: "Pharmaceutical", positions: "Quality Control, Sales", packages: "₹3-5L" },
    { name: "Glenmark Pharmaceuticals", sector: "Pharmaceutical", positions: "R&D, Regulatory", packages: "₹3.5-6.5L" },
    { name: "Aurobindo Pharma", sector: "Pharmaceutical", positions: "Production, Quality", packages: "₹3-5.5L" }
  ];

  const placementSuccess = [
    {
      name: "Priya Sharma",
      batch: "2023",
      position: "Quality Control Analyst",
      company: "Cipla Ltd.",
      package: "₹4.2L",
      story: "Secured placement through campus interview with excellent technical knowledge"
    },
    {
      name: "Rajesh Kumar",
      batch: "2023",
      position: "Production Executive",
      company: "Dr. Reddy's Labs",
      package: "₹3.8L",
      story: "Impressed recruiters with practical knowledge and problem-solving skills"
    },
    {
      name: "Anita Patel",
      batch: "2023",
      position: "Research Associate",
      company: "Biocon",
      package: "₹5.5L",
      story: "Outstanding performance in technical rounds and research presentation"
    },
    {
      name: "Vikram Singh",
      batch: "2023",
      position: "Regulatory Affairs Executive",
      company: "Sun Pharma",
      package: "₹4L",
      story: "Strong communication skills and regulatory knowledge led to successful placement"
    }
  ];

  const careerServices = [
    {
      title: "Career Counseling",
      description: "Personalized guidance for career planning and development",
      features: ["One-on-one sessions", "Career assessment", "Industry insights", "Goal setting"]
    },
    {
      title: "Skill Development",
      description: "Training programs to enhance employability skills",
      features: ["Technical workshops", "Soft skills training", "Interview preparation", "Resume building"]
    },
    {
      title: "Industry Connect",
      description: "Direct interaction with industry professionals",
      features: ["Guest lectures", "Industry visits", "Internship programs", "Networking events"]
    },
    {
      title: "Placement Support",
      description: "Comprehensive placement assistance and follow-up",
      features: ["Job matching", "Interview coordination", "Offer negotiation", "Career tracking"]
    }
  ];

  const placementProcess = [
    { step: "1", title: "Registration", description: "Students register with placement cell", icon: Users },
    { step: "2", title: "Profile Building", description: "Resume preparation and skill assessment", icon: Briefcase },
    { step: "3", title: "Training", description: "Interview skills and technical training", icon: Target },
    { step: "4", title: "Company Visits", description: "Campus recruitment drives", icon: Building },
    { step: "5", title: "Selection", description: "Interview process and final selection", icon: CheckCircle },
    { step: "6", title: "Placement", description: "Job offer and joining formalities", icon: TrendingUp }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/placements.jpg"
              alt="Placements"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-700/80"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Career Success
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Placements</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Launching successful careers with industry-leading companies and comprehensive placement support
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                  >
                    <Briefcase className="w-5 h-5" />
                    Placement Cell
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white hover:text-blue-900"
                  >
                    <Building className="w-5 h-5" />
                    Our Recruiters
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {placementStats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <stat.icon className="w-8 h-8 text-white mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Placement Statistics */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Placement Success</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our strong industry connections and comprehensive career support ensure excellent 
                placement opportunities for our graduates.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {placementStats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-blue-600">{stat.value}</CardTitle>
                    <CardDescription className="font-semibold">{stat.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Recruiting Partners</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Leading pharmaceutical and healthcare companies regularly recruit our graduates 
                for various positions across different domains.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {topRecruiters.map((recruiter, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-lg p-2">
                          <Building className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{recruiter.name}</CardTitle>
                          <Badge variant="outline">{recruiter.sector}</Badge>
                        </div>
                      </div>
                      <Badge variant="secondary">{recruiter.packages}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Positions:</strong> {recruiter.positions}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Recent graduates sharing their placement journey and success with leading companies 
                in the pharmaceutical industry.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {placementSuccess.map((student, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl">{student.name}</CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="secondary">Batch {student.batch}</Badge>
                          <Badge variant="outline">{student.company}</Badge>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{student.package}</Badge>
                    </div>
                    <CardDescription className="font-semibold text-blue-600">
                      {student.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{student.story}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Career Services */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Career Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our dedicated placement cell provides comprehensive career support to help students 
                achieve their professional goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {careerServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Process */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Placement Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our structured placement process ensures every student gets the best opportunity 
                to launch their career successfully.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-4">
              {placementProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    <process.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                  {index < placementProcess.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto mt-4 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Placement Cell */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Connect with Our Placement Cell</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get in touch with our placement team for career guidance, recruitment opportunities, 
                or placement assistance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+91 9480150808</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>mcptumkur@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Contact Placement Cell
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Register for Placements
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Placements;
