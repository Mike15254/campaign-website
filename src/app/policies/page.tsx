'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { ChevronRight, Search, Download } from 'lucide-react';

const PoliciesPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'policies.categories.all' },
    { id: 'economy', name: 'policies.categories.economy' },
    { id: 'education', name: 'policies.categories.education' },
    { id: 'healthcare', name: 'policies.categories.healthcare' },
    { id: 'infrastructure', name: 'policies.categories.infrastructure' },
  ];

  const policies = [
    {
      id: 1,
      title: 'Economic Growth Framework',
      category: 'economy',
      description: 'Comprehensive plan for sustainable economic development...',
      image: '/images/policies/economy.jpg',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Education Reform Initiative',
      category: 'education',
      description: 'Modernizing education system for the future...',
      image: '/images/policies/education.jpg',
      downloadUrl: '#'
    },
    // Add more policies
  ];

  const filteredPolicies = policies.filter(policy => 
    (activeCategory === 'all' || policy.category === activeCategory) &&
    policy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/rally.jpeg"
            alt="Policies Banner"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              {t('policies.title')}
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              {t('policies.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${activeCategory === category.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {t(category.name)}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('policies.search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-full md:w-64
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Policy Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPolicies.map(policy => (
              <div
                key={policy.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={policy.image}
                    alt={policy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
                  <p className="text-gray-600 mb-4">{policy.description}</p>
                  <a
                    href={policy.downloadUrl}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Download className="w-4 h-4" />
                    {t('policies.download_pdf')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;