import {
  useInView,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useAppSelector } from "../store";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import React, { useRef, useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { content } from "../constants";

export default function Skills() {
  const theme = useAppSelector((state) => state.theme.theme);

  const [state, setState] = useState({
    x: 0,
  });

  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({ target: scrollRef });

  const x = useTransform(scrollYProgress, [0, 1], [0, 20]);

  useMotionValueEvent(x, "change", (latest) => {
    setState((prev) => ({ ...prev, x: latest }));
  });

  return (
    <React.Fragment>
      <main className="relative flex flex-col gap-[10vh]">
        <div className="min-h-[100vh] flex flex-col gap-[10vh]">
          <section className="flex flex-[1_0_100%] h-full items-center pt-0">
            <div className="flex h-full gap-8 max-w-screen-xl mx-auto w-full flex-wrap justify-center px-6">
              {content.map((c, idx) => {
                const [mouseOver, setMouseOver] = useState(false);
                const [init, setInit] = useState(false);
                const [viewSkills, setViewSkills] = useState(false);
                const [viewMouseOver, setViewMouseOver] = useState(false);

                const isMouseOver = () => setMouseOver(true);
                const notMouseOver = () => setMouseOver(false);
                const isViewSkills = () => setViewSkills(true);
                const notViewSkills = () => setViewSkills(false);
                const isViewMouseOver = () => setViewMouseOver(true);
                const notViewMouseOver = () => setViewMouseOver(false);

                const parent = useRef<HTMLDivElement>(null);

                var div = 360 / c.children.length;
                var radius =
                  c.children.length * 17 < 70 ? 70 : c.children.length * 17;
                if (parent && parent.current && !init) {
                  var offsetToParentCenter = parent.current.offsetWidth / 2; //assumes parent is square
                  var offsetToChildCenter = 30;
                  var totalOffset = offsetToParentCenter - offsetToChildCenter;
                  for (var i = 0; i < c.children.length; ++i) {
                    var y = Math.sin(div * i * (Math.PI / 180)) * radius;
                    var x = Math.cos(div * i * (Math.PI / 180)) * radius;
                    const childdiv = document.querySelector(
                      `#container-${idx}-${i}`
                    ) as HTMLDivElement;
                    if (childdiv) {
                      childdiv.style.top = (y + totalOffset).toString() + "px";
                      childdiv.style.left = (x + totalOffset).toString() + "px";
                    }
                  }
                  setInit(true);
                }

                return (
                  <motion.section
                    ref={ref}
                    onMouseOver={isMouseOver}
                    onMouseLeave={notMouseOver}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      x: inView ? 0 : -100,
                    }}
                    transition={{
                      delay: 0.5 + 0.15 * idx,
                      ease: [0.39, 0.24, 0.3, 1],
                      duration: 0.5,
                    }}
                  >
                    <motion.div
                      style={{
                        scale: mouseOver && !viewSkills ? 1.05 : 1,
                      }}
                      className="transition flex p-4 flex-col gap-2 shadow-lg w-full max-w-max"
                    >
                      <div className="relative flex justify-between w-full items-center">
                        {c.svg}
                        <div
                          ref={parent}
                          className="relative flex justify-center"
                        >
                          {viewSkills ? (
                            <EyeSlash
                              onMouseOver={isViewMouseOver}
                              onMouseLeave={notViewMouseOver}
                              className="cursor-pointer transition"
                              size={24}
                              onClick={notViewSkills}
                              color={
                                viewMouseOver ? theme.secondary : theme.primary
                              }
                            />
                          ) : (
                            <Eye
                              onMouseOver={isViewMouseOver}
                              onMouseLeave={notViewMouseOver}
                              className="cursor-pointer transition"
                              size={24}
                              onClick={isViewSkills}
                              color={
                                viewMouseOver ? theme.secondary : theme.primary
                              }
                            />
                          )}
                          {c.children.map((x, _idx) => {
                            return (
                              <div
                                style={{
                                  background: theme.secondary,
                                  height: "65px",
                                  width: "65px",
                                  zIndex: viewSkills ? 100 : -100,
                                  opacity: viewSkills ? 1 : 0,
                                }}
                                id={`container-${idx}-${_idx}`}
                                className="transition absolute shadow-lg flex justify-center items-center rounded-full aspect-square z-50
                                                    after:content-[''] after:absolute after:-top-0.5 after:-left-0.5 after:bg-[#353B3C] after:w-[69px] after:h-[69px] after:opacity-50
                                                    after:rounded-full after:-z-10
                                                    hover:scale-125
                                                    "
                              >
                                {x}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <CoverAnimSubtitleText
                        delay={0.5}
                        show={inView}
                        fontSizeClass="text-xl"
                        dispText={c.title}
                        textColor={theme.primary}
                      />
                      <span
                        style={{ color: theme.primary }}
                        className="mt-4 text-sm"
                      >
                        {c.content}
                      </span>
                    </motion.div>
                  </motion.section>
                );
              })}
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
  );
}
