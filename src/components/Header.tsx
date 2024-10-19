import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useIsPresent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getTheme } from "./hooks/theme";

export default function Header() {
    const theme = getTheme();
    const isPresent = useIsPresent();
    const [state, setState] = useState({
        abt: !window.location.href.includes("/experience") && !window.location.href.includes("/project") ? true : false,
        exp: window.location.href.includes("/experience") ? true : false,
        prj: window.location.href.includes("/project") ? true : false
    });

    const ref = useRef<HTMLElement>(null);

    const isInView = useInView(ref);

    useEffect(() => {
        if(isInView) console.log('is in view!');
        if(!isInView) console.log('is not in view!');
    },[isInView]);

    return (
        <>
        <motion.header 
            ref={ref}
            style={{borderBottomColor: theme.primary}}
            className="flex top-0 left-0 z-[999] justify-center transition-all p-[1em] items-center w-full"
        >
            <div className="">
                <section style={{color: theme.bg}}  className="flex gap-[1em] text-xs font-light items-center">
                    <Link className="relative group" onClick={() => setState(prev => ({...prev, abt: true, exp: false, prj: false}))} to="/">
                        <span style={{color: theme.primary}} className={`px-[10px] py-[5px] transition-all`}>Myself</span>
                        <div style={{background: theme.primary}} className={`absolute transition-all ${state.abt ? 'w-full' : 'w-0'} group-hover:w-full h-[2px] bottom-[-8px]`}></div>
                    </Link>
                    <Link className="relative group" onClick={() => setState(prev => ({...prev, abt: false, exp: true, prj: false}))} to="/experience">
                        <span style={{color: theme.primary}} className={` px-[10px] py-[5px] transition-all`}>Experience</span>
                        <div style={{background: theme.primary}} className={`absolute transition-all ${state.exp ? 'w-full' : 'w-0'} group-hover:w-full h-[2px] bottom-[-8px]`}></div>
                    </Link>
                    <Link className="relative group" onClick={() => setState(prev => ({...prev, abt: false, exp: false, prj: true}))} to="/projects">
                        <span style={{color: theme.primary}} className={` px-[10px] py-[5px] transition-all`}>Projects</span>
                        <div style={{background: theme.primary}} className={`absolute transition-all ${state.prj ? 'w-full' : 'w-0'} group-hover:w-full h-[2px] bottom-[-8px]`}></div>
                    </Link>
                </section>
            </div>
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 , background: theme.primary}}
                className="privacy-screen fixed top-0 left-0 right-0 bottom-0 z-[2]"
            />
        </motion.header>
        <AnimatePresence mode="popLayout">
        {
            !isInView && (
                <motion.header layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed top-0 right-0">
                    <div className="slider-container-global">
                        <input type="range" className="ts-range scroll-range" min="0" max="100" value="0"/>
                        <span id="top-seller-slider" className="top-seller-gradient-clip-text">swipe 
                            <svg fill="#000000" height="15px" width="15px" version="1.1" id="seller-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 330 330" xmlSpace="preserve">
                                {/* <style type="text/css">
                                    #seller-arrow{{fill:url(#seller-arrow-gradient)}}
                                    .breadcrumb-container{{display:none}}
                                </style> */}
                                <defs>
                                    <linearGradient id="seller-arrow-gradient">
                                    <stop offset="0%" stop-color="#D21E32" />
                                    <stop offset="65%" stop-color="#DC6464" />
                                    <stop offset="100%" stop-color="#E48E8D" />
                                    </linearGradient>
                                </defs>
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                                    C255,161.018,253.42,157.202,250.606,154.389z"/>
                            </svg>		
                        </span>
                    </div>
                </motion.header>
            )
        }
        </AnimatePresence>
        </>
    )
}