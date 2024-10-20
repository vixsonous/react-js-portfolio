import React from "react";

export default function SVG({
    width, 
    height, 
    children, 
    viewBox, 
    preserveAspectRatio=""
} :{
    width: number, 
    height: number, 
    children: React.ReactElement, 
    viewBox:string, 
    preserveAspectRatio?: string
}) {
    return (
        <React.Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox={viewBox} preserveAspectRatio={preserveAspectRatio}>
                {children}
            </svg>
        </React.Fragment>
    )
}