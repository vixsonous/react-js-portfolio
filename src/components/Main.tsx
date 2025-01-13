
import {  motion, /*useIsPresent,*/ useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import CoverAnimSubtitleText from './text/CoverAnimSubtitleText';
import { useAppSelector } from '../store';
import Skills from "./Skills";
import ExperienceMain from "./ExperienceMain";
import MovingText from './text/MovingText';
import ProjectsMain from './ProjectsMain';
import OutlinedText from './text/OutlinedText';
import Footer from './Footer';
import { sm } from '../constants';

export default function Main() {    
    // const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    // const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    const theme = useAppSelector(state => state.theme.theme);

    // const [isLoaded, setIsLoaded] = useState(false);
    // const isPresent = useIsPresent();

    const [displayState, setDisplayState] = useState([
        {show: false, text: "Web Developer"},
        {show: false, text: "UI/UX Designer"},
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
        scrollMainSection: 0,
    });
    const xx = useTransform(scrollYProgress, [0,1], [0,20]);

    useMotionValueEvent(xx, "change", (latest) => {
        setState(prev => ({...prev, scrollMainSection: latest}));
    });

    return (
            <React.Fragment>
                <main className=" min-h-[100vh] flex flex-wrap flex-[1_0_100%] relative lg:pb-[100px] xl:pb-[0px] lg:p-[0px] items-center justify-center font-light">
                    <section ref={mainRef} className="flex flex-wrap max-w-screen-xl pt-16 relative min-h-[125vh]">
                        <section className="pt-4 lg:pt-24 p-4 flex-[1_0_100%] lg:flex-[1_0_50%] flex flex-col">
                            <motion.h1 
                                style={{color: theme.primary}} 
                                className={`w-[100%] flex gap-[5px] relative flex-col`} 
                                initial="hidden"
                                animate="visible"
                            >
                                <MovingText 
                                    text="Victor" 
                                    className='font-light text-6xl lg:text-9xl max-w-max' 
                                    style={{color: theme.secondary}} 
                                    x={state.scrollMainSection}
                                />
                                <MovingText 
                                    text="Chiong" 
                                    className='font-light text-6xl lg:text-9xl max-w-max' 
                                    style={{color: theme.primary}} 
                                    delay={.4}
                                    x={state.scrollMainSection * 2}
                                />
                                {/* <motion.div
                                    initial={false}
                                    animate={
                                        isLoaded && isPresent
                                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                                    }
                                    transition={{ duration: 1, delay:  + 2 }}
                                    viewport={{once: true}}
                                    className='lg:absolute top-0 left-0 lg:top-16 lg:left-96 w-full'
                                    >
                                        <img src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg" 
                                            className={`img-circle top-0 left-0 right-0 bottom-0 grayscale w-full h-full object-cover mask-image`}
                                            onLoad={() => setIsLoaded(true)}
                                        />
                                </motion.div> */}
                            </motion.h1>
                            
                            <motion.h1
                                style={{color: theme.primary}}
                                className={`flex gap-[5px] relative text-xl`}
                                initial="hidden"
                                animate="visible"
                            >
                                <CoverAnimSubtitleText className="" delay={.6} cover={false} dispText={"Hello! I am a "} fontSizeClass="text-base" textColor={theme.primary}/>
                                <CoverAnimSubtitleText className="" show={displayState[curDisplay].show} dispText={`${displayState[curDisplay].text}.`} fontSizeClass="text-base" textColor={theme.primary}/>
                                
                            </motion.h1>

                            <CoverAnimSubtitleText className="" delay={.8} cover={false} dispText={"Software Engineer with experience in web development, programming, and mentoring junior developers. Skilled in creating web applications using diverse technologies, guiding team members, and working collaboratively. Focused on improving technical expertise and delivering practical solutions through continuous learning."} fontSizeClass="text-base" textColor={theme.primary}/>

                        </section>
                        <section className={`relative flex-[1_0_50%] ${sm() ? 'hidden' : 'flex'} justify-between flex-col items-center`}>
                            <div className=" w-full h-full flex justify-start flex-col gap-[15px] items-center">
                                <motion.div className='lg:absolute top-16 w-full lg:right-64 lg:flex max-w-max' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: 'easeOut'}}>
                                    <OutlinedText text='Web Developer' className='text-2xl lg:text-6xl lg:absolute lg:bottom-16 lg:right-32 overflow-visible max-w-max max-h-max' stroke={theme.secondary} strokeWidth='1px'/>
                                    <OutlinedText text='Software Engineer' className='text-2xl lg:text-6xl overflow-visible max-w-max max-h-max' stroke={theme.primary} strokeWidth='1px'/>
                                </motion.div>
                            </div>
                        </section>
                    </section>
                    <section className="flex-[1_0_100%] min-h-[125vh]">
                        <Skills />
                    </section>
                    <section className="flex-[1_0_100%] min-h-[125vh]">
                        <ExperienceMain />
                    </section>
                    <section className='flex-[1_0_100%]'>
                        <ProjectsMain />
                    </section>
                    <section>
                        <Footer />
                    </section>
                </main>
            </React.Fragment>
    )
}   