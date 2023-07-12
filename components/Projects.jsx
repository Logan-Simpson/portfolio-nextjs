import React from "react";
import Link from "next/link";
import yogaImg from "../public/assets/projects/yoga.jpg";
import comingSoon from "../public/assets/projects/comingSoon.jpg";
import construction from "../public/assets/projects/construction.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projectItems = [
    { title: "Yoga Web Page", backgroundImg: yogaImg, projectUrl: "/yoga" },
    { title: "Under Construction", backgroundImg: construction, projectUrl: "/#projects" },
    { title: "Coming Soon", backgroundImg: comingSoon, projectUrl: "/#projects" },
    { title: "Coming Soon", backgroundImg: comingSoon, projectUrl: "/#projects" },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#31708e]">
          Projects
        </p>
        <h2 className="py-4">
          <span className="text-[#31708e]">What</span> I've Built
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projectItems.map((item, index) => (
            <ProjectItem
              key={index}
              title={item.title}
              backgroundImg={item.backgroundImg}
              projectUrl={item.projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
