import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useAppSelector } from "../store";
import Skills from "./Skills";
import ExperienceMain from "./ExperienceMain";
import MovingText from "./text/MovingText";
import ProjectsMain from "./ProjectsMain";
import Footer from "./Footer";
import SVG from "./svg/SVG";
import { js, reactDm, tsLm } from "./svg/svg.paths";

export default function Main() {
  const theme = useAppSelector((state) => state.theme.theme);
  const [displayState, setDisplayState] = useState([
    { show: false, text: "Web Developer" },
    { show: false, text: "UI/UX Designer" },
    { show: false, text: "Fullstack Engineer" },
    { show: false, text: "Frontend Engineer" },
    { show: false, text: "Backend Engineer" },
  ]);

  const [curDisplay, setCurDisplay] = useState(0);

  const hideSubText = (idx: number) => {
    const temp = [...displayState];
    const obj = temp[idx];
    obj.show = !obj.show;
    temp[idx] = obj;
    setDisplayState(temp);
  };

  useEffect(() => {
    const to = setInterval(() => {
      const idx = curDisplay;
      hideSubText(idx);
      setTimeout(() => {
        hideSubText(idx);
        setCurDisplay((prev) =>
          prev + 1 === displayState.length ? 0 : prev + 1
        );
      }, 4000);
    }, 4500);

    return () => clearInterval(to);
  }, [displayState]);

  return (
    <React.Fragment>
      <main className=" min-h-[100vh] flex flex-wrap flex-[1_0_100%] relative lg:pb-[100px] xl:pb-[0px] lg:p-[0px] items-center justify-center font-light">
        <section className="flex flex-wrap max-w-screen-xl w-full justify-center items-center relative min-h-[100vh]">
          <section className="p-4 flex-[1_0_100%] lg:flex-[1_0_50%] flex flex-col">
            <CoverAnimSubtitleText
              className=""
              delay={0.6}
              cover={false}
              dispText={"Hello! I am "}
              fontSizeClass="text-base"
              textColor={theme.primary}
            />
            <motion.h1
              style={{ color: theme.primary }}
              className={`w-[100%] flex relative flex-row gap-4`}
              initial="hidden"
              animate="visible"
            >
              <MovingText
                text="Victor"
                className="font-light text-6xl max-w-max"
                style={{ color: theme.secondary }}
              />
              <MovingText
                text="Chiong"
                className="font-light text-6xl max-w-max"
                style={{ color: theme.primary }}
              />
            </motion.h1>

            <motion.h1
              style={{ color: theme.primary }}
              className={`flex gap-2 relative text-xl`}
              initial="hidden"
              animate="visible"
            >
              <CoverAnimSubtitleText
                className=""
                delay={0.6}
                cover={false}
                dispText={"I'm a "}
                fontSizeClass="text-base"
                textColor={theme.primary}
              />
              <CoverAnimSubtitleText
                className=""
                show={displayState[curDisplay].show}
                dispText={`${displayState[curDisplay].text}.`}
                fontSizeClass="text-base"
                textColor={theme.primary}
              />
            </motion.h1>

            <CoverAnimSubtitleText
              className=""
              delay={0.8}
              cover={false}
              dispText={`I am a software engineer specializing in engineering scalable web applications and websites. I aim to continuously learn on the latest tech, aligning with my goal to deliver and grow as an engineer.`}
              fontSizeClass="text-base"
              textColor={theme.primary}
            />
          </section>
          <section
            className={`relative flex-[1_0_50%] flex justify-between flex-col items-center`}
          >
            <div className=" w-full h-full flex justify-center flex-row items-center">
              <SVG key={1} width={80} height={80} viewBox={tsLm.viewBox}>
                {tsLm.svg}
              </SVG>
              <SVG key={1} width={120} height={120} viewBox={reactDm.viewBox}>
                {reactDm.svg}
              </SVG>
              <div className="scale-125">
                <SVG key={1} width={80} height={80} viewBox="0 0 48 48">
                  {js.svg}
                </SVG>
              </div>
            </div>
          </section>
        </section>
        <section className="relative flex-[1_0_100%] min-h-[100vh] ">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{ background: theme.primary }}
          ></div>
          <Skills />
        </section>
        <section className="flex-[1_0_100%] min-h-[125vh]">
          <ExperienceMain />
        </section>
        <section className="flex-[1_0_100%]">
          <ProjectsMain />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </React.Fragment>
  );
}
