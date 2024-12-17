"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import Link from 'next/link';
import Image from 'next/image';

const MediaPage = ({ params }: { params: Promise<{ id: string }> }) => {

  const resolvedParams = use(params); // Unwrap the async params
  const [id] = useState(resolvedParams.id);
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
  const related_items = [
    {
        "media_id": 1,
        "image_url": "https://nairobileo.co.ke/storage/uploads/2021/06/IMG-20210611160416.jpg",
        "image_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "media_id": 2,
        "media_date": "12-12-2023",
        "image_url": "https://cdn.standardmedia.co.ke/images/articles/thumbnails/Kb5m6rmUkTqAPZobXt0ASfLIFAVffP27kAnGlAnd.jpg",
        "image_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "media_id": 3,
        "media_site": "The Star",
        "media_date": "12-12-2023",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRXMCIT9ur5RIOskH6_UO8ONvfOugaV4axQ&s",
        "image_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ] 
  const more_related_items = [
    {
        "media_id": 1,
        "image_description": "A serene beach at sunset."
    },
    {
        "media_id": 2,
        "image_description": "A bustling city skyline at night."
    },
    {
        "media_id": 3,
        "image_description": "A Media Image Text."
    }
  ] 



  return ( 
<>
    <div className="min-h-screen py-8">
    
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="md:w-2/3">
            <img
              src="https://pbs.twimg.com/media/Gdr5MudXkAAaHyo.jpg"
              alt="image"
              className="rounded-lg shadow-md w-full md:h-[40%] lg:h-[50%]"
            />
          <h3 className="font-bold text-[30px] mt-4 uppercase">Leadership is about vision, integrity, and the will to serve.</h3>
          <p className='text-justify mt-5'>{text}</p>
          </div>

          <div className="md:w-1/3 hidden md:block">
            <div className="px-4 py-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Related Articles</h2>
              
              <ul>
                { more_related_items.map(({media_id, image_description}) => (
                <li key={media_id} className="mb-2">
                  <a href={`/media/${media_id}`} className="hover:underline">
                    {image_description}                
                  </a>
                </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 bg-green-500 text-white px-2 py-1 rounded-lg text-center">
              <h1>Share To Your Socials</h1>
              <p className="font-bold text-sm">Share</p>
            </div>
          </div>
        </div> 
        <div className="text-[30px] sm:text-[60px] lg:text-[40px]  font-bold text-center underline underline-offset-4">Related Media</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related_items.map(({ media_id, image_url, media_site, media_date, image_description }) => (
                <div 
                    key={media_id}
                    className="p-6 rounded-xl bg-white border border-gray-150 shadow-sm hover:shadow-md transition-shadow  overflow-hidden"
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
      </main>
    </div>
    </>
  );
};

export default MediaPage;

