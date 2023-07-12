import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const iconButtons = [
    { icon: FaLinkedinIn },
    { icon: FaGithub },
    { icon: AiOutlineMail },
    { icon: BsFillPersonLinesFill },
  ];

  return (
    <div id="contact" className="w-full lg:h-scree">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#31708e]">
          Contact
        </p>
        <h2 className="py-4">
          <span className="text-[#31708e]">Get</span> In Touch
        </h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#31708e] bg-[#f7f9fb] bg-opacity-90 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact.jpg"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">
                  <span className="text-[#31708e]">Logan</span> Simpson
                </h2>
                <p>Web Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  {iconButtons.map((icon, index) => (
                    <div
                      key={index}
                      className={`rounded-full shadow-lg shadow-[#31708e] bg-[#687864] text-[#f7f9fb] p-[13px] cursor-pointer hover:scale-105 ease-in duration-500`}
                    >
                      <icon.icon size={23} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* right form */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-[#31708e] rounded-xl lg:p-4">
            <div className="p-4">
                <form>
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Name</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>

                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Phone Number</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>

                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email"/>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10"></textarea>
                    </div>
                    <button className="w-full p-3 text-[#f7f9fb] mt-4">Send Message</button>
                </form>
            </div>

          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href="/#home" scroll={false}>
                <div className="rounded-full shadow-lg shadow-[#31708e] bg-[#687864] mt-6 text-[#f7f9fb] p-[13px] cursor-pointer hover:scale-105 ease-in duration-500">
                    <HiOutlineChevronDoubleUp size={28}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
