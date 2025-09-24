import React from 'react';
import Image from 'next/image';
import { Button } from '@/app/components/button';
import "@/app/globals.css";

const Education = () => {
  return (
    <section className="container-fluid education-container">
        <div className="row">
            <div className="col">
                <h2 className="section-title education-title">EDUCATION</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-lg-6">
                <div className="education-item">
                    <h3 className="education-degree">NATIONAL SENIOR CERTIFICATE</h3>
                    <p className="education-institution">Golf View Secondary School</p>
                    <p className="education-dates">Jan, 2020 - Dec, 2020</p>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="education-item">
                    <h3 className="education-degree">NQF 5 IN INFORMATION TECHNOLOGY</h3>
                    <p className="education-institution">WeThinkCode_</p>
                    <p className="education-dates">Sept, 2021 - Dec, 2022</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Education;