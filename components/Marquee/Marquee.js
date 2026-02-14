'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Marquee.module.css';

export default function Marquee({ items = [], speed = 30 }) {
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    const marqueeInner = marqueeInnerRef.current;
    if (!marqueeInner) return;

    // Calculate width and animate
    const marqueeWidth = marqueeInner.offsetWidth / 2; // Divide by 2 since content is duplicated

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marqueeInner, {
      x: -marqueeWidth,
      duration: speed,
      ease: 'none',
    });

    return () => {
      tl.kill();
    };
  }, [items, speed]);

  // Create flat array of alternating text and icons
  const createElements = (startIndex) => {
    const elements = [];
    let keyCounter = 0;
    items.forEach((item, index) => {
      elements.push(
        <p key={`set${startIndex}-text-${index}-${keyCounter++}`} className={styles.marqueeText}>
          {item.text}
        </p>
      );
      if (item.icon) {
        elements.push(
          <svg
            key={`set${startIndex}-icon-${index}-${keyCounter++}`}
            className={styles.marqueeIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
          </svg>
        );
      }
    });
    return elements;
  };

  return (
    <div className={styles.marqueeSection}>
      <div ref={marqueeRef} className={styles.marqueeWrapper}>
        <div ref={marqueeInnerRef} className={styles.marqueeContent}>
          {/* First set */}
          {createElements(0)}
          {/* Duplicate set for seamless loop */}
          {createElements(1)}
        </div>
      </div>
    </div>
  );
}
