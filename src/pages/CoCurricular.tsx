import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Users, Calendar, Mic, Palette, Music, Camera, Trophy, Star, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CoCurricular = () => {
  const clubs = [
    {
      name: "Pharmaceutical Society",
      description: "Professional development and industry networking",
      members: "80+ Members",
      activities: ["Guest Lectures", "Industry Visits", "Research Projects", "Seminars"],
      icon: BookOpen,
      category: "Academic"
    },
    {
      name: "Cultural Club",
      description: "Celebrating arts, music, and cultural diversity",
      members: "60+ Members",
      activities: ["Annual Cultural Fest", "Dance Competitions", "Music Events", "Art Exhibitions"],
      icon: Palette,
      category: "Cultural"
    },
    {
      name: "Drama & Theatre",
      description: "Exploring creativity through performing arts",
      members: "40+ Members",
      activities: ["Stage Plays", "Street Plays", "Storytelling", "Acting Workshops"],
      icon: Mic,
      category: "Arts"
    },
    {
      name: "Photography Club",
      description: "Capturing moments and developing visual skills",
      members: "35+ Members",
      activities: ["Photo Walks", "Exhibitions", "Workshops", "Competitions"],
      icon: Camera,
      category: "Creative"
    },
    {
      name: "Music Club",
      description: "Harmonizing talents and musical expressions",
      members: "45+ Members",
      activities: ["Concerts", "Music Competitions", "Instrument Training", "Choir"],
      icon: Music,
      category: "Arts"
    },
    {
      name: "Social Service Club",
      description: "Community service and social responsibility",
      members: "70+ Members",
      activities: ["Health Camps", "Blood Donation", "Environmental Drives", "Awareness Programs"],
      icon: Heart,
      category: "Service"
    }
  ];

  const events = [
    {
      name: "Annual Cultural Festival",
      description: "Three-day celebration of arts, culture, and talent",
      date: "February 2024",
      participants: "500+ Students",
      highlights: ["Inter-college Competitions", "Celebrity Performances", "Food Festival", "Art Exhibition"]
    },
    {
      name: "Pharmacy Week",
      description: "Professional development and industry awareness",
      date: "September 2024",
      participants: "300+ Students",
      highlights: ["Industry Experts", "Research Presentations", "Career Guidance", "Networking"]
    },
    {
      name: "Talent Hunt",
      description: "Platform for students to showcase their skills",
      date: "November 2024",
      participants: "200+ Students",
      highlights: ["Singing", "Dancing", "Drama", "Stand-up Comedy"]
    }
  ];

  const achievements = [
    { event: "Inter-College Cultural Fest", position: "Overall Champions", year: "2023" },
    { event: "State Level Drama Competition", position: "First Prize", year: "2023" },
    { event: "University Music Competition", position: "Second Prize", year: "2022" },
    { event: "Photography Contest", position: "Best College Participation", year: "2022" }
  ];

  const activityStats = [
    { label: "Active Clubs", value: "15+", icon: Users },
    { label: "Annual Events", value: "30+", icon: Calendar },
    { label: "Participants", value: "400+", icon: Star },
    { label: "Achievements", value: "25+", icon: Trophy }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/cc1.jpeg"
              alt="Co-curricular Activities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-800/80"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  <Star className="w-4 h-4 mr-2" />
                  Beyond Academics
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Co-curricular Activities</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Discover your talents, build friendships, and create lasting memories through our diverse activities
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                  >
                    <Users className="w-5 h-5" />
                    Join a Club
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white hover:text-purple-900"
                  >
                    <Calendar className="w-5 h-5" />
                    Event Calendar
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {activityStats.map((stat, index) => (
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

        {/* Clubs & Societies */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Clubs & Societies</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join our vibrant community of clubs and societies to explore your interests, 
                develop new skills, and connect with like-minded peers.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {clubs.map((club, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <club.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{club.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">{club.category}</Badge>
                      </div>
                    </div>
                    <CardDescription>{club.description}</CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{club.members}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Key Activities
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {club.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm">{activity}</span>
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

        {/* Major Events */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Major Events</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Throughout the year, we organize various events that bring together students, 
                faculty, and the community for celebration and learning.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{event.name}</CardTitle>
                      <Badge variant="secondary">{event.date}</Badge>
                    </div>
                    <CardDescription>{event.description}</CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{event.participants}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Event Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-600" />
                            <span className="text-sm">{highlight}</span>
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

        {/* Recent Achievements */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Recent Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our students have excelled in various inter-college and university level 
                competitions, bringing laurels to the institution.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{achievement.year}</Badge>
                    <Trophy className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{achievement.event}</h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Get Involved Today</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our vibrant community and discover new talents, make lifelong friends, 
                and create unforgettable memories through our co-curricular activities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Register for Activities
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                  Contact Activity Coordinator
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CoCurricular;
