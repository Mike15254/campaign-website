'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Mobile Background Image */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C]/80 via-[#051C2C]/90 to-[#051C2C] z-10" />
        <Image
          src="/images/candidate.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
      </div>

      {/* Desktop Background */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#051C2C] opacity-90" />
        <video 
          src="/images/bg1.mp4" 
          className="absolute inset-0 h-full w-full object-cover object-center mix-blend-overlay"
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'url("/images/stars-pattern.png")',
            backgroundSize: '400px',
            opacity: 0.1
          }} 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4  flex items-center ">
        <div className="max-w-7xl mx-auto w-full pt-20 lg:pt-36 lg:min-h-auto min-h-[100vh]">
          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 lg:pt-2 pt-36">
            {/* Text Content */}
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block text-blue-400 text-base md:text-lg font-medium px-4 py-1 rounded-full border border-blue-400/30">
                {t('hero.time_for_change')}
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
                <span className="block">{t('hero.block.block1')}</span>
                <span className="block">{t('hero.block.block2')}</span>
                <span className="block text-blue-400">{t('hero.block.block3')}</span>
                <span className="block">{t('hero.block.block4')}</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <a
                  href="#vision"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg
                    bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                    transition-colors duration-200 shadow-lg shadow-blue-600/20"
                >
                  {t('hero.cta.vision')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg
                    border-2 border-white/20 text-white rounded-lg
                    hover:bg-white/10 transition-colors duration-200"
                >
                  {t('hero.cta.learn_more')}
                </a>
              </div>
            </div>

            {/* Desktop Image - Only visible on lg screens */}
            <div className="hidden lg:block w-2/5">
              <div className="relative aspect-[3/5] max-w-lg mx-auto">
                <Image
                  src="/images/candidate.png"
                  alt={t('hero.candidate_alt')}
                  fill
                  className="object-cover object-top rounded-lg"
                  priority
                  sizes="(min-width: 1024px) 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay for Mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#051C2C] to-transparent z-10 lg:hidden" />
    </div>
  );
};

export default HeroSection;