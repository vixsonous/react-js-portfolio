import { useEffect, useRef } from "react";
import { Props } from "../constants";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Experience({curMode} : Props) {

    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const textPos1 = {
        pos1: useTransform(scrollYProgress, [0, 0.2], [-300,0]),
        pos2: useTransform(scrollYProgress, [0.1, 0.3], [-300,0]),
        pos3: useTransform(scrollYProgress, [0.2, 0.4], [-300,0]),
    }

    const textPos2 = {
        pos1: useTransform(scrollYProgress, [0.15, 0.35], [-300,0]),
        pos2: useTransform(scrollYProgress, [0.25, 0.45], [-300,0]),
        pos3: useTransform(scrollYProgress, [0.35, 0.55], [-300,0]),
    }

    const textPos3 = {
        pos1: useTransform(scrollYProgress, [0.4, 0.6], [-300,0]),
        pos2: useTransform(scrollYProgress, [0.5, 0.7], [-300,0]),
        pos3: useTransform(scrollYProgress, [0.6, 0.8], [-300,0]),
    }

    const opacity1 = {
        text1: useTransform(scrollYProgress, [0, 0.2], [0,1]),
        text2: useTransform(scrollYProgress, [0.1, 0.3], [0,1]),
        text3: useTransform(scrollYProgress, [0.2, 0.4], [0,1]),
    }

    const opacity2 = {
        text1: useTransform(scrollYProgress, [0.15, 0.35], [0,1]),
        text2: useTransform(scrollYProgress, [0.25, 0.45], [0,1]),
        text3: useTransform(scrollYProgress, [0.35, 0.55], [0,1]),
    }

    const opacity3 = {
        text1: useTransform(scrollYProgress, [0.4, 0.6], [0,1]),
        text2: useTransform(scrollYProgress, [0.5, 0.7], [0,1]),
        text3: useTransform(scrollYProgress, [0.6, 0.8], [0,1]),
    }

    const lineHeight = useTransform(scrollYProgress, [0,1], ["0%","65%"]);

    return (
        <main className="mix-blend-difference pt-[100px] relative">
            <motion.div ref={container} className="min-h-[400vh] flex flex-wrap">
                <div className="flex-[0_0_0%] sm:flex-[0_0_50%] ">
                </div>
                <div className="flex-[1_0_50%] p-[20px] sticky top-0 h-screen">
                    <div className=" relative before:border-l-[1px] before:h-[100%] before:border-l-[#0000] before:content-[''] before:absolute">
                    {/* after:w-[15px] after:content-[''] after:h-[40px] after:bg-[#F7F7F7] after:absolute after:top-0 after:left-0 */}
                        <motion.section  className={` overflow-hidden z-[1] relative 
                        
                        p-[30px]`}>
                            <motion.div style={{opacity: opacity1.text1, translateX: textPos1.pos1}} className="z-[1] w-[15px] rounded-[15px] h-[15px] bg-[#D9D9D9] content-[''] left-[0px] top-[40px] absolute" />
                            <motion.h1 style={{color: '#fff', translateX: textPos1.pos1, opacity: opacity1.text1}} className="title text-[1.4em]">Intern Full Stack Developer / <span className="text-[1em] font-light">May 2018 - January 2019</span></motion.h1>
                            <motion.h1 style={{color: '#fff', translateX: textPos1.pos2, opacity: opacity1.text2}} className="company text-[1em] font-light">TIG Designs and Solutions Cebu City </motion.h1>
                            <motion.h1 style={{color: '#fff', translateX: textPos1.pos3, opacity: opacity1.text3}} className="code text-[.75em] font-light">HTML, CSS, Javascript, JQuery, PHP, MySQL</motion.h1>
                        </motion.section>
                        <motion.section  className="overflow-hidden z-[1] relative p-[30px]">
                            <motion.div style={{opacity: opacity2.text1, translateX: textPos2.pos1}} className="z-[1] w-[15px] rounded-[15px] h-[15px] bg-[#D9D9D9] content-[''] left-[0px] top-[40px] absolute" />
                            <motion.h1 style={{color: '#fff', translateX: textPos2.pos1, opacity: opacity2.text1}} className="title text-[1.4em]">Freelance Developer / <span className="text-[1em] font-light">July 2021 - December 2022</span></motion.h1>
                            <motion.h1 style={{color: '#fff', translateX: textPos2.pos2, opacity: opacity2.text2}} className="company text-[1em] font-light">Yazaki Real Estate </motion.h1>
                            <motion.h1 style={{color: '#fff', translateX: textPos2.pos3, opacity: opacity2.text3}} className="code text-[.75em] font-light">HTML, CSS, Javascript, JQuery, PHP, Laravel, MySQL, React JS</motion.h1>
                        </motion.section>
                        <motion.section  className="overflow-hidden z-[1] relative 
                        p-[30px]">
                            {/* <motion.div className="w-[15px] content-[''] h-[200px] sm:h-[180px] bg-[#F7F7F7] absolute top-[55px] left-0" /> */}
                            <motion.div style={{opacity: opacity3.text1, translateX: textPos3.pos1}} className="z-[1] w-[15px] rounded-[15px] h-[15px] bg-[#D9D9D9] content-[''] left-[0px] top-[40px] absolute" />
                            <motion.h1 style={{color: '#fff', translateX: textPos3.pos1, opacity: opacity3.text1}} className="title text-[1.4em]">Team Leader / Mid-Level Software Engineer / <span className="text-[1em] font-light">September 2021 - Present</span></motion.h1>
                            <motion.h1 style={{color: '#fff', translateX: textPos3.pos2, opacity: opacity3.text2}} className="company text-[1em] font-light">Seed Tech Philippines </motion.h1>
                            <motion.h1 style={{color: '#fff', translateX: textPos3.pos3, opacity: opacity3.text3}} className="code text-[.75em] font-light">HTML, CSS, Javascript, JQuery, Java, Oracle</motion.h1>
                        </motion.section>
                        <motion.div style={{height: lineHeight}} className="absolute border-l-[2px] border-l-[#D9D9D9] top-[40px] left-[7px] h-full z-[0]"></motion.div>
                    </div>
                </div>
            </motion.div>
        </main>
    )
}