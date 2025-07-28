import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Award, CheckCircle, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Affiliations = () => {
  const affiliations = [
    {
      name: 'Rajiv Gandhi University of Health Sciences, Bangalore',
      logo: '/src/assets/rajeev-gandhi.png',
      description: 'Rajiv Gandhi University of Health Sciences (RGUHS), established by the RGUHS Act of 1994, is dedicated to the motto of "Right for Rightful Health Science Education". It is an affiliating, teaching, and research University headquartered in Bangalore.',
      pdf: '/src/assets/RGUHS.pdf',
      website: 'https://www.rguhs.ac.in',
      status: 'Affiliated to'
    },
    {
      name: 'Pharmacy Council of India (PCI)',
      logo: '/src/assets/pci_logo.png',
      description: 'The Pharmacy Council of India (PCI) is the statutory body regulating pharmacy education and profession in India. It is responsible for approving pharmacy colleges and ensuring quality education standards.',
      pdf: '/src/assets/PCI.pdf',
      website: 'https://www.pci.nic.in',
      status: 'Approved by the'
    },
    {
      name: 'Government of Karnataka (GOK)',
      logo: '/src/assets/gok.png',
      description: 'Mayur College of Pharmacy is recognized by the Government of Karnataka (GOK), acknowledging its commitment to providing quality education and healthcare services.',
      pdf: '/src/assets/pdfs/GOK.pdf',
      website: 'https://www.karnataka.gov.in',
      status: 'Recognised by the'
    }
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
              alt="Affiliations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Affiliations & Approvals</h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Recognized and approved by leading educational and regulatory bodies in India.
              </p>
            </div>
          </div>
        </section>

        {/* Affiliations Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {affiliations.map((affiliation, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Logo */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-gray-50 dark:bg-slate-700 rounded-xl p-3 flex items-center justify-center">
                      <img
                        src={affiliation.logo}
                        alt={`${affiliation.name} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    {/* Status Header */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        {affiliation.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      {affiliation.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                      {affiliation.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      {affiliation.pdf && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 w-full"
                          onClick={() => window.open(affiliation.pdf, '_blank')}
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </Button>
                      )}
                      {affiliation.website && (
                        <Button
                          variant="default"
                          size="sm"
                          className="flex items-center gap-2 w-full"
                          onClick={() => window.open(affiliation.website, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Website
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Documents Section */}
        <section className="py-16 bg-gray-50 dark:bg-slate-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Additional Documents & Policies
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Application Form</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Download admission application form</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('/src/assets/Application.pdf', '_blank')}
                  >
                    Download
                  </Button>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Download className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Anti-Ragging Policy</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">College anti-ragging policy document</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('/src/assets/anti_ragging.pdf', '_blank')}
                  >
                    Download
                  </Button>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Download className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gender Sensitization</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Gender sensitization policy</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('/src/assets/gender_sensitisation.pdf', '_blank')}
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Affiliations;