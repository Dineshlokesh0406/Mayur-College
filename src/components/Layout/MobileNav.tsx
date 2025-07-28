import React, { useState } from 'react';
import { Home, GraduationCap, Building2, Users, MoreHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
  const [showMore, setShowMore] = useState(false);

  const mainItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: GraduationCap, label: 'Academics', href: '/academics' },
    { icon: Building2, label: 'Facilities', href: '/facilities' },
    { icon: Users, label: 'Students', href: '/students' },
    { icon: MoreHorizontal, label: 'More', action: () => setShowMore(true) },
  ];

  const moreItems = [
    { label: 'About College', href: '/about' },
    { 
      label: 'Messages', 
      isGroup: true,
      items: [
        { label: "Director's Message", href: '/directors-message' },
        { label: "Principal's Message", href: '/principals-message' }
      ]
    },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Bottom Navigation */}
      <nav className="mobile-nav lg:hidden">
        <div className="grid grid-cols-5 h-16">
          {mainItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action || (() => window.location.href = item.href!)}
              className="flex flex-col items-center justify-center space-y-1 hover:bg-muted transition-colors"
            >
              <item.icon className="w-5 h-5 text-foreground" />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* More Menu Modal */}
      {showMore && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">All Pages</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowMore(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <div className="space-y-3">
                {moreItems.map((item, index) => (
                  <div key={index}>
                    {item.isGroup ? (
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">{item.label}</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="p-3 bg-card rounded-lg hover:bg-muted transition-colors"
                              onClick={() => setShowMore(false)}
                            >
                              <span className="text-sm font-medium">{subItem.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block p-4 bg-card rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setShowMore(false)}
                      >
                        <span className="text-sm font-medium">{item.label}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;