import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';

const About = () => {
  const [activeMessage, setActiveMessage] = useState('director');

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Messages Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Message Switcher Buttons */}
              <div className="flex justify-end mb-8">
                <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <Button
                    onClick={() => setActiveMessage('director')}
                    className={`px-6 py-3 text-sm font-medium transition-colors ${
                      activeMessage === 'director'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                    variant="ghost"
                  >
                    📋 DIRECTOR'S MESSAGE
                  </Button>
                  <Button
                    onClick={() => setActiveMessage('principal')}
                    className={`px-6 py-3 text-sm font-medium transition-colors ${
                      activeMessage === 'principal'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                    variant="ghost"
                  >
                    📋 PRINCIPAL'S MESSAGE
                  </Button>
                </div>
              </div>

              {/* Message Content */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                {activeMessage === 'director' ? (
                  <div>
                    <h1 className="text-4xl font-bold mb-8">
                      <span className="text-teal-500">DIRECTOR'S</span>{' '}
                      <span className="text-gray-800">MESSAGE</span>
                    </h1>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        Welcome to Mayur College of Pharmacy! Our mission is to provide an excellent education in pharmacy, combining quality teaching with practical 
                        experience. We aim to develop skilled, ethical, and compassionate professionals who will make significant contributions to healthcare. Our dedicated 
                        faculty, state-of-the-art facilities, and strong emphasis on research and community service ensure a comprehensive learning experience for our students. 
                        Thank you for choosing Mayur College of Pharmacy. We are excited to support you on your journey to becoming a leader in the field of pharmacy.
                      </p>
                      <div className="mt-8 pt-4">
                        <p className="font-medium text-gray-800">Mr. M Basavayya</p>
                        <p className="text-gray-600">Director,</p>
                        <p className="text-gray-600">Mayur College of Pharmacy</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-4xl font-bold mb-8">
                      <span className="text-teal-500">PRINCIPAL'S</span>{' '}
                      <span className="text-gray-800">MESSAGE</span>
                    </h1>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        As the Principal of Mayur College of Pharmacy, I am honored to be part of an institution that has consistently demonstrated excellence in 
                        pharmaceutical education and research. Our college stands as a beacon of quality education, fostering innovation and nurturing future leaders 
                        in the pharmaceutical industry. Education is not just about acquiring knowledge; it's about developing critical thinking, problem-solving abilities, 
                        and ethical values. At Mayur College, we believe in holistic development that prepares our students not just for careers, but for life.
                      </p>
                      <div className="mt-8 pt-4">
                        <p className="font-medium text-gray-800">Dr. Priya Sharma</p>
                        <p className="text-gray-600">Principal,</p>
                        <p className="text-gray-600">Mayur College of Pharmacy</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="modern-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
                  Our <span className="gradient-text">Vision & Mission</span>
                </h2>
                <p className="modern-text text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Driving excellence in pharmaceutical education through innovation and commitment
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="modern-card relative bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="modern-heading text-2xl md:text-3xl text-gray-900 dark:text-white">Vision</h3>
                    </div>
                    <p className="modern-text text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium">
                      To provide students with knowledge, skills, values and sensitivity to face challenges in life both in academic and personal spheres. To develop human potential for achieving diverse opportunities in the future and enhance innovative teaching-learning processes for students, faculty, and staff.
                    </p>
                    <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                      <span className="text-sm uppercase tracking-wider">Our Vision</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                  <div className="modern-card relative bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="modern-heading text-2xl md:text-3xl text-gray-900 dark:text-white">Mission</h3>
                    </div>
                    <p className="modern-text text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium">
                      To become a "Centre of Excellence" by providing quality and research-oriented pharmacy education that meets the needs of industry, community, and stakeholders through continuous training and infrastructure development for learning and practicing pharmacy profession.
                    </p>
                    <div className="mt-6 flex items-center text-teal-600 dark:text-teal-400 font-semibold">
                      <span className="text-sm uppercase tracking-wider">Our Mission</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="mt-16 text-center">
                <div className="glass-effect inline-flex items-center px-8 py-4 rounded-full shadow-2xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 animate-pulse"></div>
                  <span className="modern-text text-gray-800 dark:text-gray-200 font-semibold text-lg">Excellence in Pharmaceutical Education</span>
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full ml-4 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
