import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="body-font"
      style={{ background: "#647C90" }}
    >
      <div className="container px-5 py-12 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon
            className="mx-auto inline-block w-10 mb-4"
            style={{ color: "#EEEDE7" }}
          />
          <h1
            className="sm:text-4xl text-3xl font-medium title-font mb-4"
            style={{ color: "#EEEDE7" }}
          >
            Projects I've Worked On
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
              target="_blank"
              style={{ margin: "auto" }}
            >
              <div className="flex relative project-block">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2
                    className="tracking-widest text-sm title-font font-medium mb-1"
                    style={{ color: "#EEEDE7" }}
                  >
                    {project.subtitle}
                  </h2>
                  <h1
                    className="title-font text-lg font-medium mb-3"
                    style={{ color: "#EEEDE7" }}
                  >
                    {project.title}
                  </h1>
                  {/* <p className="leading-relaxed">{project.description}</p> */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
