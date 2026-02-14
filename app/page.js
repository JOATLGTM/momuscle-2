import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import Parallax3DImage from '@/components/Parallax3DImage/Parallax3DImage';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import Marquee from '@/components/Marquee/Marquee';
import styles from './page.module.css';

export default function Home() {
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
                src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f4a824d1c0205e9c53eebc_pexels-ivan-samkov-4164766.webp"
                alt="Training"
                height="500px"
              />
            </AnimatedSection>

            <AnimatedSection
              className={styles.imageBlock}
              animationType="fadeUp"
              delay={0.3}
            >
              <Parallax3DImage
                src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f4a7d6bca35ec50eab8e6f_pexels-tima-miroshnichenko-5327534.webp"
                alt="Workout"
                height="500px"
              />
            </AnimatedSection>

            <AnimatedSection
              className={styles.imageBlock}
              animationType="fadeUp"
              delay={0.4}
            >
              <Parallax3DImage
                src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f4a82375a40718259829bb_pexels-cottonbro-studio-7674492.webp"
                alt="Fitness"
                height="500px"
              />
            </AnimatedSection>

            <AnimatedSection
              className={styles.imageBlock}
              animationType="fadeUp"
              delay={0.5}
            >
              <Parallax3DImage
                src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f4a80bf762b614246d2908_luis-reyes-mTorQ9gFfOg-unsplash.webp"
                alt="Gym"
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
                src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64fae2ac41d7a2600bab4887_sebastian-pociecha-FoSF9-4xTGg-unsplash.webp"
                alt="Fitness Journey"
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

          <AnimatedSection animationType="scale" delay={0.3}>
            <div className={styles.teamImage}>
              <Parallax3DImage
                src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f357298a3d2877d1d1d9f1_anastase-maragos-7kEpUPB8vNk-unsplash.webp"
                alt="The Team"
                height="600px"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fadeUp" delay={0.4}>
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

      {/* Workout Plans Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <h2 className={styles.sectionTitle}>Choose a plan</h2>
          </AnimatedSection>

          <div className={styles.plansGrid}>
            <AnimatedSection
              className={styles.planImageBlock}
              animationType="fadeUp"
              delay={0.2}
            >
              <Parallax3DImage
                src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f447e1233beaba818729e3_alora-griffiths-aVrZMPgN_Vg-unsplash.webp"
                alt="Ready"
                height="100%"
              />
            </AnimatedSection>

            <div className={styles.plansList}>
              <AnimatedSection
                className={styles.planCard}
                animationType="slideLeft"
                delay={0.3}
              >
                <h3 className={styles.planTitle}>Endurance Elite</h3>
                <p className={styles.planDescription}>
                  A long-term, 16-week program focusing on improving
                  cardiovascular health through various forms of aerobic
                  exercise.
                </p>
                <div className={styles.planDetails}>
                  <div className={styles.planDetail}>
                    <span className={styles.opacity70}>Timeline:</span> 16-week
                    plan
                  </div>
                  <div className={styles.planDetail}>
                    <span className={styles.opacity70}>Price:</span> $1299
                  </div>
                  <div className={styles.planDetail}>
                    <span className={styles.opacity70}>Focus:</span>{' '}
                    Cardiovascular Health
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                className={styles.planCard}
                animationType="slideLeft"
                delay={0.4}
              >
                <h3 className={styles.planTitle}>Classic Sculpting</h3>
                <p className={styles.planDescription}>
                  A 12-week bodybuilding program that focuses on muscle isolation
                  and hypertrophy for a chiseled physique.
                </p>
                <div className={styles.planDetails}>
                  <div className={styles.planDetail}>
                    <span className={styles.opacity70}>Timeline:</span> 12-week
                    plan
                  </div>
                  <div className={styles.planDetail}>
                    <span className={styles.opacity70}>Price:</span> $899
                  </div>
                  <div className={styles.planDetail}>
                    <span className={styles.opacity70}>Focus:</span> Muscle
                    Hypertrophy
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                className={styles.planCard}
                animationType="slideLeft"
                delay={0.5}
              >
                <h3 className={styles.planTitle}>The Strongman Series</h3>
                <p className={styles.planDescription}>
                  A 10-week training plan to prepare you for strongman
                  competitions or to improve functional, real-world strength.
                </p>
                <div className={styles.planDetails}>
                  <div className={styles.planDetail}>
                    <span className={styles.opacity70}>Timeline:</span> 10-week
                    plan
                  </div>
                  <div className={styles.planDetail}>
                    <span className={styles.opacity70}>Price:</span> $649
                  </div>
                  <div className={styles.planDetail}>
                    <span className={styles.opacity70}>Focus:</span> Functional
                    Strength
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Gyms Section */}
      <section className={`${styles.section} ${styles.withGradient}`}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <h2 className={styles.sectionTitle}>Our gyms</h2>
          </AnimatedSection>

          <AnimatedSection animationType="scale" delay={0.3}>
            <div className={styles.gymsMainImage}>
              <Parallax3DImage
                src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdbf6/64f4a7ea330baf461890d05a_ambitious-studio-rick-barrett-1RNQ11ZODJM-unsplash.webp"
                alt="Gym Locations"
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
                  src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdc00/64f9f48fc51d6d1048d2b026_ambitious-studio-rick-barrett-aw9cszR7FGU-unsplash.jpg"
                  alt="Apex Vitality Center"
                  className={styles.gymImg}
                />
              </div>
              <h3 className={styles.gymTitle}>Apex Vitality Center</h3>
            </AnimatedSection>

            <AnimatedSection
              className={styles.gymCard}
              animationType="fadeUp"
              delay={0.5}
            >
              <div className={styles.gymImage}>
                <img
                  src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdc00/64f9f49e656adf6abe492d2e_ambitious-studio-rick-barrett-v5w5NbV2dmI-unsplash.jpg"
                  alt="Zenith Athletic Club"
                  className={styles.gymImg}
                />
              </div>
              <h3 className={styles.gymTitle}>Zenith Athletic Club</h3>
            </AnimatedSection>

            <AnimatedSection
              className={styles.gymCard}
              animationType="fadeUp"
              delay={0.6}
            >
              <div className={styles.gymImage}>
                <img
                  src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdc00/64f9f4c7ddddde976ecff388_ambitious-studio-rick-barrett-vc09nUKk5xI-unsplash.jpg"
                  alt="IronPulse Fitness"
                  className={styles.gymImg}
                />
              </div>
              <h3 className={styles.gymTitle}>IronPulse Fitness</h3>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className={`${styles.section} ${styles.withBorder}`}>
        <div className={styles.container}>
          <AnimatedSection animationType="fadeUp">
            <h2 className={styles.sectionTitle}>Blog</h2>
          </AnimatedSection>

          <div className={styles.blogGrid}>
            <AnimatedSection
              className={styles.blogCard}
              animationType="fadeUp"
              delay={0.2}
            >
              <div className={styles.blogImageWrapper}>
                <img
                  src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdc00/64fae11a2331f7702dd8d998_pexels-victor-freitas-841132.jpg"
                  alt="Blog post"
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.blogContent}>
                <p className={styles.blogTopic}>Fitness</p>
                <h3 className={styles.blogTitle}>
                  From Novice to Pro: Tips for Gym Etiquette
                </h3>
              </div>
            </AnimatedSection>

            <AnimatedSection
              className={styles.blogCard}
              animationType="fadeUp"
              delay={0.3}
            >
              <div className={styles.blogImageWrapper}>
                <img
                  src="https://cdn.prod.website-files.com/64f1a4c13c8ab83aab9bdc00/64fae13c78a92d721ca9d7be_louis-hansel-K47107aP8UU-unsplash.jpg"
                  alt="Blog post"
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.blogContent}>
                <p className={styles.blogTopic}>Nutrition</p>
                <h3 className={styles.blogTitle}>
                  Nutrition 101: Foods That Fuel Your Workouts
                </h3>
              </div>
            </AnimatedSection>
          </div>
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
          <a href="#explore" className={styles.ctaButton}>
            <span>Explore</span>
            <div className={styles.ctaButtonBg}></div>
          </a>
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

          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright}>
              Powered by <a href="https://webflow.com" target="_blank">Webflow</a> | Made by Metrik
            </p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
