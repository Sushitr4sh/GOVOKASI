"use client";

import React from "react";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, easeInOut } from "framer-motion";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-sm bg-white/30 z-50">
      <Link
        href="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-[#0a8bfe] to-[#6e3efe] bg-clip-text text-transparent leading-none"
      >
        GO<span className="font-semibold">VOKASI</span>
      </Link>
      <motion.button
        onClick={() => setIsActive(!isActive)}
        initial={false}
        animate={isActive ? "open" : "close"}
        className="flex flex-col space-y-[2px] w-9 h-9 rounded-full p-2 focus:outline-none "
      >
        <motion.span
          variants={topBarVariant}
          initial={false}
          animate={isActive ? "open" : "close"}
          className="w-full h-[2px]"
        />
        <motion.span
          variants={middleBarVariant}
          initial={false}
          animate={isActive ? "open" : "close"}
          className="w-full h-[2px]"
        />
        <motion.span
          variants={bottomBarVariant}
          initial={false}
          animate={isActive ? "open" : "close"}
          className="w-full h-[2px]"
        />
      </motion.button>
    </nav>
  );
};

export default NavBar;

const textVariant = {
  open: {
    opacity: 0,
    transition: {
      duration: 0.175,
    },
  },
  close: {
    opacity: 1,
    transition: {
      duration: 0.175,
      easeInOut,
    },
  },
};

const topBarVariant = {
  open: {
    rotate: 45,
    y: 4,
    backgroundColor: "#000000",
    transition: {
      duration: 0.25,
      easeInOut,
    },
  },
  close: {
    rotate: 0,
    y: 0,
    backgroundColor: "#000000",
    transition: {
      duration: 0.175,
      easeInOut,
    },
  },
};

const middleBarVariant = {
  open: {
    opacity: 0,
    transition: {
      duration: 0.175,
    },
  },
  close: {
    opacity: 1,
    backgroundColor: "#000000",
    transition: {
      duration: 0.175,
      easeInOut,
    },
  },
};

const bottomBarVariant = {
  open: {
    rotate: -45,
    y: -4,
    backgroundColor: "#000000",
    transition: {
      duration: 0.25,
      easeInOut,
    },
  },
  close: {
    rotate: 0,
    y: 0,
    backgroundColor: "#000000",
    transition: {
      duration: 0.175,
      easeInOut,
    },
  },
};
