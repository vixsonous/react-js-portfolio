import CoverAnimSubtitleText from "../text/CoverAnimSubtitleText";
import { motion, AnimatePresence } from "framer-motion";
import { useExperienceMainHooks } from "./experience-main";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceMain() {
  const hooks = useExperienceMainHooks();

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
              {hooks.state.elements.map((expInfo, idx) => {
                const delay = 0.4;
                return (
                  expInfo.show && (
                    <AnimatePresence mode="popLayout">
                      <ExperienceCard
                        idx={idx}
                        expInfo={expInfo}
                        changeHoverFunc={changeHoverFunc}
                        delay={delay}
                        theme={{
                          cardText: hooks.theme.cardText,
                          secondary: hooks.theme.secondary,
                          primary: hooks.theme.primary,
                        }}
                      />
                    </AnimatePresence>
                  )
                );
              })}
            </section>
          </div>
        </div>
      </main>
    </section>
  );
}
