import React, { useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { AnimatePresence } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from './components/Projects'
import Experience from './components/Experience'
import { useLocation, useRoutes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTheme } from './slice/theme';
import { useAppSelector } from './store';

const lightMode = {
  bg: '#EEF0F2',
  card: '#C6C7C4',
  cardText: '#353B3C',
  primary: '#353B3C',
  secondary: '#846A6A',
  accentColor: '#A2999E',
  linkHoverColor: '#ADBBDA',
  textColor: '#353B3C'
}

const darkMode = {
  bg: 'radial-gradient(circle, #121212 0%, #1F1F1F 90%)',
  card: '#1E272E',
  cardText: '#2E2E2E',
  primary: '#4B6584',
  secondary: '#2C3A47',
  accentColor: '#F9C74F',
  linkHoverColor: '#FF6F61',
  textColor: '#EAEAEA'
}

const darkMode2 = {
  bg: 'radial-gradient(circle, #1E201E 0%, #1E201E 90%)',
  card: '#D1C5B4',
  cardText: '#2E2E2E',
  primary: '#5C6D5A',
  secondary: '#4B6584',
  accentColor: '#8D9C81',
  linkHoverColor: '#FF6F61',
  textColor: '#EAEAEA'
}

function App() {
  const dispatch = useDispatch();
  dispatch(setTheme(lightMode));

  const theme = useAppSelector(state => state.theme.theme);
  
  const divRef = useRef<HTMLDivElement>(null);

  const element = useRoutes([
    {
      path: '/',
      element: <div ref={divRef} style={{background: theme.bg, backgroundAttachment: 'fixed'}} className=' min-h-[100vh] flex flex-col items-center relative'>
        <Header />
        <Main />
      </div>
    },
    {
      path: '/experience',
      element: <div ref={divRef} style={{background: theme.bg, backgroundAttachment: 'fixed'}} className=' min-h-[100vh] flex flex-col items-center relative'>
      <Header />
      <Experience/>
    </div>
    },
    {
      path: '/projects',
      element: <div ref={divRef} style={{background: theme.bg, backgroundAttachment: 'fixed'}} className=' min-h-[100vh] flex flex-col items-center relative'>
      <Header />
      <Projects />
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
