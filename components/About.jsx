import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#31708e]">
            About
          </p>
          <h2 className="py-4">
            <span className="text-[#31708e]">Who</span> I Am
          </h2>
          <p className="py-2 text-gray-800">
            In 2020, I embarked on my journey into the world of web design,
            initially studying at Dixie State University. As I delved deeper
            into the intricacies of programming, I discovered a particular
            passion for the design aspects of web development. Seeking to expand
            my skills, I enrolled in a comprehensive web developer bootcamp at
            the Tech Academy in Portland, OR, which I successfully completed in
            early 2021.
          </p>
          <p className="py-2 text-gray-800">
            I had the opportunity to put my newfound expertise into practice as
            a software developer at Easier Accounting, where I contributed to
            the development of the company's CRM system. Working with
            technologies such as React, PHP, Golang, and MySQL, I found myself
            particularly drawn to React. The experience solidified my love for
            working with React and deepened my understanding of building dynamic
            and efficient web applications
          </p>
          <p className="py-2 text-gray-800 underline cursor-pointer">
            Check out some of my projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-[#31708e] bg-[#687864] bg-opacity-90 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="/assets/web.jpg" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
