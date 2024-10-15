import { useInView, motion } from "framer-motion";
import { useAppSelector } from "../store";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useRef, useState } from "react";
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
            <HTMLSVG width={40} height={40} />,
            <CSS3SVG width={40} height={40} />,
            <JquerySVG width={40} height={40} />,
            <JSSVG width={40} height={40} />,
            <ReactJSSVG width={40} height={40} />,
            <BootStrapSVG width={40} height={40} />,
            <img style={{width: '40px',height: '40px'}} src={scss} alt="scss svg"/>,
            <img style={{width: '40px',height: '40px'}} src={nextjs} alt="next js svg"/>,
            <img style={{width: '40px',height: '40px'}} src={nodejs} alt="nodejs svg"/>,
            <img style={{width: '40px',height: '40px'}} src={laravel} alt="laravel svg"/>,
            <img style={{width: '40px',height: '40px'}} src={git} alt="git svg"/>,
            <img style={{width: '40px',height: '40px'}} src={docker} alt="docker svg"/>,
            <img style={{width: '40px',height: '40px'}} src={aws} alt="aws svg"/>
        ]
    })

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true});

    return (
        <main className="relative flex flex-col gap-[10vh]">
            <div className="min-h-[100vh] py-[20px] flex flex-col gap-[10vh]">
                <section>
                    <h1 className="self-center flex flex-col">
                        <CoverAnimSubtitleText show={ inView} fontSizeClass="text-5xl" dispText='Design and Innovation.' textColor={theme.primary}/>
                    </h1>
                </section>
                <section className="flex flex-[1_0_100%] h-full">
                    <div className="flex h-full gap-[1em] w-full flex-wrap">
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: inView ? 1 : 0}}
                            transition={{delay: .5}}
                            style={{background: theme.card}}
                            className="flex-[1_0_30%] flex p-[15px] flex-col shadow-md"
                        >
                            <img style={{width: '40px',height: '40px', color: theme.primary}} src={svg} alt="My Happy SVG"/>
                            <CoverAnimSubtitleText delay={.5} show={inView} textSize={text.title} dispText='UI/UX Design.' textColor={theme.primary}/>
                            <span style={{color: theme.cardText}} className="mt-[15px]">I design with function and elegance in mind. Adjusted with the purpose intended for, whether the design is to spark awe, or to design with practicality. </span>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: inView ? 1 : 0}}
                            transition={{delay: 1}}
                            style={{background: theme.card}}
                            className="flex-[1_0_30%] flex p-[15px] flex-col shadow-md"
                        >
                            <img style={{width: '40px',height: '40px'}} src={tech} alt="My Happy SVG"/>
                            <CoverAnimSubtitleText delay={1} show={inView} textSize={text.title} dispText='Latest Technology.' textColor={theme.primary}/>
                            <span style={{color: theme.cardText}} className="mt-[15px]">Technology is ever changing. I desire to keep up and learn new technologies, making my arsenal in development versatile and adaptive.</span>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0}} 
                            animate={{opacity: inView ? 1 : 0}} 
                            transition={{delay: 1.5}} 
                            style={{background: theme.card}}
                            className="flex-[1_0_30%] flex p-[15px] flex-col shadow-md"
                        >
                            <img style={{width: '40px',height: '40px'}} src={trend} alt="My Happy SVG"/>
                            <CoverAnimSubtitleText delay={1.5} show={inView} textSize={text.title} dispText='Trend.' textColor={theme.primary}/>
                            <span style={{color: theme.cardText}} className="mt-[15px]">Keeping up with the trend in technological and design aspect when it comes to web development or software development in general</span>
                        </motion.div>
                    </div>
                </section>
                <section ref={ref} className="flex flex-[1_0_100%]">
                    <Swiper
                        autoplay
                        loop
                        slidesPerView={8}
                        modules={[Autoplay]}
                        className="mySwiper6 m-[100px_auto] w-[80vw] lg:w-[100vw] max-w-[1160px] h-[150px] rounded-lg"
                    >
                        {
                            state.skills.map( (el, idx) => {
                                return (
                                    <SwiperSlide key={idx} style={{fontSize: text.logo}} className="flex items-center justify-center gap-[10px] text-white relative">
                                        <motion.div initial={{opacity: 0}} animate={{opacity: inView ? 1 : 0}} transition={{delay: (idx * .13)}} style={{background: theme.card}} className="transition-all hover:scale-150 shadow-md p-[10px] rounded-full">
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
    )
}