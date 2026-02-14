import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(animationConfig = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const {
      from = { y: 50, opacity: 0 },
      to = { y: 0, opacity: 1 },
      duration = 0.8,
      ease = 'power3.out',
      start = 'top 80%',
      toggleActions = 'play none none none',
      scrub = false,
    } = animationConfig;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        from,
        {
          ...to,
          duration,
          ease,
          scrollTrigger: {
            trigger: elementRef.current,
            start,
            toggleActions,
            scrub,
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [animationConfig]);

  return elementRef;
}
