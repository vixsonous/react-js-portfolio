
import {  motion, useIsPresent, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import CoverAnimSubtitleText from './text/CoverAnimSubtitleText';
import { useAppSelector } from '../store';
import Skills from "./Skills";
import ExperienceMain from "./ExperienceMain";
import Certifications from "./Certifications";
import MovingText from './text/MovingText';

export default function Main() {    
    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    const theme = useAppSelector(state => state.theme.theme);

    const [isLoaded, setIsLoaded] = useState(false);
    const isPresent = useIsPresent();

    const [displayState, setDisplayState] = useState([
        {show: false, text: "Web Developer"},
        {show: false, text: "UI/UX Design"},
        {show: false, text: "Fullstack Engineer"},
        {show: false, text: "Frontend Engineer"},
        {show: false, text: "Backend Engineer"},
    ]);

    const [curDisplay, setCurDisplay] = useState(0);

    const hideSubText = (idx: number) => {
        const temp = [...displayState];
        const obj = temp[idx];
        obj.show = !obj.show;
        temp[idx] = obj;
        setDisplayState(temp);
    }

    useEffect(() => {
        const to = setInterval(() => {
            const idx = curDisplay;
            hideSubText(idx);
            setTimeout(() => {
                hideSubText(idx);
                setCurDisplay(prev => (prev + 1) === displayState.length ? 0 : prev + 1);
            },4000);
        },4500);

        return () => clearInterval(to);
    },[displayState]);

    const mainRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({target: mainRef});

    const [state, setState] = useState({
        scroll: 0
    });

    const xx = useTransform(scrollYProgress, [0,1], [0,20]);

    useMotionValueEvent(xx, "change", (latest) => {
        setState(prev => ({...prev, scroll: latest}));
    });

    return (
            <React.Fragment>
                <main  className=" min-h-[100vh] flex flex-wrap flex-[1_0_100%] relative p-[20px] lg:pb-[100px] xl:pb-[0px] lg:p-[0px] items-center justify-center font-light">
                    <section ref={mainRef} className="flex flex-wrap max-w-[1160px]">
                        <section className="pt-[100px] flex-[1_0_50%] flex flex-col  ">
                            <motion.h1 
                                style={{color: theme.primary}} 
                                className={`w-[100%] flex gap-[5px] relative flex-col`} 
                                initial="hidden"
                                animate="visible"
                            >
                                <MovingText 
                                    text="Victor" 
                                    className='font-light text-9xl' 
                                    style={{color: theme.secondary}} 
                                    x={state.scroll}
                                />
                                <MovingText 
                                    text="Chiong" 
                                    className='font-light text-9xl' 
                                    style={{color: theme.primary}} 
                                    delay={.4}
                                    x={state.scroll * 2}
                                />
                            </motion.h1>
                            
                            <motion.h1
                                style={{color: theme.primary}}
                                className={`flex gap-[5px] relative text-xl`}
                                initial="hidden"
                                animate="visible"
                            >
                                <CoverAnimSubtitleText className="" delay={.6} cover={false} dispText={"I am "} fontSizeClass="text-base" textColor={theme.primary}/>
                                <CoverAnimSubtitleText className="" show={displayState[curDisplay].show} dispText={displayState[curDisplay].text} fontSizeClass="text-base" textColor={theme.primary}/>
                            </motion.h1>

                            <CoverAnimSubtitleText className="" delay={.8} cover={false} dispText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a eligendi voluptatibus dolores tenetur atque repudiandae aliquid eos, nemo suscipit, harum incidunt rerum in magni eum exercitationem animi! Suscipit, fugiat."} fontSizeClass="text-base" textColor={theme.primary}/>

                        </section>
                        <section className="pt-[100px] flex-[1_0_50%] flex justify-between flex-col items-center">
                            <div className="flex justify-start flex-col gap-[15px] items-center">
                                <motion.div
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    transition={{duration: 2}}
                                >
                                    <figure className="progress relative">
                                        <svg className='w-[260px] h-[260px] rounded-[260px] z-[99]' id="progress" width="260px" height="260px" viewBox="0 0 100 100">
                                            <defs>
                                                <clipPath id="circleClip">
                                                    <circle cx="50" cy="50" r="49" />
                                                </clipPath>
                                            </defs>
                                            <foreignObject width="100%"
                                                height="100%"
                                                clipPath="url(#circleClip)"
                                                className='relative'
                                                >
                                                <motion.div
                                                    initial={false}
                                                    animate={
                                                        isLoaded && isPresent
                                                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                                                    }
                                                    transition={{ duration: 1, delay:  + 2 }}
                                                    viewport={{once: true}}
                                                    className='relative w-[100px] h-[100px]'
                                                    >
                                                        <img src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg" 
                                                            className={`img-circle absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover mask-image`}
                                                            onLoad={() => setIsLoaded(true)}
                                                        />
                                                </motion.div>
                                            </foreignObject>
                                            <motion.circle
                                                cx="50"
                                                cy="50"
                                                r="49"
                                                fill="transparent"
                                                strokeWidth="1"
                                                pathLength="0"
                                                style={{stroke: theme.primary}}
                                                initial={{pathLength: 0}}
                                                animate={{pathLength: 1.1}}
                                                transition={{
                                                    duration: 2,
                                                }}
                                            />
                                        </svg>
                                    </figure>
                                </motion.div>
                            </div>
                        </section>
                    </section>
                    <section className="flex-[1_0_100%] min-h-[150vh]">
                        <Skills />
                    </section>
                    <section className="flex-[1_0_100%] min-h-[150vh]">
                        <ExperienceMain />
                    </section>
                    <section className="flex-[1_0_100%] min-h-[150vh]">
                        <Certifications />
                    </section>
                </main>
            </React.Fragment>
    )
}   