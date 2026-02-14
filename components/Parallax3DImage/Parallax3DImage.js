'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Parallax3DImage.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Parallax3DImage({
  src,
  alt = '',
  height = '500px',
  parallaxSpeed = 0.3,
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const tiltRef = useRef(null);
  const colorOverlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll effect
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Color overlay animation on scroll
      gsap.fromTo(
        colorOverlayRef.current,
        { opacity: 0 },
        {
          opacity: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [parallaxSpeed]);

  // 3D tilt effect on mouse move
  const handleMouseMove = (e) => {
    if (!tiltRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // -10 to 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10; // -10 to 10 degrees

    gsap.to(tiltRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.02,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(tiltRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ height }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.perspective}>
        <div ref={tiltRef} className={styles.tiltWrapper}>
          <div className={styles.imageWrapper}>
            <img ref={imageRef} src={src} alt={alt} className={styles.image} />
            <div ref={colorOverlayRef} className={styles.colorOverlay}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
