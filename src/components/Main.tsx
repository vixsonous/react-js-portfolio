import Slider from 'react-slick';
import { defaultAnim, delayTime, Props, text } from "../constants";
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Main({curMode}: Props) {    
    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const isPresent = useIsPresent();

    const [displayState, setDisplayState] = useState({
        webd: true,
        ui: false
    });

    useEffect(() => {
        const to = setTimeout(() => {
            setDisplayState(prev => ({...prev, webd: !displayState.webd}));
        },3000);

        return () => clearTimeout(to);
    },[displayState.webd]);

    return (
        <main className=" min-h-[100vh] flex flex-wrap flex-[1_0_100%] relative p-[20px] lg:pb-[100px] xl:pb-[0px] lg:p-[0px] max-w-[1160px] ">
            <section className="pt-[100px] flex-[1_0_50%]">
                <motion.h1 style={{color: curMode.primary, fontSize: '10em'}} className={`w-[100%] lg:w-[70%] flex gap-[5px]`} initial="hidden" animate="visible">{`Hello.`.split("").map((char, idx) => <motion.span transition={{ delay:  + .5 + idx * 0.05 }} key={idx} variants={defaultAnim}>{char}</motion.span>)}</motion.h1>
                <motion.h1 className={`w-[100%] lg:w-[70%] text-[${text.body}] w-[100%] flex flex-wrap`}>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a eligendi voluptatibus dolores tenetur atque repudiandae aliquid eos, nemo suscipit, harum incidunt rerum in magni eum exercitationem animi! Suscipit, fugiat.`.split("").map((char, idx) => <motion.span className='relative' transition={{ delay:  + .5 + idx * 0.005 }} key={idx} initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}}>{char === " " ? <span>&nbsp;</span> : char}</motion.span>)}</motion.h1>
            </section>
            <section className="pt-[100px] flex-[1_0_50%] flex justify-between flex-col items-center">
                <div className="flex justify-start flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0}} 
                        animate={{ opacity: 1}} 
                        transition={{duration: 2}} 
                    >
                        
                        <motion.figure initial={{x: 0}} animate={{x: -50}} transition={{duration: 150, repeat: Infinity, repeatType: "reverse"}} className="progress relative">
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
                                style={{stroke: curMode.accentColor}}
                                initial={{pathLength: 0}}
                                animate={{pathLength: 1.1}}
                                transition={{
                                    duration: 2,
                                }}
                                />
                            </svg>
                        </motion.figure>
                        {/* <motion.div initial={{x: 0}} animate={{x: -50}} transition={{delay: ,duration: 150, repeat: Infinity, repeatType: "reverse"}} className="w-[260px] h-[260px] bg-[#000] rounded-[260px] z-[99]" /> */}
                    </motion.div>
                    <motion.h1 initial={{x: 0}} animate={{x: 50}} transition={{duration: 99, repeat: Infinity, repeatType: "reverse"}} style={{color: curMode.primary}} className={` text-[${text.logo}] font-light text-center`}>
                        <motion.span style={{fontSize: text.xl}} initial="hidden" animate="visible">{"Victor Chiong".split("").map((char, idx) => <motion.span key={idx} transition={{ delay:  + idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.span>
                    </motion.h1>
                    <motion.h1 initial={{x: 0}} animate={{x: -50}} transition={{duration: 99, repeat: Infinity, repeatType: "reverse"}} style={{color: curMode.primary}} className={`text-[${text.small}] font-light text-shadow`}>
                        <AnimatePresence>
                            { displayState.webd && <motion.span exit={{opacity: 0}} style={{fontSize: text.subtitle}} initial="hidden" animate="visible">{"Web Developer".split("").map((char, idx) => <motion.span key={idx} transition={{ delay:  + .5 + idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.span>}
                            { displayState.ui && <motion.span exit={{opacity: 0}} style={{fontSize: text.subtitle}} initial="hidden" animate="visible">{"UI".split("").map((char, idx) => <motion.span key={idx} transition={{ delay:  + .5 + idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.span>}
                            <motion.div
                                initial={{ scaleX: 1 }}
                                animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
                                exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
                                style={{ originX: isPresent ? 0 : 1 , background: curMode.primary}}
                                className="fixed top-0 left-0 right-0 bottom-0 z-[2]"
                            />
                        </AnimatePresence>
                    </motion.h1>
                </div>
            </section>
        </main>
    )
}   