import Image from "next/image";
import React from "react";

const Skills = () => {
  const cards = [
    {
      imageSrc: "/../public/assets/skills/html.png",
      title: "HTML",
    },
    {
      imageSrc: "/../public/assets/skills/css.png",
      title: "CSS",
    },
    {
      imageSrc: "/../public/assets/skills/javascript.png",
      title: "JavaScript",
    },
    {
      imageSrc: "/../public/assets/skills/react.png",
      title: "React",
    },
    {
      imageSrc: "/../public/assets/skills/nextjs.png",
      title: "NextJS",
    },
    {
      imageSrc: "/../public/assets/skills/tailwind.png",
      title: "Tailwind",
    },
    {
      imageSrc: "/../public/assets/skills/github1.png",
      title: "Github",
    },
    {
      imageSrc: "/../public/assets/skills/sql.png",
      title: "MySQL",
    },
    {
      imageSrc: "/../public/assets/skills/go.png",
      title: "Golang",
    },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#31708e]">
          Skills
        </p>
        <h2 className="py-4">
          <span className="text-[#31708e]">What</span> I Can Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, index) => (
            <div
              className="p-6 shadow-xl shadow-[#31708e] text-[#f7f9fb] bg-gradient-to-l from-[#687864] to-[#6878641A] rounded-xl hover:scale-105 ease-in duration-300"
              key={index}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={item.imageSrc} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-md">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
