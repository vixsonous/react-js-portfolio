import {motion} from 'framer-motion';
import { useState } from 'react';

export default function Loading() {

    const [display, setDisplay] = useState('flex');
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: [0,1,0]}} style={{display: display}} transition={{duration: 5}} onAnimationComplete={() => setDisplay('none')} className="min-h-[100vh] fixed z-[999]">
            <div className="flex-[1_0_100%] flex items-center justify-center">
                <h1>asd</h1>
            </div>
        </motion.div>
    )
}