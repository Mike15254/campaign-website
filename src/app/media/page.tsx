"use client";

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import  Link  from 'next/link';

const MediaSection = () =>{
  const { t } = useTranslation();
  const media_items = [
    {
        "media_id": 1,
        "image_url": "https://www.railaodinga4auc.com/blogs/5.jpeg",
        "image_description": "A serene beach at sunset."
    },
    {
        "media_id": 2,
        "media_date": "12-12-2023",
        "image_url": "https://www.railaodinga4auc.com/blogs/5.jpeg",
        "image_description": "A bustling city skyline at night."
    },
    {
        "media_id": 3,
        "media_site": "The Star",
        "media_date": "12-12-2023",
        "image_url": "https://www.railaodinga4auc.com/blogs/5.jpeg",
        "image_description": "A Media Image Text."
    }
  ] 
  return (
  <>
     {/* media grid  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {media_items.map(({ media_id, image_url, media_site, media_date, image_description }) => (
                <div 
                    key={media_id}
                    className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                    <img 
                        src={image_url} 
                        alt={image_description} 
                        className="w-full h-50 object-cover rounded-lg mb-4"
                    />
                    {media_site && media_date ? (
                    <h5 className="text-sm"><span className='text-green-900'>{media_site}</span> | {media_date}</h5>
                      ) : (
                    <h5 className="text-sm">{media_date}</h5>
                    )}
                    <h3 className="text-xl font-semibold mb-3">
                        {image_description}
                    </h3>
                    <Link href={`/media/${media_id}`} className="mt-4 text-sm font-medium text-green-700 hover:text-green-800">
                        Learn More →
                    </Link>
                </div>
            ))}
    </div>
    </>
  );

};

export default MediaSection;


