"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills" });
  return (
    <section
      id="skills"
      className="max-w-[52rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-white borderBlack rounded-xl px-4 py-3 dark:bg-white/10 dark:text-white/70
            dark:hover:bg-white/20 dark:hover:text-white/80 transition cursor-default"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
