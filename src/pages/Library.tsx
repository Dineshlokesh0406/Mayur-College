import React from 'react';
import Layout from '@/components/Layout/Layout';
import { BookOpen, Monitor, Wifi, Clock, Users, Search, Download, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Library = () => {
  const collections = [
    {
      name: "Pharmaceutical Sciences",
      description: "Comprehensive collection of pharmacy and pharmaceutical science books",
      count: "2,500+ Books",
      icon: BookOpen,
      subjects: ["Pharmacology", "Pharmaceutical Chemistry", "Pharmaceutics", "Pharmacognosy"]
    },
    {
      name: "Digital Resources",
      description: "Online databases, e-books, and digital journals",
      count: "1,000+ E-Resources",
      icon: Monitor,
      subjects: ["PubMed Access", "ScienceDirect", "Digital Journals", "E-Books"]
    },
    {
      name: "Reference Section",
      description: "Essential reference materials and encyclopedias",
      count: "500+ References",
      icon: Search,
      subjects: ["Drug Handbooks", "Pharmacopoeias", "Medical Dictionaries", "Research Guides"]
    }
  ];

  const services = [
    {
      name: "Study Spaces",
      description: "Quiet individual and group study areas",
      features: ["Silent Reading Zones", "Group Discussion Rooms", "Computer Workstations"],
      icon: Users
    },
    {
      name: "Digital Services",
      description: "Online access to library resources",
      features: ["WiFi Access", "Online Catalog", "Digital Downloads", "Remote Access"],
      icon: Wifi
    },
    {
      name: "Research Support",
      description: "Assistance with academic research and projects",
      features: ["Research Guidance", "Citation Help", "Database Training", "Literature Search"],
      icon: Globe
    }
  ];

  const libraryStats = [
    { label: "Total Books", value: "5,000+", icon: BookOpen },
    { label: "Digital Resources", value: "1,000+", icon: Monitor },
    { label: "Seating Capacity", value: "150", icon: Users },
    { label: "Operating Hours", value: "12 hrs", icon: Clock }
  ];

  const timings = [
    { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" },
    { day: "Exam Period", time: "Extended Hours" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/lib1.jpg"
              alt="Library"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-800/80"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Knowledge Hub
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Library & Resources</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  A comprehensive collection of pharmaceutical literature and modern digital resources
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                  >
                    <Search className="w-5 h-5" />
                    Search Catalog
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white hover:text-blue-900"
                  >
                    <Download className="w-5 h-5" />
                    Digital Access
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {libraryStats.map((stat, index) => (
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

        {/* Collections */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Collections</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our extensive collection of pharmaceutical literature, digital resources, 
                and reference materials to support your academic journey.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <collection.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{collection.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1">{collection.count}</Badge>
                      </div>
                    </div>
                    <CardDescription>{collection.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Key Areas
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {collection.subjects.map((subject, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-blue-600" />
                            <span className="text-sm">{subject}</span>
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

        {/* Library Services */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Library Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive library services to enhance your learning experience 
                and support your academic research needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2">
                          <Monitor className="w-4 h-4 text-green-600" />
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

        {/* Library Timings & Rules */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Timings */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Library Timings</h2>
                <div className="space-y-4">
                  {timings.map((timing, index) => (
                    <div key={index} className="bg-card rounded-lg p-4 border border-border">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{timing.day}</span>
                        <span className="text-primary font-medium">{timing.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">Special Hours</span>
                  </div>
                  <p className="text-sm text-blue-800">
                    Extended hours during examination periods. Holiday schedules may vary.
                  </p>
                </div>
              </div>

              {/* Library Image */}
              <div className="relative">
                <img
                  src="/src/assets/lib2.jpg"
                  alt="Library Interior"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Modern Study Environment</h3>
                  <p className="text-sm">Comfortable seating and peaceful atmosphere for focused learning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Explore Our Library</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Visit our library to access our extensive collection of books, digital resources, 
                and enjoy our modern study facilities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Get Library Card
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                  Contact Librarian
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Library;
