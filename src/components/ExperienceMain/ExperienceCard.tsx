import { Eye, EyeSlash } from "@phosphor-icons/react";
import { sm } from "../../constants";
import TypingText from "../text/TypingText";
import { ExperienceInfo } from "./experience-main";
import { motion } from "framer-motion";

export default function ExperienceCard({
  expInfo,
  idx,
  changeHoverFunc,
  theme,
  delay,
}: {
  expInfo: ExperienceInfo;
  idx: number;
  changeHoverFunc: (id: string) => void;
  theme: {
    cardText: string;
    primary: string;
    secondary: string;
  };
  delay: number;
}) {
  const cardMouseOverEvent = (e: React.MouseEvent): void => {
    e.preventDefault();

    const id = e.currentTarget.id.split("-")[1];
    changeHoverFunc(id);
  };

  return (
    <div
      key={idx}
      className={`relative max-w-[100%] lg:max-w-[45%] ${
        sm(window.innerWidth) ? "w-full" : ""
      } `}
      style={{
        left: sm(window.innerWidth) ? 0 : expInfo.position.left,
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
          color: theme.cardText,
          background: theme.primary,
        }}
        className={`relative flex-[0_0_100%] lg:flex-[0_1_50%] z-50 top-0 left-0 flex p-4 flex-col ${
          expInfo.hover || sm() ? "max-w-none" : "max-w-max"
        }`}
      >
        {!expInfo.hover && (
          <>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: theme.secondary }}
              className="text-xl font-normal flex flex-nowrap absolute top-[-1.1em]"
            >
              {expInfo.title}
              <div className="absolute"></div>
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm cursor-pointer flex flex-nowrap items-center gap-4"
            >
              {expInfo.sub}
              <Eye className="cursor-pointer" size={24} color="white" />
            </motion.span>
          </>
        )}
        {expInfo.hover && (
          <>
            <TypingText
              delay={delay}
              style={{ color: theme.secondary }}
              className={`text-2xl absolute top-[-1.1em]`}
              tx={expInfo.title}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: delay + 0.2 }}
              className="text-lg flex flex-nowrap items-center gap-4"
            >
              {expInfo.sub}{" "}
              <EyeSlash className="cursor-pointer" size={24} color="white" />
            </motion.span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: delay + 0.4 }}
              className="flex justify-center items-center gap-4 flex-wrap"
            >
              {expInfo.logos.map((logo, idx) => {
                return (
                  <div key={idx} className="flex justify-center items-center">
                    <img className="max-w-32 h-auto pt-6" src={logo} />
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
              {expInfo.tasks.map((t, idx) => {
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
        style={{ background: theme.secondary }}
        className={`h-full z-0 w-full absolute top-1 ${
          sm(window.innerWidth) ? "left-0" : "left-1"
        }`}
      />
    </div>
  );
}
