import SVG from "./components/svg/SVG";
import {git, docker, aws, nextjs, nodejs, laravel, bootstrap, html, css3, jquery, js, react, tsLm, php, javaLm, cppLm, cLm, pythonLm, vueJsLm, tailwindLm, reduxLm, springLm, djangoLm, mysqlLm, postgresLm, oracleLm, firebaseLm, linuxLm} from "./components/svg/svg.paths";
import { BracketsCurly, Code, Database, FileCode, Folders, GitBranch, Layout, RocketLaunch } from "@phosphor-icons/react";

export type CurrentMode = {
    bg: string,
    primary: string,
    secondary: string,
    accentColor: string,
    linkHoverColor: string,
    textColor: string
}

export interface Props {
    curMode: CurrentMode
}

export const defaultAnim = {
    visible: { opacity: 1 , y: 5},
    hidden: { opacity: 0, y: 0 },
    exit: {opacity: 0, y: 5}
}

export const delayTime = {
    header: 4,
    main: 5,
}

export const text = {
    xl2: '10em',
    xl: '5em',
    logo: '3em',
    title: '2em',
    subtitle: '1.5em',
    body: '1.125em',
    small: '0.875em'
}

export const sm = (size:number = window.innerWidth) => size <= 640;
export const md = (size:number) => size <= 768 && size > 640;
export const lg = (size:number) => size <= 1024 && size > 768;
export const xl = (size:number) => size <= 1280 && size > 1024;
export const xl2 = (size:number) => size <= 1536 && size > 1280;

export const content = [
  {
    svg: <Code color="white" size={24} />, 
    title: 'Programming Languages', 
    content: 'TypeScript, JavaScript, HTML, CSS, PHP, Java, C++, C, Python, Assembly.',
    children: [
      <SVG key={1} width={40} height={40} viewBox={tsLm.viewBox}>{tsLm.svg}</SVG>,
      <div className="scale-125"><SVG key={1} width={40} height={40} viewBox="0 0 48 48">{js.svg}</SVG></div>,
      <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{html.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox="0 0 48 48">{css3.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={php.viewBox} preserveAspectRatio={php.preserveAspectRatio}>{php.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={javaLm.viewBox}>{javaLm.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={cppLm.viewBox} preserveAspectRatio={cppLm.preserveAspectRatio}>{cppLm.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={cLm.viewBox}>{cLm.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={pythonLm.viewBox} preserveAspectRatio={pythonLm.preserveAspectRatio}>{pythonLm.svg}</SVG>,
      <FileCode size={40} color="white"/>,
    ]
  },
  {
    svg: <Layout size={24} color="white"/>, 
    title: 'Frontend', 
    content: 'React, NextJs, VueJs, Tailwind, Redux, SEO, Bootstrap, jQuery.',
    children: [
      <SVG key={1} width={40} height={40} viewBox={react.viewBox}>{react.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={nextjs.viewBox}>{nextjs.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={vueJsLm.viewBox} preserveAspectRatio={vueJsLm.preserveAspectRatio}>{vueJsLm.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={tailwindLm.viewBox} preserveAspectRatio={tailwindLm.preserveAspectRatio}>{tailwindLm.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={reduxLm.viewBox} preserveAspectRatio={reduxLm.preserveAspectRatio}>{reduxLm.svg}</SVG>,
      <h1 className="text-white">SEO</h1>,
      <SVG key={1} width={40} height={40} viewBox={bootstrap.viewBox}>{bootstrap.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={jquery.viewBox}>{jquery.svg}</SVG>
    ]
  },
  {
    svg: <BracketsCurly size={24} color="white"/>, 
    title: 'Backend', 
    content: 'NodeJs, Express, Laravel, RESTful API, Spring Boot, Django.',
    children: [
      <SVG key={1} width={40} height={40} viewBox={nodejs.viewBox}>{nodejs.svg}</SVG>,
      <h1 className="text-white text-sm font-extralight">Express</h1>,
      <SVG key={1} width={40} height={40} viewBox={laravel.viewBox}>{laravel.svg}</SVG>,
      <h1 className="text-white text-sm font-extralight">RESTful</h1>,
      <SVG key={1} width={40} height={40} viewBox={springLm.viewBox}>{springLm.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={djangoLm.viewBox} preserveAspectRatio={djangoLm.preserveAspectRatio}>{djangoLm.svg}</SVG>,
    ]
  },
  {
    svg: <Database size={24} color="white"/>, 
    title: 'Database', 
    content: 'MySQL, Postgres, Oracle.',
    children: [
      <SVG key={1} width={40} height={40} viewBox={mysqlLm.viewBox}>{mysqlLm.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={postgresLm.viewBox} preserveAspectRatio={postgresLm.preserveAspectRatio}>{postgresLm.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={oracleLm.viewBox} preserveAspectRatio={oracleLm.preserveAspectRatio}>{oracleLm.svg}</SVG>,
    ]
  },
  {svg: <RocketLaunch 
    size={24} color="white"/>, 
    title: 'Deployment', 
    content: 'Linux, AWS, Docker, FTP, Firebase.',
    children: [
      <SVG key={1} width={40} height={40} viewBox={linuxLm.viewBox}>{linuxLm.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={aws.viewBox}>{aws.svg}</SVG>,
      <SVG key={1} width={40} height={40} viewBox={docker.viewBox}>{docker.svg}</SVG>,
      <Folders size={40} color="white"/>,
      <SVG key={1} width={40} height={40} viewBox={firebaseLm.viewBox} preserveAspectRatio={firebaseLm.preserveAspectRatio}>{firebaseLm.svg}</SVG>,
    ]
  },
  {
    svg: <GitBranch size={24} color="white"/>, 
    title: 'Version Control', 
    content: 'Git.',
    children: [
      <SVG key={1} width={40} height={40} viewBox={git.viewBox}>{git.svg}</SVG>,
    ]
  },
]