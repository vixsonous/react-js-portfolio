import { useInView } from "framer-motion";
import { useAppSelector } from "../store";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useEffect, useRef } from "react";
import { text } from "../constants";
import svg from './svg/ui-ux.svg';

export default function Skills() {

    const theme = useAppSelector(state => state.theme.theme);

    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

    return (
        <main ref={ref} className="relative  flex flex-col gap-[10vh]">
            <div className="min-h-[100vh] py-[20px] flex flex-col gap-[10vh]">
                <section>
                    <h1 className="self-center flex flex-col">
                        <CoverAnimSubtitleText show={isInView} textSize={text.logo} dispText='Design and Innovation.' textColor={theme.primary}/>
                    </h1>
                </section>
                <section className="flex flex-[1_0_100%] h-full">
                    <div className="flex h-full gap-[5%] w-full flex-wrap">
                        <div className="flex-[1_0_30%] flex flex-col gap-[15px]">
                            <img src={svg} alt="My Happy SVG"/>
                            <CoverAnimSubtitleText show={isInView} textSize={text.title} dispText='UI/UX Design.' textColor={theme.primary}/>
                            <span>I design with function and elegance in mind. Adjusted with the purpose intended for, whether the design is to spark awe, or to design with practicality. </span>
                        </div>
                        <div className="flex-[1_0_30%] flex flex-col gap-[15px]">
                            <CoverAnimSubtitleText show={isInView} textSize={text.title} dispText='Latest Technology.' textColor={theme.primary}/>
                            <span>Technology is ever changing. I desire to keep up and learn new technologies, making my arsenal in development versatile and adaptive.</span>
                        </div>
                        <div className="flex-[1_0_30%] flex flex-col gap-[15px]">
                            <CoverAnimSubtitleText show={isInView} textSize={text.title} dispText='Trend.' textColor={theme.primary}/>
                            <span>Keeping up with the trend in technological and design aspect when it comes to web development or software development in general</span>
                        </div>
                    </div>
                </section>
                <section className="flex flex-[1_0_100%] h-full">
                    
                </section>
            </div>
            <div className="min-h-[100vh] py-[20px] flex flex-col gap-[10vh]">
                <section>
                    <h1 className="self-center flex flex-col">
                        <CoverAnimSubtitleText show={isInView} textSize={text.logo} dispText='Design and Innovation.' textColor={theme.primary}/>
                    </h1>
                </section>
                <section className="flex flex-[1_0_100%]">
                    <div className="sm:columns-3 columns-1 w-full">
                        <div>
                            <CoverAnimSubtitleText show={isInView} textSize={text.title} dispText='UI/UX Design.' textColor={theme.primary}/>
                        </div>
                        <div>
                            <CoverAnimSubtitleText show={isInView} textSize={text.title} dispText='Frontend Development.' textColor={theme.primary}/>
                        </div>
                        <div>
                            <CoverAnimSubtitleText show={isInView} textSize={text.title} dispText='Design and Innovation.' textColor={theme.primary}/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}