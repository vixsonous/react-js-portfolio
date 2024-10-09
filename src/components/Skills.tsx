import { useInView } from "framer-motion";
import { useAppSelector } from "../store";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useEffect, useRef } from "react";
import { text } from "../constants";
import CoverDisplay from "./text/CoverDisplay";

export default function Skills() {

    const theme = useAppSelector(state => state.theme.theme);

    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { amount: 0.1});

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

    return (
        <main ref={ref} className="relative py-[20px]">
            <h1 className="self-center flex flex-col">
                <CoverAnimSubtitleText show={isInView} textSize={text.logo} dispText='Hello!' textColor={theme.primary}/>
                <CoverDisplay show={isInView} textSize={text.logo} text="Hello" textColor={theme.primary} />
            </h1>
        </main>
    )
}