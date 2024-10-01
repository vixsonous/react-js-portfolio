import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { AnimatePresence, motion, useAnimate, useInView } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from './components/Projects'
import Experience from './components/Experience'
import { useLocation, useRoutes } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';

const lightMode = {
  bg: 'radial-gradient(circle, #F1F4F9 0%, #ADBBDA 90%)',
  primary: '#3D52A0',
  secondary: '#7091E6',
  accentColor: '#8697C4',
  linkHoverColor: '#ADBBDA',
  textColor: '#303030'
}

const darkMode = {
  bg: '#1A1A1A',
  primary: '#FFFFFF',
  secondary: '#B3B3B3',
  accentColor: '#3B82F6',
  linkHoverColor: '#1D4ED8',
  textColor: '#FFFFFF'
}

const mixBlend = {
  bg: '#E0E0E0 ',
  primary: '#1A1A1A',
  secondary: '#666666',
  accentColor: '#007BFF',
  linkHoverColor: '#0056b3',
  textColor: '#4FD1C5'
}

function App() {
  const [curMode, setCurMode] = useState(lightMode);
  const divRef = useRef<HTMLDivElement>(null);

  const element = useRoutes([
    {
      path: '/',
      element: <div ref={divRef} className='main-body min-h-[100vh] flex flex-col items-center relative'>
        <Header curMode={curMode} />
        <Main curMode={curMode} />
      </div>
    },
    {
      path: '/experience',
      element: <div ref={divRef} className='main-body min-h-[100vh] flex flex-col items-center relative'>
      <Header curMode={curMode} />
      <Experience curMode={curMode} />
    </div>
    },
    {
      path: '/projects',
      element: <div ref={divRef} className='main-body min-h-[100vh] flex flex-col items-center relative'>
      <Header curMode={curMode} />
      <Projects curMode={curMode} />
    </div>
    }
  ]);

  const location = useLocation();

  if(!element) return null;

  return (
    <AnimatePresence mode="wait">
        {React.cloneElement(element, {key: location.pathname})}
    </AnimatePresence>
  )
}

export default App
