'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { LanguageSelector } from '@/components/molecules/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const { isLoading } = useLanguage();
  const [mounted, setMounted] = useState(false);

  const isHomePage = pathname === '/';

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (href: string) => {
    setOpenSubmenu(openSubmenu === href ? null : href);
  };

  const navItems = [
    { label: 'nav.home', href: '/' },
    { label: 'nav.about', href: '/about' },
    { label: 'nav.vision', href: '/vision' },
    { label: 'nav.donate', href: '/donate' },
    { label: 'nav.policies', href: '/policies' },
    { label: 'nav.get_involved', href: '/get-involved' },
    { label: 'nav.events', href: '/events' },
  ];

  const isActive = (href: string) => pathname === href;

  const isTransparent = isHomePage && !isScrolled;

  const getNavbarStyle = () => {
    if (!isHomePage) {
      return 'bg-white shadow-sm';
    }
    return isScrolled ? 'bg-white shadow-sm' : 'bg-transparent';
  };

  if (!mounted) return null;

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${getNavbarStyle()}`}
      >
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-1 bg-green-700/20">
            <div className="h-full w-1/3 bg-green-700 animate-[loading_1s_ease-in-out_infinite]"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className={`text-3xl transition-colors duration-300 ${
                isTransparent ? 'text-gray-100' : 'text-gray-800'
              }`}>
                Okiya
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-base transition-colors ${
                    isTransparent
                      ? isActive(item.href)
                        ? 'text-white'
                        : 'text-gray-100 hover:text-white'
                      : isActive(item.href)
                        ? 'text-green-600'
                        : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {t(item.label)}
                </Link>
              ))}
              
              {/* Join Us CTA */}
              <Link
                href="/join"
                className={`px-4 py-1 text-sm font-medium rounded-lg transition-all border ${
                  isTransparent
                    ? 'border-white text-white hover:bg-gray-100'
                    : 'border-green-600 text-gray-800 hover:bg-green-700'
                }`}
              >
                {t('nav.join_us')}
              </Link>
            </div>

            {/* Right Side Items */}
            <div className="flex items-center gap-4">
              <LanguageSelector isTransparent={isTransparent} />
              
              <button
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  isTransparent
                    ? 'text-gray-100 hover:bg-white/10'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 w-[280px] h-full bg-white z-50 transform 
          transition-transform duration-300 ease-out lg:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-medium">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium ${
                  isActive(item.href)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.label)}
              </Link>
            ))}
            
            <div className="px-4 pt-4">
              <Link
                href="/join"
                className="block w-full py-3 px-4 text-sm font-medium text-center text-white 
                  bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.join_us')}
              </Link>
            </div>
          </div>

          <div className="p-4 border-t">
            <LanguageSelector isTransparent={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;