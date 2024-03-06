"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sentEmail } from "@/actions/sent_email";
import SumitButton from "./sumit-btn";
import toast from "react-hot-toast";
export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact" });

  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)] text-center"
      ref={ref}
      initial={{ opacity: 0 }}
      viewport={{
        once: true,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at {""}
        <a href="mailto:example@gmail.com" className="underline">
          example@gmail.com
        </a>
        {""} or use the form below.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sentEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          return toast.success("Email sent successfully.");
        }}
      >
        <input
          type="email"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white/10
          dark:focus:border-white dark:border-white/10 outline-none focus:border-black"
          placeholder="Your Email"
          name="senderEmail"
          required={true}
          maxLength={255}
        />
        <textarea
          className="h-52 borderBlack my-3 rounded-lg p-4
          focus:border-black
          dark:bg-white/10 dark:focus:border-white dark:border-white/10 outline-none"
          placeholder="Your Message"
          name="message"
          required={true}
          maxLength={500}
        />
        <SumitButton />
      </form>
    </motion.section>
  );
}
