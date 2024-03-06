"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveFunctionContext } from "@/context/active-section-context";
export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveFunctionContext();
  const { ref } = useSectionInView({ sectionName: "Home" });
  return (
    <section
      className="mb-28 mwx-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://i.ibb.co/K9RS7rt/myPP.jpg"
              alt="my_img"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-2xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 0.1,
          stiffness: 125,
        }}
      >
        <span className="font-bold">{"Hello"}</span>
        <span className="font-normal">
          {" , I'm "}
          <span className="font-bold">{"Saw Htet Naing"}</span>
          <span className="font-normal">{" . "}</span>
          <span className="font-bold">{"A Senior Flutter Developer ,"}</span>
          <br />
          <span className="font-normal">{" with over "}</span>
          <span className="font-bold">{"4 years Experience ."}</span>
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-sm
      font-medium"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-100 hover:scale-105 hover:bg-gray-950 active:scale-105 transition
          cursor-pointer "
          onClick={(e) => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full
         outline-none focus:scale-100 hover:scale-105 active:scale-105 transition cursor-pointer
        borderBlack dark:bg-white/10 dark:text-white/60"
          href="/CV.pdf"
          download="Saw Htet Naing CV"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full
        outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer
        borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/saw-htet-naing-820088222/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 text-[1.1rem] p-4 flex items-center gap-2 rounded-full
        outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer
        borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/sAw-hTet-nAing"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
