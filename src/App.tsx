import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { motion, useAnimate, useInView } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from './components/Projects'
import Experience from './components/Experience'
import Loading from './components/Loading'
import { delayTime } from './constants';

const lightMode = {
  bg: '#F7F7F7',
  primary: '#333333',
  secondary: '#666666',
  accentColor: '#4FD1C5',
  linkHoverColor: '#1E3A8A',
  textColor: '#1A1A1A'
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
  const [curMode, setCurMode] = useState(mixBlend);
  const [init, setInit] = useState(false);
  
  const divRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const [animating, setAnimating] = useState(false);
  const [prevArea, setPrevArea] = useState(0); // 0 main, 1 experience, 2 project

  async function backgroundBlockAnimation() {
    setAnimating(true)
    await animate(scope.current, { y: 0, x: 0}, {duration: 2, ease: 'easeOut'});
    await animate(scope.current, {rotate: '30deg'}, {duration: 3, ease: 'easeOut'});
    animate(scope.current, {x: -100}, {repeat: Infinity, repeatType: 'reverse', duration: 59});
    setAnimating(false)
  }

  async function expBackgroundBlockAnimation() {
    setAnimating(true)
    await animate(scope.current, {rotate: '0deg'}, {duration: 1, delay:0});
    await animate(scope.current, {x: '-100vw'}, {duration: 3, delay:0});
    animate(scope.current, {x: '-90vw'}, {duration: 59, delay:0, repeat: Infinity, repeatType: 'reverse'});
    setAnimating(false)
  }
  
  useEffect(() => {
    
    const condition = divRef.current && divRef.current.parentNode && divRef.current.parentNode.parentNode && divRef.current.parentNode.parentNode.parentElement;
    if(condition) {
      divRef.current.parentNode.parentNode.parentElement.style.overflow = "hidden";
    }

    setTimeout(() => {
      if(condition) {
        backgroundBlockAnimation();
        divRef.current.parentNode.parentNode.parentElement.style.overflow = "auto";
        setInit(true);
      }
    }, 6000)

  },[]);

  const expContainer = useRef<HTMLDivElement>(null);
  const projContainer = useRef<HTMLDivElement>(null);
  const expInView = useInView(expContainer, {amount: 0});
  const projInView = useInView(projContainer, {amount: 0});

  useEffect(() => {
    if(!init) return;

    if(expInView && !animating && prevArea != 1) {
      expBackgroundBlockAnimation();
      setPrevArea(1);
    } else if(projInView && !animating && prevArea != 2) {
      expBackgroundBlockAnimation();
      setPrevArea(2)
    } else if((!expInView && !projInView) && !animating && prevArea != 0){
      backgroundBlockAnimation();
      setPrevArea(0);
    }
  },[expInView,projInView, animating]);

  return (
    <>
      <div ref={divRef} className='min-h-[100vh] flex flex-col items-center relative mix-blend-difference' style={{backgroundColor: curMode.bg}}>
        <Loading />
        <Header curMode={curMode} />
        <Main curMode={curMode} />
        <motion.div ref={expContainer}>
          <Experience curMode={curMode} />
        </motion.div>
        <Projects curMode={curMode} />
        <motion.div ref={scope} style={{background: curMode.primary}} initial={{y: 1000, rotate: '0deg'}} className='w-[100%] h-[200vh] fixed right-[-50%] z-[-1] rotate-[30deg] top-[-200px]'></motion.div>
      </div>
    </>
  )
}

export default App
