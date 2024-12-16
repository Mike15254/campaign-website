'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen">
      {/* Background with Kenyan flag and green overlay */}
      <div className="absolute inset-0 z-0">
        <video src="/images/bg1.mp4" className='absolute inset-0 h-full w-full object-cover object-center opacity-20' autoPlay loop muted />
        {/* <div className="absolute inset-0 bg-[url('/images/kenya-bg1.jpg')] bg-cover bg-center opacity-20" /> */}
        <div className="absolute inset-0 bg-blue-800/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-ful max-w-7xl pt-24 lg:pt-36">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/candidate.png"
                alt={t('hero.candidate_alt')}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            {/* Heading Group */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                {t('hero.name')}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
                {t('hero.title')}
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold text-green-700">
                {t('hero.subtitle')}
              </h3>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl italic text-gray-600">
              {t('hero.tagline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-green-700 text-white 
                font-semibold rounded-full hover:bg-green-800 
                transition-colors duration-200 shadow-lg">
                {t('hero.cta.join')}
              </button>
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-green-700 
                text-green-700 font-semibold rounded-full hover:bg-green-50 
                transition-colors duration-200">
                {t('hero.cta.learn_more')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;