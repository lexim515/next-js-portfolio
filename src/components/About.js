import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Lexi &
            <br className="hidden lg:inline-block" />I Have a Passion For
            Problem Solving
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a talented professional who is always eager to utilize my
            knowledge and passion for software design, development, and
            deployment. I have a proven track record of delivering results while
            working on projects in a team environment, as well as independently.
            Languages and technologies I’m well experienced in include
            JavaScript, PHP, SQL, Node, HTML, CSS, React, and Python.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
              style={{ background: "#647C90", color: "#EEEDE7" }}
            >
              Connect With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              style={{ background: "#868B8E", color: "#EEEDE7" }}
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            style={{ height: "500px", margin: "auto" }}
            alt="hero"
            src="./personal-photo.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
