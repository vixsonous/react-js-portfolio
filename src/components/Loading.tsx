import {motion} from 'framer-motion';
import React, { useState } from 'react';
import { Props } from '../constants';

export default function Loading({curMode}: Props) {

    const [display, setDisplay] = useState('flex');
    return (
        <React.Fragment>
            <motion.div initial={{opacity: 1}} animate={{opacity: [1,1,1,1,0]}} style={{display: display, background: curMode.primary}} transition={{duration: 5}} onAnimationComplete={() => setDisplay('none')} className="min-h-[100vh] fixed w-full h-full top-0 left-0 z-[999] bg-black">
                <div className="flex-[1_0_100%] flex items-center justify-center">
                    <motion.h1 initial={{opacity: 0}} animate={{opacity: [0,1,0]}} transition={{duration: 5}} style={{color:'white'}}>asd</motion.h1>
                </div>
            </motion.div>
        </React.Fragment>
    )
}