"use client";

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import  Link  from 'next/link';
import Image from 'next/image';

const MediaSection = () =>{
  const { t } = useTranslation();
  const media_items = [
    {
        "media_id":1,
        "image_url": "https://imgs.search.brave.com/ZishhKwyNciZc-10n5xgGxqbJlPkBoqxTAuP3SgtpyY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c3RhbmRhcmRtZWRp/YS5jby5rZS9pbWFn/ZXMvYXJ0aWNsZXMv/dGh1bWJuYWlscy95/Mnl3dE5IMUJscGly/Wlg4aGljaHl5UmZY/T3FGQkxYMFhWdklY/ZkRTLmpwZw",
        "image_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "media_id": 2,
        "media_date": "12-12-2023",
        "image_url": "https://imgs.search.brave.com/XHBlVMY90YY7pi6ChsVuTJ-cK_BpGE0uo6rJr9lhPUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c3RhbmRhcmRtZWRp/YS5jby5rZS9pbWFn/ZXMvYXJ0aWNsZXMv/dGh1bWJuYWlscy9L/WTlFV1NxTVRQY2xU/WFluUFYyb3JwNXFP/WWRhSHNYRnFuRk16/dzkxLmpwZw",
        "image_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        
    },
    {
        "media_id": 3,
        "media_site": "The Star",
        "media_date": "12-12-2023",
        "image_url": "https://imgs.search.brave.com/iGZun_fiRqD0fHyiOgrW3cdTDYQ27FTu2wY2oDxDbs0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91emFs/ZW5kb25ld3MuY28u/a2Uvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDgvQWN0aXZp/c3QtT2tpeWEtT210/YXRhaC0xMjAweDkw/MC0xLmpwZw",
        "image_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ] 
  return (
  <>
     {/* media grid  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {media_items.map(({ media_id, image_url, media_site, media_date, image_description }) => (
                <div 
                    key={media_id}
                    className="p-3 rounded-xl bg-white border border-gray-150 shadow-sm hover:shadow-md transition-shadow  overflow-hidden"
                >
                    <img 
                        src={image_url} 
                        alt={image_description} 
                        className="w-full h-[50%] object-cover rounded-lg mb-4"
                    />
                    {media_site && media_date ? (
                    <h5 className="text-sm"><span className='text-green-900'>{media_site}</span> | {media_date}</h5>
                      ) : (
                    <h5 className="text-sm">{media_date}</h5>
                    )}
                    <h3 className="text-xl font-semibold mb-3">
                        {image_description}
                    </h3>
                    <Link href={`/media/${media_id}`} className="mt-auto text-sm font-medium text-green-700 hover:text-green-800 hidden md:block">
                        Learn More →
                    </Link>
                </div>
            ))}
    </div>
    </>
  );

};

export default MediaSection;


