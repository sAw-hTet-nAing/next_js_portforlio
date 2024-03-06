import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mb-10 px-4 text-gray-400 leading-5">
      <small className="text-xs">&copy; 2024 Saw .All right reserved.</small>
      <p className="font-normal text-xs leading-5">
        <span>About this website :</span> followed tutorial form youtube to
        learn
        <span className=" font-semibold text-gray-800 dark:text-white/80">
          {" React & NEXT.js from "}{" "}
        </span>
        <a
          className="underline font-semibold text-blue-400"
          href="https://www.youtube.com/watch?v=sUKptmUVIBM&list=WL&index=56&t=17273s"
        >
          this tutorial.
        </a>
        <br />
        {" From this tutorial I've learn a lot of things such as "}
        <span className="font-semibold text-gray-800 dark:text-white/80">
          {
            "(App Router,Server Actions,TypeScript,Tailwind Css,Framer-Motion,React-Email,Resend "
          }
        </span>
        and
        <span className="font-semibold text-gray-800 dark:text-white/80">
          {" "}
          {"Vercel Hosting)"}.
        </span>
      </p>
    </footer>
  );
}
