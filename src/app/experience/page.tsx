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
            <h3 className="experience-role">TECHNICAL MENTOR</h3>
            <p className="experience-company">WeThinkCode_</p>
            <p className="experience-dates">Sept, 2022 - Dec, 2022</p>
            <ul className="experience-responsibilities">
              <li>Developed and maintained user interfaces using React.js and Next.js.</li>
              <li>Collaborated with designers to implement responsive designs.</li>
              <li>Optimized application performance and ensured cross-browser compatibility.</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="experience-item">
            <h3 className="experience-role">FRONTEND DEVELOPER INTERN</h3>
            <p className="experience-company">WeThinkCode_</p>
            <p className="experience-dates">Jan, 2022 - Dec, 2022</p>
            <ul className="experience-responsibilities">
              <li>Assisted in the development of user interfaces using React.js.</li>
              <li>Participated in code reviews and contributed to team knowledge sharing.</li>
              <li>Helped troubleshoot and resolve frontend issues.</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="experience-item">
            <h3 className="experience-role">FRONTEND DEVELOPER INTERN</h3>
            <p className="experience-company">WeThinkCode_</p>
            <p className="experience-dates">Jan, 2022 - Dec, 2022</p>
            <ul className="experience-responsibilities">
              <li>Assisted in the development of user interfaces using React.js.</li>
              <li>Participated in code reviews and contributed to team knowledge sharing.</li>
              <li>Helped troubleshoot and resolve frontend issues.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;