"use client";

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

const WhySection = () => {

  const { t } = useTranslation();
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
  const text_sum = "Lorem ipsum dolor sit amet. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
  const whyPoints = [
    {
      "index": 1,
      "title": "Effective Something 1",
      "description": text_sum
      
    },
    {
      "index": 2,
      "title": "Effective Something 2",
      "description": text_sum
    },
    {
      "index": 3,
      "title": "Effective Something 3",
      "description": text_sum
    },
    {
      "index": 4,
      "title": "Effective Something 4",
      "description": text_sum
    },
    {
      "index": 5,
      "title": "Effective Something 5",
      "description": text_sum
    },
    {
      "index": 6,
      "title": "Effective Something 6",
      "description": text_sum
    }

  ]

  return(
    <div className="min-h-screen py-36 max-w-7xl mx-auto ">
      <div className="grid lg:grid-cols-2 gap-12 mb-4">
        <div className="space-y-3">
        <h1 className='font-bold text-3xl lg:text-4xl'>Why Okiya ?</h1>
        <p className='text-justify p-3'>{text}</p>
        </div>
        <div className="relative lg:h-[700px] rounded-2xl overflow-hidden group">
            <Image
                          src="/images/heroBg.png"
                          alt={t('vision.image_alt')}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
          </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
              {whyPoints.map(({index, title, description}) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg bg-white shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-semibold">{index}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {title}
                    </h3>
                    <p className="text-justify text-gray-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
}

export default WhySection;
