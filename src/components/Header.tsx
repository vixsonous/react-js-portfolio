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
                    <Link onClick={() => setState(prev => ({...prev, abt: true, exp: false, prj: false}))} to="/">
                        <span className={`font-semibold px-[10px] py-[5px] border-[#3D52A0] border-[1px] ${state.abt ? 'active' : 'hover:text-[#3D52A0]'} text-[#8697C4] rounded-2xl transition-all`}>Myself</span>
                    </Link>
                    <Link onClick={() => setState(prev => ({...prev, abt: false, exp: true, prj: false}))} to="/experience">
                        <span className={`font-semibold px-[10px] py-[5px] border-[#3D52A0] border-[1px] ${state.exp ? 'active' : 'hover:text-[#3D52A0]'} hover:border-[#3D52A0] text-[#8697C4] rounded-2xl transition-all`}>Experience</span>
                    </Link>
                    <Link onClick={() => setState(prev => ({...prev, abt: false, exp: false, prj: true}))} to="/projects">
                        <span className={`font-semibold px-[10px] py-[5px] border-[#3D52A0] border-[1px] ${state.prj ? 'active' : 'hover:text-[#3D52A0]'} hover:border-[#3D52A0] text-[#8697C4] rounded-2xl transition-all`}>Projects</span>
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