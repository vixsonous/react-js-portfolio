import { useInView } from "framer-motion";
import { useAppSelector } from "../store";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useEffect, useRef } from "react";
import { text } from "../constants";
import CoverDisplay from "./text/CoverDisplay";

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
                <section className="flex flex-[1_0_100%]">
                    <div className="sm:columns-3 columns-1 w-full">
                        <div className="">
                            <CoverAnimSubtitleText show={isInView} textSize={text.title} dispText='UI/UX Design.' textColor={theme.primary}/>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, magnam quisquam doloremque fugiat officia nobis dignissimos beatae aliquam suscipit, perspiciatis molestiae vitae? Fugiat, vitae ut doloremque quas quod provident reiciendis!</span>
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