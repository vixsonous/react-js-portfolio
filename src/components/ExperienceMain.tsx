import { useEffect, useRef, useState } from "react";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useInView, motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { text } from "../constants";
import { getTheme } from "./hooks/theme";
import rakuten from '../assets/rakuten.png';
import tig from '../assets/tig.png';
import seedtech from '../assets/seedtech.png';
import TypingText from "./text/TypingText";

export default function ExperienceMain() {

    const theme = getTheme();

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true});

    const loadingRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: loadingRef,
    });
    const vWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const dVar = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const [state, setState] = useState({
        elements: [
            {
                show: false, 
                title: 'Intern Full Stack Developer.', 
                sub: 'TIG Designs and Solutions Cebu City / May 2018 – January 2019',
                logos: [
                    tig
                ],
                tasks: [
                    'Conducted meetings and discussion with the project manager',
                    'Provide suggestions regarding UI related implementations',
                    'Designed, discussed and implemented a react clone based on an already existing project.',
                    'Provide solutions to the problems on the existing project.',
                    'Developed and implemented additional improvement features on the existing project.'
                ]
            },
            {
                show: false, 
                title: 'Freelance Developer.', 
                sub: 'Yazaki Real Estate / July 2021 – December 2022',
                logos: [],
                tasks: [
                    'Conducted meetings and discussion with the project manager',
                    'Provide suggestions regarding UI related implementations',
                    'Designed, discussed and implemented a react clone based on an already existing project.',
                    'Provide solutions to the problems on the existing project.',
                    'Developed and implemented additional improvement features on the existing project.'
                ]
            },
            {
                show: false, 
                title: 'Mid-Level Software Engineer.', 
                sub: 'Seed Tech Philippines / Rakuten / September 2021 – Present',
                logos: [
                    seedtech,
                    rakuten
                ],
                tasks: [
                    'Conducted meetings and discussion with the project manager',
                    'Provide suggestions regarding UI related implementations',
                    'Designed, discussed and implemented a react clone based on an already existing project.',
                    'Provide solutions to the problems on the existing project.',
                    'Provide solutions to the problems on the existing project.',
                    'Provide solutions to the problems on the existing project.',
                    'Provide solutions to the problems on the existing project.',
                    'Developed and implemented additional improvement features on the existing project.'
                ]
            }
        ],
        scrollY: 0
    })

    useMotionValueEvent(dVar, "change", (latest) => {
        setState(prev => ({...prev, scrollY: latest}));
    });

    useEffect(() => {
        for(let i = 0; i < state.elements.length; i++) {
            const lowLimit = (i * (100 / state.elements.length)) + 1;
            const highLimit = ((i + 2) * (100 / state.elements.length));

            const tmp = [...state.elements];
            if(dVar.get() >= lowLimit && dVar.get() <= highLimit ) {
                tmp[i].show = true;
            } else {
                tmp[i].show = false;
            }

            setState(prev => ({...prev, elements: [...tmp]}));
        }
    },[state.scrollY]);

    return (
        <section ref={loadingRef} className="min-h-[400vh] relative">
            <main className="flex flex-col gap-4 sticky top-0">
                <div className="min-h-[100vh] py-[20px] flex flex-col gap-20">
                    <section ref={ref}>
                        <h1 className="self-center flex flex-col">
                            <CoverAnimSubtitleText show={ inView} fontSizeClass="text-9xl" dispText='Experience.' textColor={theme.primary}/>
                        </h1>
                    </section>
                    <div className="w-full relative">
                        <motion.div style={{background: theme.accentColor, width: vWidth}} className="h-[2px] w-full relative top-[-12px]"></motion.div>
                        <section className="flex flex-wrap lg:flex-nowrap items-start h-full gap-4 w-full">
                            <AnimatePresence mode="popLayout">
                            {
                                state.elements.map( (el, idx) => {
                                    return el.show && (
                                        <motion.div 
                                            key={idx}
                                            layout
                                            initial={{opacity: 0}} 
                                            animate={{opacity: 1}} 
                                            exit={{opacity: 0}}
                                            style={{color: theme.primary}}
                                            className="flex-[0_1_100%] lg:flex-[0_1_50%] flex p-8 flex-col shadow-lg"
                                        >
                                            <TypingText className="text-3xl" tx={el.title} style={{color: theme.primary}}/>
                                            <span className="text-lg flex flex-nowrap" style={{color: theme.primary}} >{el.sub}</span>
                                            <div className="flex gap-4">
                                            {
                                                el.logos.map( (logo, idx) => {
                                                    return (
                                                        <div key={idx} className="flex justify-center items-center">
                                                            <img className="max-w-32 h-auto pt-6" src={logo}/>
                                                        </div>
                                                    )
                                                })
                                            }
                                            </div>
                                            <ul className="list-inside pt-6">
                                                {
                                                    el.tasks.map( (t, idx) => {
                                                        return (
                                                            <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: idx * .1}} className="list-disc text-base" key={idx}>
                                                                {/* <TypingText delay={(idx * .5)} tx={`- ${t}`} className="text-base"/> */}
                                                                <span>{t}</span>
                                                            </motion.li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </motion.div>
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