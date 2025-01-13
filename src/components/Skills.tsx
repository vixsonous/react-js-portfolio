import { useInView, motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useAppSelector } from "../store";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import React, { useEffect, useRef, useState } from "react";
import { sm } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {git, docker, aws, nextjs, nodejs, laravel, scss, bootstrap, html, css3, jquery, js, react, tech, trend, uiux, tsLm, php, javaLm, cppLm, cLm, pythonLm} from "./svg/svg.paths";
import SVG from "./svg/SVG";
import { BracketsCurly, Code, Database, Eye, EyeClosed, EyeSlash, FileCode, GitBranch, Layout, RocketLaunch } from "@phosphor-icons/react";

export default function Skills() {

    const theme = useAppSelector(state => state.theme.theme);

    const [state, setState] = useState({
        skills: [
            <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
            <SVG key={2} width={40} height={40} viewBox="0 0 48 48">{css3.svg}</SVG>,
            <SVG key={3} width={40} height={40} viewBox="0 0 50 50">{jquery.svg}</SVG>,
            <SVG key={4} width={40} height={40} viewBox="0 0 48 48">{js.svg}</SVG>,
            <SVG key={5} width={40} height={40} viewBox="0 0 100 100">{react.svg}</SVG>,
            <SVG key={6} width={40} height={40} viewBox="0 0 48 48">{bootstrap.svg}</SVG>,
            <SVG key={7} width={40} height={40} viewBox="0 0 32 32">{scss.svg}</SVG>,
            <SVG key={8} width={40} height={40} viewBox="0 0 394.00000000000006 79.433">{nextjs.svg}</SVG>,
            <SVG key={9} width={40} height={40} viewBox="0 0 256 282">{nodejs.svg}</SVG>,
            <SVG key={10} width={40} height={40} viewBox="0 -.11376601 49.74245785 51.31690859">{laravel.svg}</SVG>,
            <SVG key={11} width={40} height={40} viewBox="0 0 256 108">{git.svg}</SVG>,
            <SVG key={12} width={40} height={40} viewBox={docker.viewBox}>{docker.svg}</SVG>,
            <SVG key={13} width={40} height={40} viewBox="-.1 1.1 304.9 179.8">{aws.svg}</SVG>,
        ],
        x: 0,
    })

    const ref = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLElement>(null);
    const inView = useInView(sm() ? mobileRef : ref, { once: true});

    const { scrollYProgress } = useScroll({target: scrollRef});

    const x = useTransform(scrollYProgress, [0, 1], [0, 20]);

    useMotionValueEvent(x, "change", (latest) => {
        setState(prev => ({...prev, x: latest}));
    });

    const content = [
      {
        svg: <Code color="white" size={24} />, 
        title: 'Programming Languages', 
        content: 'TypeScript, JavaScript, HTML, CSS, PHP, Java, C++, C, Python, Assembly.',
        children: [
          <SVG key={1} width={40} height={40} viewBox={tsLm.viewBox}>{tsLm.svg}</SVG>,
          <div className="scale-125"><SVG key={1} width={40} height={40} viewBox="0 0 48 48">{js.svg}</SVG></div>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{css3.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox={php.viewBox} preserveAspectRatio={php.preserveAspectRatio}>{php.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox={javaLm.viewBox}>{javaLm.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox={cppLm.viewBox} preserveAspectRatio={cppLm.preserveAspectRatio}>{cppLm.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox={cLm.viewBox}>{cLm.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox={pythonLm.viewBox} preserveAspectRatio={pythonLm.preserveAspectRatio}>{pythonLm.svg}</SVG>,
          <FileCode size={40} color="white"/>,
        ]
      },
      {
        svg: <Layout size={24} color="white"/>, 
        title: 'Frontend', 
        content: 'React, NextJs, VueJs, Tailwind, Redux, SEO, Bootstrap, jQuery.',
        children: [
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>
        ]
      },
      {
        svg: <BracketsCurly size={24} color="white"/>, 
        title: 'Backend', 
        content: 'NodeJs, Express, Laravel, RESTful API, Spring Boot, Django.',
        children: [
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
        ]
      },
      {
        svg: <Database size={24} color="white"/>, 
        title: 'Database', 
        content: 'MySQL, Postgres, Oracle.',
        children: [
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
        ]
      },
      {svg: <RocketLaunch 
        size={24} color="white"/>, 
        title: 'Deployment', 
        content: 'Linux, AWS, Docker, FTP, Firebase.',
        children: [
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
        ]
      },
      {
        svg: <GitBranch size={24} color="white"/>, 
        title: 'Version Control', 
        content: 'Git.',
        children: [
          <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
        ]
      },
    ]

    return (
        <React.Fragment>
            <main ref={scrollRef} className="relative flex flex-col gap-[10vh]">
                <div className="min-h-[100vh] flex flex-col gap-[10vh]">
                    <section ref={ref} className="px-4">
                        <h1 className="self-center max-w-screen-xl mx-auto flex text-6xl lg:text-8xl flex-col left-72 z-50 pt-0">
                            <CoverAnimSubtitleText show={ inView} cover={false} dispText='Skills and' textColor={theme.secondary}/>
                            <div className="flex ">
                                <CoverAnimSubtitleText delay={.2} show={ inView} cover={false} dispText='To' textColor={theme.secondary}/>
                                <CoverAnimSubtitleText delay={.2} show={ inView} cover={false} dispText='ols.' textColor={theme.primary}/>
                            </div>
                        </h1>
                    </section>
                    <section className="flex flex-[1_0_100%] h-full pt-0">
                        <div className="flex h-full gap-8 max-w-screen-xl mx-auto w-full flex-wrap justify-center px-6">
                            {
                              content.map( (c, idx) => {

                                const [mouseOver, setMouseOver] = useState(false);
                                const [init, setInit] = useState(false);
                                const [viewSkills, setViewSkills] = useState(false);

                                const isMouseOver = () => setMouseOver(true);
                                const notMouseOver = () => setMouseOver(false);
                                const isViewSkills = () => setViewSkills(true);
                                const notViewSkills = () => setViewSkills(false);

                                const parent = useRef<HTMLDivElement>(null);
                                
                                var div = 360 / c.children.length;
                                var radius = c.children.length * 17;
                                if(parent && parent.current && !init) {
                                  var offsetToParentCenter = parent.current.offsetWidth / 2; //assumes parent is square
                                  var offsetToChildCenter = 30;
                                  var totalOffset = offsetToParentCenter - offsetToChildCenter;
                                  console.log(totalOffset);
                                  for (var i = 0; i < c.children.length; ++i) {
                                    var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
                                    var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
                                    const childdiv = document.querySelector(`#container-${idx}-${i}`) as HTMLDivElement;
                                    if(childdiv) {
                                      childdiv.style.top = (y + totalOffset).toString() + "px";
                                      childdiv.style.left = c.children.length === 1 ? "40px" : (x + totalOffset).toString() + "px";
                                    }
                                    
                                  }
                                  setInit(true);
                                }
                                
                                return (
                                  <motion.div key={idx} animate={{y: (state.x) * 0}} className="max-w-max w-full " transition={{duration: 1}}>
                                    <motion.div
                                        onMouseOver={isMouseOver}
                                        onMouseLeave={notMouseOver}
                                        initial={{opacity: 0, y: 50}}
                                        animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
                                        transition={{delay: .5 + (.25 * idx), ease: 'easeOut'}}
                                        style={{background: theme.card, scale: mouseOver && !viewSkills ? 1.05 : 1}}
                                        className=" flex p-4 flex-col shadow-lg w-full transition"
                                    >
                                        <div className="relative flex justify-between w-full items-center">
                                          {c.svg}
                                          <div ref={parent} className="relative flex justify-center">
                                            {
                                              viewSkills ? 
                                                <EyeSlash className="cursor-pointer" size={24} onClick={notViewSkills} color="white"/> :
                                                <Eye className="cursor-pointer" size={24} onClick={isViewSkills} color="white"/>
                                            }
                                            {
                                              c.children.map( (x, _idx) => {
                                                return (
                                                  <div 
                                                    style={{background: theme.secondary, height: '65px', width: '65px', zIndex: viewSkills ? 100 : -100, opacity: viewSkills ? 1 : 0}} 
                                                    id={`container-${idx}-${_idx}`} 
                                                    className="transition absolute flex justify-center items-center rounded-full aspect-square z-[9999]">
                                                    {x}
                                                  </div>
                                                )
                                              })
                                            }
                                          </div>
                                        </div>
                                        <CoverAnimSubtitleText delay={.5} show={inView} fontSizeClass="text-xl" dispText={c.title} textColor={theme.cardText}/>
                                        <span style={{color: theme.cardText}} className="mt-8 text-sm">{c.content}</span>
                                    </motion.div>
                                  </motion.div>
                                )
                              })
                            }
                        </div>
                    </section>
                    {/* <section ref={ref} className="flex flex-[1_0_100%]">
                        <Swiper
                            autoplay
                            breakpoints={{
                                0: {
                                slidesPerView: 3,
                                },
                                768: {
                                slidesPerView: 8,
                                },
                            }}
                            loop
                            modules={[Autoplay]}
                            className="mySwiper6 lg:m-[100px_auto] w-[80vw] lg:w-[100vw] max-w-screen-2xl h-[150px] rounded-lg"
                        >
                            {
                                state.skills.map( (el, idx) => {
                                    return (
                                        <SwiperSlide key={idx} style={{fontSize: text.logo}} className="flex items-center justify-center gap-[10px] text-white relative">
                                            <motion.div initial={{opacity: 0}} animate={{opacity: inView ? 1 : 0}} transition={{delay: (idx * .13)}} style={{background: theme.primary}} className="transition-all hover:scale-150 shadow-md p-[10px] rounded-full">
                                                {el}
                                            </motion.div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </section> */}
                </div>
            </main>
        </React.Fragment>
    )
}