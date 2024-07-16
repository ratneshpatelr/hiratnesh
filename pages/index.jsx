import Blob from "@/components/Blob";
import Image from "next/image";
import Head from "next/head";
import { skillsData } from "@/content/skills";
import TechCard from "@/components/TechCard";
import { data } from "@/content/project";
import Project from "@/components/Project";
import Education from "@/components/Education";
import logo from "../public/logo.svg"

export default function Home() {
  const changeId = (id) => {
    return;
  };

  return (
    <>
      <Head>
        <title>Ratnesh ✦ web developer</title>
        <link rel="icon" href={logo} />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[85rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20">
            <Image src={"/logo.svg"} alt="Ratnesh" width="100" height="100" />

            <div className="flex flex-col ml-4">
              <h2 className="font-bold sm:text-2xl md:text-2xl lg:text-4xl">
                Ratnesh kurmi
              </h2>
              <h4 className="text-gray-400 pt-4 xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl">
                Web Developer
              </h4>
            </div>
          </div>
          <div className="mt-12 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8 font-sans">
              A Web Developer based in{" "}
              <span className="font-medium select-none animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded px-2 py-[0.05rem] ">
                INDIA
              </span>{" "}
              who develops modern, reactive, and user-friendly web applications
              using the latest technologies, Passion fuels code, crafting a
              digital masterpiece with logic, creativity, and innovation.
            </p>
          </div>
        </div>
        <div className="mt-8  ">
          <h2
            className={
              "selection:text-black/40 text-center mt-24 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold "
            }
          >
            Skills
          </h2>
          <div className="mt-5 pb-12 grid grid-cols-4 gap-12 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center ">
            {skillsData.map((obj) => {
              return (
                <TechCard
                  id={obj.id}
                  alt={obj.title}
                  main={obj.main}
                  key={obj.id}
                  changeId={() => changeId(obj.id)}
                />
              );
            })}
          </div>
        </div>
        <Education />
        <div className="mt-15 mx-auto">
          <h2
            className={
              "selection:text-black/40 text-center mt-24 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-purple-400 pb-2 to-pink-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold "
            }
          >
            Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-10 mb-10">
            {data?.length > 0 &&
              data?.slice(0, 4).map((project) => (
                <div
                  key={project.id}
                  className=" p-2  border-2  rounded-2xl items-center "
                >
                  <Project project={project} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
