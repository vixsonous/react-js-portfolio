import { useInView, motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useAppSelector } from "../store";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import React, { useRef, useState } from "react";
import { sm, text } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {git, docker, aws, nextjs, nodejs, laravel, scss, bootstrap, html, css3, jquery, js, react, tech, trend, uiux} from "./svg/svg.paths";
import SVG from "./svg/SVG";

export default function Skills() {

    const theme = useAppSelector(state => state.theme.theme);

    const [state, setState] = useState({
        skills: [
            <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
            <SVG key={2} width={40} height={40} viewBox="0 0 48 48">{css3.svg}</SVG>,
            <SVG key={3} width={40} height={40} viewBox="0 0 50 50">{jquery.svg}</SVG>,
            <SVG key={4} width={40} height={40} viewBox="0 0 48 48">{js.svg}</SVG>,
            <SVG key={5} width={40} height={40} viewBox="0 0 100 100">{react.svg}</SVG>,
            <SVG key={6} width={40} height={40} viewBox="0 0 48 48">{bootstrap.svg}</SVG>,
            <SVG key={7} width={40} height={40} viewBox="0 0 32 32">{scss.svg}</SVG>,
            <SVG key={8} width={40} height={40} viewBox="0 0 394.00000000000006 79.433">{nextjs.svg}</SVG>,
            <SVG key={9} width={40} height={40} viewBox="0 0 256 282">{nodejs.svg}</SVG>,
            <SVG key={10} width={40} height={40} viewBox="0 -.11376601 49.74245785 51.31690859">{laravel.svg}</SVG>,
            <SVG key={11} width={40} height={40} viewBox="0 0 256 108">{git.svg}</SVG>,
            <SVG key={12} width={40} height={40} viewBox="-.557 117.607 598.543 423.631">{docker.svg}</SVG>,
            <SVG key={13} width={40} height={40} viewBox="-.1 1.1 304.9 179.8">{aws.svg}</SVG>,
        ],
        x: 0,
    })

    const ref = useRef<HTMLElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLElement>(null);
    const inView = useInView(sm() ? mobileRef : ref, { once: true});

    const { scrollYProgress } = useScroll({target: scrollRef});

    const x = useTransform(scrollYProgress, [0, 1], [0, 20]);

    useMotionValueEvent(x, "change", (latest) => {
        setState(prev => ({...prev, x: latest}));
    });

    return (
        <React.Fragment>
            <main ref={scrollRef} className="relative flex flex-col gap-[10vh] pt-16 lg:pt-64">
                <div className="min-h-[100vh] flex flex-col gap-[10vh]">
                    <section className="px-4">
                        <h1 className="self-center flex text-6xl lg:text-8xl flex-col top-36 lg:absolute left-72 z-50 pt-0 lg:pt-64">
                            <CoverAnimSubtitleText show={ inView} cover={false} dispText='Design and' textColor={theme.secondary}/>
                            <div className="flex ">
                                <CoverAnimSubtitleText delay={.2} show={ inView} cover={false} dispText='In' textColor={theme.secondary}/>
                                <CoverAnimSubtitleText delay={.2} show={ inView} cover={false} dispText='novation.' textColor={theme.primary}/>
                            </div>
                        </h1>
                    </section>
                    <section className="flex flex-[1_0_100%] h-full pt-0 lg:pt-32">
                        <div className="flex h-full gap-[1em] w-full flex-wrap justify-between px-6">
                            <motion.div animate={{y: (state.x) * -1}} transition={{duration: 1}}>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
                                    transition={{delay: .5, ease: 'easeOut'}}
                                    style={{background: theme.card}}
                                    className="flex-[1_0_30%] flex p-4 flex-col shadow-lg max-w-[350px]"
                                >
                                    <SVG key={1} width={30} height={30} viewBox="0 0 2050 2050">{uiux.svg}</SVG>
                                    <CoverAnimSubtitleText delay={.5} show={inView} fontSizeClass="text-xl" dispText='UI/UX Design.' textColor={theme.cardText}/>
                                    <span style={{color: theme.cardText}} className="mt-8 text-sm">I design with function and elegance in mind. Adjusted with the purpose intended for, whether the design is to spark awe, or to design with practicality. </span>
                                </motion.div>
                            </motion.div>
                            <motion.div ref={mobileRef} animate={{x: state.x * -1}} transition={{duration: 1}}>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
                                    transition={{delay: 1, ease: 'easeOut'}}
                                    style={{background: theme.card}}
                                    className="flex-[1_0_30%] flex p-4 flex-col shadow-md relative lg:top-24 max-w-[350px]"
                                >
                                    <SVG key={1} width={30} height={30} viewBox="0 0 1069 1069">{tech.svg}</SVG>
                                    <CoverAnimSubtitleText delay={1} show={inView} fontSizeClass="text-xl" dispText='Latest Technology.' textColor={theme.cardText}/>
                                    <span style={{color: theme.cardText}} className="mt-8 text-sm">Technology is ever changing. I desire to keep up and learn new technologies, making my arsenal in development versatile and adaptive.</span>
                                </motion.div>
                            </motion.div>
                            <motion.div animate={{y: state.x}} transition={{duration: 1}}>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
                                    transition={{delay: 1.5, ease: 'easeOut'}}
                                    style={{background: theme.card}}
                                    className="flex-[1_0_30%] flex p-4 flex-col shadow-md relative lg:bottom-24 max-w-[350px]"
                                >
                                    <SVG key={1} width={30} height={30} viewBox={trend.viewBox}>{trend.svg}</SVG>
                                    <CoverAnimSubtitleText delay={1.5} show={inView} fontSizeClass="text-xl" dispText='Trend.' textColor={theme.cardText}/>
                                    <span style={{color: theme.cardText}} className="mt-8">Keeping up with the trend in technological and design aspect when it comes to web development or software development in general</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                    <section ref={ref} className="flex flex-[1_0_100%]">
                        <Swiper
                            autoplay
                            breakpoints={{
                                0: {
                                slidesPerView: 3,
                                },
                                768: {
                                slidesPerView: 8,
                                },
                            }}
                            loop
                            modules={[Autoplay]}
                            className="mySwiper6 lg:m-[100px_auto] w-[80vw] lg:w-[100vw] max-w-screen-2xl h-[150px] rounded-lg"
                        >
                            {
                                state.skills.map( (el, idx) => {
                                    return (
                                        <SwiperSlide key={idx} style={{fontSize: text.logo}} className="flex items-center justify-center gap-[10px] text-white relative">
                                            <motion.div initial={{opacity: 0}} animate={{opacity: inView ? 1 : 0}} transition={{delay: (idx * .13)}} style={{background: theme.secondary}} className="transition-all hover:scale-150 shadow-md p-[10px] rounded-full">
                                                {el}
                                            </motion.div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </section>
                </div>
            </main>
        </React.Fragment>
    )
}