"use client";
import {motion} from "framer-motion";
import { useAppSelector } from "../store";

export default function SlidingCover({delay = 0} : {delay?: number}) {

    const theme = useAppSelector(state => state.theme.theme);

    return (
        <motion.div
            initial={{ x: '-110%' }}
            animate={{ x: '110%' , transition: { duration: 1.5, ease: "circOut", delay: delay } }}
            exit={{ x: '-500%', transition: { duration: 1.5, ease: "circIn"  } }}
            style={{  background: theme.primary}}
            className="absolute top-0 left-0 right-0 bottom-0 z-[2]"
        />
    )
}