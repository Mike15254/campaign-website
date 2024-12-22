'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, BookOpen, Heart } from 'lucide-react';

const VisionSection = () => {
  const { t } = useTranslation();

  const visionPoints = [
    {
      icon: <Shield className="w-6 h-6" />,
      key: 'governance',
      color: 'blue'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      key: 'education',
      color: 'green'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      key: 'healthcare',
      color: 'red'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      key: 'infrastructure',
      color: 'purple'
    }
  ];

  const getGradient = (color: string) => {
    const gradients = {
      blue: 'from-blue-500/10 to-blue-500/0',
      green: 'from-green-500/10 to-green-500/0',
      red: 'from-red-500/10 to-red-500/0',
      purple: 'from-purple-500/10 to-purple-500/0'
    };
    return gradients[color as keyof typeof gradients];
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      red: 'text-red-500',
      purple: 'text-purple-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-light mb-6 tracking-tight">
            {t('vision.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('vision.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative lg:h-[700px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-black/0 z-10" />
            <Image
              src="/images/heroBg.png"
              alt={t('vision.image_alt')}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('vision.description')}
              </p>
            </div>

            {/* Vision Points */}
            <div className="grid gap-4">
              {visionPoints.map((point) => (
                <div 
                  key={point.key}
                  className="group relative p-6 rounded-xl bg-white hover:shadow-xl transition-all duration-300
                    border border-gray-100 hover:border-transparent"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${getGradient(point.color)} 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                  />
                  
                  <div className="relative flex gap-4">
                    <div className={`${getIconColor(point.color)} group-hover:scale-110 transition-transform duration-300`}>
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {t(`vision.points.${point.key}.title`)}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                        {t(`vision.points.${point.key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <Link 
              href="/vision"
              className="inline-flex items-center gap-2 text-green-600 font-medium hover:gap-4 transition-all
                group px-6 py-3 hover:bg-green-50 rounded-lg"
            >
              {t('vision.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Right Side - Image */}
         
        </div>
      </div>
    </section>
  );
};

export default VisionSection;