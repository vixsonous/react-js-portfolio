import React, { useEffect, useRef, useState } from "react";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useInView, motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { getTheme } from "./hooks/theme";
import rakuten from '../assets/rakuten.png';
import tig from '../assets/tig.png';
import seedtech from '../assets/seedtech.png';
import jtb from '../assets/jtb.webp';
import TypingText from "./text/TypingText";
import { sm } from "../constants";
import { Eye, EyeSlash } from "@phosphor-icons/react";

export default function ExperienceMain() {

  const theme = getTheme();

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  const loadingRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: loadingRef,
  });
  const vWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dVar = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const mm = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const [state, setState] = useState({
    elements: [
      {
        show: false,
        hover: false,
        title: 'Intern Full Stack Developer.',
        sub: 'TIG Designs and Solutions Cebu City / May 2018 – January 2019',
        logos: [
          tig
        ],
        tasks: [
          'Collected, defined and translated user requirements into project designs and implementation plans, creating the overall development plan of the project.',
          'Designed and implemented a database for the web application to store information and dental history.',
          'Developed a dental-medical web application with an interactive dental record system to track dental notes and entries for each tooth, which led to a sale and satisfied customer feedback.',
          'Discussed project progress with the project manager, gathered feedback at various stages and addressed concerns quickly, improving the web application at a rate of 30%.'
        ],
        position: {
          top: '1em',
          left: '1em'
        },
        movement: 1.5
      },
      {
        show: false,
        hover: false,
        title: 'Freelance Developer.',
        sub: 'Yazaki Real Estate / July 2021 – December 2022',
        logos: [],
        tasks: [
          'Converted project requirements documentation into actionable tasks, improving execution by 30% and ensuring alignment with project goals.',
          'Handled the creation of a React-based clone of the existing application to migrate it to a modern tech stack, enhancing functionality by 45% and improving overall performance.',
          'Identified and resolved issues within the existing application through systematic testing and debugging process, enhancing application quality and functionality by 20%.',
          'Engineered and deployed new features, leading to enhanced user experience and website functionality.',
        ],
        position: {
          top: '2em',
          left: '1em'
        },
        movement: -1.5
      },
      {
        show: false,
        hover: false,
        title: 'Senior Software Engineer.',
        sub: 'Seed Tech Philippines / Rakuten / September 2021 – Present',
        logos: [
          seedtech,
          rakuten,
          jtb
        ],
        tasks: [
          'Developed and deployed websites and features for an enterprise-level web application, following agile development and the waterfall SDLC methodologies, with a 100% success rate in website deployments.',
          'Translated product specifications into actionable tasks, resulting in smoother development execution and 30% faster project completion.',
          'Proposed optimization solution on existing algorithms for fetching data, significantly decreasing the loading time by 45%.',
          'Trained and mentored junior software engineers to support their professional growth, improving technical knowledge to enhance team efficiency by 15%.',
          'Executed website deployments seamlessly on Linux servers using FTP, resulting in zero downtime and maximizing application reliability.',
          'Reviewed team members’ code to ensure quality and compliance with project standards, reducing errors by 30% and enhancing the overall development flow.',
        ],
        position: {
          top: '-50px',
          left: '1em'
        },
        movement: 1
      }
    ],
    scrollY: 0
  });

  const cardMouseOverEvent = (e: React.MouseEvent): void => {
    e.preventDefault();

    const id = e.currentTarget.id.split("-")[1];
    changeHoverFunc(id);
  }

  const changeHoverFunc = (id: string): void => {
    const temp = [...state.elements];
    temp[Number(id)].hover = !temp[Number(id)].hover;

    setState(prev => ({ ...prev, elements: [...temp] }));
  }

  useMotionValueEvent(dVar, "change", (latest) => {
    setState(prev => ({ ...prev, scrollY: latest }));
  });

  useEffect(() => {
    for (let i = 0; i < state.elements.length; i++) {
      const lowLimit = Math.floor((i * (100 / state.elements.length)) + 1);
      const highLimit = Math.floor(((i + 2) * (100 / state.elements.length)));

      const val = Math.floor(dVar.get());

      const tmp = [...state.elements];
      if (val >= lowLimit && val <= highLimit) {
        tmp[i].show = true;
      } else {
        tmp[i].show = false;
      }

      setState(prev => ({ ...prev, elements: [...tmp] }));
    }
  }, [state.scrollY]);

  return (
    <section ref={loadingRef} className="min-h-[300vh] relative">
      <main className="flex flex-col gap-4 sticky top-0 pt-16">
        <div className="lg:min-h-screen flex flex-col lg:gap-20">
          <section ref={ref} className="relative mb-6 overflow-hidden">
            <motion.h1 animate={{ x: mm.get() }} className=" text-6xl lg:text-8xl self-center flex justify-center">
              <CoverAnimSubtitleText show={inView} cover={false} className="" dispText='Exp' textColor={theme.secondary} />
              <CoverAnimSubtitleText show={inView} delay={.1} className="z-50" cover={false} dispText='erience.' textColor={theme.primary} />
            </motion.h1>
            <motion.div style={{ background: theme.secondary, width: vWidth }} className="h-1 w-full absolute bottom-0 lg:bottom-1 mix-blend-screen"></motion.div>
          </section>
          <div className="w-full relative p-4 lg:p-4 min-h-[100vh]">
            <section className="flex flex-wrap lg:flex-nowrap items-start lg:justify-around h-full gap-12 w-full ">
              <AnimatePresence mode="popLayout">
                {
                  state.elements.map((el, idx) => {
                    const delay = .4;
                    return el.show && (
                      <div
                        key={idx}
                        className={`relative max-w-[100%] lg:max-w-[45%] ${sm(window.innerWidth) ? 'w-full' : ''} `}
                        style={{
                          top: sm(window.innerWidth) ? 0 : el.position.top,
                          left: sm(window.innerWidth) ? 0 : el.position.left
                        }}>
                        <motion.div
                          id={`card-` + idx}
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, y: sm(window.innerWidth) ? 0 : mm.get() * el.movement }}
                          exit={{ opacity: 0 }}
                          onClick={cardMouseOverEvent}
                          style={{ color: theme.cardText, background: theme.primary }}
                          className={`relative flex-[0_0_100%] lg:flex-[0_1_50%] z-50 top-0 left-0 flex p-4 flex-col ${el.hover || sm() ? 'max-w-none' : 'max-w-max'}`}
                        >
                          {!el.hover && <>
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: .2 }}
                              style={{ color: theme.secondary }}
                              className="text-xl font-normal flex flex-nowrap absolute top-[-1.1em]"
                            >
                              {el.title}
                              <div className="absolute"></div>
                            </motion.span>
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: .4 }}
                              className="text-sm cursor-pointer flex flex-nowrap items-center gap-4"
                            >{el.sub}<Eye className="cursor-pointer" size={24} color="white" /></motion.span>
                          </>}
                          {
                            el.hover && <>
                              <TypingText delay={delay} style={{ color: theme.secondary }} className={`text-2xl absolute top-[-1.1em]`} tx={el.title} />
                              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: delay + .2 }} className="text-lg flex flex-nowrap items-center gap-4" >{el.sub} <EyeSlash className="cursor-pointer" size={24} color="white" /></motion.span>
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: delay + .4 }} className="flex justify-center items-center gap-4 flex-wrap">
                                {
                                  el.logos.map((logo, idx) => {
                                    return (
                                      <div key={idx} className="flex justify-center items-center">
                                        <img className="max-w-32 h-auto pt-6" src={logo} />
                                      </div>
                                    )
                                  })
                                }
                              </motion.div>
                              <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: delay + .6 }} className="list-outside pt-6 px-4">
                                {
                                  el.tasks.map((t, idx) => {
                                    return (
                                      <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + idx * .03 }} className="list-disc mt-1 text-sm" key={idx}>
                                        <span>{t}</span>
                                      </motion.li>
                                    )
                                  })
                                }
                              </motion.ul>
                            </>
                          }
                        </motion.div>
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, y: sm(window.innerWidth) ? 0 : mm.get() * el.movement }}
                          exit={{ opacity: 0 }}
                          style={{ background: theme.secondary }}
                          className={`h-full z-0 w-full absolute top-1 ${sm(window.innerWidth) ? 'left-0' : 'left-1'}`} />
                      </div>
                    )
                  })
                }
              </AnimatePresence>
            </section>
          </div>
        </div>
      </main>
    </section>
  )
}