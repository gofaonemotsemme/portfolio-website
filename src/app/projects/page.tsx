import React from 'react';
import Image from 'next/image';
import { Button } from '@/app/components/button';

const Projects = () => {
  return (
    <section className="container-fluid projects-container">
      <div className="row">
        <div className="col">
          <h1 className="section-title projects-title">PROJECTS</h1>
        </div>
      </div>
      <div className="row">
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />
          <h2 className="project-title">ASTROLOGY WEBSITE</h2>
          <p className="project-description">Fetches and displays astrological data like birth charts using an API.</p>
          <p className="project-stack">Next.js, React, TypeScript, Astro-Seek API</p>
        </div>
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />          
          <h2 className="project-title">INTERVIEW PREP GAME</h2>
          <p className="project-description">Turn that job search frown upside-down with a fun interview prep game.</p>
          <p className="project-stack">React, TypeScript, Redux, Firebase</p>
        </div>
      </div>
      <div className="row">
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />
          <h2 className="project-title">CRYSTAL STORE</h2>
          <p className="project-description">Online store that sells crystals.</p>
          <p className="project-stack">React, TypeScript, Next.js, Stripe, Firebase</p>
        </div>
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />          
          <h2 className="project-title">NOTE TAKER</h2>
          <p className="project-description">Stores and organizes your notes.</p>
          <p className="project-stack">React, TypeScript, Firebase</p>
        </div>
      </div>
      <div className="row">
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />
          <h2 className="project-title">STORY GENERATOR</h2>
          <p className="project-description">Storytelling app where the AI generates stories and backgrounds change based on prompts.</p>
          <p className="project-stack">React, TypeScript, OpenAI API</p>
        </div>
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />          
          <h2 className="project-title">TIME CAPSULE</h2>
          <p className="project-description">Digital time capsule app where users can store messages for the future.</p>
          <p className="project-stack">React, TypeScript, Firebase</p>
        </div>
      </div>
      <div className="row">
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />
          <h2 className="project-title">NASA PICTURE OF THE DAY</h2>
          <p className="project-description">Fetch and display the NASA Astronomy Picture of the Day (APOD).</p>
          <p className="project-stack">React, TypeScript, NASA APOD API</p>
        </div>
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />          
          <h2 className="project-title">HISTORICAL WEATHER DATA</h2>
          <p className="project-description">Ever wondered what the weather was on the last day of WW2? Well, wonder no more.</p>
          <p className="project-stack">React, TypeScript, OpenWeatherMap API</p>
        </div>
      </div>
      <div className="row">
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />
          <h2 className="project-title">DEBATE BOT</h2>
          <p className="project-description">An AI bot that can engage in debates..</p>
          <p className="project-stack">React, TypeScript, OpenAI API</p>
        </div>
        <div className="col project-card">
          <img src="/images/construction.png" alt="project-construction" />          
          <h2 className="project-title">SPONTANEOUS TRIP PLANNER</h2>
          <p className="project-description">App that plans spontaneous trips for users based on interests and budget.</p>
          <p className="project-stack">React, TypeScript, Skyscanner</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;