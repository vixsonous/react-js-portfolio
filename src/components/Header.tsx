import { Link } from "react-router-dom";
import { defaultAnim, Props } from "../constants";
import { motion, useIsPresent } from "framer-motion";

export default function Header({curMode}: Props) {
    const isPresent = useIsPresent();
    return (
        <motion.header 
        className="flex absolute top-0 left-0 z-[999] justify-between p-[1em] items-center w-full">
            <div className=" ">
                <motion.h1 style={{color: curMode.primary, opacity: 0}} className="text-[2em] font-bold" initial="hidden" animate="visible">{".".split("").map((char, idx) => <motion.span key={new Date().getTime() * Math.random()} transition={{ delay:  idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1>
            </div>
            <div className="">
                <section style={{color: curMode.bg}}  className="flex gap-[2em] text-[1em] font-light items-center">
                    <Link to="/"><motion.h1 initial="hidden" animate="visible">{"About".split("").map((char, idx) => <motion.span key={idx} transition={{ delay: .7 + ("About".length - idx - 1) * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1></Link>
                    <Link to="/experience"><motion.h1 initial="hidden" animate="visible">{"Experience".split("").map((char, idx) => <motion.span key={idx} transition={{ delay:  .3 + ("Experience".length - idx - 1) * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1></Link>
                    <Link to="/projects"><motion.h1 initial="hidden" animate="visible">{"Projects".split("").map((char, idx) => <motion.span key={idx} transition={{ delay:  ("Projects".length - idx - 1) * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1></Link>
                </section>
            </div>
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 , background: curMode.primary}}
                className="privacy-screen fixed top-0 left-0 right-0 bottom-0 z-[2]"
            />
        </motion.header>
    )
}