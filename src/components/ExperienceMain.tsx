import React, { useEffect, useRef, useState } from "react";
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
                hover: false,
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
                hover: false,
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
                hover: false,
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
    });

    const cardMouseOverEvent = (e:React.MouseEvent) => {
        e.preventDefault();

        const id = e.currentTarget.id.split("-")[1];
        changeHoverFunc(id);
    }

    const changeHoverFunc = (id: String) => {
        const temp = [...state.elements];
        temp[Number(id)].hover = !temp[Number(id)].hover;

        setState(prev => ({...prev, elements: [...temp]}));
    }

    useMotionValueEvent(dVar, "change", (latest) => {
        setState(prev => ({...prev, scrollY: latest}));
    });

    useEffect(() => {
        for(let i = 0; i < state.elements.length; i++) {
            const lowLimit = Math.floor((i * (100 / state.elements.length)) + 1);
            const highLimit = Math.floor(((i + 2) * (100 / state.elements.length)));

            const val = Math.floor(dVar.get());

            const tmp = [...state.elements];
            if(val >= lowLimit && val <= highLimit ) {
                tmp[i].show = true;
                tmp[i].hover = false;
            } else {
                tmp[i].show = false;
            }

            setState(prev => ({...prev, elements: [...tmp]}));
        }
    },[state.scrollY]);

    return (
        <section ref={loadingRef} className="min-h-[400vh] relative ">
            <main className="flex flex-col gap-4 sticky top-0">
                <div className="min-h-[100vh] py-[20px] flex flex-col gap-20">
                    <section ref={ref} className="relative">
                        <h1 className="self-center flex justify-center">
                            <CoverAnimSubtitleText show={ inView} cover={false} className="mix-blend-difference" fontSizeClass="text-8xl" dispText='Exp' textColor={theme.secondary}/>
                            <CoverAnimSubtitleText show={ inView} delay={.1} className="z-50" cover={false} fontSizeClass="text-8xl" dispText='erience.' textColor={theme.primary}/>
                        </h1>
                        <motion.div style={{background: theme.secondary, width: vWidth}} className="h-full w-full absolute top-2 mix-blend-screen"></motion.div>
                    </section>
                    <div className="w-full relative p-4">
                        <section className="flex flex-wrap lg:flex-nowrap items-start justify-around h-full gap-4 w-full">
                            <AnimatePresence mode="popLayout">
                            {
                                state.elements.map( (el, idx) => {

                                    const delay = .4;
                                    return el.show && (
                                        <motion.div 
                                            id={`card-` + idx}
                                            key={idx}
                                            layout
                                            initial={{opacity: 0}} 
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            onClick={cardMouseOverEvent}
                                            style={{color: theme.cardText, background: theme.card}}
                                            className={`relative flex-[0_1_100%] lg:flex-[0_1_50%] flex p-4 flex-col shadow-lg ${el.hover ? 'max-w-none' : 'max-w-max'}`}
                                        >
                                            {/* <motion.div style={{background: theme.secondary}} className="h-[4px] w-full absolute top-0 left-0 mix-blend-screen"></motion.div> */}
                                            {!el.hover && <>
                                                <motion.span 
                                                    initial={{opacity: 0}} 
                                                    animate={{opacity: 1}} 
                                                    exit={{opacity: 0}} 
                                                    transition={{delay: .2}} 
                                                    style={{color: theme.secondary}}
                                                    className="text-xl font-normal flex flex-nowrap absolute top-[-1.1em]" 
                                                >
                                                    {el.title}
                                                    <div className="absolute"></div>
                                                </motion.span>
                                                <motion.span 
                                                    initial={{opacity: 0}} 
                                                    animate={{opacity: 1}} 
                                                    exit={{opacity: 0}} 
                                                    transition={{delay: .4}} 
                                                    className="text-xs flex flex-nowrap" 
                                                >{el.sub}</motion.span>
                                            </>}
                                            {
                                                el.hover && <>
                                                <TypingText delay={delay} style={{color: theme.secondary}} className={`text-2xl absolute top-[-1.1em]`} tx={el.title}/>
                                                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: delay + .2}} className="text-lg flex flex-nowrap" >{el.sub}</motion.span>
                                                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: delay + .4}} className="flex gap-4">
                                                    {
                                                        el.logos.map( (logo, idx) => {
                                                            return (
                                                                <div key={idx} className="flex justify-center items-center">
                                                                    <img className="max-w-32 h-auto pt-6" src={logo}/>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    </motion.div>
                                                    <motion.ul initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: delay + .6}} className="list-inside pt-6">
                                                        {
                                                            el.tasks.map( (t, idx) => {
                                                                return (
                                                                    <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: delay + idx * .03}} className="list-disc text-sm" key={idx}>
                                                                        <span>{t}</span>
                                                                    </motion.li>
                                                                )
                                                            })
                                                        }
                                                    </motion.ul>
                                                </>
                                            }
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