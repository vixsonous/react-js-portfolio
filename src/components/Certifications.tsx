import { useRef } from "react";
import { getTheme } from "./hooks/theme";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";
import { useInView } from "framer-motion";
import cert from '../assets/cert.png';
import seedtechawrd from '../assets/seedtechawrd.png';
import appreciation from '../assets/appreciation.png';

export default function Certifications() {

    const theme = getTheme();

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true});

    const loadingRef = useRef<HTMLDivElement>(null);

    return (
        <section className="min-h-[100vh] relative pt-96">
            <main className="flex flex-col gap-4 sticky top-0">
                <div className="min-h-[100vh] py-[20px] flex flex-col gap-20">
                    <div className="w-full relative flex flex-col gap-64 pb-64">
                        <div className="cert1 relative flex justify-end">
                            <div style={{color: theme.primary}} className="text-6xl flex flex-col items-end relative right-[-1em]">
                                <h1 className="z-[999] text-[#1084b4]">Certified</h1>
                                <h1>Mule Developer</h1>
                            </div>
                            <img className="img-shine w-1/2 max-w-screen-xl shadow-md" src={cert} alt="certification" />
                        </div>

                        <div className="cert1 relative flex justify-start">
                            
                            <img className="img-shine w-1/4 max-w-screen-xl shadow-md" src={seedtechawrd} alt="certification" />
                            <div style={{color: theme.primary}} className="text-6xl flex flex-col items-start relative right-[1em]">
                                <h1 style={{color: theme.secondary}} className="z-[999] text-[#1084b4]">The Seedtech</h1>
                                <h1>Award</h1>
                            </div>
                        </div>

                        <div className="cert1 relative flex justify-end">
                            <div style={{color: theme.primary}} className="text-6xl flex flex-col items-end relative right-[-1em]">
                                <h1 style={{color: theme.secondary}} className="z-[999] text-[#1084b4]">Award of</h1>
                                <h1>Appreciation</h1>
                            </div>
                            <img className="img-shine w-1/4 max-w-screen-xl shadow-md" src={appreciation} alt="certification" />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}