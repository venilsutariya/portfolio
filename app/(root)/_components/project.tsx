import { Button } from "@/components/ui/button";
import { projectList } from "@/lib/projectList";

interface ProjectsProps {
    filter: string;
}

const Projects = ({ filter }: ProjectsProps) => {

    return (
        <>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projectList.map((p, index) => {
                    const filterArray = p.filter.split(","); // Splitting the filter string into an array
                    // Checking if the filter is "All" or if the project's filter matches the provided filter
                    if (filter === "All" || filterArray.includes(filter)) {
                        return (
                            <div className='rounded-2xl overflow-hidden border' key={index}>
                                <div className='custom-aspect-ratio'>
                                    <div className="h-full w-full">
                                        <img src={p.imageUrl} className='object-cover imageani w-full h-full' alt="" />
                                    </div>
                                </div>
                                <div className='bg-white text-black dark:bg-zinc-950 dark:text-white p-3'>
                                    <div className='text-xl sm:text-lg md:text-xl lg:text-lg xl:text-xl font-semibold'>{p.name}</div>
                                    <div className='text-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm'>{p.tech}</div>
                                </div>
                                <div className="mt-4 mb-3 px-3">
                                    {p.href ? (
                                        <a href={p.href} className="no-underline text-black dark:text-white" target="_blank" rel="noreferrer">
                                            <Button variant={"outline"}>
                                                View Code
                                            </Button>
                                        </a>
                                    ) : (
                                        <Button variant={"outline"} className="cursor-not-allowed text-black dark:text-white">
                                            Private
                                        </Button>
                                    )}
                                </div>
                            </div>
                        );
                    } else {
                        return null; // If the project doesn't match the filter, return null
                    }
                })}
            </div>
        </>
    );
}

export default Projects;