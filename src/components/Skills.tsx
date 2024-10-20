import { useInView, motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useAppSelector } from "../store";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import React, { useRef, useState } from "react";
import { text } from "../constants";
import svg from './svg/ui-ux.svg';
import tech from './svg/tech.svg';
import trend from './svg/trend.svg';
import scss from './svg/scss.svg';
import HTMLSVG from "./svg/HTMLSVG";
import CSS3SVG from "./svg/CSS3SVG";
import JquerySVG from "./svg/JquerySVG";
import JSSVG from "./svg/JSSVG";
import ReactJSSVG from "./svg/ReactJSSVG";
import BootStrapSVG from "./svg/BootstrapSVG";
import nextjs from './svg/next-js.svg';
import nodejs from './svg/node-js.svg';
import laravel from './svg/laravel.svg';
import git from './svg/git.svg';
import docker from './svg/docker.svg';
import aws from './svg/aws.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Skills() {

    const theme = useAppSelector(state => state.theme.theme);

    const [state, setState] = useState({
        skills: [
            <HTMLSVG key={1} width={40} height={40} />,
            <CSS3SVG key={2} width={40} height={40} />,
            <JquerySVG key={3} width={40} height={40} />,
            <JSSVG key={4} width={40} height={40} />,
            <ReactJSSVG key={5} width={40} height={40} />,
            <BootStrapSVG key={6} width={40} height={40} />,
            <img key={7} style={{width: '40px',height: '40px'}} src={scss} alt="scss svg"/>,
            <img key={8} style={{width: '40px',height: '40px'}} src={nextjs} alt="next js svg"/>,
            <img key={9} style={{width: '40px',height: '40px'}} src={nodejs} alt="nodejs svg"/>,
            <img key={10} style={{width: '40px',height: '40px'}} src={laravel} alt="laravel svg"/>,
            <img key={11} style={{width: '40px',height: '40px'}} src={git} alt="git svg"/>,
            <img key={12} style={{width: '40px',height: '40px'}} src={docker} alt="docker svg"/>,
            <img key={13} style={{width: '40px',height: '40px'}} src={aws} alt="aws svg"/>
        ],
        x: 0,
    })

    const ref = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true});

    const { scrollYProgress } = useScroll({target: scrollRef});

    const x = useTransform(scrollYProgress, [0, 1], [0, 20]);

    useMotionValueEvent(x, "change", (latest) => {
        setState(prev => ({...prev, x: latest}));
    });

    return (
        <React.Fragment>
            <main ref={scrollRef} className="relative flex flex-col gap-[10vh] pt-[50vh]">
                <div className="min-h-[100vh] py-[20px] flex flex-col gap-[10vh]">
                    <section>
                        <h1 className="self-center flex flex-col top-36 lg:absolute left-72 z-50 pt-[50vh]">
                            <CoverAnimSubtitleText show={ inView} cover={false} fontSizeClass="text-8xl" dispText='Design and' textColor={theme.secondary}/>
                            <div className="flex">
                                <CoverAnimSubtitleText delay={.2} show={ inView} cover={false} fontSizeClass="text-8xl" dispText='In' textColor={theme.secondary}/>
                                <CoverAnimSubtitleText delay={.2} show={ inView} cover={false} fontSizeClass="text-8xl" dispText='novation.' textColor={theme.primary}/>
                            </div>
                        </h1>
                    </section>
                    <section className="flex flex-[1_0_100%] h-full pt-32">
                        <div className="flex h-full gap-[1em] w-full flex-wrap justify-between px-6">
                            <motion.div animate={{y: (state.x) * -1}} transition={{duration: 1}}>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
                                    transition={{delay: .5, ease: 'easeOut'}}
                                    style={{background: theme.card}}
                                    className="flex-[1_0_30%] flex p-4 flex-col shadow-lg max-w-[350px]"
                                >
                                    <img style={{width: '40px',height: '40px', color: theme.primary}} src={svg} alt="My Happy SVG"/>
                                    <CoverAnimSubtitleText delay={.5} show={inView} fontSizeClass="text-xl" dispText='UI/UX Design.' textColor={theme.cardText}/>
                                    <span style={{color: theme.cardText}} className="mt-8 text-sm">I design with function and elegance in mind. Adjusted with the purpose intended for, whether the design is to spark awe, or to design with practicality. </span>
                                </motion.div>
                            </motion.div>
                            <motion.div animate={{x: state.x * -1}} transition={{duration: 1}}>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
                                    transition={{delay: 1, ease: 'easeOut'}}
                                    style={{background: theme.card}}
                                    className="flex-[1_0_30%] flex p-4 flex-col shadow-md relative lg:top-24 max-w-[350px]"
                                >
                                    <img style={{width: '40px',height: '40px'}} src={tech} alt="My Happy SVG" className="mb-2"/>
                                    <CoverAnimSubtitleText delay={1} show={inView} fontSizeClass="text-2xl" dispText='Latest Technology.' textColor={theme.cardText}/>
                                    <span style={{color: theme.cardText}} className="mt-4 text-sm">Technology is ever changing. I desire to keep up and learn new technologies, making my arsenal in development versatile and adaptive.</span>
                                </motion.div>
                            </motion.div>
                            <motion.div animate={{y: state.x}} transition={{duration: 1}}>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
                                    transition={{delay: 1.5, ease: 'easeOut'}}
                                    style={{background: theme.card}}
                                    className="flex-[1_0_30%] flex p-[15px] flex-col shadow-md relative lg:bottom-24 max-w-[350px]"
                                >
                                    <img style={{width: '40px',height: '40px'}} src={trend} alt="My Happy SVG"/>
                                    <CoverAnimSubtitleText delay={1.5} show={inView} fontSizeClass="text-2xl" dispText='Trend.' textColor={theme.cardText}/>
                                    <span style={{color: theme.cardText}} className="mt-[15px]">Keeping up with the trend in technological and design aspect when it comes to web development or software development in general</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                    <section ref={ref} className="flex flex-[1_0_100%]">
                        <Swiper
                            autoplay
                            loop
                            slidesPerView={8}
                            modules={[Autoplay]}
                            className="mySwiper6 m-[100px_auto] w-[80vw] lg:w-[100vw] max-w-screen-2xl h-[150px] rounded-lg"
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