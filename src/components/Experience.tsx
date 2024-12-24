import React, { useEffect, useRef, useState } from "react";
import { text } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination, Parallax } from "swiper/modules";
import CardsCarousel from "./CardsCarousel";
import CreativeSwiper from "./CreativeSwiper";
import { getTheme } from "./hooks/theme";
import { css3, html, jquery, js, mysql, php, react } from "./svg/svg.paths";
import SVG from "./svg/SVG";

export default function Experience() {

    const theme = getTheme();

    const swiperSlideClass = "py-[100px] px-[30px] lg:py-[100px] lg:px-[60px] min-h-[100vh]"

    const exp1 = [
        {text: 'JavaScript', svg: <SVG key={4} width={40} height={40} viewBox="0 0 48 48">{js.svg}</SVG>},
        {text: 'CSS', svg: <SVG key={2} width={40} height={40} viewBox="0 0 48 48">{css3.svg}</SVG>},
        {text: 'HTML', svg: <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>},
        {text: 'Jquery', svg: <SVG key={3} width={40} height={40} viewBox="0 0 50 50">{jquery.svg}</SVG>},
        {text: 'PHP', svg: <SVG key={3} width={40} height={40} viewBox="0 0 50 50">{php.svg}</SVG>},
        {text: 'MySQL', svg: <SVG key={3} width={40} height={40} viewBox="0 0 50 50">{mysql.svg}</SVG>},
    ]
    
    const exp2 = [
        {text: 'HTML', color: '#6C88A6', textColor: '#fff', svg: <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>},
        {text: 'CSS', color: '#A4B8C8', textColor: '#fff', svg: <SVG key={2} width={40} height={40} viewBox="0 0 48 48">{css3.svg}</SVG>},
        {text: 'JavaScript', color: '#9DBCC5', textColor: '#fff', svg: <SVG key={4} width={40} height={40} viewBox="0 0 48 48">{js.svg}</SVG>},
        {text: 'Jquery', color: '#D2E0E9', textColor: '#3A3A3A', svg: <SVG key={3} width={40} height={40} viewBox="0 0 50 50">{jquery.svg}</SVG>},
        {text: 'PHP', color: '#A4B8C8', textColor: '#fff', svg: <SVG key={3} width={30} height={30} viewBox={php.viewBox} preserveAspectRatio={php.preserveAspectRatio}>{php.svg}</SVG>},
        {text: 'Laravel', color: '#F1F4F9', textColor: '#3A3A3A', svg: <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>},
        {text: 'MySQL', color: '#A9C6D9', textColor: '#fff', svg: <SVG key={3} width={40} height={40} viewBox="0 0 50 50">{mysql.svg}</SVG>},
        {text: 'ReactJS', color: '#D0D9E2', textColor: '#3A3A3A', svg: <SVG key={5} width={40} height={40} viewBox="0 0 100 100">{react.svg}</SVG>},
    ]

    useEffect(() => {
        window.dispatchEvent(new Event('resize'))
    },[]);

    // Third experience
    const exp3 = [
      {text: 'HTML', color: '#6C88A6', textColor: '#fff', svg: <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>},
      {text: 'CSS', color: '#A4B8C8', textColor: '#fff', svg: <SVG key={2} width={40} height={40} viewBox="0 0 48 48">{css3.svg}</SVG>},
      {text: 'JavaScript', color: '#9DBCC5', textColor: '#fff', svg: <SVG key={4} width={40} height={40} viewBox="0 0 48 48">{js.svg}</SVG>},
      {text: 'Jquery', color: '#D2E0E9', textColor: '#3A3A3A', svg: <SVG key={3} width={40} height={40} viewBox="0 0 50 50">{jquery.svg}</SVG>},
      {text: 'PHP', color: '#A4B8C8', textColor: '#fff', svg: <SVG key={3} width={30} height={30} viewBox={php.viewBox} preserveAspectRatio={php.preserveAspectRatio}>{php.svg}</SVG>},
      {text: 'Laravel', color: '#F1F4F9', textColor: '#3A3A3A', svg: <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>},
      {text: 'MySQL', color: '#A9C6D9', textColor: '#fff', svg: <SVG key={3} width={40} height={40} viewBox="0 0 50 50">{mysql.svg}</SVG>},
      {text: 'ReactJS', color: '#D0D9E2', textColor: '#3A3A3A', svg: <SVG key={5} width={40} height={40} viewBox="0 0 100 100">{react.svg}</SVG>},
    ] 

    const animateItem = (t: HTMLHeadingElement | HTMLDivElement | HTMLSpanElement, activeItem: number) => {
      t.style.opacity = '0';
      t.style.transform = 'translateX(100px)';
      t.style.transition = 'all 1s';
      setTimeout(() => {
        t.style.transition = 'all 0s';
        t.style.transform = 'translateX(-100px)';
      },1000);
      setTimeout(() => {
        t.style.transition = 'all 1s';
        t.style.transform = 'translateX(0px)';
        setActiveItem(activeItem);
        t.style.opacity = '1';
      },1100);
    }

    const [activeItem, setActiveItem] = useState(0);
    const [animating, setAnimating] = useState(false);
    const h1Item = useRef<HTMLHeadingElement>(null);
    const divItem = useRef<HTMLDivElement>(null);
    const spanItem = useRef<HTMLSpanElement>(null);

    const nextItem = (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if(!h1Item || !h1Item.current) return;
      if(!divItem || !divItem.current) return;
      if(!spanItem || !spanItem.current) return;
      if(animating) return;
      setAnimating(true);
      const t = h1Item.current;
      const d = divItem.current;
      const s = spanItem.current;
      animateItem(t, activeItem + 1 === exp3.length ? 0 : activeItem + 1);
      setTimeout(() => {
        animateItem(s, activeItem + 1 === exp3.length ? 0: activeItem + 1);
      }, 100);
      setTimeout(() => {
        animateItem(d, activeItem + 1 === exp3.length ? 0: activeItem + 1);
      },200);
      setTimeout(() => {
        setAnimating(false);
      },1000);
    }

    const prevItem = (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if(!h1Item || !h1Item.current) return;
      if(!divItem || !divItem.current) return;
      if(!spanItem || !spanItem.current) return;
      if(animating) return;
      setAnimating(true);
      const t = h1Item.current;
      const d = divItem.current;
      const s = spanItem.current;
      animateItem(t, activeItem - 1 === -1 ? exp3.length - 1: activeItem - 1);
      setTimeout(() => {
        animateItem(s, activeItem - 1 === -1 ? exp3.length - 1: activeItem - 1);
      },100);
      setTimeout(() => {
        animateItem(d, activeItem - 1 === -1 ? exp3.length - 1: activeItem - 1);
      },200);
      setTimeout(() => {
        setAnimating(false);
      },1000);
    }

    return (
        <React.Fragment>
            <Swiper
                speed={600}
                parallax={true}
                mousewheel
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Mousewheel]}
                style={{color: theme.textColor}}
                className="flex-[1_0_50%] w-full h-full"
            >
                <div
                slot="container-start"
                className="absolute left-0 top-0 w-[130%] h-full bg-cover bg-center"
                style={{
                    backgroundImage: theme.bg,
                }}
                data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className={swiperSlideClass}>
                    <div className="flex flex-wrap overflow-hidden">
                        <div className="flex-[1_0_100%] lg:flex-[1_0_50%] flex flex-col gap-[10px] lg:pr-[100px]">
                            <div style={{fontSize: text.logo}} className="leading-[55px]" data-swiper-parallax="-300">
                                Intern Full Stack Developer / <br/><span className="text-[.5em] font-light">May 2018 - January 2019</span>
                            </div>
                            <div style={{fontSize: text.body}} className="subtitle font-bold" data-swiper-parallax="-200">
                                TIG Designs and Solutions Cebu City
                            </div>
                            <div style={{fontSize: text.small}} className="text" data-swiper-parallax="-100">
                                <p>
                                I worked with a small startup to transform user needs into actionable project designs and implementation strategies. My contributions included designing and developing a secure database to manage patient information and dental histories. I also built a dynamic web application with an interactive dental record system, enabling detailed tracking of notes for each tooth. Collaborating closely with the project manager, I provided regular updates, gathered feedback at critical stages, and addressed concerns to ensure the project aligned with the startup's goals.
                                </p>
                            </div>
                        </div>
                        <div className="flex-[1_0_50%]"></div>
                        <div className="flex-[1_0_100%]">
                            <CardsCarousel items={exp1}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={swiperSlideClass}>
                    <div className="flex flex-wrap">
                        <div className="flex-[1_0_50%] flex flex-col gap-[10px]">
                            <div style={{fontSize: text.logo}} className="leading-[55px]" data-swiper-parallax="-300">
                                Freelance Developer / <br/><span className="text-[.5em] font-light">July 2021 - December 2022</span>
                            </div>
                            <div style={{fontSize: text.body}} className="subtitle font-bold" data-swiper-parallax="-200">
                                Yazaki Real Estate
                            </div>
                            <div style={{fontSize: text.small}} className="text" data-swiper-parallax="-100">
                                <p>
                                I collaborated with a small Japanese startup in the real estate sector, working closely with the project manager to align on objectives and track progress. My role involved identifying and resolving issues in an existing project to improve its functionality and quality. In parallel, I designed, developed, and implemented a new React-based clone of the project, reimagining it in a modern tech stack. Additionally, I provided suggestions for UI improvements to enhance the user experience and contributed new features to both the old and new versions of the project.
                                </p>
                            </div>
                        </div>
                        <div className="flex-[1_0_50%]">
                            <CreativeSwiper items={exp2}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={swiperSlideClass}>
                    <div className="flex flex-wrap">
                        <div className="flex-[1_0_50%] flex flex-col gap-[10px]">
                            <div style={{fontSize: text.logo}} className="leading-[55px]" data-swiper-parallax="-300">
                                Senior Software Engineer / <br/><span className="text-[.5em] font-light">September 2021 - Present</span>
                            </div>
                            <div style={{fontSize: text.body}} className="subtitle font-bold" data-swiper-parallax="-200">
                                Seed Tech Philippines
                            </div>
                            <div style={{fontSize: text.small}} className="text" data-swiper-parallax="-100">
                                <p>
                                As an offshore developer for a large enterprise company, I contributed to an enterprise-level project by developing features within the framework of the waterfall software development lifecycle. I led daily scrum meetings, reporting progress to the project manager and ensuring alignment across the team. I supported team growth by mentoring junior engineers, delivering training sessions for new hires, and managing task distribution, including creating, assigning, and updating tasks. Collaborating with an international team, I maintained smooth project development, prepared and managed project documentation, and conducted code reviews to ensure quality and adherence to standards.
                                </p>
                            </div>
                        </div>
                        <div className="flex-[1_0_50%] w-full h-full flex justify-center items-center">
                          <div style={{background: `radial-gradient(circle, #353B3C 0%, #1F1F1F 90%)`}} className="relative w-full h-[500px] flex justify-between items-center">
                            <div className="w-full flex flex-col justify-center items-center">
                              <h1 ref={h1Item} className="text-white text-8xl">
                                {
                                  exp3[activeItem].text
                                }
                              </h1>
                              <span ref={spanItem}>
                                {exp3[activeItem].svg}
                              </span>
                              <div ref={divItem} className="text-white">
                                <span>Description</span>
                              </div>
                              <div style={{background: theme.primary}} className=" -z-10 absolute w-full h-full top-1 left-1 opacity-80"></div>
                            </div>
                            
                            <div className="absolute bottom-16 w-full flex justify-between">
                              <button style={{background: theme.primary}} onClick={prevItem} className="text-white w-12 h-12 -left-6 md:w-20 md:h-20 relative md:-left-10 opacity-80 circle-path transition-all">-</button>
                              <button style={{background: theme.primary}} onClick={nextItem} className="text-white w-12 h-12 -right-6 md:w-20 md:h-20 relative md:-right-10 opacity-80 circle-path transition-all">+</button>
                            </div>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
}