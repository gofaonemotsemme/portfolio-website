import Image from 'next/image';
import {Button} from '@/app/components/button';
import React from 'react';
import "@/app/globals.css";



const Hero = () => {

  return (
    <section className="container">
      <div className="row hero-container">

      <div className="col col-lg-8 hero-text-container">
        <p className="hero-intro-name">Hey, I&apos;m Lesedi!</p>
        <h1 className="hero-titles">
          <span className="hero-title-1">FRONTEND<br /></span>
          <span className="hero-title-2">DEVELOPER</span>
        </h1>
        <p className="hero-intro-name">
          I am a full-stack developer specialising in Frontend
          Development based in Johannesburg, South Africa. I love art,
          cooking, writing, and I express myself creatively using
          technology. Let&apos;s create something amazing together.
        </p>
        <div className="hero-buttons">
          <a href="/contact">
          <button className="hero-button">
            Get In Touch
          </button>
          </a>
          <a href="/projects">
          <button className="hero-button">
            Browse Projects
          </button>
          </a>
        </div>
      </div>
      <div className="col col-lg-4">
        <div className="" />
        <Image 
          className=""
          alt="Profile image"
          src="/images/portfolio.png"
          width={400}
          height={600}
        />
      </div>
      </div>
    </section>
  );
};

export default Hero;