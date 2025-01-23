import React, { useRef } from "react";
import { getTheme } from "./hooks/theme";
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import cert from '../assets/cert.png';
import seedtechawrd from '../assets/seedtechawrd.png';
import appreciation from '../assets/appreciation.png';

export default function Certifications() {

  const theme = getTheme();

  const muleref = useRef<HTMLDivElement>(null);
  const muleInView = useInView(muleref, { once: true, amount: 0.5 });

  return (
    <React.Fragment>
      <section className="min-h-[100vh] relative pt-16 px-8">
        <main className="flex flex-col gap-4 sticky top-0">
          <div className="min-h-[100vh] py-[20px] flex flex-col gap-20">
            <div className="w-full relative flex flex-col gap-64 pb-64">
              <div ref={muleref} className="cert1 relative flex justify-end ">
                {
                  muleInView && <>
                    <div style={{ color: theme.primary }} className="text-6xl flex flex-col items-end relative right-[-1em]">
                      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="z-[999] text-[#1084b4]">Certified</motion.h1>
                      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-right">Mule Developer</motion.h1>
                    </div>
                    <img className="img-shine w-1/3 max-w-screen-xl shadow-md" src={cert} alt="certification" />
                  </>
                }
              </div>

              <div className="cert1 relative flex justify-start">

                <img className="img-shine w-1/4 max-w-screen-xl shadow-md" src={seedtechawrd} alt="certification" />
                <div style={{ color: theme.primary }} className="text-6xl flex flex-col items-start relative right-[1em]">
                  <h1 style={{ color: theme.secondary }} className="text-[#1084b4]">The Seedtech</h1>
                  <h1 className="z-[999] ">Award</h1>
                </div>
              </div>

              <div className="cert1 relative flex justify-end">
                <div style={{ color: theme.primary }} className="text-6xl flex flex-col items-end relative right-[-1em]">
                  <h1 style={{ color: theme.secondary }} className="z-[999] text-[#1084b4]">Award of</h1>
                  <h1 className="z-[999] ">Appreciation</h1>
                </div>
                <img className="img-shine w-1/4 max-w-screen-xl shadow-md" src={appreciation} alt="certification" />
              </div>
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  )
}