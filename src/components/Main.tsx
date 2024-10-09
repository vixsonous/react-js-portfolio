
import { text } from "../constants";
import {  motion, useIsPresent } from 'framer-motion';
import { useEffect, useState } from 'react';
import CoverAnimSubtitleText from './text/CoverAnimSubtitleText';
import { useAppSelector } from '../store';
import SmoothScroll from "./SmoothScroll";
import Skills from "./Skills";
import TypingText from "./text/TypingText";

export default function Main() {    
    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    const theme = useAppSelector(state => state.theme.theme);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
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

    return (
        <SmoothScroll>
            <main className=" min-h-[100vh] flex flex-wrap flex-[1_0_100%] relative p-[20px] lg:pb-[100px] xl:pb-[0px] lg:p-[0px] max-w-[1160px] ">
                <section className="pt-[100px] min-h-[100vh] flex-[1_0_50%]">
                    <motion.h1 
                        style={{color: theme.primary, fontSize: '10em'}} 
                        className={`w-[100%] lg:w-[70%] flex gap-[5px] overflow-hidden relative`} 
                        initial="hidden"
                        animate="visible"
                    >
                        <CoverAnimSubtitleText show={isPresent} dispText='Hello!' textColor={theme.primary}/>
                    </motion.h1>
                    <TypingText tx={"I am "} delay={.4}/>
                    <motion.h1 
                        style={{color: theme.primary, fontSize: '1em'}} 
                        className={`w-[100%] lg:w-[70%] flex gap-[5px] overflow-hidden relative`} 
                        initial="hidden"
                        animate="visible"
                    >
                    <CoverAnimSubtitleText show={isPresent} dispText="Victor Chiong" textSize={text.logo} textColor={theme.primary} delay={.5}/>
                    </motion.h1>
                    <motion.h1 
                        className={`text-[${text.body}] w-[100%] flex flex-wrap`}
                    >
                        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a eligendi voluptatibus dolores tenetur atque repudiandae aliquid eos, nemo suscipit, harum incidunt rerum in magni eum exercitationem animi! Suscipit, fugiat.`
                        .split("")
                        .map((char, idx) => 
                        <motion.span 
                            className='relative' 
                            transition={{ delay:  + .5 + idx * 0.005 }} 
                            key={idx} 
                            initial={{opacity: 0, y: 5}} 
                            animate={{opacity: 1, y: 0}}>
                                {char === " " ? <span>&nbsp;</span> : char}
                        </motion.span>)}
                    </motion.h1>
                </section>
                <section className="pt-[100px] min-h-[100vh] flex-[1_0_50%] flex justify-between flex-col items-center">
                    <div className="flex justify-start flex-col gap-[30px] items-center">
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
                                                isLoaded && isInView
                                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                                            }
                                            transition={{ duration: 1, delay:  + 2 }}
                                            viewport={{once: true}}
                                            onViewportEnter={() => setIsInView(true)}
                                            className='relative w-[100px] h-[100px]'
                                            >
                                                <img src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg" 
                                                    className={`img-circle absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover`}
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
                                        style={{stroke: theme.accentColor}}
                                        initial={{pathLength: 0}}
                                        animate={{pathLength: 1.1}}
                                        transition={{
                                            duration: 2,
                                        }}
                                    />
                                </svg>
                            </figure>
                        </motion.div>
                        {displayState.map( (el, idx) => {
                            return (
                                <CoverAnimSubtitleText key={idx} show={el.show} dispText={el.text} textSize={text.logo} textColor={theme.primary}/>
                            )
                        })}
                    </div>
                </section>
                <section className="flex-[1_0_100%] min-h-[100vh]">
                    <Skills />
                </section>
            </main>
        </SmoothScroll>
    )
}   