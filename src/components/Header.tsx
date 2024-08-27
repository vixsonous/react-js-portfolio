import { defaultAnim, delayTime, Props } from "../constants";
import { motion } from "framer-motion";

export default function Header({curMode}: Props) {
    return (
        <motion.header 
        className="flex justify-between p-[1em] items-center w-full">
            <div className="mix-blend-difference ">
                <motion.h1 style={{color: curMode.bg}} className="text-[2em] font-light" initial="hidden" animate="visible">{"VC".split("").map((char, idx) => <motion.span transition={{ delay: delayTime.header + idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1>
            </div>
            <div className="mix-blend-difference">
                <section style={{color: curMode.bg}}  className="flex gap-[2em] text-[1em] font-light items-center">
                    <motion.h1 initial="hidden" animate="visible">{"About".split("").map((char, idx) => <motion.span transition={{ delay: delayTime.header + idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1>
                    <motion.h1 initial="hidden" animate="visible">{"Projects".split("").map((char, idx) => <motion.span transition={{ delay: delayTime.header + .3 + idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1>
                    <motion.h1 initial="hidden" animate="visible">{"Contact".split("").map((char, idx) => <motion.span transition={{ delay: delayTime.header + .7 + idx * 0.05 }} variants={defaultAnim}>{char}</motion.span>)}</motion.h1>
                </section>
            </div>
        </motion.header>
    )
}