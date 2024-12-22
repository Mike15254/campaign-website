'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'Youtube' },
  ];

  const quickLinks = [
    { label: 'footer.about', href: '/about' },
    { label: 'footer.vision', href: '/vision' },
    { label: 'footer.policies', href: '/policies' },
    { label: 'footer.events', href: '/events' },
    { label: 'footer.media', href: '/media' },
    { label: 'footer.contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-white">Okiya Omtata</h3>
              <p className="text-gray-400">
                {t('footer.tagline')}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">
                {t('footer.quick_links')}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">
                {t('footer.contact_us')}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+254 722 000 000</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>contact@okiyaomtata.com</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>123 Campaign Office, Nairobi, Kenya</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">
                {t('footer.newsletter')}
              </h4>
              <p className="text-gray-400 mb-4">
                {t('footer.newsletter_desc')}
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder={t('footer.email_placeholder')}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                    text-white placeholder:text-gray-500 focus:outline-none focus:ring-2
                    focus:ring-green-500/20 focus:border-green-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-lg
                    hover:bg-green-700 transition-colors"
                >
                  {t('footer.subscribe')}
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;