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
    title: 'Project 1',
    description: 'Portfolio website.',
    stack: [{ name: "Nextjs" }, { name: "TailwindCss" }, { name: "Javascript" }],
    image: '/assets/work/thumb1.png',
    live: "https://abdulmajeed-portfolio.vercel.app/",
    github: "",
  },
  {
    num: '02',
    category: 'Front-end',
    title: 'Project 2',
    description: 'Abuja gards polo website.',
    stack: [{ name: "react" }, { name: "Tailwind.css" }, { name: "Figma" }],
    image: '/assets/work/thumb2.png',
    live: "https://abujaguardspolo.com/",
    github: "",
  },
  
  {
    num: '03',
    category: 'frontend',
    title: 'Project 3',
    description: 'Aisjeed Technologies Website.',
    stack: [{ name: "WordPress" }, ],
    image: '/assets/work/thumb3.png',
    live: "aisjeed.ng",
    github: "",
  },

  {
    num: '04',
    category: 'Full-Stack',
    title: 'Project 4',
    description: 'Project Seed Portal.',
    stack: [{ name: "Nextjs" }, { name: "TailwindCss" }, { name: "Javascript" }, { name: "Nodejs" }, { name: "MongoDB" }, 
      { name: "Expressjs" }],
    image: '/assets/work/thumb4.png',
    live: "",
    github: "",
  },

  {
    num: '05',
    category: 'Full-Stack',
    title: 'Project 5',
    description: 'Employee Management System.',
    stack: [{ name: "Nextjs" }, { name: "TailwindCss" }, { name: "Javascript" }, { name: "Nodejs" }, { name: "MongoDB" }],
    image: '/assets/work/thumb5.png',
    live: "",
    github: "",
  },

  {
    num: '06',
    category: 'frontend',
    title: 'Project 6',
    description: 'Company Website.',
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
              <h2 className="text-[42px] font-bold leading none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4" >
                {project.stack.map((item, index) =>{
                  return (
                  <li key={index} className="text-xl text-accent" >
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-3xl text-white group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
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