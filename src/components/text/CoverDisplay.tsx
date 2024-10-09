import { AnimatePresence, motion } from "framer-motion";
import SlidingCover from "../SlidingCover";

export default function CoverDisplay({show, textSize='1em', textColor='#000', delay=0, text}: {show: boolean, textSize?: string, textColor?: string, delay?: number, text: string}) {
    
    const anim = {
        hidden: {
            opacity: 0,
            y: 100
        },

        visible: {
            opacity: 1,
            y: 0
        },

        exit: {
            opacity: 0,
            y: 100
        }
    }
    
    return (
        <div className="relative overflow-hidden max-w-max">
            <AnimatePresence mode="wait">
                { show && (
                    <>
                    <span className='flex ' style={{fontSize: textSize, color: textColor}}>
                        <motion.span 
                            className="self-center"
                            key={1} 
                            initial="hidden"
                            animate="visible"
                            exit={{opacity: 0, transition: {delay:  + .1 + 1 * 0.06}}} 
                            transition={{ delay: delay + .1 + 1 * 0.05 }} 
                            variants={anim}>
                            {text}
                        </motion.span>
                        <SlidingCover delay={delay}/>
                    </span>
                    </>
                )}
                
            </AnimatePresence>
        </div>
    )
}