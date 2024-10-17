import {motion} from 'framer-motion';
import { useAppSelector } from '../../store';

export default function TypingText({tx, delay = 0, className=""} : {tx: string, delay?: number, className?: string}) {

    const theme = useAppSelector(state => state.theme.theme);

    return (
        <motion.h1 
            className={`${className} inline`}
        >
            {tx.split("").map((char, idx) => 
                <motion.span 
                    style={{color: theme.textColor}}
                    className='relative' 
                    transition={{ delay:  + delay + idx * 0.0 , duration: 0}} 
                    key={idx} 
                    initial={{opacity: 0, y: 5}} 
                    animate={{opacity: 1, y: 0}}
                >{char === " " ? <span>&nbsp;</span> : char}
                </motion.span>)}
        </motion.h1>
    )
}