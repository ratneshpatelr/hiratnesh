"use client";

import Image from "next/image";

import { FiFileText } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Project = ({ project }) => {
  return (
    <div key={project.id} className="animate-pulse hover:animate-none">
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
            className="rounded-md drop-shadow-2xl "
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
    </div>
  );
};

export default Project;
