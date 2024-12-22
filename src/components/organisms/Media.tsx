"use client";
import React , { useEffect, useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import  Link  from 'next/link';
import Image from 'next/image';

export default function Media(){
  const { t } = useTranslation(); 
  const [mediaItems, setMediaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMediaItems = async () => {
      try {
        const response = await fetch('/api/media'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch media items');
        }
        const data = await response.json();
        setMediaItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMediaItems();
  }, []);

  return (
  <>
     {/* media grid  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map(({ id, title, description, imageUrl }) => (
                <div 
                    key={id}
                    className="p-3 rounded-xl bg-white border border-gray-150 shadow-sm hover:shadow-md transition-shadow  overflow-hidden"
                >
                    <img 
                        src = {imageUrl} 
                        alt="image"
                        className="w-full h-[50%] object-cover rounded-lg mb-4"
                    />
                    {/* {media_site && media_date ? ( */}
                    {/* <h5 className="text-sm"><span className='text-green-900'>{media_site}</span> | {media_date}</h5> */}
                    {/*   ) : ( */}
                    {/* <h5 className="text-sm">{media_date}</h5> */}
                    {/* )} */}
                    <h3 className="text-xl font-semibold mb-3">
                        {title} <br/> {description}
                    </h3>
                    <Link href={`/media/${id}`} className="mt-auto text-sm font-medium text-green-700 hover:text-green-800 hidden md:block">
                        Learn More →
                    </Link>
                </div>
            ))}
    </div>
    </>
  );
}