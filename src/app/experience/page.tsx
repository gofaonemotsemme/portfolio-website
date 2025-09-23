import React from 'react';
import Image from 'next/image';
import { Button } from '@/app/components/button';

const Experience = () => {
  return (
    <section className="container-fluid experience-container">
     <div className="row">
      <div className="col"> 
        <h2 className="section-title experience-title">EXPERIENCE</h2>
      </div>
      </div> 
      <div className="row">
        <div className="col">
          <div className="experience-item">
            <h3 className="experience-role">FRONTEND DEVELOPER</h3>
            <p className="experience-company">BOS Technology</p>
            <p className="experience-dates">Feb, 2024 - Feb, 2025</p>
            <ul className="experience-responsibilities">
              <li>Spearheaded user-facing feature development for a crypto platform.</li>
              <li>Integrated blockchain functionalities using Web3.js and ethers.js.</li>
              <li>Designed and developed user-centric features like wallet integrations.</li>
              <li>Collaborated with UI/UX teams to implement design systems and optimize interfaces.</li>
              <li>Led the integration of blockchain transaction functionalities.</li>
              <li>Contributed to app performance optimization, reducing load times.</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="experience-item">
            <h3 className="experience-role">JUNIOR DEVELOPER</h3>
            <p className="experience-company">WeThinkCode_</p>
            <p className="experience-dates">Jan, 2023 - Jan, 2024</p>
            <ul className="experience-responsibilities">
              <li>Collaborated with teams to develop user-friendly, responsive web interfaces.</li>
              <li>Led the design and implementation of interactive UI components and dashboards.</li>
              <li>Optimized frontend performance for fast load times and a seamless user experience.</li>
              <li>Participated in Agile development, contributing to sprint planning and code reviews.</li>
              <li>Developed custom, client-specific features aligning with business goals.</li>
            </ul>
          </div>
        </div>
        <div className="col"> 
          <div className="experience-item">
            <h3 className="experience-role">TECHNICAL MENTOR</h3>
            <p className="experience-company">WeThinkCode_</p>
            <p className="experience-dates">Sept, 2022 - Dec, 2022</p>
            <ul className="experience-responsibilities">
              <li>Mentored junior students in software development and debugging.</li>
              <li>Conducted code reviews and provided constructive feedback.</li>
              <li>Facilitated workshops and peer-to-peer learning sessions.</li>
              <li>Developed leadership and communication skills while guiding students.</li>
              <li>Balanced mentorship duties with a rigorous software engineering curriculum.</li>
              <li>Promoted independent problem-solving by guiding students through challenges.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;