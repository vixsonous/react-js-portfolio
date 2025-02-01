import { getTheme } from "../hooks/theme";
import rakuten from "../../assets/rakuten.png";
import tig from "../../assets/tig.png";
import seedtech from "../../assets/seedtech.png";
import jtb from "../../assets/jtb.webp";
import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export interface ExperienceInfo {
  show: boolean;
  hover: boolean;
  title: string;
  sub: string;
  logos: string[];
  tasks: string[];
  position: {
    top: string;
    left: string;
  };
  movement: number;
}

export function useExperienceMainHooks() {
  const theme = getTheme();

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  const loadingRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: loadingRef,
  });
  const vWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dVar = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [state, setState] = useState({
    elements: [
      {
        show: false,
        hover: false,
        title: "Intern Full Stack Developer.",
        sub: "TIG Designs and Solutions Cebu City / May 2018 – January 2019",
        logos: [tig],
        tasks: [
          "Collected, defined and translated user requirements into project designs and implementation plans, creating the overall development plan of the project.",
          "Designed and implemented a database for the web application to store information and dental history.",
          "Developed a dental-medical web application with an interactive dental record system to track dental notes and entries for each tooth, which led to a sale and satisfied customer feedback.",
          "Discussed project progress with the project manager, gathered feedback at various stages and addressed concerns quickly, improving the web application at a rate of 30%.",
        ],
        position: {
          top: "1em",
          left: "1em",
        },
        movement: 1.5,
      },
      {
        show: false,
        hover: false,
        title: "Freelance Developer.",
        sub: "Yazaki Real Estate / July 2021 – December 2022",
        logos: [],
        tasks: [
          "Converted project requirements documentation into actionable tasks, improving execution by 30% and ensuring alignment with project goals.",
          "Handled the creation of a React-based clone of the existing application to migrate it to a modern tech stack, enhancing functionality by 45% and improving overall performance.",
          "Identified and resolved issues within the existing application through systematic testing and debugging process, enhancing application quality and functionality by 20%.",
          "Engineered and deployed new features, leading to enhanced user experience and website functionality.",
        ],
        position: {
          top: "2em",
          left: "1em",
        },
        movement: -1.5,
      },
      {
        show: false,
        hover: false,
        title: "Senior Software Engineer.",
        sub: "Seed Tech Philippines / Rakuten / September 2021 – Present",
        logos: [seedtech, rakuten, jtb],
        tasks: [
          "Developed and deployed websites and features for an enterprise-level web application, following agile development and the waterfall SDLC methodologies, with a 100% success rate in website deployments.",
          "Translated product specifications into actionable tasks, resulting in smoother development execution and 30% faster project completion.",
          "Proposed optimization solution on existing algorithms for fetching data, significantly decreasing the loading time by 45%.",
          "Trained and mentored junior software engineers to support their professional growth, improving technical knowledge to enhance team efficiency by 15%.",
          "Executed website deployments seamlessly on Linux servers using FTP, resulting in zero downtime and maximizing application reliability.",
          "Reviewed team members’ code to ensure quality and compliance with project standards, reducing errors by 30% and enhancing the overall development flow.",
        ],
        position: {
          top: "-50px",
          left: "1em",
        },
        movement: 1,
      },
    ],
    scrollY: 0,
  });

  useMotionValueEvent(dVar, "change", (latest) => {
    setState((prev) => ({ ...prev, scrollY: latest }));
  });

  useEffect(() => {
    for (let i = 0; i < state.elements.length; i++) {
      const lowLimit = Math.floor(i * (100 / state.elements.length) + 1);
      const highLimit = Math.floor((i + 2) * (100 / state.elements.length));

      const val = Math.floor(dVar.get());

      const tmp = [...state.elements];
      if (val >= lowLimit && val <= highLimit) {
        tmp[i].show = true;
      } else {
        tmp[i].show = false;
      }

      setState((prev) => ({ ...prev, elements: [...tmp] }));
    }
  }, [state.scrollY]);

  return {
    theme,
    ref,
    inView,
    loadingRef,
    vWidth,
    dVar,
    state,
    setState,
  };
}
