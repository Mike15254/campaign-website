'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  Shield, 
  Users, 
  Leaf 
} from 'lucide-react';

const PrioritiesSection = () => {
  const { t } = useTranslation();

  const priorities = [
    { 
      id: 'economic_growth', 
      icon: Building2, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50' 
    },
    { 
      id: 'education', 
      icon: GraduationCap, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50' 
    },
    { 
      id: 'healthcare', 
      icon: Heart, 
      color: 'text-red-600',
      bgColor: 'bg-red-50' 
    },
    { 
      id: 'security', 
      icon: Shield, 
      color: 'text-green-600',
      bgColor: 'bg-green-50' 
    },
    { 
      id: 'social_welfare', 
      icon: Users, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50' 
    },
    { 
      id: 'environment', 
      icon: Leaf, 
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50' 
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('priorities.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('priorities.subtitle')}
          </p>
        </div>

        {/* Priorities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorities.map(({ id, icon: Icon, color, bgColor }) => (
            <div 
              key={id}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t(`priorities.${id}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`priorities.${id}.description`)}
              </p>
              <button className="mt-4 text-sm font-medium text-green-700 hover:text-green-800">
                {t('priorities.learn_more')} →
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors">
            {t('priorities.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrioritiesSection;
