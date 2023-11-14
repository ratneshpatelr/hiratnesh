import React from "react";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "./CategoryCard";

const About = () => {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>About✦Ratnesh</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              About
            </h1>
            <div className="h-[280px] max-h-[280px] w-full bg-white">
              <Image
                src={"/image1.jpg"}
                className="h-full w-full items-center object-contain text-center"
                alt="Ratnesh"
                width={240}
                height={240}
              />
            </div>

            <CategoryCard />
            <div className="text-center mx-auto mt-2 z-20">
              <p className="text-gray-400 font-deca font-normal text-xs sm:text-sm md:text-md lg:text-lg ">
                Developer <span className="inline-flex items-baseline"></span>{" "}
                &#47;&#47; Designer{" "}
                <span className="inline-flex items-baseline"></span> &#47;&#47;
                Programmer <span className="inline-flex items-baseline"></span>{" "}
              </p>
            </div>
          </div>
          <div className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-light dark:text-white text-gray-900 ">
            <p className="mt-6 mb-12 leading-10 font-normal">
              I love web development, especially the creative side. I started
              with competitive knowledge but found my true passion in coding
              through my first web app. Responsibility matters to me, and
              I&apos;m all about learning and curiosity. In my free time, I work
              on different projects and contribute to open source software,
              always looking to boost my skills. I&apos;m dedicated to web
              development, merging creativity with tech skills to create cool
              digital solutions.{" "}
            </p>
            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">
              And last but not least, please don&apos;t hesitate to contact me!
            </p>
            <ol className="pt-4 gap-2">
              <li className="flex gap-2">
                <span className="text-red-700 font-bold">Gmail</span>
                <a
                  onClick={() =>
                    navigator.clipboard.writeText("ratneshpatel8815@gmail.com")
                  }
                  className=" underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                  href="mailto:ratneshpatel8815@gmail.com"
                >
                  ratneshpatel8815@gmail.com
                </a>
              </li>
              <li className="pt-2 flex gap-2">
                <span className="text-blue-700 font-bold">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/ratnesh-patel-064682240"
                  className=" underline underline-offset-4 decoration-2 decoration-purple-400 font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  Ratnesh kurmi
                </a>
              </li>
              <li className="pt-2 flex gap-2">
                {" "}
                <span className="text-orange-500 font-bold">Instagram</span>
                <a
                  href="https://instagram.com/ratnesh_patel.8815"
                  target="blank"
                  rel="noopener noreferrer"
                  className=" font-semibold underline underline-offset-4 decoration-2 decoration-purple-400 dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                >
                  @Ratnesh.fig
                </a>
              </li>
            </ol>
          </div>
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              This is Ratnesh
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
