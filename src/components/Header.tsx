import { Link } from "react-router-dom";
import {  motion, useIsPresent } from "framer-motion";
import React, {  useRef, useState } from "react";
import { getTheme } from "./hooks/theme";
import MovingText from "./text/MovingText";
import { sm } from "../constants";

export default function Header() {
    const theme = getTheme();
    const isPresent = useIsPresent();
    const [state, setState] = useState({
        abt: !window.location.href.includes("/experience") && !window.location.href.includes("/project") ? true : false,
        exp: window.location.href.includes("/experience") ? true : false,
        prj: window.location.href.includes("/project") ? true : false,
        scroll: 0
    });

    const ref = useRef<HTMLElement>(null);

    return (
        <React.Fragment>
            <motion.header 
                ref={ref}
                style={{borderBottomColor: theme.primary}}
                className="flex top-0 left-0 z-[999] justify-between transition-all p-[1em] items-center w-full"
            >
                <div>
                    <MovingText 
                        text="chiong." 
                        className='font-semibold text-lg' 
                        style={{color: theme.secondary}} 
                        x={state.scroll}
                    />
                    <MovingText 
                        text="victor" 
                        className='font-light text-lg' 
                        style={{color: theme.primary}} 
                        x={state.scroll}
                    />
                </div>
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
                {
                    sm() ? (
                        <motion.div
                            initial={{ scaleY: 1 }}
                            animate={{ scaleY: 0, transition: { duration: 0.5, ease: "circOut" } }}
                            exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
                            style={{ originY: isPresent ? 0 : 1 , background: theme.primary}}
                            className="privacy-screen fixed top-0 left-0 right-0 bottom-0 z-[2]"
                        />
                    ) : (
                        <motion.div
                            initial={{ scaleX: 1 }}
                            animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                            exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                            style={{ originX: isPresent ? 0 : 1 , background: theme.primary}}
                            className="privacy-screen fixed top-0 left-0 right-0 bottom-0 z-[2]"
                        />
                    )
                }
            </motion.header>
        </React.Fragment>
    )
}