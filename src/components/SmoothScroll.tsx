import {ReactLenis} from "lenis/react";
import React from "react";

export default function SmoothScroll({children} : {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <ReactLenis root>
                {children}
            </ReactLenis>
        </React.Fragment>
    )
}