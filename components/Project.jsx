"use client";

import Image from "next/image";

import { FiFileText } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Project = ({ project }) => {
  

  return (
    <div>
    <div
      className="rounded-lg mb-12 flex flex-col items-center "
      key={project.id}
    >
      <Link
        href={project.link}
        target={project.target}
        onClick={() => {
          project.title === "Portfolio"
            ? alert("You are already on this site! 🤩")
            : "";
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
          className="rounded-md drop-shadow-2xl hover:scale-110"
        />
      </Link>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
          {project.title}
        </h1>
        <p className="max-w-[90%] text-slate-100 font-light text-center bg-stone-900 inset-2 border-2 border-lime-100 p-2 m-2 rounded-xl shadow-md">
          {project.description}
        </p>
      </div>
      </div>
      <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
          <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
            <Link
              href={"/pdf/resume.pdf"}
              target="_blank"
              className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
            >
              <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
              <p>Resume</p>
            </Link>
          </div>
          <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
            <Link
              href="/project"
              className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
            >
              <BsArrowUpRight className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
              <p>More Projects</p>
            </Link>
          </div>
        </div>
        
    </div>
  );
};

export default Project;
