'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const VisionSection = () => {
  const { t } = useTranslation();

  const visionPoints = [
    'vision.points.economy',
    'vision.points.education',
    'vision.points.healthcare',
    'vision.points.infrastructure'
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
        
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('vision.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('vision.subtitle')}
          </p>
        </div>

        {/* Vision Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/bg33.png"
              alt={t('vision.image_alt')}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-green-900/20" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-600">
                {t('vision.description')}
              </p>
            </div>

            {/* Vision Points */}
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <div 
                  key={point}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {t(`${point}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`${point}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <button className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-4 transition-all">
              {t('vision.cta')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;