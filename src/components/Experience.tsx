import React, { useEffect } from "react";
import { text } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination, Parallax } from "swiper/modules";
import CardsCarousel from "./CardsCarousel";
import CreativeSwiper from "./CreativeSwiper";
import HTMLSVG from "./svg/HTMLSVG";
import CSS3SVG from "./svg/CSS3SVG";
import JSSVG from "./svg/JSSVG";
import JquerySVG from "./svg/JquerySVG";
import PHPSVG from "./svg/PHPSVG";
import MySQLSVG from "./svg/MySQLSVG";
import ReactJSSVG from "./svg/ReactJSSVG";
import { getTheme } from "./hooks/theme";

export default function Experience() {

    const theme = getTheme();

    const swiperSlideClass = "py-[100px] px-[30px] lg:py-[100px] lg:px-[60px] min-h-[100vh]"

    const exp1 = [
        {text: 'JavaScript', svg: <JSSVG width={30} height={30}/>},
        {text: 'CSS', svg: <CSS3SVG width={30} height={30}/>},
        {text: 'HTML', svg: <HTMLSVG width={30} height={30} />},
        {text: 'Jquery', svg: <JquerySVG width={30} height={30}/>},
        {text: 'PHP', svg: <PHPSVG width={30} height={30}/>},
        {text: 'MySQL', svg: <MySQLSVG width={30} height={30}/>},
    ]
    
    const exp2 = [
        {text: 'HTML', color: '#6C88A6', textColor: '#fff', svg: <HTMLSVG width={50} height={50} />},
        {text: 'CSS', color: '#A4B8C8', textColor: '#fff', svg: <CSS3SVG width={50} height={50} />},
        {text: 'JavaScript', color: '#9DBCC5', textColor: '#fff', svg: <JSSVG width={50} height={50} />},
        {text: 'Jquery', color: '#D2E0E9', textColor: '#3A3A3A', svg: <JquerySVG width={50} height={50} />},
        {text: 'PHP', color: '#A4B8C8', textColor: '#fff', svg: <PHPSVG width={50} height={50} />},
        {text: 'Laravel', color: '#F1F4F9', textColor: '#3A3A3A', svg: <HTMLSVG width={50} height={50} />},
        {text: 'MySQL', color: '#A9C6D9', textColor: '#fff', svg: <MySQLSVG width={50} height={50} />},
        {text: 'ReactJS', color: '#D0D9E2', textColor: '#3A3A3A', svg: <ReactJSSVG width={50} height={50} />},
    ]

    useEffect(() => {
        window.dispatchEvent(new Event('resize'))
    },[]);

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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
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
                                Mid-Level Software Engineer / <br/><span className="text-[.5em] font-light">September 2021 - Present</span>
                            </div>
                            <div style={{fontSize: text.body}} className="subtitle font-bold" data-swiper-parallax="-200">
                                Seed Tech Philippines
                            </div>
                            <div style={{fontSize: text.small}} className="text" data-swiper-parallax="-100">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                </p>
                            </div>
                        </div>
                        <div className="flex-[1_0_50%]">
                            asd
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
}