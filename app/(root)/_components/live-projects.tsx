import { Eye } from 'lucide-react';
import React from 'react';

function LiveProject() {

    const arr = [
        {
            name: "Spark",
            tech: "Next.js 13, React, Tailwind, Clerk, Convex",
            about: "This project named Spark is explicitly stated to be a clone of Miro. This provides a clear understanding that the purpose of the Spark project is to replicate the functionality or features of the Miro application.",
            imageUrl: "/images/spark.png",
            href: "https://spark-omega.vercel.app/",
        },
        {
            name: "Spotify Clone",
            tech: "Next.js 13, React, Tailwind, Clerk, Convex",
            about: "The Spotify Clone project is described as a clone of the popular music streaming service Spotify. This indicates that the project aims to replicate or simulate the features of the Spotify application.",
            imageUrl: "/images/spotify-clone.webp",
            href: "https://spotify-clone-snowy-phi.vercel.app/"
        },
        {
            name: "Youtube Clone",
            tech: "React, Tailwind, Rapid API",
            about: "Similar to the previous project, the Youtube Clone is described as a clone of YouTube. This suggests that the project is designed to mimic the functionalities and user experience of the YouTube platform.",
            imageUrl: "/images/youtube.webp",
            href: "http://youtube-clone-two-sand.vercel.app"
        },
    ]

    return (
        <div className='mt-5 pb-3'>
            <div className='px-3'>
                <div className=' text-xl font-semibold opacity-75 mb-5'>Interactive Projects</div>
                <div>
                    {
                        arr.map((item, index) => (
                            <div key={index} className='border shadow group flex justify-between items-center gap-x-4 px-2 px-lg-4 py-3 mb-3 rounded-lg hover:scale-[1.01] transition-all'>
                                <div className='flex gap-x-4'>
                                    <img src={item.imageUrl} className='h-20 w-24 object-cover rounded-md' alt="" />
                                    <div><span className=' font-semibold'>{item.name}</span> <br /> <span className='text-xs'>{item.tech}</span> <br /> <span className=' text-sm hidden lg:block'>{item.about}</span></div>
                                </div>
                                <a href={item.href} target='_blank'>
                                    <div className='px-3 cursor-pointer'>
                                        <Eye color='rgb(2, 119, 181)'/>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LiveProject;