import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10" style={{ background: "#EEEDE7" }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="title-font font-medium mb-4 md:mb-0"
          style={{ color: "#868B8E" }}
        >
          <a href="#about" className="ml-3 text-xl">
            Lexi Miller
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            className="mr-5 hover:text-black"
            style={{ color: "#868B8E" }}
          >
            Past Projects
          </a>
          <a
            href="#skills"
            className="mr-5 hover:text-black"
            style={{ color: "#868B8E" }}
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="mr-5 hover:text-black"
            style={{ color: "#868B8E" }}
          >
            Experience
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex text-white items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          style={{ background: "#868B8E" }}
        >
          Work With Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
