import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getTheme } from "./hooks/theme";

export default function Footer() {

    const theme = getTheme();

    return (
        <React.Fragment>
            <div className="relative z-50 text-4xl h-screen flex gap-8 justify-center items-center">
              <span>Let’s innovate!</span>
                <a href="https://github.com/vixsonous" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon style={{color: theme.primary}} icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/victor-chiong/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon style={{color: theme.secondary}} icon={faLinkedin}/>
                </a>
                <a href="mailto:chiong.vict@gmail.com">
                    <FontAwesomeIcon style={{color: theme.primary}} icon={faEnvelope}/>
                </a>
                <div className="absolute bottom-12">
                  <span className="text-xs">
                    © Victor Chiong 2025. All rights reserved.
                  </span>
                </div>
            </div>
        </React.Fragment>
    )
}