import Slider from "react-slick";
import { delayTime, Props, text } from "../constants";
import {motion, useAnimationControls, useInView} from 'framer-motion';
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Projects({curMode}: Props) {

    const sliderBallClass = " text-left text-[#fff] text-center h-[50px] z-[9] relative lg:top-[20px] before:w-[15px] before:rounded-[15px] before:h-[15px] before:bg-[#D9D9D9] before:content-[''] lg:before:top-[5px] before:top-[30px] lg:before:left-[30px] before:left-[45%] before:absolute";

    const ref = useRef<SwiperRef>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(videoRef.current) videoRef.current.play();
    },[videoRef]);

    return (
        <main className=" min-h-[100vh] w-full relative">
            <div className="flex flex-wrap justify-center">
                <div  className="project-slick flex-[1_0_100%] relative z-[9] w-[100vw] lg:max-w-[500px] box-border">

                </div>
                <div className="">
                    <Swiper
                        ref={ref}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        spaceBetween={50}
                        initialSlide={0}
                        coverflowEffect={{
                            rotate: 20,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={{clickable: true}}
                        loop
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper py-[100px] w-[80vw]"
                    >
                        <SwiperSlide className="w-[400px] h-[400px]">
                            {({isActive}) => (
                                <motion.div initial={{y: 100, opacity: 0}} transition={{duration: .8,delay: .0, ease: 'easeOut'}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} className="relative overflow-hidden rounded-md">
                                    <motion.img className={`rounded-md h-[400px] ${isActive ? 'p-[5px]' : 'p-[5px]'} bg-transparent w-[100%] object-cover transition-all`} src={'/cards/rakutech-card.png'}  alt="website banner" />
                                    <div 
                                        style={{
                                            boxSizing: 'border-box', 
                                            width: 'calc(100% - 10px)', 
                                            height: 'calc(100% - 10px)', 
                                            marginLeft: '5px', 
                                            marginTop: '5px'
                                        }} 
                                        className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0]'} bg-black`}
                                    ></div>
                                    <motion.div 
                                        initial={{
                                            width: '0%',
                                        }}
                                        animate={{
                                            width: isActive ? '100%' : '0%',
                                        }}
                                        transition={{
                                            duration: .5,
                                            ease: 'linear',
                                            delay: 0,
                                        }}
                                        style={{
                                            boxSizing: 'border-box',
                                            backgroundImage: 'conic-gradient(#e84e7b, #9f61e8, #e84e7b)'
                                        }} 
                                        className={` absolute top-[0] left-[0] z-[-1] h-full rounded-md`}
                                    ></motion.div>

                                    <div className="absolute top-0 w-full h-full overflow-hidden">
                                        <div className="absolute bottom-0 p-[20px]">
                                            <h1 className="transition-all duration-1000" style={{fontSize: text.title, color: curMode.linkHoverColor, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>RAKUTECH</h1>
                                            <h1 className="font-light transition-all duration-700" style={{fontSize: text.small, color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >A project served as our final frontend project on our bootcamp. This project uses HTML, CSS, JS and SCSS.
                                                It takes on the challenges of session storage utilization, management of session, event listeners, and DOM manipulation. 
                                            </h1>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </SwiperSlide>
                        <SwiperSlide className="w-[400px] h-[400px]">
                            {({isActive}) => (
                                <motion.div initial={{y: 100, opacity: 0}} transition={{duration: .8,delay: .3, ease: 'easeOut'}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} className="relative overflow-hidden">
                                    <motion.img className={`rounded-md h-[400px] ${isActive ? 'p-[5px]' : 'p-[5px]'} bg-transparent w-[100%] object-cover transition-all`} src={'/cards/rfresh-card.png'} alt="website banner" />
                                    <div 
                                        style={{
                                            boxSizing: 'border-box', 
                                            width: 'calc(100% - 10px)', 
                                            height: 'calc(100% - 10px)', 
                                            marginLeft: '5px', 
                                            marginTop: '5px'
                                        }} 
                                        className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0]'} bg-black`}
                                    ></div>
                                    <motion.div 
                                        initial={{
                                            width: '0%',
                                        }}
                                        animate={{
                                            width: isActive ? '100%' : '0%',
                                        }}
                                        transition={{
                                            duration: .5,
                                            ease: 'linear',
                                            delay: 0,
                                        }}
                                        style={{
                                            boxSizing: 'border-box',
                                            backgroundImage: 'conic-gradient(#ef4c00, #f48548, #232227, #4a3639, #ef4c00)'
                                        }} 
                                        className={` absolute top-[0] left-[0] z-[-1] h-full rounded-md`}
                                    ></motion.div>
                                    <div className="absolute top-0 w-full h-full overflow-hidden">
                                        <div className="absolute bottom-0 p-[20px]">
                                            <h1 className="transition-all duration-1000" style={{fontSize: text.title, color: curMode.linkHoverColor, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>Rakuten Fresh</h1>
                                            <h1 className="font-light transition-all duration-700" style={{fontSize: text.small, color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >A project served as our final frontend project on our bootcamp. This project uses HTML, CSS, JS and SCSS.
                                                It takes on the challenges of session storage utilization, management of session, event listeners, and DOM manipulation. 
                                            </h1>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </SwiperSlide>
                        <SwiperSlide className="w-[400px] h-[400px]">
                            {({isActive}) => (
                                <div className="relative overflow-hidden">
                                    {/* <motion.img viewport={{once:true}} src={'/cards/web5d-card.png'} className={`rounded-md h-[400px] ${isActive ? 'p-[5px]' : 'p-[5px]'} bg-transparent w-[100%] object-cover transition-all`}  alt="website banner" /> */}
                                    <video ref={videoRef} autoPlay src="/web5d.webm"  className={`rounded-md h-[400px] ${isActive ? 'p-[5px]' : 'p-[5px]'} w-[100%] object-cover transition-all`}>
                                    </video>
                                    <div 
                                        style={{
                                            boxSizing: 'border-box', 
                                            width: 'calc(100% - 10px)', 
                                            height: 'calc(100% - 10px)', 
                                            marginLeft: '5px', 
                                            marginTop: '5px'
                                        }} 
                                        className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0]'} bg-black`}
                                    ></div>
                                    <motion.div 
                                        initial={{
                                            width: '0%',
                                        }}
                                        animate={{
                                            width: isActive ? '100%' : '0%',
                                        }}
                                        transition={{
                                            duration: .5,
                                            ease: 'linear',
                                            delay: 0,
                                        }}
                                        style={{
                                            boxSizing: 'border-box',
                                            backgroundImage: 'conic-gradient(#f26b14, #fbdb73, #c54209, #180e07, #180e07, #fab462, #fbfacb,#fab462, #fab462, #f26b14)'
                                        }} 
                                        className={` absolute top-[0] left-[0] z-[-1] h-full rounded-md`}
                                    ></motion.div>
                                    <div className="absolute top-0 w-full h-full overflow-hidden">
                                        <div className="absolute bottom-0 p-[20px]">
                                            <h1 className="transition-all duration-1000" style={{fontSize: text.title, color: curMode.linkHoverColor, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>Web5D</h1>
                                            <h1 className="font-light transition-all duration-700" style={{fontSize: text.small, color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >Personal project to learn about 3D in web applications. This project utilizies the three.js library to animate 3d objects into a canvas.
                                                As I was interested in outer space, animating the solar system came into my mind. This project is also used as a portfolio of upcoming personal projects.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                        <SwiperSlide className="w-[400px] h-[400px]">
                            {({isActive}) => (
                                <div className="relative">
                                    <motion.img viewport={{once:true}} src={'/cards/wangohan-card.png'} className={`rounded-md h-[400px] ${isActive ? 'p-[5px]' : 'p-[5px]'} w-[100%] object-cover transition-all`}  alt="website banner" />
                                    <div 
                                        style={{
                                            boxSizing: 'border-box', 
                                            width: 'calc(100% - 10px)', 
                                            height: 'calc(100% - 10px)', 
                                            marginLeft: '5px', 
                                            marginTop: '5px'
                                        }} 
                                        className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0]'} bg-black`}
                                    ></div>
                                    <motion.div 
                                        initial={{
                                            width: '0%',
                                        }}
                                        animate={{
                                            width: isActive ? '100%' : '0%',
                                        }}
                                        transition={{
                                            duration: .5,
                                            ease: 'linear',
                                            delay: 0,
                                        }}
                                        style={{
                                            boxSizing: 'border-box',
                                            backgroundImage: 'conic-gradient(#fbeacb, #fbfbec, #7c563c, #caae8e, #fbeacb)'
                                        }} 
                                        className={` absolute top-[0] left-[0] z-[-1] h-full rounded-md`}
                                    ></motion.div>
                                    <div className="absolute top-0 w-full h-full overflow-hidden">
                                        <div className="absolute bottom-0 p-[20px]">
                                            <h1 className="transition-all duration-1000" style={{fontSize: text.title, color: curMode.linkHoverColor, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>Wangohan</h1>
                                            <h1 className="font-light transition-all duration-700" style={{fontSize: text.small, color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >A project planned to turn into a big social media for pet lovers and those who loves to cook.
                                                It is an intermediately complex project using the technologies Next JS, Postgres, Kysely, and other Javascript libraries. This project also tackles on the challenge of secure authentication of the users, along with Google OAuth, hashing and salting, JWTs, etc.
                                                Very ambitious project to take on.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                        <SwiperSlide className="w-[400px] h-[400px]">
                            {({isActive}) => (
                                <div className="relative">
                                    <motion.img viewport={{once:true}} src={'/cards/gvo-card.png'} style={{border:`5px solid ${curMode.accentColor}`}} className={`rounded-md h-[400px] w-[100%] object-cover transition-all`}  alt="website banner" />
                                    <div style={{border: `5px solid ${curMode.accentColor}`}} className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0]'} bg-black w-full h-full`}></div>
                                    <div className="absolute top-0 w-full h-full overflow-hidden">
                                        <div className="absolute bottom-0 p-[20px]">
                                            <h1 className="transition-all duration-1000" style={{fontSize: text.title, color: curMode.linkHoverColor, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>GVO / Good Vibes Only</h1>
                                            <h1 className="font-light transition-all duration-700" style={{fontSize: text.small, color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >Previous work that my team and I finished, the GVO corporate site. I learned utilizing CSS animations on this website and honed my JavaScript CSS skills.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                        <SwiperSlide className="w-[400px] h-[400px]">
                             {({isActive}) => (
                                <motion.div initial={{y: 100, opacity: 0}} transition={{duration: .8,delay: .6, ease: 'easeOut'}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} className="relative">
                                    <motion.img style={{border:`5px solid ${curMode.accentColor}`}} src={'/cards/jtb-card.png'} className={`rounded-md h-[400px] w-[100%] object-cover transition-all`}  alt="website banner" />
                                    <div style={{border: `5px solid ${curMode.accentColor}`}} className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0]'} bg-black w-full h-full`}></div>
                                    <div className="absolute top-0 w-full h-full overflow-hidden">
                                        <div className="absolute bottom-0 p-[20px]">
                                            <h1 className="transition-all duration-1000" style={{fontSize: text.title, color: curMode.linkHoverColor, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>
                                                <FontAwesomeIcon onClick={() => {
                                                    window.open('https://www.jtbtravel.com.au/', '_blank');
                                                }} icon={faExternalLink} className="text-[20px] hover:pointer" size={'xs'}/>
                                                <br/>
                                                JTB Australia / Japan Tourist Bureau
                                            </h1>
                                            <h1 className="font-light transition-all duration-700" style={{fontSize: text.small, color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >Similarly a previous work that my team and I finished, JTB Australia website. I honed utilizing CSS animations on this website and at the same time honed my JavaScript CSS skills.
                                            </h1>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div style={{color: curMode.bg}} className="flex-[1_0_50%] lg:absolute h-full w-full flex justify-center items-center">
                    
                </div>
            </div>
        </main>
    )
}