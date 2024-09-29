import { useEffect, useRef } from "react";
import { Props, text } from "../constants";
import { useScroll, motion, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import CardsCarousel from "./CardsCarousel";
import CreativeSwiper from "./CreativeSwiper";

export default function Experience({curMode} : Props) {

    const swiperSlideClass = "py-[100px] px-[30px] lg:py-[100px] lg:px-[60px] min-h-[100vh]"

    const exp1 = [
        {text: 'HTML'},
        {text: 'CSS'},
        {text: 'JavaScript'},
        {text: 'Jquery'},
        {text: 'PHP'},
        {text: 'MySQL'},
    ]
    
    const exp2 = [
        {text: 'HTML', color: '#6C88A6', textColor: '#fff'},
        {text: 'CSS', color: '#A4B8C8', textColor: '#fff'},
        {text: 'JavaScript', color: '#9DBCC5', textColor: '#fff'},
        {text: 'Jquery', color: '#D2E0E9', textColor: '#3A3A3A'},
        {text: 'PHP', color: '#A4B8C8', textColor: '#fff'},
        {text: 'Laravel', color: '#F1F4F9', textColor: '#3A3A3A'},
        {text: 'MySQL', color: '#A9C6D9', textColor: '#fff'},
        {text: 'ReactJS', color: '#D0D9E2', textColor: '#3A3A3A'},
    ]

    return (
        <Swiper
                speed={600}
                parallax={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                style={{color: curMode.textColor}}
                className="flex-[1_0_50%] w-full h-full"
            >
                <div
                slot="container-start"
                className="absolute left-0 top-0 w-[130%] h-full bg-cover bg-center"
                style={{
                    backgroundImage: curMode.bg,
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
                            <CardsCarousel curMode={curMode} items={exp1}/>
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
    )
}