import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useParallax(speed = 0.5) {
  const elementRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(elementRef.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, elementRef);

    return () => ctx.revert();
  }, [speed]);

  return elementRef;
}
