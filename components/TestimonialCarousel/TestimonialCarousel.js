'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './TestimonialCarousel.module.css';

const testimonials = [
  { image: '/transformation/client1.jpg', alt: 'Client Transformation 1' },
  { image: '/transformation/client2.jpg', alt: 'Client Transformation 2' },
  { image: '/transformation/client3.jpg', alt: 'Client Transformation 3' },
  { image: '/transformation/client4.jpg', alt: 'Client Transformation 4' },
  { image: '/transformation/client5.jpg', alt: 'Client Transformation 5' },
  { image: '/transformation/client6.jpg', alt: 'Client Transformation 6' },
  { image: '/transformation/client7.jpg', alt: 'Client Transformation 7' },
  { image: '/transformation/client8.jpg', alt: 'Client Transformation 8' },
  { image: '/transformation/client9.jpg', alt: 'Client Transformation 9' },
  { image: '/transformation/client10.jpg', alt: 'Client Transformation 10' },
  { image: '/transformation/client11.jpg', alt: 'Client Transformation 11' },
  { image: '/transformation/client12.jpg', alt: 'Client Transformation 12' },
];

export default function TestimonialCarousel() {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [itemsToShow, setItemsToShow] = useState(itemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(itemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  const goToNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);

    gsap.to(trackRef.current, {
      x: `-=${100 / itemsToShow}%`,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
        setIsAnimating(false);
      },
    });
  };

  const goToPrev = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);

    gsap.to(trackRef.current, {
      x: `+=${100 / itemsToShow}%`,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
        setIsAnimating(false);
      },
    });
  };

  // Reset position when items per view changes
  useEffect(() => {
    if (trackRef.current) {
      gsap.set(trackRef.current, { x: 0 });
      setCurrentIndex(0);
    }
  }, [itemsToShow]);

  return (
    <div className={styles.carouselContainer}>
      <div ref={carouselRef} className={styles.carousel}>
        <div ref={trackRef} className={styles.carouselTrack}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.carouselItem}>
              <div className={styles.imageWrapper}>
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className={`${styles.navButton} ${styles.prevButton} ${
          currentIndex === 0 ? styles.disabled : ''
        }`}
        onClick={goToPrev}
        disabled={currentIndex === 0}
        aria-label="Previous"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        className={`${styles.navButton} ${styles.nextButton} ${
          currentIndex >= maxIndex ? styles.disabled : ''
        }`}
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
        aria-label="Next"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
