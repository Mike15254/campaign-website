"use client";
import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function Priorities(){
  
  const priorities = [
       {
          "index": 1,
          "title": 'Economic Growth',
          "description": 'Fostering inclusive economic development and creating job opportunities.'
        },
        {
          "index": 2,
          "title": 'Education Reform',
          "description": 'Modernizing our education system to meet global standards.'

        },
        {
          "index": 3,
          "title": 'Healthcare Access',
          "description": 'Making quality healthcare accessible and affordable for all.'
        },
        {
          "index": 4,
          "title": 'National Security',
          "description": 'Ensuring safety and stability across all communities.'
        },
        {
          "index": 5,
          "title": 'Social Protection',
          "description": 'Supporting vulnerable populations and promoting social equality.'
        },
        {
          "index": 6,
          "title": 'Environmental Protection',
          "description": 'Preserving our natural resources for future generations. Preserving our natural resources for future generationsPreserving our natural resources for future generations'
        }
  ]
  return(
  <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {priorities.map(({ index, title, description }) => (
          <div key={index} className="flex flex-col sm:flex-row border border-gray-100 rounded-lg overflow-hidden shadow-sm">
            <div className="relative w-full sm:w-1/2 h-auto">
              <img 
                src='https://www.railaodinga4auc.com/priority1.png'
                alt="Candidate"
                layout="fill"
                className="object-cover rounded-lg bg-green-100"
              />
            </div>
            <div className="flex flex-col p-4 w-full sm:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 font-semibold">{index}</span>
              </div>
              <p className="text-lg font-semibold ml-2">{title}</p>
              </div>
              <p className="text-justify text-gray-700">{description}</p>
            </div>
          </div> 
        ))}
      </div>
  </>
  )
}
