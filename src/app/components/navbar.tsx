import Link from 'next/link';
import Image from 'next/image'; 
import { nav_links } from './nav_links';
import React from 'react';
import "@/app/globals.css";


const NavBar = () => {

  return (
  <nav className="navbar navbar-expand-lg">
    {/* mobile navbar */}
    <div className="container-fluid d-lg-none">
      <Link href="/" className="navbar-brand">
        <Image
          src="/images/bow.png"
          alt="Logo"
          width={50}
          height={50}
          className="d-inline-block align-text-top"
        />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <Image
          src="/images/menu.png"
          alt="Logo"
          width={50}
          height={50}
          className="d-inline-block align-text-top"
        />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {nav_links.map((link) => (
            <Link href={link.href} className="nav-link" key={link.key}>
                <li>
                {link && (
                    <a
                    className="nav-item"
                    href={link.href}
                    >
                    </a>
                )}
                {link.label}  
                </li>
            </Link>
        ))} 
        </ul>
      </div> 
    </div>

    {/* large screens navbar */}
    <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center">
          <div className="col col-lg-3 navbar-logo">
            <Link href="/" className="navbar-brand">
              <Image
                src="/images/bow.png"
                alt="Logo"
                width={50}
                height={50}
                className=""
              />
            </Link>
          </div>
          <div className="col col-lg-9 nav-items"> 
            <ul className="navbar-nav">
              {nav_links.map((link) => (
                <Link href={link.href} className="nav-link" key={link.key}>
                    <li>
                    {link && (
                        <a
                        className="nav-item"
                        href={link.href}
                        >
                        </a>
                    )}
                    {link.label}  
                    </li>
                </Link>
              ))}
            </ul>
          </div>
        <div className="seperator-border" />
        </div>
    </div>
  </nav>
  
  );
};

export default NavBar;