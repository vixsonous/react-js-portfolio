import React, { useRef, useState } from "react";
import { getTheme } from "./hooks/theme";
import { useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

export default function ProjectsMain() {

    const theme = getTheme();

    const loadingRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: loadingRef,
    });

    const dVar = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y = useSpring(dVar, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    })

    const imgSrc = [
      '/cards/rfresh-card.png',
      '/cards/rakutech-card.png',
      '/cards/web5d-card.png',
      '/cards/wangohan-card.png',
      '/cards/gvo-card.png',
      '/cards/jtb-card.png'
    ]
    const [scrollY, setScrollY] = useState(0);

    useMotionValueEvent(y, "change", (latest) => {
      setScrollY(latest);
  });
  
    return (
        <React.Fragment>
          <main ref={loadingRef} className="min-h-[400vh] w-full relative">
            <div className="sticky top-0 flex flex-wrap h-full justify-center overflow-hidden">
              <div className="flex-[1_0_100%] flex justify-end relative">
                  <span style={{color: theme.primary}} className="text-8xl right-8 z-50"><span style={{color:theme.secondary}}>Pro</span>jects</span>
              </div>
              <div style={{transform: `translate(${scrollY * 1.5}%, 0%)`}} className="flex-[1_0_100%] h-screen transform flex gap-[4vmin] relative left-3/4">
              {
                imgSrc.map((img, idx) => {
                  return (
                    <>
                    <img style={{objectPosition: `${scrollY * -1}% 50%`}} key={idx} draggable={false} className="w-[25vw] drop-shadow-lg h-[500px] object-cover grayscale" src={img} alt="" />
                    </>
                  )
                })
              }
              </div>
            </div>
          </main>
        </React.Fragment>
    )
}