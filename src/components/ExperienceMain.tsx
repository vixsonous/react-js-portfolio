import React, { useEffect, useRef, useState } from "react";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useInView, motion, useScroll, useTransform, useMotionValueEvent, useSpring, AnimatePresence } from "framer-motion";
import { text } from "../constants";
import { useAppSelector } from "../store";

export default function ExperienceMain() {

    const theme = useAppSelector(state => state.theme.theme);

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
                        <h1 className="self-center flex flex-col ">
                            <CoverAnimSubtitleText show={ inView} textSize={text.logo} dispText='Experience.' textColor={theme.primary}/>
                        </h1>
                    </section>
                    <div className="w-full relative">
                        <motion.div style={{background: theme.accentColor, width: vWidth}} className="h-[1px] w-full relative top-[-10px]"></motion.div>
                        <section className="flex h-full gap-4 w-full ">
                            <AnimatePresence mode="popLayout">
                            {
                                state.elements.map( (el, idx) => {
                                    // const x = idx * ((100 / state.elements.length) )
                                    return el.show && (
                                        <motion.div 
                                            key={idx}
                                            layout
                                            initial={{scale: 0}} 
                                            animate={{scale: 1}} 
                                            exit={{scale: 0}}
                                            style={{background: theme.card}}
                                            className="flex-[0_1_50%] flex p-[15px] flex-col shadow-md"
                                        >
                                            <CoverAnimSubtitleText delay={.5} show={el.show} textSize={text.title} dispText={el.title} textColor={theme.primary}/>
                                            <span style={{color: theme.cardText}} className="text-lg">{el.sub}</span>
                                            <ul className="list-inside mt-8">
                                                {
                                                    el.tasks.map( (t, idx) => {
                                                        return (
                                                            <li style={{color: theme.cardText}} className="list-disc text-base" key={idx}>{t}</li>
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