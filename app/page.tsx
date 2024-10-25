"use client";
import React, { useEffect } from "react";

import Link from "next/link";

import { ArrowUpRight01Icon } from "hugeicons-react";

import Lenis from "lenis";
import ScrollingNumber from "@/components/ScrollingNumber";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <section className="flex flex-col relative w-full px-6 pb-6">
        <div className="gradient-background-hero w-full h-full absolute top-0 left-0 -z-50" />

        <div className="flex flex-col flex-grow mt-24">
          <h2 className="text-5xl leading-none font-bold">
            Your Dream Career Solution
          </h2>
          <p className="mt-6">
            We develop talent to match their skills and strengths, ensuring they
            grow into quality professionals through ongoing training and
            coaching.
          </p>

          <div className="flex justify-start">
            <Link
              className="inline-flex gap-x-2 items-center font-semibold px-3 py-2 rounded-lg border border-black mt-6"
              href="https://forms.fillout.com/t/pLu84acCt5us"
            >
              <span className="leading-none">Internship Opportunities</span>
              <ArrowUpRight01Icon width={15} height={15} />
            </Link>
          </div>

          <div className="flex flex-col flex-grow items-center mt-6">
            <iframe
              src="https://www.youtube.com/embed/YlVAz0DHmXA?si=IGY1yeMseHekDUGk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full aspect-video rounded-lg"
            ></iframe>
            <div className="flex flex-wrap gap-2 mt-6 ">
              <p className="bg-gradient-to-r shadow-xl from-[#6e3efe] to-[#0a8bfe] px-3 py-1 rounded-lg text-white">
                #HighQualityEmployees
              </p>
              <p className="bg-gradient-to-r shadow-xl from-[#6e3efe] to-[#0a8bfe] px-3 py-1 rounded-lg text-white">
                #InternshipProgram
              </p>
              <p className="bg-gradient-to-r shadow-xl from-[#6e3efe] to-[#0a8bfe] px-3 py-1 rounded-lg text-white">
                #TalentDevelopment
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[100vh] px-6 py-3">
        <div className="">
          <div className="flex items-start justify-center flex-col mt-6">
            <ScrollingNumber value={10000} duration={1.5} />
            <p className="text-sm">Talents</p>
          </div>
          <div className="flex items-start justify-center flex-col ">
            <ScrollingNumber value={15} duration={1.5} />
            <p className="text-sm">Placement Locations</p>
          </div>
          <div className="flex items-start justify-center flex-col ">
            <ScrollingNumber value={150} duration={1.5} />
            <p className="text-sm">Company Partners</p>
          </div>
          <div className="flex items-start justify-center flex-col ">
            <ScrollingNumber value={10} duration={1.5} />
            <p className="text-sm">Various Industries</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
