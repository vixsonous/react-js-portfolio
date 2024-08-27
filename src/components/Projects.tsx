import Slider from "react-slick";
import { delayTime, Props, text } from "../constants";
import {motion, useAnimationControls, useInView} from 'framer-motion';
import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function Projects({curMode}: Props) {

    const sliderBallClass = " text-left text-[#fff] text-center h-[50px] z-[9] relative lg:top-[20px] before:w-[15px] before:rounded-[15px] before:h-[15px] before:bg-[#D9D9D9] before:content-[''] lg:before:top-[5px] before:top-[30px] lg:before:left-[30px] before:left-[45%] before:absolute";

    const controls = useAnimationControls();

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once: true, amount: 1});

    useEffect(() => {
        if(isInView) {
            controls.start({width: "100%", opacity: 1});
        }
    },[isInView]);

    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);
    return (
        <main className=" min-h-[100vh] w-full relative">
            <div className="flex flex-wrap justify-center">
                <div ref={ref} className="project-slick flex-[1_0_100%] mix-blend-difference relative z-[9] w-[100vw] lg:max-w-[500px] box-border">
                    <motion.div initial={{width: "0%"}} animate={controls} transition={{duration: .5, delay: + .9}} className="border-[1px] border-b-[#D9D9D9] content-[''] w-[100%] bottom-[9px] absolute" />
                    <Slider asNavFor={nav2} ref={ref => setNav1(ref || undefined)} focusOnSelect dots={false} arrows={false} autoplaySpeed={13000} speed={2000} autoplay slidesToShow={3} slidesToScroll={1} className="relative z-[0]">
                        <motion.span initial={{opacity: 0}} animate={controls} transition={{duration: .5, delay:  + .5 + .3}} className={sliderBallClass}>GVO</motion.span>
                        <motion.span initial={{opacity: 0}} animate={controls} transition={{duration: .5, delay:  + .5 + .6}} className={sliderBallClass}>JTB</motion.span>
                        <motion.span initial={{opacity: 0}} animate={controls} transition={{duration: .5, delay:  + .5 + 0}} className={sliderBallClass}>Wangohan</motion.span>
                        <motion.span initial={{opacity: 0}} animate={controls} transition={{duration: .5, delay:  + .5 + .9}} className={sliderBallClass}>Web5D</motion.span>
                    </Slider>
                </div>
                <div className="w-[100vw] lg:max-w-[100vw] flex-[1_0_100%] flex justify-center items-center">
                    <Slider asNavFor={nav1} ref={ref => setNav2(ref || undefined)} className="relative z-[999] w-full flex gap-[30px]" centerMode slidesToShow={3}>
                        <div className="w-[80vw] max-w-[300px] rounded-md">
                            <video className="rounded-t-md h-full w-full" controls src={`/jtb-1.webm`}></video>
                            <div style={{background: curMode.bg}} className={`p-[20px] mix-blend-difference font-light rounded-b-md`}>
                                <h1 style={{color: curMode.primary}} className={`text-[${text.title}]`}>GVO / Good Vibes Only </h1>
                                <p style={{color: curMode.primary}} className={`text-[${text.small}]`}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero deserunt exercitationem quos dolores assumenda consectetur laboriosam reiciendis officia, necessitatibus autem cupiditate rerum debitis accusantium ab minus minima, beatae nulla?
                                </p>
                            </div>
                        </div>
                        <div className="w-[80vw] max-w-[300px] rounded-md">
                            <video className="rounded-t-md h-full w-full" controls src={`/jtb-1.webm`}></video>
                            <div style={{background: curMode.bg}} className={`p-[20px] mix-blend-difference font-light rounded-b-md`}>
                                <h1 style={{color: curMode.primary}} className={`text-[${text.title}]`}>JTB / Japan Tourist Bureau Australia </h1>
                                <p style={{color: curMode.primary}} className={`text-[${text.small}]`}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero deserunt exercitationem quos dolores assumenda consectetur laboriosam reiciendis officia, necessitatibus autem cupiditate rerum debitis accusantium ab minus minima, beatae nulla?
                                </p>
                            </div>
                        </div>
                        <div className="w-[80vw] max-w-[300px] rounded-md">
                            <video className="rounded-t-md h-full w-full" controls src={`/jtb-1.webm`}></video>
                            <div style={{background: curMode.bg}} className={`p-[20px] mix-blend-difference font-light rounded-b-md`}>
                                <h1 style={{color: curMode.primary}} className={`text-[${text.title}]`}>Wangohan </h1>
                                <p style={{color: curMode.primary}} className={`text-[${text.small}]`}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero deserunt exercitationem quos dolores assumenda consectetur laboriosam reiciendis officia, necessitatibus autem cupiditate rerum debitis accusantium ab minus minima, beatae nulla?
                                </p>
                            </div>
                        </div>
                        <div className="w-[80vw] max-w-[300px] rounded-md">
                            <video className="rounded-t-md h-full w-full" controls src={`/jtb-1.webm`}></video>
                            <div style={{background: curMode.bg}} className={`p-[20px] mix-blend-difference font-light rounded-b-md`}>
                                <h1 style={{color: curMode.primary}} className={`text-[${text.title}]`}>Web5D </h1>
                                <p style={{color: curMode.primary}} className={`text-[${text.small}]`}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero deserunt exercitationem quos dolores assumenda consectetur laboriosam reiciendis officia, necessitatibus autem cupiditate rerum debitis accusantium ab minus minima, beatae nulla?
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div style={{color: curMode.bg}} className="flex-[1_0_50%] lg:absolute h-full w-full flex justify-center items-center">
                    
                </div>
            </div>
        </main>
    )
}