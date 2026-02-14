'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const colorOverlay1Ref = useRef(null);
  const colorOverlay2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on hero image
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Entrance animations with stagger
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          buttonRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        );

      // Color overlays on scroll
      gsap.to(colorOverlay1Ref.current, {
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'center top',
          scrub: 1,
        },
      });

      gsap.to(colorOverlay2Ref.current, {
        opacity: 0.4,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'center top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToExplore = (e) => {
    e.preventDefault();
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroImageWrapper}>
        <img
          ref={imageRef}
          src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f3572971e6427a9c79344c_anastase-maragos-FP7cfYPPUKM-unsplash.webp"
          alt="Hero"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div
          ref={colorOverlay1Ref}
          className={`${styles.heroAnimationColor} ${styles.color1}`}
        ></div>
        <div
          ref={colorOverlay2Ref}
          className={`${styles.heroAnimationColor} ${styles.color2}`}
        ></div>
      </div>

      <div className={styles.heroContent}>
        <h1 ref={titleRef} className={styles.heroTitle}>
          Transform & Thrive
        </h1>

        <div ref={subtitleRef} className={styles.heroSubtitleWrapper}>
          <div className={styles.heroSubtitleLine}></div>
          <p className={styles.heroSubtitleText}>Fitness & Gym</p>
          <div className={styles.heroSubtitleLine}></div>
        </div>

        <p ref={descriptionRef} className={styles.heroDescription}>
          Welcome to MoMuscle gym, where sweat is just liquid awesome. Start your
          incredible fitness journey with us today!
        </p>

        <a
          ref={buttonRef}
          href="#explore"
          className={styles.button}
          onClick={scrollToExplore}
        >
          <span>Explore</span>
          <svg
            className={styles.buttonIcon}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
          <div className={styles.buttonBg}></div>
        </a>
      </div>
    </section>
  );
}
