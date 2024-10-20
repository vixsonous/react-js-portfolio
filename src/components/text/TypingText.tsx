import {motion} from 'framer-motion';
import React from 'react';

export default function TypingText({show=true, tx, delay = 0, className="", style={}} : {show?:boolean, tx: string, delay?: number, className?: string, style?: object}) {

    return (
        <React.Fragment>
            <motion.h1 
                className={`${className} flex flex-wrap transition-all`}
                style={style}
            >
                {tx.split("").map((char, idx) => 
                    <motion.span 
                        className='relative' 
                        transition={{ delay:   delay + idx * 0.008, duration: 0}} 
                        key={idx} 
                        initial={{opacity: 0,}} 
                        animate={{opacity: show ? 1 : 0,}}
                    >{char === " " ? <span>&nbsp;</span> : char}
                    </motion.span>)}
            </motion.h1>
        </React.Fragment>
    )
}