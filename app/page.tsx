"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import LogoSlider from "@/components/LogoSlider";

import { ArrowUpRight01Icon } from "hugeicons-react";

import Lenis from "lenis";
import ScrollingNumber from "@/components/ScrollingNumber";
import Carousel from "@/components/Carousel";
import DepartmentPIlls from "@/components/DepartmentPIlls";

const logos: string[] = [
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
];

const departmentList = [
  { department: "F&B Department", src: "/images/F&B Department.png" },
  { department: "Tech Department", src: "/images/Tech Department.png" },
  { department: "People Department", src: "/images/People Department.png" },
  { department: "Creative Department", src: "/images/Creative Department.png" },
  { department: "Business Department", src: "/images/Business Department.png" },
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

  const [departments, setDepartments] = useState(departmentList[0]);

  return (
    <main>
      <section className="flex flex-col relative w-full px-6 pb-6 rounded-br-2xl rounded-bl-2xl overflow-hidden">
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
      <section className="relative w-full px-6 pb-6">
        <div className="flex items-center mt-16">
          <div className="bg-gradient-to-r from-[#11105e] to-[#0140ff] bg-clip-text text-transparent ">
            <div className="flex items-start justify-center flex-col ">
              <ScrollingNumber value={10000} duration={1.5} />
              <p className="text-xl">Talents</p>
            </div>
            <div className="flex items-start justify-center flex-col mt-4">
              <ScrollingNumber value={15} duration={1.5} />
              <p className="text-xl">Placement Locations</p>
            </div>
            <div className="flex items-start justify-center flex-col mt-4">
              <ScrollingNumber value={150} duration={1.5} />
              <p className="text-xl">Company Partners</p>
            </div>
            <div className="flex items-start justify-center flex-col mt-4">
              <ScrollingNumber value={10} duration={1.5} />
              <p className="text-xl">Various Industries</p>
            </div>
          </div>
        </div>

        <Image
          src="/images/bg-1.png"
          alt="bacgkround 1"
          width={300}
          height={100}
          className="absolute top-[16%] right-0 -z-50 opacity-15"
        />

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mt-8"
      >
        <path
          fill="#0140ff"
          fillOpacity="1"
          d="M0,96L30,85.3C60,75,120,53,180,85.3C240,117,300,203,360,229.3C420,256,480,224,540,192C600,160,660,128,720,117.3C780,107,840,117,900,144C960,171,1020,213,1080,224C1140,235,1200,213,1260,202.7C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <section className="relative pt-6 pb-24 -mt-1 w-full px-6 bg-[#0140ff]">
        <h2 className="text-center text-4xl leading-none font-bold text-white">
          Why Choose GOVOKASI?
        </h2>
        <div className="mt-16 pb-6">
          <Carousel />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0"
        >
          <path
            fill="#0a3fa9"
            fillOpacity="1"
            d="M0,224L26.7,229.3C53.3,235,107,245,160,234.7C213.3,224,267,192,320,176C373.3,160,427,160,480,176C533.3,192,587,224,640,245.3C693.3,267,747,277,800,288C853.3,299,907,309,960,298.7C1013.3,288,1067,256,1120,208C1173.3,160,1227,96,1280,85.3C1333.3,75,1387,117,1413,138.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="w-full h-screen bg-[#0a3fa9] pt-20 pb-24 px-6 -mt-1 text-white">
        <h2 className="text-4xl leading-none font-bold text-white">
          Govokasi Department
        </h2>
        <div className="mt-12">
          <DepartmentPIlls
            departments={departmentList}
            selectedDepartment={departments}
            onSelect={setDepartments}
          />
        </div>
        <Image
          src={departments.src}
          alt={departments.department}
          width={472}
          height={596}
          className="w-full mt-8 rounded-xl"
        />
      </section>
    </main>
  );
};

export default Home;
