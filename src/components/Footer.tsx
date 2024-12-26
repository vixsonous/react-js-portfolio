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
                <a href="https://github.com/dasdasd443" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon style={{color: theme.primary}} icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/victor-chiong/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon style={{color: theme.secondary}} icon={faLinkedin}/>
                </a>
                <a href="/">
                    <FontAwesomeIcon style={{color: theme.primary}} icon={faEnvelope}/>
                </a>
            </div>
        </React.Fragment>
    )
}