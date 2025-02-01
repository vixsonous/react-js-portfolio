import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { content } from "../../constants";
import SkillCard from "./SkillCard";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <React.Fragment>
      <main className="relative flex flex-col gap-[10vh]">
        <div className="min-h-[100vh] flex flex-col gap-[10vh]">
          <section className="flex flex-[1_0_100%] h-full items-center pt-0">
            <div
              ref={ref}
              className="flex h-full gap-8 max-w-screen-xl mx-auto w-full flex-wrap justify-center px-6"
            >
              {content.map((c, idx) => (
                <SkillCard skill={c} skillIdx={idx} inView={inView} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
