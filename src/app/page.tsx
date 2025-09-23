import React from 'react';
import Hero from './hero/page';
import About from './about/page';
import Education from './education/page';
import Experience from './experience/page'; 
import Skills from './skills/page';
import Projects from './projects/page';
import Connect from './connect/page';

export default function Home() {
  return (
      <>
        <Hero /> 
        <About /> 
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Connect />
      </>    
  );
}