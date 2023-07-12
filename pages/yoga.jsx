import Image from "next/image";
import React from "react";
import yogaImg from "../public/assets/projects/yoga.jpg";
import { RiRadioButtonFill, RiArrowLeftDoubleFill } from "react-icons/ri";
import Link from "next/link";

const yoga = () => {
  const items = [
    { id: 1, label: "HTML" },
    { id: 2, label: "CSS" },
    { id: 3, label: "JavaScript" },
    { id: 4, label: "Bootstrap" },
    { id: 5, label: "Notion" },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src={yogaImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] text-[#f7f9fb] z-10 p-2 translate-y-[-50%]">
          <h2 className="py-2">Yoga Web Page</h2>
          <h3>HTML / CSS / Bootstrap</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#31708e]">Project</p>
          <h2>Overview</h2>
          <p>
            During my internship with Prosper IT Consulting, I had the
            opportunity to work on an exciting project. I was responsible for
            developing a lifestyle page that served as an extension of the
            main/home page. This web page, built using HTML, CSS, JavaScript,
            and Bootstrap, is part of a larger website that offers links to
            diverse hobbies, activities, and interests. It was an engaging
            experience to contribute to the creation of this project and enhance
            the overall user experience.
          </p>
          <a href="https://github.com/Logan-Simpson/Internship-Code-Summary" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 text-[#f7f9fb]">
              Code/Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-[#31708e] rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-[#31708e] font-bold pb-2">
              Technologies
            </p>
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-800 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" size={14} />
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/#projects" scroll={false}>
          <div className="rounded-full shadow-lg shadow-[#31708e] bg-[#687864] mt-6 text-[#f7f9fb] px-3 py-[10px] cursor-pointer hover:scale-105 ease-in duration-500 inline-flex items-center">
            <RiArrowLeftDoubleFill size={22} />
            <span className="text-[#f7f9fb]">Back</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default yoga;
