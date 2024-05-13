import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1
          className="sm:text-4xl text-3xl font-medium title-font mb-12"
          style={{ color: "#868B8E" }}
        >
          Work Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {experiences.map((experience) => (
            <div className="p-4 md:w-1/2 w-full">
              <div
                className="h-full bg-opacity-40 p-8 rounded"
                style={{ background: "#647C90" }}
              >
                <TerminalIcon
                  className="block w-8 mb-4"
                  style={{ color: "#EEEDE7", margin: "10px auto" }}
                />
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: "#EEEDE7" }}
                >
                  {experience.quote}
                </p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span
                      className=" text-sm uppercase"
                      style={{ color: "#EEEDE7" }}
                    >
                      {experience.date}
                    </span>
                    <br></br>
                    <ul>
                      <li
                        className="title-font font-medium"
                        style={{ color: "#EEEDE7" }}
                      >
                        {experience.description1}
                      </li>
                      <li
                        className="title-font font-medium"
                        style={{ color: "#EEEDE7" }}
                      >
                        {experience.description2}
                      </li>
                      <li
                        className="title-font font-medium"
                        style={{ color: "#EEEDE7" }}
                      >
                        {experience.description3}
                      </li>
                      <li
                        className="title-font font-medium"
                        style={{ color: "#EEEDE7" }}
                      >
                        {experience.description4}
                      </li>
                      <li
                        className="title-font font-medium"
                        style={{ color: "#EEEDE7" }}
                      >
                        {experience.description5}
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
