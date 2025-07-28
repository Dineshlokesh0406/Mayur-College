import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    // Campus Images
    { src: '/src/assets/Main.jpg', category: 'Campus', title: 'Main Building' },
    { src: '/src/assets/building1.jpg', category: 'Campus', title: 'College Building' },
    { src: '/src/assets/hero-campus.jpg', category: 'Campus', title: 'Campus View' },

    // Laboratory Images
    { src: '/src/assets/LAB 1.jpg', category: 'Laboratory', title: 'Pharmaceutical Lab 1' },
    { src: '/src/assets/Lab 2.jpg', category: 'Laboratory', title: 'Pharmaceutical Lab 2' },
    { src: '/src/assets/Phots1003.jpg', category: 'Laboratory', title: 'Research Lab' },
    { src: '/src/assets/Phots104.jpg', category: 'Laboratory', title: 'Advanced Lab' },

    // Library Images
    { src: '/src/assets/lib1.jpg', category: 'Library', title: 'Library Hall' },
    { src: '/src/assets/lib2.jpg', category: 'Library', title: 'Reading Section' },
    { src: '/src/assets/lib3.jpg', category: 'Library', title: 'Study Area' },
    { src: '/src/assets/library1.jpg', category: 'Library', title: 'Library Resources' },

    // Academic Programs
    { src: '/src/assets/bpharm-1.jpg', category: 'Academics', title: 'B.Pharm Program' },
    { src: '/src/assets/bpharm-2.jpg', category: 'Academics', title: 'B.Pharm Students' },
    { src: '/src/assets/dpharm.jpg', category: 'Academics', title: 'D.Pharm Program' },
    { src: '/src/assets/dpharm-2.jpg', category: 'Academics', title: 'D.Pharm Class' },

    // Co-curricular Activities
    { src: '/src/assets/cc1.jpeg', category: 'Activities', title: 'Co-curricular Event 1' },
    { src: '/src/assets/cc2.jpeg', category: 'Activities', title: 'Co-curricular Event 2' },
    { src: '/src/assets/cc3.jpeg', category: 'Activities', title: 'Co-curricular Event 3' },

    // Graduation & Events
    { src: '/src/assets/graduation.jpg', category: 'Events', title: 'Graduation Ceremony' },
    { src: '/src/assets/placements.jpg', category: 'Placements', title: 'Placement Drive' },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Explore our campus, facilities, and student life through images
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Campus', 'Laboratory', 'Library', 'Academics', 'Activities', 'Events', 'Placements'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors font-medium"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-semibold">{image.title}</p>
                      <p className="text-sm text-white/80">{image.category}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground text-sm">{image.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{image.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;