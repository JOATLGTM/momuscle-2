'use client';

import { useEffect, useState } from 'react';
import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import Parallax3DImage from '@/components/Parallax3DImage/Parallax3DImage';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import Marquee from '@/components/Marquee/Marquee';
import TestimonialCarousel from '@/components/TestimonialCarousel/TestimonialCarousel';
import QuestionnaireModal from '@/components/QuestionnaireModal/QuestionnaireModal';
import styles from './page.module.css';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Dynamically add the Elfsight script tag to the head
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.head.appendChild(script);

    // Clean up the script on unmount
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  const marqueeItems = [
    { text: 'Strength', icon: true },
    { text: 'Conditioning', icon: true },
    { text: 'Training', icon: true },
    { text: 'Recovery', icon: true },
  ];

  const services = [
    {
      title: 'Personal Training',
      image:
        'https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdc00/64f5b672ef4abb8f61d4d8cb_graham-mansfield-9faBzIlnV14-unsplash.avif',
    },
    {
      title: 'Strength & Conditioning',
      image:
        'https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdc00/64f5baf2721a1609278f1321_alora-griffiths-LOnMc8Rp1Qs-unsplash.avif',
    },
    {
      title: 'High-Intensity Training',
      image:
        'https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdc00/64f5c20c6a5bfc55e51b7c17_anastase-maragos-fG0p4Qh_aWI-unsplash.avif',
    },
  ];

  return (
    <>
      <Nav />
      <QuestionnaireModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <main className={styles.main}>
        <Hero />

      <section id="explore" className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <h2 className={styles.sectionTitle}>
              We offer a comprehensive{' '}
              <span className={styles.opacity70}>fitness experience</span>
            </h2>
          </AnimatedSection>

          <div className={styles.aboutImages}>
            <AnimatedSection
              className={styles.imageBlock}
              animationType="fadeUp"
              delay={0.2}
            >
              <Parallax3DImage
                src="/images/bri-training.JPG"
                alt="Bri Training"
                height="500px"
              />
            </AnimatedSection>

            <AnimatedSection
              className={styles.imageBlock}
              animationType="fadeUp"
              delay={0.3}
            >
              <Parallax3DImage
                src="/images/mo-training.JPG"
                alt="Mo Training"
                height="500px"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <h2 className={styles.sectionTitle}>
              Become part of MoMuscle, where every workout is a step toward a
              better you.
            </h2>
          </AnimatedSection>

          <AnimatedSection animationType="scale" delay={0.3}>
            <div className={styles.contentImage}>
              <Parallax3DImage
                src="/images/family.jpeg"
                alt="MoMuscle Family"
                height="600px"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Marquee items={marqueeItems} speed={30} />

      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <h2 className={styles.sectionTitle}>
              Find Your <span className={styles.opacity70}>Perfect Service</span>
            </h2>
          </AnimatedSection>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                className={styles.serviceCard}
                animationType="fadeUp"
                delay={index * 0.2}
              >
                <div className={styles.serviceImageWrapper}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                  <div className={styles.serviceOverlay}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`${styles.section} ${styles.greyBg}`}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <p className={styles.sectionSubtitle}>The Team</p>
            <h2 className={styles.sectionTitle}>
              Meet the Experts{' '}
              <span className={styles.opacity70}>
                Behind Your Fitness Transformation
              </span>
            </h2>
          </AnimatedSection>

          <div className={styles.teamImages}>
            <AnimatedSection
              className={styles.teamImageBlock}
              animationType="scale"
              delay={0.3}
            >
              <Parallax3DImage
                src="/images/mo_2.jpeg"
                alt="Mo - Fitness Expert"
                height="600px"
              />
            </AnimatedSection>

            <AnimatedSection
              className={styles.teamImageBlock}
              animationType="scale"
              delay={0.4}
            >
              <Parallax3DImage
                src="/images/brie.jpeg"
                alt="Brie - Fitness Expert"
                height="600px"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection animationType="fadeUp" delay={0.5}>
            <div className={styles.teamDescription}>
              <p className={styles.largeText}>
                We believe that fitness is not just a hobby; it's a way of life.
                That's why we focus on providing a comprehensive fitness
                experience that incorporates cutting-edge equipment, and
                world-class coaches.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gyms Section */}
      <section className={`${styles.section} ${styles.withGradient}`}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <h2 className={styles.sectionTitle}>Our gym</h2>
          </AnimatedSection>

          <AnimatedSection animationType="scale" delay={0.3}>
            <div className={styles.gymsMainImage}>
              <Parallax3DImage
                src="/images/gym.JPG"
                alt="MoMuscle Gym"
                height="600px"
              />
            </div>
          </AnimatedSection>

          <div className={styles.gymsGrid}>
            <AnimatedSection
              className={styles.gymCard}
              animationType="fadeUp"
              delay={0.4}
            >
              <div className={styles.gymImage}>
                <img
                  src="/images/gym-2.JPG"
                  alt="MoMuscle Training Floor"
                  className={styles.gymImg}
                />
              </div>
              <h3 className={styles.gymTitle}>Training Floor</h3>
            </AnimatedSection>

            <AnimatedSection
              className={styles.gymCard}
              animationType="fadeUp"
              delay={0.5}
            >
              <div className={styles.gymImage}>
                <img
                  src="/images/gym-4.jpeg"
                  alt="MoMuscle Equipment Area"
                  className={styles.gymImg}
                />
              </div>
              <h3 className={styles.gymTitle}>Equipment Area</h3>
            </AnimatedSection>

            <AnimatedSection
              className={styles.gymCard}
              animationType="fadeUp"
              delay={0.6}
            >
              <div className={styles.gymImage}>
                <img
                  src="/images/gym3.JPG"
                  alt="MoMuscle Workout Space"
                  className={styles.gymImg}
                />
              </div>
              <h3 className={styles.gymTitle}>Workout Space</h3>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className={`${styles.section} ${styles.withGradient}`}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <h2 className={styles.sectionTitle}>
              Success <span className={styles.opacity70}>Stories</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animationType="fadeUp" delay={0.3}>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Client Reviews Section - Elfsight Widget */}
      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <h2 className={styles.sectionTitle}>
              Client <span className={styles.opacity70}>Reviews</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animationType="fadeUp" delay={0.3}>
            <div className={styles.testimonialWrapper}>
              <div
                className="elfsight-app-88d2e0fd-0af7-448d-ad90-643f857f8de3"
                data-elfsight-app-lazy
              ></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaImages}>
          <AnimatedSection
            className={styles.ctaImage}
            animationType="scale"
            delay={0.2}
          >
            <Parallax3DImage
              src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f5c828b74696277b4181e7_vadim-paripa-MmrSaEJZs4s-unsplash.webp"
              alt="CTA 1"
              height="400px"
            />
          </AnimatedSection>
          <AnimatedSection
            className={styles.ctaImage}
            animationType="scale"
            delay={0.3}
          >
            <Parallax3DImage
              src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f5c8280c42dde192f37a23_jonathan-borba-VgZsyPiZLKw-unsplash.webp"
              alt="CTA 2"
              height="400px"
            />
          </AnimatedSection>
          <AnimatedSection
            className={styles.ctaImage}
            animationType="scale"
            delay={0.4}
          >
            <Parallax3DImage
              src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f5c82891f67b7db8a1c2dc_pexels-kampus-production-6922126.webp"
              alt="CTA 3"
              height="400px"
            />
          </AnimatedSection>
        </div>
        <AnimatedSection
          className={styles.ctaContent}
          animationType="fadeUp"
          delay={0.5}
        >
          <h2 className={styles.ctaTitle}>Max Your Gains</h2>
          <button onClick={() => setShowModal(true)} className={styles.ctaButton}>
            <span>Get Started</span>
            <div className={styles.ctaButtonBg}></div>
          </button>
        </AnimatedSection>
        <div className={styles.ctaBackgroundRed}></div>
        <div className={styles.ctaBackgroundBlack}></div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <h3 className={styles.footerLogo}>
                MoMuscle
                <span className={styles.footerLogoSubtext}>
                  Fitness Template
                </span>
              </h3>
            </div>

            <div className={styles.footerLinks}>
              <a href="/" className={styles.footerLink}>
                Home
              </a>
              <a href="#services" className={styles.footerLink}>
                Services
              </a>
              <a href="#" className={styles.footerLink}>
                Plans
              </a>
              <a href="#explore" className={styles.footerLink}>
                About
              </a>
            </div>

            <div className={styles.footerSmallLinks}>
              <a href="#" className={styles.footerLinkSmall}>
                Contact
              </a>
              <a href="#" className={styles.footerLinkSmall}>
                Gyms
              </a>
              <a href="#" className={styles.footerLinkSmall}>
                Gallery
              </a>
              <a href="#" className={styles.footerLinkSmall}>
                Team
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
