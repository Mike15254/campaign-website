'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { Shield, BookOpen, Heart, CheckCircle2 } from 'lucide-react';

const VisionPage = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: <Shield className="w-6 h-6" />,
      key: 'governance',
      goals: ['transparency', 'accountability', 'efficiency', 'participation']
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      key: 'education',
      goals: ['quality', 'accessibility', 'innovation', 'inclusivity']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      key: 'healthcare',
      goals: ['universal', 'preventive', 'quality', 'affordable']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      key: 'infrastructure',
      goals: ['sustainable', 'modern', 'accessible', 'efficient']
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Banner */}
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden">
          <div className="relative h-[50vh] lg:h-[60vh]">
            <Image
              src="/images/vision-banner.png"
              alt="Vision Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            
            <div className="relative h-full flex flex-col justify-center px-6 lg:px-12">
              <div className="max-w-3xl">
                <h1 className="text-4xl lg:text-7xl text-white font-light mb-6">
                  {t('vision.page.title')}
                </h1>
                <p className="text-lg lg:text-xl text-gray-200">
                  {t('vision.page.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16 lg:mb-24">
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('vision.page.introduction')}
            </p>
          </div>

          {/* Vision Pillars */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
            {pillars.map((pillar) => (
              <div 
                key={pillar.key}
                className="group p-8 rounded-2xl bg-white shadow-sm border border-gray-100
                  hover:shadow-lg hover:border-green-100 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-green-50 text-green-600
                    group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">
                    {t(`vision.page.pillars.${pillar.key}.title`)}
                  </h2>
                </div>

                <p className="text-gray-600 mb-8">
                  {t(`vision.page.pillars.${pillar.key}.description`)}
                </p>

                <div className="space-y-3">
                  {pillar.goals.map((goal) => (
                    <div key={goal} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        {t(`vision.page.pillars.${pillar.key}.goals.${goal}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="#join"
              className="inline-flex items-center justify-center px-8 py-4 
                text-lg font-medium text-white bg-green-600 rounded-lg 
                hover:bg-green-700 transition-colors duration-200
                hover:scale-105 transform"
            >
              {t('vision.page.cta')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;