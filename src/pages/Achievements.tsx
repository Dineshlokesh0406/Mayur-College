import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Trophy, Award, Star, Medal, Crown, Target, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const institutionalAchievements = [
    {
      title: "AICTE Approval",
      description: "Approved by All India Council for Technical Education",
      year: "2005",
      category: "Accreditation",
      icon: Award,
      significance: "Official recognition for quality education in pharmacy"
    },
    {
      title: "PCI Recognition",
      description: "Recognized by Pharmacy Council of India",
      year: "2005",
      category: "Regulatory",
      icon: Crown,
      significance: "Authorized to conduct pharmacy education programs"
    },
    {
      title: "University Affiliation",
      description: "Affiliated to Rajiv Gandhi University of Health Sciences",
      year: "2005",
      category: "Academic",
      icon: Star,
      significance: "Academic excellence and curriculum standards"
    },
    {
      title: "100% Placement Record",
      description: "Consistent placement success for graduating students",
      year: "2023",
      category: "Placement",
      icon: Target,
      significance: "Industry recognition and student employability"
    }
  ];

  const studentAchievements = [
    {
      name: "Priya Sharma",
      achievement: "State Topper in B.Pharm Final Year",
      year: "2023",
      category: "Academic Excellence",
      details: "Secured 95.2% marks in final year examinations"
    },
    {
      name: "Rahul Kumar",
      achievement: "Best Research Paper Award",
      year: "2023",
      category: "Research",
      details: "Published research on novel drug delivery systems"
    },
    {
      name: "Anita Patel",
      achievement: "University Gold Medal",
      year: "2022",
      category: "Academic Excellence",
      details: "Highest aggregate in D.Pharm program"
    },
    {
      name: "Vikram Singh",
      achievement: "Inter-College Sports Champion",
      year: "2023",
      category: "Sports",
      details: "Won gold medal in athletics at university level"
    },
    {
      name: "Sneha Reddy",
      achievement: "Cultural Fest Winner",
      year: "2023",
      category: "Cultural",
      details: "First prize in inter-college dance competition"
    },
    {
      name: "Amit Gupta",
      achievement: "Innovation Award",
      year: "2022",
      category: "Innovation",
      details: "Developed mobile app for medication management"
    }
  ];

  const facultyAchievements = [
    {
      name: "Dr. Rajesh Kumar",
      achievement: "Best Teacher Award",
      year: "2023",
      department: "Pharmaceutical Chemistry",
      details: "Recognized for excellence in teaching and student mentorship"
    },
    {
      name: "Prof. Sunita Sharma",
      achievement: "Research Excellence Award",
      year: "2022",
      department: "Pharmacology",
      details: "Published 15 research papers in international journals"
    },
    {
      name: "Dr. Manoj Patel",
      achievement: "Industry Collaboration Award",
      year: "2023",
      department: "Pharmaceutics",
      details: "Established partnerships with leading pharmaceutical companies"
    }
  ];

  const milestones = [
    { year: "2005", event: "College Establishment", description: "Founded with vision of excellence in pharmacy education" },
    { year: "2008", event: "First Graduation Batch", description: "Successfully graduated first batch of D.Pharm students" },
    { year: "2010", event: "B.Pharm Program Launch", description: "Introduced 4-year Bachelor of Pharmacy program" },
    { year: "2015", event: "1000+ Alumni Milestone", description: "Reached milestone of 1000 successful graduates" },
    { year: "2020", event: "Digital Infrastructure", description: "Implemented modern digital learning platforms" },
    { year: "2023", event: "Industry Excellence Award", description: "Recognized as top pharmacy college in the region" }
  ];

  const achievementStats = [
    { label: "Years of Excellence", value: "19+", icon: Calendar },
    { label: "Awards & Recognition", value: "50+", icon: Trophy },
    { label: "Student Toppers", value: "25+", icon: Star },
    { label: "Faculty Awards", value: "15+", icon: Medal }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/graduation.jpg"
              alt="Achievements"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 to-orange-800/80"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  <Trophy className="w-4 h-4 mr-2" />
                  Excellence & Recognition
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Achievements</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Celebrating excellence in education, research, and student development over the years
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                  >
                    <Star className="w-5 h-5" />
                    View All Awards
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white hover:text-yellow-900"
                  >
                    <Users className="w-5 h-5" />
                    Student Success Stories
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {achievementStats.map((stat, index) => (
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

        {/* Institutional Achievements */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Institutional Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our institution has been recognized for its commitment to quality education, 
                research excellence, and student development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {institutionalAchievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-yellow-100 rounded-lg p-2">
                        <achievement.icon className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{achievement.title}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="secondary">{achievement.year}</Badge>
                          <Badge variant="outline">{achievement.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{achievement.significance}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Achievements */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Student Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our students consistently excel in academics, research, sports, and cultural activities, 
                making us proud with their outstanding achievements.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {studentAchievements.map((student, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <Star className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <Badge variant="secondary" className="mt-2">{student.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">{student.achievement}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{student.details}</p>
                    <Badge variant="outline">{student.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Achievements */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Faculty Recognition</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our dedicated faculty members have been recognized for their excellence in teaching, 
                research, and contribution to the field of pharmaceutical sciences.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {facultyAchievements.map((faculty, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-100 rounded-lg p-2">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{faculty.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">{faculty.department}</Badge>
                      </div>
                    </div>
                    <CardDescription>{faculty.achievement}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{faculty.details}</p>
                    <Badge variant="secondary">{faculty.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Key milestones that mark our journey of excellence and growth in pharmaceutical education.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{milestone.year}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{milestone.event}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Be Part of Our Success Story</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our community of achievers and create your own success story in the field 
                of pharmaceutical sciences.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-yellow-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Achievements;
