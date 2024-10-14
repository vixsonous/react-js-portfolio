import {motion} from 'framer-motion';
import { text } from '../../constants';
import { useAppSelector } from '../../store';

export default function TypingText({tx, delay = 0} : {tx: string, delay?: number}) {

    const theme = useAppSelector(state => state.theme.theme);
    
    return (
        <motion.h1 
            className={`text-[${text.body}] w-[100%] flex flex-wrap`}
        >
            {tx.split("").map((char, idx) => 
                <motion.span 
                    style={{color: theme.textColor}}
                    className='relative' 
                    transition={{ delay:  + delay + idx * 0.003 }} 
                    key={idx} 
                    initial={{opacity: 0, y: 5}} 
                    animate={{opacity: 1, y: 0}}
                >{char === " " ? <span>&nbsp;</span> : char}
                </motion.span>)}
        </motion.h1>
    )
}