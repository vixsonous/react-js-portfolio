import { useRef } from "react";
import {
  SkillContent,
  useSkillCardHelper,
  useSkillCardHook,
} from "./skill-card";
import { motion } from "framer-motion";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import CoverAnimSubtitleText from "../text/CoverAnimSubtitleText";

export default function SkillCard({
  skill,
  skillIdx,
  inView,
}: {
  skill: SkillContent;
  skillIdx: number;
  inView: boolean;
}) {
  const hook = useSkillCardHook();
  const helper = useSkillCardHelper(hook);

  const parent = useRef<HTMLDivElement>(null);

  var div = 360 / skill.children.length;
  var radius =
    skill.children.length * 17 < 70 ? 70 : skill.children.length * 17;
  if (parent && parent.current && !hook.init) {
    var offsetToParentCenter = parent.current.offsetWidth / 2; //assumes parent is square
    var offsetToChildCenter = 30;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (var i = 0; i < skill.children.length; ++i) {
      var y = Math.sin(div * i * (Math.PI / 180)) * radius;
      var x = Math.cos(div * i * (Math.PI / 180)) * radius;
      const childdiv = document.querySelector(
        `#container-${skillIdx}-${i}`
      ) as HTMLDivElement;
      if (childdiv) {
        childdiv.style.top = (y + totalOffset).toString() + "px";
        childdiv.style.left = (x + totalOffset).toString() + "px";
      }
    }
    hook.setInit(true);
  }

  return (
    <motion.section
      onMouseOver={helper.isMouseOver}
      onMouseLeave={helper.notMouseOver}
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -100,
      }}
      transition={{
        delay: 0.5 + 0.15 * skillIdx,
        ease: [0.39, 0.24, 0.3, 1],
        duration: 0.5,
      }}
    >
      <motion.div
        style={{
          scale: hook.mouseOver && !hook.viewSkills ? 1.05 : 1,
        }}
        className="transition flex p-4 flex-col gap-2 shadow-lg w-full max-w-max"
      >
        <div className="relative flex justify-between w-full items-center">
          {skill.svg}
          <div ref={parent} className="relative flex justify-center">
            {hook.viewSkills ? (
              <EyeSlash
                onMouseOver={helper.isViewMouseOver}
                onMouseLeave={helper.notViewMouseOver}
                className="cursor-pointer transition"
                size={24}
                onClick={helper.notViewSkills}
                color={
                  hook.viewMouseOver ? hook.theme.secondary : hook.theme.primary
                }
              />
            ) : (
              <Eye
                onMouseOver={helper.isViewMouseOver}
                onMouseLeave={helper.notViewMouseOver}
                className="cursor-pointer transition"
                size={24}
                onClick={helper.isViewSkills}
                color={
                  hook.viewMouseOver ? hook.theme.secondary : hook.theme.primary
                }
              />
            )}
            {skill.children.map((x, _idx) => {
              return (
                <div
                  style={{
                    background: hook.theme.secondary,
                    height: "65px",
                    width: "65px",
                    zIndex: hook.viewSkills ? 100 : -100,
                    opacity: hook.viewSkills ? 1 : 0,
                  }}
                  id={`container-${skillIdx}-${_idx}`}
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
          dispText={skill.title}
          textColor={hook.theme.primary}
        />
        <span style={{ color: hook.theme.primary }} className="mt-4 text-sm">
          {skill.content}
        </span>
      </motion.div>
    </motion.section>
  );
}
