import React from 'react';
import Image from 'next/image';
import { Button } from '@/app/components/button';

const About = () => {
  return (
    <section className="container-fluid about-container">
      <div className="row">
        <div className="col col-lg-5">
          <Image 
            alt="Profile image"
            src="/images/about-image.png"
            width={400}
            height={600}
            className="about-image"
          />
        </div>
        <div className="col col-lg-7 about-text-container">
            <div className="row">
                <div className="col">
                    <Image 
                        alt="Profile image"
                        src="/images/about-heading.png"
                        width={600}
                        height={150}
                        className="about-image"
                    />                
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="about-description">
                        I am passionate about crafting authentic and intuitive software. I bring a company’s mission to life with the latest 
                        technological trends and immersive, user-first application. Always up for a challenge, my fascination with electronics and 
                        technology is something that I was born with and have loved for so long that I practically gave up my eyesight for it. From 
                        solving complex problems designing compelling products, I bring a fresh perspective and a unique, 
                        youthful exuberance to any space I am in. I am driven by creativity, collaboration, 
                        innovation and philanthropy. Let’s work together to make the world a better place.
                    </p>
                    <a download="lesedi-motsemme-resume.pdf" href="/resume-folder/lesedi-motsemme-resume.pdf">
                        <button className="about-button">
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;