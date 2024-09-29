'use client';
import { useEffect, useRef, useState } from "react";
import { CurrentMode, lg, md, sm, text, xl, xl2 } from "../constants";
import { motion } from "framer-motion";

const defineScreenMode = () => {
    return sm(window.innerWidth) ? 0 :
    md(window.innerWidth) ? 1 :
    lg(window.innerWidth) ? 2 :
    xl(window.innerWidth) ? 3 :
    xl2(window.innerWidth) ? 4 : -1
}

export default function CardsCarousel({curMode, items}: { curMode: CurrentMode, items: Array<{ text: string}>}) {

    // 3 or more zoom is enabled
    const scMode = defineScreenMode();
    const refArr = useRef<HTMLDivElement[]>([]);
    const [transZ, setTransZ] = useState(scMode < 3 ? scMode === 0 ? '150px' : '250px' : '750px');
    const [fontSize, setFontSize] = useState(
        scMode < 3 ? text.body : text.title
    )

    const resizeFunc = () => {
        let scMode = defineScreenMode();

        if(scMode < 3) {
            setFontSize(text.body)
        } else {
            setFontSize(text.title)
        }

        if(scMode === 0) {
            setTransZ('150px');
        }else if(scMode < 3) {
            setTransZ('250px');
        } else if(scMode >= 3) {
            setTransZ('750px');
        }
    }
    const transZref = useRef(transZ);
    useEffect(() => {
        transZref.current = transZ;
    },[transZ]);

    const degrees = useRef(items.map((_, idx) => idx * (360 / items.length)));

    useEffect(() => {
        const int = setInterval(() => {
            refArr.current.forEach((current, idx) => {
                const curTrans = current.style.transform;
                const curDeg = Number(curTrans.split(" ")[0].split("(")[1].replace('deg)',''));
                degrees.current[idx] = curDeg + (360 / items.length);
                current.style.transform = `rotateY(${degrees.current[idx]}deg) translateZ(${transZref.current})`;
            })
        }, 5000);

        window.addEventListener('resize', resizeFunc);

        return () => {
            clearInterval(int)
            window.removeEventListener('resize', resizeFunc);
        };
    },[]);

    return (
        <>
        <div style={{perspective: '1000px'}} className="container m-[0_auto] w-[50px] h-[250px] relative top-[100px] left-[-15px] transition-all">
            <motion.div style={{transformStyle: 'preserve-3d'}} className="carousel h-full w-full absolute transition-all">
                {
                    items.map( (itm, idx) => {
                        return (
                            <motion.div ref={el => refArr.current[idx] = el as HTMLDivElement} key={idx} style={{transform: `rotateY(${degrees.current[idx]}deg) translateZ(${transZ})`}} 
                                className="transition-all duration-1000 item block absolute text-center rounded-md p-[10px]">
                                    <span style={{color: curMode.primary, fontSize: fontSize}} className="text-white transition-all">{itm.text}</span>
                                </motion.div>
                        )
                    })
                }
            </motion.div>
        </div>
        </>
    )
}