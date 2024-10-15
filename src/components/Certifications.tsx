import { useRef } from "react";
import { getTheme } from "./hooks/theme";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useInView } from "framer-motion";

export default function Certifications() {

    const theme = getTheme();

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true});

    const loadingRef = useRef<HTMLDivElement>(null);

    return (
        <section className="min-h-[100vh] relative">
            <main className="flex flex-col gap-4 sticky top-0">
                <div className="min-h-[100vh] py-[20px] flex flex-col gap-20">
                    <section ref={ref}>
                        <h1 className="self-center flex flex-col ">
                            <CoverAnimSubtitleText show={ inView} fontSizeClass={'text-5xl'} dispText='Certifications.' textColor={theme.primary}/>
                        </h1>
                    </section>
                    <div className="w-full relative">
                        
                    </div>
                </div>
            </main>
        </section>
    )
}