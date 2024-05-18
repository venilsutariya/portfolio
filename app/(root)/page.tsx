"use client";

import WhatIKnow from "@/app/(root)/_components/whatiknow";
import Projects from "@/app/(root)/_components/project";
import LiveProject from "@/app/(root)/_components/live-projects";
import FilterButtons from "@/app/(root)/_components/filter-buttons";
import { useState } from "react";

export default function Home() {

  const [filter, setFilter] = useState("All");

  return (
    <>
      <FilterButtons filter={filter} setFilter={setFilter} />
     <div className="z-10 px-5 lg:px-20">
        <Projects filter={filter} />
        <WhatIKnow />
        <LiveProject />
     </div>
    </>
  );
}
