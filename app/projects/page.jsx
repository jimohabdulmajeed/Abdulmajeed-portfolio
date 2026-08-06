"use client"

import { motion } from "framer-motion";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from "@/components/ProjectSliderBtns";

const works=[
  {
    num: '01',
    category: 'frontend',
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio built to showcase my work and skills as a frontend developer.',
    stack: [{ name: "Nextjs" }, { name: "TailwindCss" }, { name: "Javascript" }],
    image: '/assets/work/thumb1.png',
    live: "https://abdulmajeed-portfolio.vercel.app/",
    github: "",
  },
  {
    num: '02',
    category: 'Front-end',
    title: 'Abuja Guards Polo Club',
    description: 'A responsive marketing website for the Abuja Guards Polo Club.',
    stack: [{ name: "react" }, { name: "Tailwind.css" }, { name: "Figma" }],
    image: '/assets/work/thumb2.png',
    live: "https://abujaguardspolo.com/",
    github: "",
  },

  {
    num: '03',
    category: 'frontend',
    title: 'Aisjeed Technologies',
    description: 'Company website for Aisjeed Technologies, built and managed on WordPress.',
    stack: [{ name: "WordPress" }, ],
    image: '/assets/work/thumb3.png',
    live: "https://aisjeed.ng",
    github: "",
  },

  {
    num: '04',
    category: 'Full-Stack',
    title: 'Project Seed Portal',
    description: 'A full-stack portal for managing and tracking project seed initiatives.',
    stack: [{ name: "Nextjs" }, { name: "TailwindCss" }, { name: "Javascript" }, { name: "Nodejs" }, { name: "MongoDB" },
      { name: "Expressjs" }],
    image: '/assets/work/thumb4.png',
    live: "",
    github: "",
  },

  {
    num: '05',
    category: 'Full-Stack',
    title: 'Employee Management System',
    description: 'An internal system for managing employee records, roles, and workflows.',
    stack: [{ name: "Nextjs" }, { name: "TailwindCss" }, { name: "Javascript" }, { name: "Nodejs" }, { name: "MongoDB" }],
    image: '/assets/work/thumb5.png',
    live: "",
    github: "",
  },

  {
    num: '06',
    category: 'frontend',
    title: 'Company Website',
    description: 'A brand-focused company website built and managed on WordPress.',
    stack: [{ name: "WordPress" }, ],
    image: '/assets/work/thumb6.png',
    live: "",
    github: "",
  },
];


const Projects = () => {
  const [project, setProject] = useState(works[0]);

  const handleSlideChange = (swiper) => {
    // get the current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(works[currentIndex])
  };


  return( 
    <motion.section
    initial={{ opacity: 0 }}
    animate={{
       opacity: 1, 
       transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
 
      }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                {project.num}
              </div>
              {/* project category */}
              <span className="text-accent uppercase tracking-[2px] text-sm">{project.category}</span>
              {/* project title */}
              <h2 className="text-[32px] xl:text-[42px] font-bold leading-none text-white transition-all duration-500">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-3" >
                {project.stack.map((item, index) =>{
                  return (
                  <li key={index} className="text-sm text-accent border border-accent/30 rounded-full px-3 py-1" >
                    {item.name}
                  </li>
                );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/10"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {project.live ? (
                        <Link
                          href={project.live}
                          target="_blank"
                          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10 transition-all"
                        >
                          <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                        </Link>
                      ) : (
                        <span className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-30 cursor-not-allowed">
                          <BsArrowUpRight className="text-3xl text-white" />
                        </span>
                      )}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.live ? "Live project" : "Live link not available"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {/* github project button */}
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {project.github ? (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10 transition-all"
                        >
                          <BsGithub className="text-3xl text-white group-hover:text-accent" />
                        </Link>
                      ) : (
                        <span className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-30 cursor-not-allowed">
                          <BsGithub className="text-3xl text-white" />
                        </span>
                      )}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.github ? "Github repository" : "Repository not public"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {works.map((project, index) => {
                return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center item-center bg-pink-50/20">
                  {/* overlay */}
                  <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10" ></div>
                  {/* image */}
                  <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt= ""
                    />
                  </div>

                </SwiperSlide>
                );
              })}
              {/* slideer buttons */}
              <ProjectSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
  
};

export default Projects;