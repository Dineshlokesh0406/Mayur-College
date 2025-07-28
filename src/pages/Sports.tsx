import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Trophy, Users, Target, Heart, Calendar, MapPin, Medal, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Sports = () => {
  const sportsActivities = [
    {
      name: "Cricket",
      description: "Inter-collegiate cricket tournaments and regular practice sessions",
      participants: "25+ Students",
      season: "Oct - Mar",
      icon: Target,
      achievements: ["District Champions 2023", "University Level Participation"]
    },
    {
      name: "Badminton",
      description: "Indoor badminton court with professional coaching",
      participants: "30+ Students",
      season: "Year Round",
      icon: Trophy,
      achievements: ["State Level Participation", "College Champions"]
    },
    {
      name: "Table Tennis",
      description: "Professional table tennis tables with regular tournaments",
      participants: "20+ Students",
      season: "Year Round",
      icon: Medal,
      achievements: ["University Runners-up", "Inter-college Winners"]
    },
    {
      name: "Athletics",
      description: "Track and field events with professional training",
      participants: "40+ Students",
      season: "Nov - Feb",
      icon: Star,
      achievements: ["Individual State Records", "University Medals"]
    }
  ];

  const facilities = [
    {
      name: "Multi-Purpose Ground",
      description: "Large ground for cricket, football, and athletics",
      features: ["Professional Pitch", "Floodlights", "Spectator Seating"]
    },
    {
      name: "Indoor Sports Complex",
      description: "Air-conditioned facility for indoor games",
      features: ["Badminton Courts", "Table Tennis", "Chess Area"]
    },
    {
      name: "Fitness Center",
      description: "Modern gym with latest equipment",
      features: ["Cardio Equipment", "Weight Training", "Yoga Space"]
    }
  ];

  const achievements = [
    { year: "2023", event: "Inter-Collegiate Cricket", position: "Champions", level: "District" },
    { year: "2023", event: "Badminton Singles", position: "Runner-up", level: "University" },
    { year: "2022", event: "Table Tennis Team", position: "Winners", level: "Inter-College" },
    { year: "2022", event: "Athletics 100m", position: "Gold Medal", level: "University" }
  ];

  const sportsStats = [
    { label: "Active Athletes", value: "150+", icon: Users },
    { label: "Sports Activities", value: "12+", icon: Target },
    { label: "Annual Events", value: "25+", icon: Calendar },
    { label: "Achievements", value: "50+", icon: Trophy }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/building1.jpg"
              alt="Sports Facilities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-800/80"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  <Trophy className="w-4 h-4 mr-2" />
                  Excellence in Sports
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Sports & Athletics</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Promoting physical fitness, teamwork, and competitive spirit among our students
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                  >
                    <Users className="w-5 h-5" />
                    Join Sports Club
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white hover:text-green-900"
                  >
                    <Calendar className="w-5 h-5" />
                    Sports Calendar
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {sportsStats.map((stat, index) => (
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

        {/* Sports Activities */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Sports Activities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer a wide range of sports activities to promote physical fitness, mental well-being, 
                and character development among our students.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {sportsActivities.map((sport, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <sport.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{sport.name}</CardTitle>
                    </div>
                    <CardDescription>{sport.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{sport.participants}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{sport.season}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                          Recent Achievements
                        </h4>
                        <div className="space-y-1">
                          {sport.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Medal className="w-4 h-4 text-yellow-600" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Facilities */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Sports Facilities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our campus features modern sports facilities designed to support various athletic activities 
                and promote healthy lifestyle among students.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{facility.name}</CardTitle>
                    <CardDescription>{facility.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2">
                          <Heart className="w-4 h-4 text-green-600" />
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

        {/* Recent Achievements */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Recent Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our students have consistently performed well in various sports competitions at district, 
                university, and state levels.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{achievement.year}</Badge>
                    <Badge variant="outline">{achievement.level}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{achievement.event}</h3>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium text-primary">{achievement.position}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Join Our Sports Community</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Be part of our vibrant sports community and discover your athletic potential while building 
                lifelong friendships and healthy habits.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Register for Sports
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                  Contact Sports Coordinator
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sports;
