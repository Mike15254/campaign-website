'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { Users, Calendar, Megaphone, Mail, ChevronRight } from 'lucide-react';

const GetInvolvedPage = () => {
  const { t } = useTranslation();

  const opportunities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'get_involved.volunteer.title',
      description: 'get_involved.volunteer.description',
      link: '/volunteer',
      image: '/images/volunteer.jpg'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'get_involved.events.title',
      description: 'get_involved.events.description',
      link: '/events',
      image: '/images/events.jpg'
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'get_involved.advocate.title',
      description: 'get_involved.advocate.description',
      link: '/advocate',
      image: '/images/advocate.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/rally.jpeg"
            alt="Get Involved Banner"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              {t('get_involved.title')}
            </h1>
            <p className="text-lg md:text-xl text-green-100">
              {t('get_involved.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg 
                  hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={opportunity.image}
                    alt={t(opportunity.title)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="p-2 bg-green-600 rounded-lg mb-2">
                      {opportunity.icon}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {t(opportunity.title)}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {t(opportunity.description)}
                  </p>
                  <a
                    href={opportunity.link}
                    className="inline-flex items-center text-green-600 font-medium 
                      group-hover:gap-2 transition-all"
                  >
                    {t('get_involved.learn_more')}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 
                      transition-all duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {t('get_involved.newsletter.title')}
              </h2>
              <p className="text-gray-600">
                {t('get_involved.newsletter.description')}
              </p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder={t('get_involved.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 
                  focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-lg 
                  hover:bg-green-700 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  {t('get_involved.newsletter.subscribe')}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;