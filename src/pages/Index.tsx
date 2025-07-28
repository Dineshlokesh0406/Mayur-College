import React from 'react';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/Home/HeroSection';
import CoursesOffered from '@/components/Home/CoursesOffered';
import StatsSection from '@/components/Home/StatsSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CoursesOffered />
      <StatsSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
