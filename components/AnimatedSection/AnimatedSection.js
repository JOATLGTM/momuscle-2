'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection({
  children,
  className = '',
  animationType = 'fadeUp', // 'fadeUp', 'fadeIn', 'scale', 'slideLeft', 'slideRight'
  delay = 0,
  stagger = 0,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = sectionRef.current;
      const children = gsap.utils.toArray(element.children);

      // Define animation variants
      const animations = {
        fadeUp: {
          from: { y: 50, opacity: 0 },
          to: { y: 0, opacity: 1 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scale: {
          from: { scale: 0.9, opacity: 0 },
          to: { scale: 1, opacity: 1 },
        },
        slideLeft: {
          from: { x: -100, opacity: 0 },
          to: { x: 0, opacity: 1 },
        },
        slideRight: {
          from: { x: 100, opacity: 0 },
          to: { x: 0, opacity: 1 },
        },
      };

      const anim = animations[animationType] || animations.fadeUp;

      // If children exist, animate them with stagger
      if (children.length > 0 && stagger > 0) {
        gsap.fromTo(
          children,
          anim.from,
          {
            ...anim.to,
            duration: 0.8,
            ease: 'power3.out',
            stagger: stagger,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      } else {
        // Animate the whole section
        gsap.fromTo(
          element,
          anim.from,
          {
            ...anim.to,
            duration: 0.8,
            delay: delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [animationType, delay, stagger]);

  return (
    <div ref={sectionRef} className={`${styles.section} ${className}`}>
      {children}
    </div>
  );
}
