
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { X } from 'lucide-react';

const GallerySection = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://picsum.photos/id/11/3888/2592',
      alt: 'Community Event',
      category: 'Events'
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/11/3888/2592',
      alt: 'Public Speech',
      category: 'Speeches'
    },
    {
        id: 3,
        src: 'https://picsum.photos/id/11/3888/2592',
        alt: 'Public Speech',
        category: 'Speeches'
      },
      {
        id: 4,
        src: 'https://picsum.photos/id/11/3888/2592',
        alt: 'Public Speech',
        category: 'Speeches'
      },
      
    // Add more images as needed
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-light mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative aspect-square group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 
                  transition-colors rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center 
                    opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium px-3 py-1 
                      bg-black/50 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative w-full max-w-4xl aspect-video">
                <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;