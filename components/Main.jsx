import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  const iconButtons = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/logansimpson01/" },
    { icon: FaGithub, href: "https://github.com/Logan-Simpson" },
    { icon: AiOutlineMail, href: "mailto:loganehsimpeh@gmail.com" },
    { icon: BsFillPersonLinesFill },
  ];

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-800">
            Let's build something awesome
          </p>
          <h1 className="py-4 text-gray-800">
            Hi, I'm <span className="text-[#31708e]">Logan</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Web Developer</h1>
          <p className="py-4 text-gray-800 max-w-[70%] m-auto">
            I am a web developer specializing in the creation and design of
            websites. With a strong focus on responsive frontend applications, I
            combine my technical expertise with a passion for delivering
            visually appealing and user-friendly interfaces. My goal is to
            create engaging digital experiences that seamlessly blend creativity
            and functionality, ultimately providing value to both clients and
            end-users.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            {iconButtons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`rounded-full shadow-lg shadow-[#31708e] bg-[#687864] text-[#f7f9fb] p-[14px] cursor-pointer hover:scale-105 ease-in duration-500`}
                >
                  <icon.icon size={27} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
