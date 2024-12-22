'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { Calendar, MapPin, Clock, Search, Filter } from 'lucide-react';

const EventsPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'events.filters.all' },
    { id: 'upcoming', label: 'events.filters.upcoming' },
    { id: 'rallies', label: 'events.filters.rallies' },
    { id: 'community', label: 'events.filters.community' }
  ];

  const events = [
    {
      id: 1,
      title: 'Town Hall Meeting',
      type: 'community',
      date: '2024-03-25',
      time: '14:00',
      location: 'Nairobi Community Center',
      image: 'https://picsum.photos/id/122/3888/259',
      description: 'Join us for an engaging discussion about local issues...',
      featured: true
    },
    {
        id: 2,
        title: 'Community Rally',
        type: 'community',
        date: '2024-03-25',
        time: '14:00',
        location: 'Nairobi Community Center',
        image: 'https://picsum.photos/id/12/3888/2592',
        description: 'Join us for an engaging discussion about local issues...',
        featured: true
    },
    {
        id: 3,
        title: 'Education Rally',
        type: 'community',
        date: '2024-03-25',
        time: '14:00',
        location: 'Nairobi Community Center',
        image: 'https://picsum.photos/id/122/3288/219',
        description: 'Join us for an engaging discussion about local issues...',
        featured: true
    }
    // Add more events...
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/rally.jpeg"
            alt="Events Banner"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              {t('events.title')}
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              {t('events.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${activeFilter === filter.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {t(filter.label)}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('events.search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-full md:w-64
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Featured Event */}
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[21/9] relative">
                <Image
                  src="/images/rally2.jpg"
                  alt="Featured Event"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm mb-4">
                    {t('events.featured')}
                  </span>
                  <h2 className="text-3xl font-semibold mb-2">
                    Major Rally in Nairobi
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      March 25, 2024
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      2:00 PM
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Uhuru Park, Nairobi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                  transition-shadow"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg
                    hover:bg-blue-700 transition-colors">
                    {t('events.register')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;