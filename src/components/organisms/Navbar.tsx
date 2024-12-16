'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { LanguageSelector } from '@/components/molecules/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { t } = useTranslation();
  const { isLoading } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: 'nav.home', href: '/' },
    { label: 'nav.about', href: '/about' },
    { 
      label: 'nav.vision',
      href: '/vision',
      children: [
        { label: 'nav.mission', href: '/vision/mission' },
        { label: 'nav.strategic_plan', href: '/vision/strategic-plan' },
      ]
    },
    { label: 'nav.priorities', href: '/priorities' },
    { label: 'nav.why_okiya', href: '/why-okiya' },
    { label: 'nav.media', href: '/media' },
  ];

  const isActive = (href: string) => pathname === href;

  const toggleSubmenu = (href: string) => {
    setOpenSubmenu(openSubmenu === href ? null : href);
  };

  if (!mounted) return null;

  const MobileNavItem = ({ item }: { item: any }) => (
    <div key={item.href} className="border-b border-gray-100 last:border-0">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={`flex-1 px-6 py-4 text-base transition-colors ${
            isActive(item.href)
              ? 'text-green-700 font-medium'
              : 'text-gray-600'
          }`}
          onClick={() => !item.children && setIsMenuOpen(false)}
        >
          {t(item.label)}
        </Link>
        {item.children && (
          <button
            className="px-4 py-4 text-gray-500"
            onClick={() => toggleSubmenu(item.href)}
          >
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                openSubmenu === item.href ? 'rotate-90' : ''
              }`}
            />
          </button>
        )}
      </div>
      {item.children && (
        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out bg-gray-50
            ${openSubmenu === item.href ? 'max-h-48' : 'max-h-0'}`}
        >
          {item.children.map((child: any) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block px-8 py-3 text-sm ${
                isActive(child.href)
                  ? 'text-green-700 bg-green-50/50'
                  : 'text-gray-500 hover:text-green-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(child.label)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-1 bg-green-700/20">
            <div className="h-full w-1/3 bg-green-700 animate-[loading_1s_ease-in-out_infinite]"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-thin text-3xl">Okiya Omtata</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-md font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-green-700'
                        : 'text-gray-600 hover:text-green-700'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      {t(item.label)}
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </span>
                  </Link>

                  {item.children && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {t(child.label)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Items */}
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <button
                className="lg:hidden p-2 rounded-full hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden backdrop-blur-sm ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[280px] h-full bg-white z-50 transform transition-all duration-300 ease-in-out lg:hidden 
          ${isMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="h-20 flex items-center justify-between px-6 border-b">
            <span className="font-medium text-lg">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <MobileNavItem key={item.href} item={item} />
            ))}
          </div>

          {/* Footer with Language Selector */}
          <div className="p-6 border-t">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;