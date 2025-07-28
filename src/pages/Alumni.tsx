import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Users, Calendar, MapPin, Phone, Mail, Star, Award, Heart, Globe, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Alumni = () => {
  const alumniStats = [
    { label: "Alumni Network", value: "2000+", icon: Users, description: "Successful graduates" },
    { label: "Years of Legacy", value: "19+", icon: Calendar, description: "Years of excellence" },
    { label: "Global Presence", value: "25+", icon: Globe, description: "Countries worldwide" },
    { label: "Industry Leaders", value: "50+", icon: Award, description: "In leadership roles" }
  ];

  const featuredAlumni = [
    {
      name: "Dr. Priya Sharma",
      batch: "2018",
      position: "Senior Research Scientist",
      company: "Cipla Ltd.",
      location: "Mumbai",
      achievement: "Led development of 3 breakthrough drug formulations",
      story: "Leading innovative drug development projects and mentoring junior researchers in pharmaceutical R&D"
    },
    {
      name: "Rajesh Kumar",
      batch: "2019",
      position: "Quality Manager",
      company: "Dr. Reddy's Labs",
      location: "Hyderabad",
      achievement: "Implemented quality systems saving ₹2 crores annually",
      story: "Ensuring quality standards and implementing process improvements across manufacturing units"
    },
    {
      name: "Dr. Sneha Reddy",
      batch: "2016",
      position: "Entrepreneur & CEO",
      company: "MedTech Innovations",
      location: "Pune",
      achievement: "Founded successful pharmaceutical startup",
      story: "Building innovative healthcare solutions and creating employment for 100+ professionals"
    },
    {
      name: "Anita Patel",
      batch: "2020",
      position: "Regulatory Affairs Specialist",
      company: "Sun Pharma",
      location: "Ahmedabad",
      achievement: "Successfully registered 15+ products in international markets",
      story: "Managing drug approvals and regulatory compliance across multiple global markets"
    }
  ];

  const alumniEvents = [
    { 
      name: "Annual Alumni Meet 2024", 
      date: "December 15, 2024", 
      description: "Yearly reunion and networking event with cultural programs", 
      attendees: "200+ Alumni",
      location: "College Campus"
    },
    { 
      name: "Industry Connect Session", 
      date: "March 20, 2024", 
      description: "Alumni sharing industry insights and career guidance", 
      attendees: "150+ Participants",
      location: "Virtual & Campus"
    },
    { 
      name: "Mentorship Program Launch", 
      date: "June 10, 2024", 
      description: "Alumni mentoring current students for career development", 
      attendees: "100+ Mentors",
      location: "College Campus"
    },
    { 
      name: "Alumni Achievement Awards", 
      date: "September 5, 2024", 
      description: "Recognizing outstanding alumni contributions", 
      attendees: "300+ Attendees",
      location: "Grand Ballroom"
    }
  ];

  const alumniServices = [
    {
      title: "Alumni Directory",
      description: "Connect with fellow graduates across batches and industries",
      features: ["Search by batch", "Industry-wise listing", "Contact information", "Professional profiles"]
    },
    {
      title: "Mentorship Program",
      description: "Experienced alumni guiding current students and recent graduates",
      features: ["Career guidance", "Industry insights", "Skill development", "Networking opportunities"]
    },
    {
      title: "Alumni Events",
      description: "Regular events to maintain connections and celebrate achievements",
      features: ["Annual reunions", "Industry meetups", "Achievement awards", "Social gatherings"]
    },
    {
      title: "Professional Network",
      description: "Leverage alumni connections for career growth and opportunities",
      features: ["Job referrals", "Business partnerships", "Collaboration opportunities", "Knowledge sharing"]
    }
  ];

  const alumniAchievements = [
    { category: "Industry Leadership", count: "50+", description: "Alumni in senior management positions" },
    { category: "Entrepreneurship", count: "25+", description: "Alumni who started their own companies" },
    { category: "Research & Innovation", count: "100+", description: "Patents and research publications" },
    { category: "Global Presence", count: "25+", description: "Countries where our alumni work" },
    { category: "Awards & Recognition", count: "75+", description: "Professional awards received" },
    { category: "Social Impact", count: "30+", description: "Alumni involved in social initiatives" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/alumni.jpg"
              alt="Alumni Network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-800/80"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  Alumni Community
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Alumni Network</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Connecting generations of pharmacy professionals and celebrating their achievements
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                  >
                    <Users className="w-5 h-5" />
                    Join Alumni Network
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white hover:text-purple-900"
                  >
                    <Calendar className="w-5 h-5" />
                    Alumni Events
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {alumniStats.map((stat, index) => (
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

        {/* Alumni Network Overview */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Alumni Community</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our alumni network spans across the globe, with graduates making significant 
                contributions in pharmaceutical industry, healthcare, and beyond.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {alumniStats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <stat.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-purple-600">{stat.value}</CardTitle>
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

        {/* Featured Alumni */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Alumni</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet some of our distinguished alumni who are making remarkable contributions 
                in their respective fields and inspiring the next generation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredAlumni.map((alumni, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl">{alumni.name}</CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="secondary">Batch {alumni.batch}</Badge>
                          <Badge variant="outline">{alumni.company}</Badge>
                        </div>
                      </div>
                      <Star className="w-6 h-6 text-yellow-500" />
                    </div>
                    <CardDescription className="font-semibold text-purple-600">
                      {alumni.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{alumni.location}</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Trophy className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">Key Achievement</span>
                      </div>
                      <p className="text-sm text-green-700">{alumni.achievement}</p>
                    </div>
                    <p className="text-sm">{alumni.story}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Events */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Alumni Events</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Stay connected through our regular alumni events, reunions, and networking opportunities 
                designed to strengthen our community bonds.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {alumniEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl">{event.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-600">{event.date}</span>
                        </div>
                      </div>
                      <Badge variant="outline">{event.attendees}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{event.location}</span>
                    </div>
                    <p className="text-sm">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Services */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Alumni Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive services to help our alumni stay connected, grow professionally, 
                and contribute to the college community.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {alumniServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-purple-600" />
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

        {/* Alumni Achievements */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Alumni Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our alumni continue to excel in various fields, making us proud with their 
                outstanding achievements and contributions to society.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {alumniAchievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-purple-600">{achievement.count}</CardTitle>
                    <CardDescription className="font-semibold">{achievement.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Alumni Office */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Connect with Alumni Office</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Stay connected with your alma mater and fellow alumni. Join our network for 
                lifelong connections and opportunities.
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
                  Register as Alumni
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                  Update Your Profile
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Alumni;
