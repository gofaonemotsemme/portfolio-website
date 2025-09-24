import React from 'react';
import Image from 'next/image';
import { Button } from '@/app/components/button';

const Skills = () => {
  return (
    <section className="container-fluid skills-container">
      <div className="row">
        <div className="col">
          <h2 className="section-title skills-title">SKILLS</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 skills-item">
            <div className="row">
              <div className="col">
                <h3 className="skills-category">Tech Stack</h3>
              </div>
            </div>
            <div className="row skills-row">
              <div className="col skills-col">
                <img src="/images/git.png" alt="Tech Stack" className='skills-icon'/>
              </div>
              <div className="col skills-col">
                <img src="/images/visual-studio.png" alt="Tech Stack" className='skills-icon'/>
              </div>
              <div className="col skills-col">
                <img src="/images/react.png" alt="Tech Stack" className='skills-icon'/>
              </div>
            </div>
            <div className="row skills-row">
              <div className="col skills-col">
                <img src="/images/html.png" alt="Tech Stack" className='skills-icon'/>
              </div>
              <div className="col skills-col">
                <img src="/images/css.png" alt="Tech Stack" className='skills-icon'/>
              </div>
              <div className="col skills-col">
                <img src="/images/js.png" alt="Tech Stack" className='skills-icon'/>
              </div>
            </div>
            <div className="row skills-row">
              <div className="col skills-col">
                <img src="/images/figma.png" alt="Tech Stack" className='skills-icon'/>
              </div>
              <div className="col skills-col">
                <img src="/images/programming-language.png" alt="Tech Stack" className='skills-icon'/>
              </div>
              <div className="col skills-col">
                <img src="/images/blockchain.png" alt="Tech Stack" className='skills-icon'/>
              </div>
            </div>
        </div>
        <div className="col-12 col-lg-6 skills-item">
          <div className="row">
            <div className="col">
              <h3 className="skills-category">Soft Skills</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className='soft-skill'>Leadership</p>
            </div>
            <div className="col">
              <p className='soft-skill'>Communication</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className='soft-skill'>Critical Thinking</p>
            </div>
            <div className="col">
              <p className='soft-skill'>Mentorship</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className='soft-skill'>Adaptability</p>
            </div>
            <div className="col">
              <p className='soft-skill'>Creativity</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className='soft-skill'>Time Management</p>
            </div>
            <div className="col">
              <p className='soft-skill'>Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;