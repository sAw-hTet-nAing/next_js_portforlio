import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
export default function SumitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 rounded-full text-white outline-none transition-all
          focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100
          disabled:bg-opacity-60 dark:bg-white/10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin border-b-2 border-white rounded-full"></div>
      ) : (
        <>
          {" "}
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all group-hover:translate-x-1
          group-hover:-translate-y-1 ml-2"
          />
        </>
      )}
    </button>
  );
}
