import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import { useState } from "react";
import { getTheme } from "./hooks/theme";

export default function Header() {
    const theme = getTheme();
    const isPresent = useIsPresent();
    const [state, setState] = useState({
        abt: !window.location.href.includes("/experience") && !window.location.href.includes("/project") ? true : false,
        exp: window.location.href.includes("/experience") ? true : false,
        prj: window.location.href.includes("/project") ? true : false
    })
    return (
        <motion.header 
        style={{borderBottomColor: theme.primary}}
        className="flex absolute top-0 left-0 z-[999] justify-center p-[1em] items-center w-full">
            <div className="">
                <section style={{color: theme.bg}}  className="flex gap-[1em] text-[1em] font-light items-center">
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
    )
}