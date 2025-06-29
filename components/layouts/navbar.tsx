"use client";

import { MdLanguage } from "react-icons/md";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  {
    title: "Home",
    link: "#hero",
  },
  {
    title: "About Us",
    link: "#about",
  },
  {
    title: "Property List",
    link: "#property",
  },
  {
    title: "Contact Us",
    link: "#contact",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const section = document.querySelector(item.link);
        if (section instanceof HTMLElement) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.link);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inisialisasi langsung

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="grid grid-cols-3 fixed w-full items-center py-6 px-12 bg-transparent text-white">
        <div className="font-medium text-2xl justify-self-start">
          <Link href={"/"}>EverGreen</Link>
        </div>
        <div className="flex gap-4 justify-self-center px-4 py-1 backdrop-blur bg-white/20 shadow-lg border border-white/30 rounded-full">
          {navItems.map((item) => (
            <div
              key={item.title}
              className={`px-4 py-2.5 transition-all rounded-full duration-200 ${
                activeSection === item.link
                  ? "bg-white font-bold text-primary" // Style active
                  : "text-white hover:bg-white hover:text-primary" // Style default
              }`}
            >
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-self-end">
          <div className="flex items-center gap-2">
            <MdLanguage />
            Eng
          </div>
          <div>
            <Button className="px-8 py-6 bg-lime-300 text-primary">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
