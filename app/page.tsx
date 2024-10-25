"use client";
import React, { useEffect } from "react";

import Link from "next/link";

import LogoSlider from "@/components/LogoSlider";

import { ArrowUpRight01Icon } from "hugeicons-react";

import Lenis from "lenis";
import ScrollingNumber from "@/components/ScrollingNumber";

const logos: string[] = [
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
];

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
      <section className="relative w-full px-6 py-3">
        <h2 className="text-center text-4xl leading-none font-bold mt-16">
          What We Do?
        </h2>
        <div className="flex flex-col gap-y-4 mt-8">
          <div className="flex items-center gap-x-8 px-6 py-4 rounded-xl bg-gradient-to-r from-[#11105e] to-[#0140ff] text-white">
            <div>
              <p className="font-semibold text-3xl">#1. Identify</p>
              <p>
                GOVOKASi memberdayakan talenta untuk menemukan dan
                mengoptimalkan potensi penuh mereka.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-8 px-6 py-4 rounded-xl bg-gradient-to-r from-[#0140ff] to-[#00a0fe] text-white">
            <div>
              <p className="font-semibold text-3xl">#2. Develop</p>
              <p>
                GOVOKASi memberdayakan talenta untuk meraih karier impian mereka
                melalui pelatihan dan pembinaan berkelanjutan.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-8 px-6 py-4 rounded-xl bg-gradient-to-r from-[#00a0fe] to-[#fddc57] text-white">
            <div>
              <p className="font-semibold text-3xl">#3. Promote</p>
              <p>
                GOVOKASi memberdayakan talenta dengan menghubungkan mereka ke
                perusahaan mitra untuk mewujudkan karier impian..
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[100vh] px-6 py-3 mt-6">
        <div className="flex items-center mt-16">
          <div className="bg-gradient-to-r from-[#11105e] to-[#0140ff] bg-clip-text text-transparent ">
            <div className="flex items-start justify-center flex-col ">
              <ScrollingNumber value={10000} duration={1.5} />
              <p className="text-sm">Talents</p>
            </div>
            <div className="flex items-start justify-center flex-col mt-4">
              <ScrollingNumber value={15} duration={1.5} />
              <p className="text-sm">Placement Locations</p>
            </div>
            <div className="flex items-start justify-center flex-col mt-4">
              <ScrollingNumber value={150} duration={1.5} />
              <p className="text-sm">Company Partners</p>
            </div>
            <div className="flex items-start justify-center flex-col mt-4">
              <ScrollingNumber value={10} duration={1.5} />
              <p className="text-sm">Various Industries</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
