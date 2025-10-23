import React from "react";
import { educationData } from "@/data";

export function EducationTimeline() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Education</span>
      </h2>
      <div className="relative border-l-2 border-cyan-500/30 ml-6 md:ml-12">
        {educationData.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-900 rounded-full -left-3 ring-8 ring-gray-900">
              <svg className="w-2.5 h-2.5 text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
              </svg>
            </span>
            <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-sm w-full">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                <time className="text-sm font-normal text-gray-400">{item.year}</time>
              </div>
              <p className="text-base font-normal text-gray-400">{item.institution}</p>
              <p className="text-base font-semibold text-cyan-400 mt-1">{item.score}</p>
              {item.mhtCet && (
                <p className="text-sm font-semibold text-gray-300 mt-1">{item.mhtCet}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
