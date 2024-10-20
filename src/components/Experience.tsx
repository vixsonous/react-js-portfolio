import React, { useEffect } from "react";
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