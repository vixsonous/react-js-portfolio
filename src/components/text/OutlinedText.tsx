import React from "react";

export default function OutlinedText({className="", stroke="black", strokeWidth='1px', text=""} : {className?:string, stroke?: string, strokeWidth?:string, text?:string}) {
    return (
        <React.Fragment>
            <svg className={className} style={{width: 'auto', height: 'auto'}}>
                <text y="50" style={{fill: 'none', stroke: stroke, strokeWidth: strokeWidth, strokeLinejoin: 'round'}}>
                    {text}
                </text>
            </svg>
        </React.Fragment>
    )
}