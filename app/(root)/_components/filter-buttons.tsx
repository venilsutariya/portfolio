import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterButtonsProps {
    filter: string;
    setFilter: (filter: string) => void;
}

const FilterButtons = ({
    filter,
    setFilter,
}: FilterButtonsProps) => {
    const techStack = ["All", "React.js", "Node.js", "Next.js", "MongoDB", "Tailwind", "Supabase", "Next Auth"];

    return (
        <div className="pb-4 flex items-center gap-x-3 overflow-x-auto lg:px-20 lg:w-full w-[90vw] mx-auto">
            {techStack.map((tech) => (
                <Button
                    key={tech}
                    variant={"secondary"}
                    size={"sm"}
                    className={cn(
                        filter === tech && "bg-blue-100 hover:bg-blue-100 dark:text-black",
                        "inline-block"
                    )}
                    onClick={() => setFilter(tech)}
                >
                    {tech}
                </Button>
            ))}
        </div>
    );
}

export default FilterButtons;
