import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Moon,
  Sun,
  Menu,
  X,
  GraduationCap,
  Building2,
  Users,
  BookOpen,
  Award,
  ChevronDown
} from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !(event.target as Element).closest('.relative')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const navigation = {
    academics: [
      { name: 'D.Pharm', href: '/dpharm', icon: GraduationCap },
      { name: 'B.Pharm', href: '/bpharm', icon: GraduationCap },
    ],
    facilities: [
      { name: 'Laboratory', href: '/laboratory', icon: Building2 },
      { name: 'Sports', href: '/sports', icon: Award },
      { name: 'Library', href: '/library', icon: BookOpen },
    ],
    students: [
      { name: 'Co-curricular Activities', href: '/co-curricular', icon: Users },
      { name: 'Achievements', href: '/achievements', icon: Award },
      { name: 'Alumni', href: '/alumni', icon: GraduationCap },
    ],
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="desktop-nav hidden lg:block">
        <div className="w-full px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img
                  src="/src/assets/iconlogo.jpeg"
                  alt="Mayur College Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">Mayur College</h1>
                <p className="text-sm text-muted-foreground">of Pharmacy</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-1">
              <a href="/" className="nav-link">
                Home
              </a>

              <a href="/about" className="nav-link">
                About College
              </a>

              {/* Academics Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('academics')}
                  className="nav-link-normal flex items-center space-x-1"
                >
                  <span>Academics</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'academics' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'academics' && (
                  <div className="absolute top-full left-0 mt-1 w-[300px] bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="p-2">
                      {navigation.academics.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="dropdown-item flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md"
                          onClick={closeDropdown}
                        >
                          <item.icon className="w-4 h-4 text-primary" />
                          <span className="font-medium">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/affiliations" className="nav-link">
                Affiliations
              </a>

              {/* Facilities Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('facilities')}
                  className="nav-link-normal flex items-center space-x-1"
                >
                  <span>Facilities</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'facilities' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'facilities' && (
                  <div className="absolute top-full left-0 mt-1 w-[300px] bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="p-2">
                      {navigation.facilities.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="dropdown-item flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md"
                          onClick={closeDropdown}
                        >
                          <item.icon className="w-4 h-4 text-primary" />
                          <span className="font-medium">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Student Corner Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('students')}
                  className="nav-link-normal flex items-center space-x-1"
                >
                  <span>Student Corner</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'students' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'students' && (
                  <div className="absolute top-full left-0 mt-1 w-[300px] bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="p-2">
                      {navigation.students.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="dropdown-item flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md"
                          onClick={closeDropdown}
                        >
                          <item.icon className="w-4 h-4 text-primary" />
                          <span className="font-medium">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/placements" className="nav-link">
                Placements
              </a>

              <a href="/gallery" className="nav-link">
                Gallery
              </a>

              <a href="/contact" className="nav-link">
                Contact Us
              </a>
            </nav>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-4">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="nav-link"
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="w-full px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gradient">Mayur College</h1>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </Button>
              )}
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="w-full px-4 py-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  <a href="/about" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">About College</span>
                  </a>
                  <a href="/dpharm" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">D.Pharm</span>
                  </a>
                  <a href="/bpharm" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">B.Pharm</span>
                  </a>
                  <a href="/laboratory" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">Laboratory</span>
                  </a>
                  <a href="/library" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">Library</span>
                  </a>
                  <a href="/sports" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">Sports</span>
                  </a>
                  <a href="/co-curricular" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">Activities</span>
                  </a>
                  <a href="/achievements" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">Achievements</span>
                  </a>
                  <a href="/alumni" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">Alumni</span>
                  </a>
                  <a href="/placements" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">Placements</span>
                  </a>
                  <a href="/gallery" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">Gallery</span>
                  </a>
                  <a href="/contact" className="p-3 bg-card rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;