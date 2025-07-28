import React from 'react';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mayur College of Pharmacy</h3>
                <p className="text-accent-foreground/80">Excellence in Pharmaceutical Education</p>
              </div>
            </div>
            
            <p className="text-accent-foreground/80 leading-relaxed max-w-md">
              Managed by Bapuji Education Society since 2005, we are committed to providing quality pharmaceutical education and shaping future healthcare professionals.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-accent-foreground/80">Follow Us:</span>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-accent-foreground hover:text-primary">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-accent-foreground hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-accent-foreground hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-accent-foreground hover:text-primary">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                { name: 'About College', href: '/about' },
                { name: 'D.Pharm Program', href: '/dpharm' },
                { name: 'B.Pharm Program', href: '/bpharm' },
                { name: 'Admissions', href: '/admissions' },
                { name: 'Placements', href: '/placements' },
                { name: 'Alumni', href: '/alumni' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-accent-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-accent-foreground/80 text-sm leading-relaxed">
                    Mayur College of Pharmacy<br />
                    Behind Sadhana Building<br />
                    RT Nagar, Tumkur - 572103<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-accent-foreground/80 text-sm">+91 9480150808</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-accent-foreground/80 text-sm">mcptumkur@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-light/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-accent-foreground/80 text-sm">
                © {currentYear} Mayur College of Pharmacy. All rights reserved.
              </p>
              <p className="text-accent-foreground/60 text-xs mt-1">
                Managed by Bapuji Education Society | AICTE Approved | PCI Recognized
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy-policy" className="text-accent-foreground/80 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-accent-foreground/80 hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="/disclaimer" className="text-accent-foreground/80 hover:text-primary transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;