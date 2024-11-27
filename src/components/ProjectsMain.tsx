import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from "framer-motion";
import { getTheme } from "./hooks/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsMain() {

    const theme = getTheme();

    return (
        <React.Fragment>
            <main className=" w-full relative">
                <div className="flex flex-wrap justify-center relative">
                    <div className="flex-[1_0_100%] flex justify-end relative">
                        <span style={{color: theme.primary}} className="text-6xl lg:text-8xl absolute top-[-.85em] right-8 z-50"><span style={{color:theme.secondary}}>Pro</span>jects</span>
                    </div>
                    <div className="flex-[1_0_100%] h-full">
                        <Swiper
                            breakpoints={{
                                0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                },
                                1024: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                                },
                            }}
                            grabCursor={true}
                            centeredSlides
                            slidesPerView={3}
                            spaceBetween={0}
                            initialSlide={0}
                            loop
                            className="mySwiper w-[100vw] h-[450px]"
                        >
                            <SwiperSlide className=" h-[400px]">
                                {({isActive}) => (
                                    <React.Fragment>
                                    <motion.div initial={{y: 50, opacity: 0}} transition={{duration: .8,delay: .0, ease: 'easeOut'}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} className="relative overflow-hidden h-full">
                                        <motion.img className={`${isActive ? 'grayscale-0' : 'grayscale'} h-full bg-transparent w-[100%] object-cover transition-all`} src={'/cards/rakutech-card.png'}  alt="website banner" />
                                        <div 
                                            style={{
                                                boxSizing: 'border-box', 
                                                width: 'calc(100%)', 
                                                height: 'calc(100%)', 
                                                background: theme.card
                                            }} 
                                            className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0.3]'}`}
                                        ></div>
                                        <div className="absolute top-0 w-full h-full overflow-hidden">
                                            <div className="absolute bottom-0 p-[20px]">
                                                <h1 className="transition-all duration-1000 text-2xl" style={{ color: theme.bg, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>RAKUTECH</h1>
                                                <h1 className="font-light transition-all duration-700 text-sm mt-4" style={{ color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >A project served as our final frontend project on our bootcamp. This project uses HTML, CSS, JS and SCSS.
                                                    It takes on the challenges of session storage utilization, management of session, event listeners, and DOM manipulation. 
                                                </h1>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div 
                                        style={{background: theme.card}}
                                        className={`transition-all duration-500 absolute top-4 z-[-1] left-4 w-full h-full`}>
                                    </div>
                                    </React.Fragment>
                                )}
                            </SwiperSlide>
                            <SwiperSlide className="h-[400px]">
                                {({isActive}) => (
                                    <React.Fragment>
                                        <motion.div initial={{y: 100, opacity: 0}} transition={{duration: .8,delay: .3, ease: 'easeOut'}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} className="relative overflow-hidden h-full">
                                            <motion.img className={`${isActive ? 'grayscale-0' : 'grayscale'} h-full bg-transparent w-[100%] object-cover transition-all`} src={'/cards/rfresh-card.png'} alt="website banner" />
                                            <div 
                                                style={{
                                                    boxSizing: 'border-box', 
                                                    width: 'calc(100%)', 
                                                    height: 'calc(100%)', 
                                                    background: theme.card
                                                }} 
                                                className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0.3]'} bg-black`}
                                            ></div>
                                            <div className="absolute top-0 w-full h-full overflow-hidden">
                                                <div className="absolute bottom-0 p-[20px]">
                                                    <h1 className="transition-all duration-1000 text-2xl" style={{color: theme.bg, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>Rakuten Fresh</h1>
                                                    <h1 className="font-light transition-all duration-700 text-sm mt-4" style={{ color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >A project served as our final frontend project on our bootcamp. This project uses HTML, CSS, JS and SCSS.
                                                        It takes on the challenges of session storage utilization, management of session, event listeners, and DOM manipulation. 
                                                    </h1>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <div 
                                            style={{background: theme.card}}
                                            className={`transition-all duration-500 absolute top-4 z-[-1] left-4 w-full h-full`}>
                                        </div>
                                    </React.Fragment>
                                )}
                            </SwiperSlide>
                            <SwiperSlide className="h-[400px]">
                                {({isActive}) => (
                                    <React.Fragment>
                                        <div className="relative overflow-hidden h-full">
                                            {/* <motion.img viewport={{once:true}} src={'/cards/web5d-card.png'} className={` h-[400px] ${isActive ? 'p-[5px]' : 'p-[5px]'} bg-transparent w-[100%] object-cover transition-all`}  alt="website banner" /> */}
                                            <video muted loop autoPlay controls playsInline src="/web5d.webm"  className={`${isActive ? 'grayscale-0' : 'grayscale'}  h-full w-[100%] object-cover transition-all`}>
                                            </video>
                                            <div 
                                                style={{
                                                    boxSizing: 'border-box', 
                                                    width: 'calc(100%)', 
                                                    height: 'calc(100%)', 
                                                    background: theme.card
                                                }} 
                                                className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0.3]'} bg-black`}
                                            ></div>
                                            <div className="absolute top-0 w-full h-full overflow-hidden">
                                                <div className="absolute bottom-0 p-[20px]">
                                                    <h1 className="transition-all duration-1000 text-2xl" style={{ color: theme.bg, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>Web5D</h1>
                                                    <h1 className="font-light transition-all duration-700 text-sm mt-4" style={{ color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >Personal project to learn about 3D in web applications. This project utilizies the three.js library to animate 3d objects into a canvas.
                                                        As I was interested in outer space, animating the solar system came into my mind. This project is also used as a portfolio of upcoming personal projects.
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div 
                                            style={{background: theme.card}}
                                            className={`transition-all duration-500 absolute top-4 z-[-1] left-4 w-full h-full`}>
                                        </div>
                                    </React.Fragment>
                                )}
                            </SwiperSlide>
                            <SwiperSlide className="h-[400px]">
                                {({isActive}) => (
                                    <React.Fragment>
                                        <div className="relative h-full">
                                            <motion.img viewport={{once:true}} src={'/cards/wangohan-card.png'} className={`${isActive ? 'grayscale-0' : 'grayscale'} h-full w-[100%] object-cover transition-all`}  alt="website banner" />
                                            <div 
                                                style={{
                                                    boxSizing: 'border-box', 
                                                    width: 'calc(100%)', 
                                                    height: 'calc(100%)', 
                                                    background: theme.card
                                                }} 
                                                className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0.3]'} bg-black`}
                                            ></div>
                                            <div className="absolute top-0 w-full h-full overflow-hidden">
                                                <div className="absolute bottom-0 p-4">
                                                    <h1 className="transition-all text-2xl duration-1000" style={{color: theme.bg, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>Wangohan</h1>
                                                    <h1 className="mt-4 font-light text-sm transition-all duration-700" style={{ color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >A project planned to turn into a big social media for pet lovers and those who loves to cook.
                                                        It is an intermediately complex project using the technologies Next JS, Postgres, Kysely, and other Javascript libraries. This project also tackles on the challenge of secure authentication of the users, along with Google OAuth, hashing and salting, JWTs, etc.
                                                        Very ambitious project to take on.
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div 
                                            style={{background: theme.card}}
                                            className={`transition-all duration-500 absolute top-4 z-[-1] left-4 w-full h-full`}>
                                        </div>
                                    </React.Fragment>
                                )}
                            </SwiperSlide>
                            <SwiperSlide className="h-[400px] relative">
                                {({isActive}) => (
                                    <>
                                    <div className="relative overflow-hidden h-full">
                                        <motion.img viewport={{once:true}} src={'/cards/gvo-card.png'} className={`${isActive ? 'grayscale-0' : 'grayscale'} h-full w-[100%] object-cover transition-all`}  alt="website banner" />
                                        <div 
                                            style={{background: theme.card}}
                                            className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0.3]'} bg-black w-full h-full`}></div>
                                        <div className="absolute top-0 w-full h-full">
                                            <div className="absolute bottom-0 p-4">
                                                <h1 className="transition-all duration-1000 text-2xl" style={{ color: theme.bg, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>GVO / Good Vibes Only</h1>
                                                <h1 className="font-light transition-all duration-700 text-sm mt-4" style={{ color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >Previous work that my team and I finished, the GVO corporate site. I learned utilizing CSS animations on this website and honed my JavaScript CSS skills.
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                        style={{background: theme.card}}
                                        className={`transition-all duration-500 absolute top-4 z-[-1] left-4 w-full h-full`}></div>
                                    </>
                                )}
                            </SwiperSlide>
                            <SwiperSlide className="h-[400px] relative">
                                {({isActive}) => (
                                    <React.Fragment>
                                        <motion.div initial={{y: 150, opacity: 0}} transition={{duration: .8,delay: .6, ease: 'easeOut'}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} className="relative h-full">
                                            <motion.img src={'/cards/jtb-card.png'} className={` h-full w-[100%] object-cover transition-all ${isActive ? 'grayscale-0' : 'grayscale'}`}  alt="website banner" />
                                            <div style={{background: theme.card}} className={`transition-all duration-500 absolute top-0 left-0 ${isActive ? 'opacity-[0.7]' : 'opacity-[0.3]'} bg-black w-full h-full`}></div>
                                            <div className="absolute top-0 w-full h-full overflow-hidden">
                                                <div className="absolute bottom-0 p-4">
                                                    <h1 className="transition-all duration-1000 text-2xl" style={{ color: theme.bg, transform: isActive ? 'translateX(0%)':'translateX(-100%)'}}>
                                                        <FontAwesomeIcon onClick={() => {
                                                            window.open('https://www.jtbtravel.com.au/', '_blank');
                                                        }} icon={faExternalLink} className="text-sm hover:pointer" size={'xs'}/>
                                                        <br/>
                                                        JTB Australia / Japan Tourist Bureau
                                                    </h1>
                                                    <h1 className="font-light text-sm transition-all mt-4 duration-700" style={{ color: 'white', transform: isActive ? 'translateX(0%)':'translateX(-150%)'}} >Similarly a previous work that my team and I finished, JTB Australia website. I honed utilizing CSS animations on this website and at the same time honed my JavaScript CSS skills.
                                                    </h1>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <div 
                                            style={{background: theme.card}}
                                            className={`transition-all duration-500 absolute top-4 z-[-1] left-4 w-full h-full`}/>
                                    </React.Fragment>
                                )}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}