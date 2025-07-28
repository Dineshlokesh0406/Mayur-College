import React from 'react';
import { Calendar, Users, ExternalLink, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import dpharm2 from '@/assets/dpharm2.jpg';
import bpharm2 from '@/assets/bpharm-2.jpg';

const CoursesOffered = () => {
  const courses = [
    {
      id: 1,
      title: "Diploma in Pharmacy",
      subtitle: "(D.PHARM)",
      image: dpharm2,
      duration: "2 Years",
      students: "60 Students",
      badge: "D.pharm"
    },
    {
      id: 2,
      title: "Bachelor of Pharmacy",
      subtitle: "(B.PHARM)",
      image: bpharm2,
      duration: "4 Years",
      students: "15 Students",
      badge: "B.Pharm"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Academic Programs
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold">
            Choose Your <span className="text-gradient">Pharmacy Career</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our AICTE-approved programs designed to shape future pharmaceutical
            professionals with comprehensive theoretical knowledge and practical experience.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div key={course.id} className="group cursor-pointer">
              {/* Course Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                {/* Image Container */}
                <div className="relative aspect-[2/1] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />



                  {/* Hover Overlay with Animation */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <div className="pt-10 pb-6 px-6 relative">
                  {/* Circular Badge at Top Center of Info Section */}
                  <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 z-50">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-base border-2 sm:border-4 border-white shadow-2xl">
                      {course.badge}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4 text-center">
                    {course.title}
                  </h3>

                  <div className="flex justify-between items-center text-gray-600">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Calendar className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-blue-500" />
                      <span className="text-[10px] sm:text-sm">Course Duration: {course.duration}</span>
                    </div>

                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Users className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-blue-500" />
                      <span className="text-[10px] sm:text-sm">{course.students} Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;
