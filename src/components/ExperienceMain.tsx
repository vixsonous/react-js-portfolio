import React, { useRef, useState } from "react";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useInView, motion } from "framer-motion";
import { text } from "../constants";
import { useAppSelector } from "../store";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FreeMode, Mousewheel } from "swiper/modules";

export default function ExperienceMain() {

    const theme = useAppSelector(state => state.theme.theme);

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true});

    const [state, setState] = useState({
        elements: [
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: true ? 1 : 0}} 
                transition={{delay: .5}} 
                style={{background: theme.card}}
                className="flex-[1_0_30%] flex p-[15px] flex-col rounded-md shadow-md"
            >
                {/* <img style={{width: '40px',height: '40px', color: theme.primary}} src={svg} alt="My Happy SVG"/> */}
                <CoverAnimSubtitleText delay={.5} show={true} textSize={text.title} dispText='UI/UX Design.' textColor={theme.primary}/>
                <span style={{color: theme.textColor}} className="mt-[15px]">I design with function and elegance in mind. Adjusted with the purpose intended for, whether the design is to spark awe, or to design with practicality. </span>
            </motion.div>,

            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: true ? 1 : 0}} 
                transition={{delay: .5}} 
                style={{background: theme.card}}
                className="flex-[1_0_30%] flex p-[15px] flex-col rounded-md shadow-md"
            >
                {/* <img style={{width: '40px',height: '40px', color: theme.primary}} src={svg} alt="My Happy SVG"/> */}
                <CoverAnimSubtitleText delay={.5} show={true} textSize={text.title} dispText='UI/UX Design.' textColor={theme.primary}/>
                <span style={{color: theme.textColor}} className="mt-[15px]">I design with function and elegance in mind. Adjusted with the purpose intended for, whether the design is to spark awe, or to design with practicality. </span>
            </motion.div>,

            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: true ? 1 : 0}} 
                transition={{delay: .5}} 
                style={{background: theme.card}}
                className="flex-[1_0_30%] flex p-[15px] flex-col rounded-md shadow-md"
            >
                {/* <img style={{width: '40px',height: '40px', color: theme.primary}} src={svg} alt="My Happy SVG"/> */}
                <CoverAnimSubtitleText delay={.5} show={true} textSize={text.title} dispText='UI/UX Design.' textColor={theme.primary}/>
                <span style={{color: theme.textColor}} className="mt-[15px]">I design with function and elegance in mind. Adjusted with the purpose intended for, whether the design is to spark awe, or to design with practicality. </span>
            </motion.div>
            
        ]
    })

    return (
        <main className="flex flex-col gap-[10vh] sticky top-0">
            <div className="min-h-[100vh] py-[20px] flex flex-col gap-[10vh]">
                <section ref={ref}>
                    <h1 className="self-center flex flex-col ">
                        <CoverAnimSubtitleText show={ inView} textSize={text.logo} dispText='Experience.' textColor={theme.primary}/>
                    </h1>
                </section>
                <section className="flex h-full gap-[1em] w-full flex-wrap">
                    {
                        state.elements.map( (el, idx) => {
                            return (
                                <React.Fragment key={idx}>{el}</React.Fragment>
                            )
                        })
                    }
                </section>
            </div>
        </main>
    )
}