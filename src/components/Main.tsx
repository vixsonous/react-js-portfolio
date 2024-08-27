import Slider from 'react-slick';
import { defaultAnim, delayTime, Props, text } from "../constants";
import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Main({curMode}: Props) {

    const sliderBallClass = " text-[#fff] text-center h-[50px] z-[99] relative before:w-[15px] before:rounded-[15px] before:h-[15px] before:bg-[#D9D9D9] before:content-[''] before:top-[30px] before:left-[45%] before:absolute";

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })
    
    return (
        <main className="min-h-[100vh] flex flex-wrap flex-[1_0_100%] relative p-[20px] pb-[100px] lg:pb-[100px] xl:pb-[0px] lg:p-[0px] max-w-[1160px] ">
            <section className="flex-[1_0_50%] flex justify-between flex-col items-center">
                <div className="flex justify-start flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0}} 
                        animate={{ opacity: 1}} 
                        transition={{delay: delayTime.main, duration: 2}} 
                    >
                        <motion.figure initial={{x: 0}} animate={{x: -50}} transition={{delay: delayTime.main,duration: 150, repeat: Infinity, repeatType: "reverse"}} className="progress relative">
                            <svg className='w-[260px] h-[260px] rounded-[260px] z-[99]' id="progress" width="260px" height="260px" viewBox="0 0 100 100">
                                <defs>
                                    <clipPath id="circleClip">
                                        <circle cx="50" cy="50" r="49" />
                                    </clipPath>
                                </defs>
                                <motion.image href="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg" 
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{
                                        duration: 2,
                                        delay: delayTime.main + 2
                                    }}
                                    width="100"
                                    height="100"
                                    className={`img-circle`}
                                    clipPath="url(#circleClip)"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                                <motion.circle
                                cx="50"
                                cy="50"
                                r="49"
                                fill="transparent"
                                strokeWidth="1"
                                pathLength="0"
                                style={{stroke: curMode.secondary}}
                                initial={{pathLength: 0}}
                                animate={{pathLength: 1.1}}
                                transition={{
                                    duration: 2,
                                    delay: delayTime.main
                                }}
                                />
                            </svg>
                        </motion.figure>
                        {/* <motion.div initial={{x: 0}} animate={{x: -50}} transition={{delay: delayTime.main,duration: 150, repeat: Infinity, repeatType: "reverse"}} className="w-[260px] h-[260px] bg-[#000] rounded-[260px] z-[99]" /> */}
                    </motion.div>
                    <motion.h1 initial={{x: 0}} animate={{x: 50}} transition={{duration: 99, repeat: Infinity, repeatType: "reverse"}} style={{color: '#fff'}} className={`mix-blend-difference text-[${text.logo}] font-light text-center`}>
                        <motion.h1 initial="hidden" animate="visible">{"Victor Chiong".split("").map((char, idx) => <motion.span transition={{ delay: delayTime.main + idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1>
                    </motion.h1>
                    <motion.h1 initial={{x: 0}} animate={{x: -50}} transition={{duration: 99, repeat: Infinity, repeatType: "reverse"}} style={{color: curMode.secondary}} className={`text-[${text.small}] font-light text-shadow`}>
                        <motion.h1 initial="hidden" animate="visible">{"Web Developer".split("").map((char, idx) => <motion.span transition={{ delay: delayTime.main + .5 + idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1>
                    </motion.h1>
                </div>
            </section>
            <section className="flex-[1_0_50%] flex flex-col gap-[2em]">
                <motion.h1 className={`w-[100%] lg:w-[70%] text-[${text.body}] mix-blend-difference text-[#fff]`} initial="hidden" animate="visible">{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a eligendi voluptatibus dolores tenetur atque 
                    repudiandae aliquid eos, nemo suscipit, harum incidunt rerum in magni eum exercitationem animi! Suscipit, fugiat.`.split("").map((char, idx) => <motion.span transition={{ delay: delayTime.main + .5 + idx * 0.005 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1>
            </section>
            <section className="flex-[1_0_100%] flex flex-col gap-[2em]">
                <div className="mix-blend-difference relative z-[999] w-[80vw] md:w-[100vw] max-w-[1160px] box-border py-[100px] lg:py-0 lg:bottom-[100px]">
                    <motion.div initial={{width: "0%"}} animate={{width: "100%"}} transition={{duration: .5, delay: delayTime.main + .9}} className="border-[1px] border-b-[#D9D9D9] content-[''] w-[100%] top-[36px] absolute" />
                    <Slider dots={false} arrows={false} autoplaySpeed={3000} speed={2000} autoplay slidesToShow={5} slidesToScroll={1} className="relative z-[0]">
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: delayTime.main + .5 + 0}} className={sliderBallClass}>HTML</motion.span>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: delayTime.main + .5 + .3}} className={sliderBallClass}>CSS</motion.span>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: delayTime.main + .5 + .6}} className={sliderBallClass}>JavaScript</motion.span>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: delayTime.main + .5 + .9}} className={sliderBallClass}>TypeScript</motion.span>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: delayTime.main + .5 + 1.2}} className={sliderBallClass}>Java</motion.span>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: delayTime.main + .5 + 1.5}} className={sliderBallClass}>PHP</motion.span>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: delayTime.main + .5 + 1.5}} className={sliderBallClass}>C++</motion.span>
                        <span className={sliderBallClass}>Python</span>
                        <span className={sliderBallClass}>React JS</span>
                        <span className={sliderBallClass}>Next JS</span>
                        <span className={sliderBallClass}>Node JS</span>
                        <span className={sliderBallClass}>Vue JS</span>
                        <span className={sliderBallClass}>MySQL</span>
                        <span className={sliderBallClass}>Oracle</span>
                        <span className={sliderBallClass}>Posgres</span>
                        <span className={sliderBallClass}>Prisma</span>
                        <span className={sliderBallClass}>Kysely</span>
                        <span className={sliderBallClass}>Laravel</span>
                        <span className={sliderBallClass}>Git</span>
                        <span className={sliderBallClass}>AWS</span>
                    </Slider>
                </div>
            </section>
        </main>
    )
}   