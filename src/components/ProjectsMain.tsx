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
    ];

    const content = [
      {title: <h1 className="text-white text-2xl">Rakuten Fresh</h1>},
      {title: <h1 className="text-white text-2xl">Rakutech</h1>},
      {title: <h1 className="text-white text-2xl">Web5D</h1>},
      {title: <h1 className="text-white text-2xl">Wangohan</h1>},
      {title: <h1 className="text-white text-2xl">GVO</h1>},
      {title: <h1 className="text-white text-2xl">JTB Australia</h1>},
    ]
    const [scrollY, setScrollY] = useState(0);

    useMotionValueEvent(y, "change", (latest) => {
      setScrollY(latest);
  });
  
    return (
        <React.Fragment>
          <main ref={loadingRef} className="min-h-[400vh] w-full relative">
            <div className="sticky top-0 flex flex-wrap h-full justify-center w-screen">
              <div className="flex-[1_0_100%] flex justify-end relative">
                  <span style={{color: theme.primary}} className="text-8xl text-right w-full z-50"><span style={{color:theme.secondary}}>Pro</span>jects</span>
              </div>
              <div style={{transform: `translate(${scrollY}%, 0%)`}} className="flex-[1_0_100%] h-screen transform flex left-full gap-[10vw] relative">
              {
                imgSrc.map((img, idx) => {
                  return (
                    <a key={idx} className="split-image-effect--container w-[25vw] h-[500px]">
                      <img style={{objectPosition: `${scrollY * -.5}% 50%`}} className="w-full h-full cursor-pointer object-cover grayscale hover:grayscale-0" src={img} alt="" />
                      <div style={{background: `radial-gradient(circle, #353B3C 0%, #1F1F1F 90%)`}} className="w-full h-full cursor-pointer object-cover grayscale hover:grayscale-0">
                        <div className="flex flex-col p-4">
                          {content[idx].title}
                        </div>
                      </div>
                    </a>
                  )
                })
              }
              </div>
            </div>
          </main>
        </React.Fragment>
    )
}