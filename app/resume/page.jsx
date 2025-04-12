"use client";

import { DessertIcon } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
// about data
const about = {
  title: "About me",
  description:
    "Frontend developer with 4 years plus of experience. Fluent in JavaScript, React, HTML, CSS and Next Js. Also have knowledge on Word Press, and have worked on 5+ major web design projects. Seeking to leverage experience with multiple online courses of web development to improve my skills and to be productive.",
  info: [
    {
      fieldName: " Name",
      fieldValue: "Abdulmajeed Okaka Jimoh",
    },
    {
      fieldName: "Email",
      fieldValue: "jimohabdulmajeed9@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+234 8167256424",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "languages",
      fieldValue: "English, Pigin",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Tiktok",
      fieldValue: "Oka'aka",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Frontend developer with 4 years plus of experience.",
  items: [
    {
      company: "Thermolinks concepts limited",
      position: "Front-end Developement",
      duration: "2022 - Present",
    },
    {
      company: "Thermolinks concepts limited",
      position: "Front-end Developement Intern",
      duration: "2021 - 2022",
    },
    {
      company: "Online Course",
      position: "Front-end Developement",
      duration: "2022 - Present",
    },
    {
      company: "Online Course",
      position: "Front-end Developement",
      duration: "2022 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Computer Science Graduate from University Of Abuja.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Front-end Developement",
      duration: "2024",
    },
    {
      institution: "Online Course Platform",
      degree: "Nextjs",
      duration: "2024",
    },
    {
      institution: "Online Course Platform",
      degree: "React Native and React js",
      duration: "2023",
    },
    {
      institution: "Youtube",
      degree: "WordPress",
      duration: "2022",
    },
    {
      institution: "Mindluster",
      degree: "HTML5, CSS and javascript",
      duration: "2020-2021",
    },
    {
      institution: "University of Abuja, Abuja Nigeria",
      degree: "Degree in Computer Science",
      duration: "2016 - 2021",
    },
    {
      institution: "Local Government Secondary School, Agassa Kogi State",
      degree: "Secondary Education",
      duration: "2008 - 2014",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Fluent in JavaScript, React, HTML, CSS and Next Js. Also have knowledge on Word Press and Figma.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area"; 
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80] flex item-center justify-center py-12 xl:py-0"

    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience"
         className="flex flex-col xl:flex-row gap-[60px]"
         >

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger >
            <TabsTrigger value="education">Education</TabsTrigger >
            <TabsTrigger value="skills">Skills</TabsTrigger >
            <TabsTrigger value="about">About me</TabsTrigger >
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left" >
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 lg:grid-cols gap-[30px]">
                    {experience.items.map((item, index) => {
                      return(
                        <li 
                          key={index}
                          className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"

                        >
                          <span  className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>



            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left" >
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {education.items.map((item, index) => {
                      return(
                        <li 
                          key={index}
                          className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"

                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl break-words max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl-gap-[30px]">
                  {skills.skillList.map((skill, index) =>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>


            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return(
                      <li key={index} 
                      className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60"  >{item.fieldName}</span >
                        <span className="text-xl"  >{item.fieldValue}</span >
                      </li>
                    );
                  })}

                </ul>
              </div>
              
            </TabsContent>


              

          </div>

        </Tabs>

      </div>

    </motion.div>

  );
};

export default Resume;
