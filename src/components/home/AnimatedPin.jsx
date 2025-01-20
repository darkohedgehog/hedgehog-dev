"use client";
import React from "react";
import { PinContainer } from "../ui/Pin";
import Link from "next/link";
import Image from "next/image";
import Img1 from '@/assets/projects/elektro.png';
import Img2 from '@/assets/projects/dizajn.png';
import Img3 from '@/assets/projects/portfolio1.jpg';
import Img4 from '@/assets/projects/social-media.png';
import Img5 from '@/assets/projects/mi-go-malina.webp'
import { useTranslations } from 'next-intl';


export function AnimatedPin() {
  const t = useTranslations('AnimatedPin');
  const projects = [
    {
      title: "Živić-elektro",
      description: (<span>{t('description1')}</span>),
      image: Img1,
      github: "https://github.com/darkohedgehog/zivic-elektro-strapi",
      live: "https://zivic-elektro.shop",
      technologies: ["Next.js", "Strapi", "Gsap","TailwindCss"],
    },
    {
      title: "@Dizajn",
      description: (<span>{t('description2')}</span>),
      image: Img2,
      github: "https://github.com/darkohedgehog/dizajn-studio",
      live: "https://reklame-dizajn.vercel.app/",
      technologies: ["Next.js", "Sanity","Framer Motion"],
    },
    {
      title: "Mi-Go Kombucha",
      description: (<span>{t('description5')}</span>),
      image: Img5,
      github: "https://github.com/darkohedgehog/mi-go",
      live: "https://www.migo-kombucha.com",
      technologies: ["Next.js", "Shadcn/ui", "TailWindCss", "Framer Motion"],
    },
    {
      title: "Kreditni savetnik",
      description: (<span>{t('description4')}</span>),
      image: Img4,
      github: "https://github.com/darkohedgehog/kreditni-savetnik",
      live: "https://savetnikzakredite.vercel.app/",
      technologies: ["Next.js", "Shadcn/ui", "TailWindCss"],
    },
    {
      title: "Portfolio",
      description: (<span>{t('description3')}</span>),
      image: Img3,
      github: "https://github.com/darkohedgehog/Dragana-portfolio",
      live: "https://dragana-portfolio.vercel.app/",
      technologies: ["Vite", "TailwindCss", "Framer Motion"],
    },
  ];

  return (
    <div className="h-full w-full lg:w-[1024px] grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 mx-auto items-center p-8">
      {projects.map((project, index) => (
        <PinContainer
          key={index}
          title={project.title}
          href={project.live}
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] lg:w-[24rem] lg:h-[22rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-accent dark:text-accentDark">
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
                  className="w-full h-32 rounded-md object-cover" />
              </div>
            )}
            <div className="flex items-center justify-center mt-4 gap-6">
              <Link 
               href={project.github}
               target="_blank"
               className="text-blue-400 hover:underline">
                  GitHub
              </Link>
              <Link 
              href={project.live}
              target="_blank"
              className="text-blue-400 hover:underline">
                  Live Site
              </Link>
            </div>
            <div className="flex mt-5 space-x-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="text-xs text-accent dark:text-accentDark px-2 py-1 rounded">
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
