'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Nav.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate nav on page load
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.navInner}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            <div className={styles.logoIcon}></div>
            <span className={styles.logoText}>MoMuscle</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className={styles.navLinks}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={styles.navLink}
            >
              Home
            </a>
            <a
              href="#explore"
              onClick={(e) => scrollToSection(e, 'explore')}
              className={styles.navLink}
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className={styles.navLink}
            >
              Services
            </a>
            <a href="#" className={styles.navLink}>
              Plans
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.mobileMenuButton} ${
              mobileMenuOpen ? styles.open : ''
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          mobileMenuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <div className={styles.mobileMenuInner}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className={styles.mobileMenuLink}
          >
            Home
          </a>
          <a
            href="#explore"
            onClick={(e) => scrollToSection(e, 'explore')}
            className={styles.mobileMenuLink}
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className={styles.mobileMenuLink}
          >
            Services
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileMenuLink}
          >
            Plans
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={styles.mobileMenuOverlay}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
