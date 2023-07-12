import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#31708e");
  const [linkColor, setLinkColor] = useState("#f7f9fb");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/yoga") {
      setNavBg("transparent");
      setLinkColor("#f8f8f8");
    } else {
      setNavBg("#31708e");
      setLinkColor("#f7f9fb");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    document.addEventListener("scroll", handleShadow);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  const navIcons = [
    {
      icon: <FaLinkedinIn size={24} />,
      href: "https://www.linkedin.com/in/logansimpson01/",
    },
    { icon: <FaGithub size={24} />, href: "https://github.com/Logan-Simpson" },
    { icon: <AiOutlineMail size={24} />, href: "loganehsimpeh@gmail.com" },
    { icon: <BsFillPersonLinesFill size={24} /> },
  ];

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg shadow-[#8fc1e3] bg-[#31708e] z-[100]"
          : "fixed w-full h-20 bg-[#31708e] z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/assets/newLogo.png"
            alt="/"
            height={50}
            width={125}
            style={{ marginTop: "46px" }}
          />
        </Link>
        <div>
          {/* main/top nav bar */}
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="ml-10 text-sm text-[#f7f9fb] uppercase hover:border-b"
              >
                <Link href={item.href} scroll={false}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={26} style={{ color: "#f7f9fb" }} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/40" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f7f9fb] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fff9eb] p-10 ease-in duration-500"
          }
        >
          <div>
            {/* mobile menu/drawer */}
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/newLogo.png"
                  alt="/"
                  width={87}
                  height={35}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-[#31708e] bg-[#687864] p-[.65rem] cursor-pointer"
              >
                <AiOutlineClose
                  size={24}
                  style={{ color: "#fff", fontWeight: "bold" }}
                />
              </div>
            </div>

            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something awesome together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {navLinks.map((item, index) => (
                <Link key={index} href={item.href}>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#31708e]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                {navIcons.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-[#31708e] bg-[#687864] text-[#f7f9fb] p-[.65rem] cursor-pointer hover:scale-100 ease-in duration-500">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
