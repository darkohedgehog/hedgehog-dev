"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Link from "next/link";
import Image from "next/image";
import Img1 from '@/assets/projects/social-banner.png';
import Img2 from '@/assets/projects/dizajn.png';

export function AnimatedPin() {
  const projects = [
    {
      title: "Živić-elektro",
      description: "Web trgovina",
      image: Img1,
      github: "https://github.com/darkohedgehog/zivic-elektro-strapi",
      live: "https://zivic-elektro.eu",
      technologies: ["TailwindCSS", "Framer Motion"],
    },
    {
      title: "@Dizajn",
      description: "Izrada svjetlećih reklama",
      image: Img2,
      github: "https://github.com/darkohedgehog/dizajn-studio",
      live: "https://reklame-dizajn.vercel.app/",
      technologies: ["React", "Next.js"],
    },
    {
      title: "Project Three",
      description: "Description for project three.",
      github: "https://github.com/user/project3",
      live: "https://project3.com",
      technologies: ["Node.js", "Express"],
    },
    {
      title: "Project Four",
      description: "Description for project four.",
      github: "https://github.com/user/project4",
      live: "https://project4.com",
      technologies: ["Vite", "Vue.js"],
    },
  ];

  return (
    <div className="h-full w-full lg:w-[1024px] grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto items-center p-8">
      {projects.map((project, index) => (
        <PinContainer
          key={index}
          title={project.title}
          href={project.live}
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
              {project.title}
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
                {project.description}
              </span>
            </div>
            {project.image && (
              <div>
                <Image
                  src={project.image}
                  width={100}
                  height={100}
                  alt={project.title}
                  priority={false}
                  className="w-full h-full rounded-md object-cover" />
              </div>
            )}
            <div className="flex flex-col mt-4 space-y-2">
              <Link href={project.github}
                target="_blank" className="text-blue-400 hover:underline">
                  GitHub
              </Link>
              <Link href={project.live}
                target="_blank" className="text-blue-400 hover:underline">
                  Live Site
              </Link>
            </div>
            <div className="flex my-2 space-x-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="text-xs bg-gray-800 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}
