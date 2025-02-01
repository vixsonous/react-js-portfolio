import React from "react";
import CoverAnimSubtitleText from "../text/CoverAnimSubtitleText";
import { motion, AnimatePresence } from "framer-motion";

import TypingText from "../text/TypingText";
import { sm } from "../../constants";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useExperienceMainHooks } from "./experience-main";

export default function ExperienceMain() {
  const hooks = useExperienceMainHooks();

  const cardMouseOverEvent = (e: React.MouseEvent): void => {
    e.preventDefault();

    const id = e.currentTarget.id.split("-")[1];
    changeHoverFunc(id);
  };

  const changeHoverFunc = (id: string): void => {
    const temp = [...hooks.state.elements];
    temp[Number(id)].hover = !temp[Number(id)].hover;

    hooks.setState((prev) => ({ ...prev, elements: [...temp] }));
  };

  return (
    <section ref={hooks.loadingRef} className="min-h-[300vh] relative">
      <main className="flex flex-col gap-4 sticky top-0 pt-16">
        <div className="lg:min-h-screen flex flex-col">
          <section
            ref={hooks.ref}
            className="relative max-w-screen-xl w-full mx-auto mb-6 overflow-hidden"
          >
            <h1 className=" text-6xl self-center flex justify-end">
              <CoverAnimSubtitleText
                show={hooks.inView}
                cover={false}
                className=""
                dispText="Exp"
                textColor={hooks.theme.secondary}
              />
              <CoverAnimSubtitleText
                show={hooks.inView}
                delay={0.1}
                className="z-50"
                cover={false}
                dispText="erience."
                textColor={hooks.theme.primary}
              />
            </h1>
            <motion.div
              style={{ background: hooks.theme.secondary, width: hooks.vWidth }}
              className="h-1 w-full absolute bottom-0 lg:bottom-1 mix-blend-screen"
            ></motion.div>
          </section>
          <div className="flex justify-center w-full relative p-4 min-h-[100vh]">
            <section className="flex flex-wrap items-start max-w-screen-xl lg:justify-around h-full w-full ">
              <AnimatePresence mode="popLayout">
                {hooks.state.elements.map((el, idx) => {
                  const delay = 0.4;
                  return (
                    el.show && (
                      <div
                        key={idx}
                        className={`relative max-w-[100%] lg:max-w-[45%] ${
                          sm(window.innerWidth) ? "w-full" : ""
                        } `}
                        style={{
                          left: sm(window.innerWidth) ? 0 : el.position.left,
                        }}
                      >
                        <motion.div
                          id={`card-` + idx}
                          layout
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                          }}
                          exit={{ opacity: 0 }}
                          onClick={cardMouseOverEvent}
                          style={{
                            color: hooks.theme.cardText,
                            background: hooks.theme.primary,
                          }}
                          className={`relative flex-[0_0_100%] lg:flex-[0_1_50%] z-50 top-0 left-0 flex p-4 flex-col ${
                            el.hover || sm() ? "max-w-none" : "max-w-max"
                          }`}
                        >
                          {!el.hover && (
                            <>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{ color: hooks.theme.secondary }}
                                className="text-xl font-normal flex flex-nowrap absolute top-[-1.1em]"
                              >
                                {el.title}
                                <div className="absolute"></div>
                              </motion.span>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-sm cursor-pointer flex flex-nowrap items-center gap-4"
                              >
                                {el.sub}
                                <Eye
                                  className="cursor-pointer"
                                  size={24}
                                  color="white"
                                />
                              </motion.span>
                            </>
                          )}
                          {el.hover && (
                            <>
                              <TypingText
                                delay={delay}
                                style={{ color: hooks.theme.secondary }}
                                className={`text-2xl absolute top-[-1.1em]`}
                                tx={el.title}
                              />
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: delay + 0.2 }}
                                className="text-lg flex flex-nowrap items-center gap-4"
                              >
                                {el.sub}{" "}
                                <EyeSlash
                                  className="cursor-pointer"
                                  size={24}
                                  color="white"
                                />
                              </motion.span>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: delay + 0.4 }}
                                className="flex justify-center items-center gap-4 flex-wrap"
                              >
                                {el.logos.map((logo, idx) => {
                                  return (
                                    <div
                                      key={idx}
                                      className="flex justify-center items-center"
                                    >
                                      <img
                                        className="max-w-32 h-auto pt-6"
                                        src={logo}
                                      />
                                    </div>
                                  );
                                })}
                              </motion.div>
                              <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: delay + 0.6 }}
                                className="list-outside pt-6 px-4"
                              >
                                {el.tasks.map((t, idx) => {
                                  return (
                                    <motion.li
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: delay + idx * 0.03 }}
                                      className="list-disc mt-1 text-sm"
                                      key={idx}
                                    >
                                      <span>{t}</span>
                                    </motion.li>
                                  );
                                })}
                              </motion.ul>
                            </>
                          )}
                        </motion.div>
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                          }}
                          exit={{ opacity: 0 }}
                          style={{ background: hooks.theme.secondary }}
                          className={`h-full z-0 w-full absolute top-1 ${
                            sm(window.innerWidth) ? "left-0" : "left-1"
                          }`}
                        />
                      </div>
                    )
                  );
                })}
              </AnimatePresence>
            </section>
          </div>
        </div>
      </main>
    </section>
  );
}
