import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl capitalize font-medium mb-5 text-center">
      {children}
    </h2>
  );
}
