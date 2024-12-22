'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const MediaSection = () => {
  const { t } = useTranslation();

  const featuredPosts = [
    {
      id: 1,
      title: 'Building a Stronger Economy',
      excerpt: 'Our comprehensive plan to revitalize Kenyas economic landscape...',
      image: 'https://picsum.photos/id/122/3888/2592',
      date: '2024-03-15',
      category: 'Economy'
    },
    {
      id: 2,
      title: 'Education Reform Initiative',
      excerpt: 'Transforming our education system to meet global standards...',
      image: 'https://picsum.photos/id/92/3888/2592',
      date: '2024-03-12',
      category: 'Education'
    },
    {
      id: 3,
      title: 'Healthcare for All',
      excerpt: 'Making quality healthcare accessible to every Kenyan citizen...',
      image: '/images/bg33.png',
      date: '2024-03-10',
      category: 'Healthcare'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-light mb-4">
              {t('media.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('media.subtitle')}
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {featuredPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg
                  transition-all duration-300 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/media/${post.id}`}
                    className="inline-flex items-center text-green-600 font-medium hover:gap-2 transition-all"
                  >
                    {t('media.read_more')}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 
                rounded-lg border border-green-600 hover:bg-green-50 transition-colors"
            >
              {t('media.view_all')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;