"use client";

import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { defaultAnim, text } from "../../constants";
import SlidingCover from "../SlidingCover";

export default function CoverAnimSubtitleText({dispText, show, textSize='1em', textColor, delay = 0}:{dispText:string, show:boolean, textSize?: string, textColor: string, delay?: number}) {

    return (
        <div className="relative overflow-hidden max-w-max">
            <AnimatePresence mode="wait">
                { show && (
                    <>
                    <motion.span className='relative' style={{fontSize: textSize, color: textColor}} initial="hidden" animate="visible">
                        {dispText.split("").map((char, idx) => 
                        <motion.span 
                            key={idx} 
                            initial="hidden" 
                            animate="visible" 
                            exit={{opacity: 0, transition: {delay:  + .1 + (dispText.length - idx) * 0.06}}} 
                            transition={{ delay: delay + .1 + idx * 0.05 }} 
                            variants={defaultAnim}>
                            {char}
                        </motion.span>)}
                        <SlidingCover delay={delay}/>
                    </motion.span>
                    </>
                )}
                
            </AnimatePresence>
        </div>
    )
}