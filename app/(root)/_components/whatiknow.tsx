import React from 'react';

function WhatIKnow() {

    const arr = [
        {
            name: "Frontend",
            tech: ["HTML", "CSS", "Tailwind", "Javascript", "Typescript", "Reactjs", "Nextjs 13", "shadcn-ui"]
        },
        {
            name: "Backend",
            tech: ["Node Js", "Express Js", "Next Auth"]
        },
        {
            name: "Database",
            tech: ["MongoDB"]
        },
    ]

    return (
        <div className='px-3 py-5'>
            <div className='text-xl font-semibold mt-10 mb-5'>What I know</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {arr.map((item, index) => (
                    <div key={index} className='flex flex-col p-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <div className='mb-2 text-lg font-bold'>{item.name}</div>
                        <div className='flex flex-wrap'>
                            {item.tech.map((tech, index) => (
                                <button key={index} className={`text-xs p-2 cursor-default border-2 border-opacity-70 me-2 mb-2 rounded-md
                            ${tech === "Tailwind" ? "border-blue-500" : tech === "Javascript" ? "border-yellow-500" : tech === "Reactjs" ? "border-blue-500" : tech === "Node Js" ? "border-green-500" : tech === "MongoDB" ? "border-green-500" : "border-black"}
                            `}>
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhatIKnow;
