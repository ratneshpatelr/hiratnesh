import ProjectCard from "@/components/ProjectCard";
import Head from "next/head";
import { useEffect } from "react";

 function project() {
  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c These are some of my notable projects I worked on. 🍾\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <div className="sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>work ✦ Ratnesh</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="min-h-screen max-w-screen">
        <div className="mt-4  mb-20">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
}

export default project;