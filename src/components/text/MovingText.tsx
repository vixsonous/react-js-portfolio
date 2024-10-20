import React from "react";
import { motion } from "framer-motion";

export default function MovingText({
    text, 
    className="", 
    style={},
    x=0,
    y=0,
    delay=0
} : {
    text: string, 
    className?: string, 
    style?: object,
    x?: number,
    y?:number,
    delay?: number
}) {
    return <React.Fragment>
        <motion.span 
            initial={{opacity: 0}} 
            animate={{opacity: 1,x, y}}
            transition={{duration: 1, delay}}
            style={style} 
            className={className}>
            {text}
        </motion.span>
    </React.Fragment>
}