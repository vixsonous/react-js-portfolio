"use client";

import { AnimatePresence, motion } from "framer-motion";
import { defaultAnim } from "../../constants";
import SlidingCover from "../SlidingCover";
import React from "react";

export default function CoverAnimSubtitleText({
    dispText, 
    show=true, 
    textColor, 
    delay = 0, 
    fontSizeClass='',
    className='',
    cover=true
}:{
    dispText:string, 
    show?:boolean, 
    textSize?: string, 
    textColor: string, 
    delay?: number, 
    fontSizeClass?: string,
    className?: string,
    cover?: boolean
}) {

    return (
        <React.Fragment>
            <div className={`relative ${cover ? 'overflow-hidden' : ''} max-w-max ${className}`}>
                <AnimatePresence mode="wait">
                    { show && (
                        <>
                        <motion.span className='relative' style={{color: textColor}} initial="hidden" animate="visible">
                            {dispText.split("").map((char, idx) => 
                            <motion.span 
                                key={idx} 
                                className={`${fontSizeClass}`}
                                initial="hidden" 
                                animate="visible" 
                                exit={{opacity: 0, transition: {delay:  + .1 + (dispText.length - idx) * 0.06 / (dispText.length / 12)}}} 
                                transition={{ delay: delay + .1 + idx * 0.05 / (dispText.length / 2) }} 
                                variants={defaultAnim}>
                                {char}
                            </motion.span>)}
                            {cover && <SlidingCover delay={delay}/>}
                        </motion.span>
                        </>
                    )}
                    
                </AnimatePresence>
            </div>
        </React.Fragment>
    )
}