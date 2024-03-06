"use client";

import { links } from "@/lib/data";
import React from "react";
import { useState, createContext } from "react";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContexttype = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContexttype | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveFunctionContext() {
  const context = React.useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveFunctionContext must be used within an ActiveSectionContextProvider",
    );
  }
  return context;
}
