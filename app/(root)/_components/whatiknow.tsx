import React from 'react';

interface Technology {
  name: string;
  tools: string[];
}

const technologies: Technology[] = [
  {
    name: 'Frontend',
    tools: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'shadcn-ui'],
  },
  {
    name: 'Backend',
    tools: ['Node.js', 'Express.js', 'Next Auth'],
  },
  {
    name: 'Database',
    tools: ['MongoDB'],
  },
];

interface TechnologyItemProps {
  name: string;
  tools: string[];
}

const TechnologyItem = ({ name, tools }: TechnologyItemProps) => (
  <div className="flex flex-col p-3 rounded-lg border border-gray-300 dark:border-gray-600">
    <div className="mb-2 text-lg font-bold">{name}</div>
    <div className="flex flex-wrap">
      {tools.map((tool, index) => (
        <button
          key={index}
          className={`text-xs p-2 cursor-default border-2 border-opacity-70 me-2 mb-2 rounded-md ${getButtonColor(tool)}`}
        >
          {tool}
        </button>
      ))}
    </div>
  </div>
);

const getButtonColor = (tool: string) => {
  switch (tool) {
    case 'Tailwind':
      return 'border-blue-500';
    case 'JavaScript':
      return 'border-yellow-500';
    case 'React':
      return 'border-blue-500';
    case 'Node.js':
      return 'border-green-500';
    case 'MongoDB':
      return 'border-green-500';
    default:
      return 'border-black dark:border-white/20';
  }
};

interface WhatIKnowProps {}

const WhatIKnow: React.FC<WhatIKnowProps> = () => (
  <div className="px-3 py-5">
    <div className="text-xl font-semibold mt-10 mb-5">What I know</div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map(({ name, tools }, index) => (
        <TechnologyItem key={index} name={name} tools={tools} />
      ))}
    </div>
  </div>
);

export default WhatIKnow;