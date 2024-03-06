import { useActiveFunctionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { sectionType } from "./types";

export function useSectionInView({
  sectionName,
  threshold = 0.5,
  triggerOnce = false,
}: {
  sectionName: sectionType;
  threshold?: number;
  triggerOnce?: boolean;
}) {
  const { setActiveSection, timeOfLastClick } = useActiveFunctionContext();
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeOfLastClick, threshold]);
  return { ref, inView };
}
