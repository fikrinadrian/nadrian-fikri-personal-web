import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import * as React from 'react';
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiRadio,
  FiServer,
  FiTerminal,
  FiZap,
} from 'react-icons/fi';

import styles from '@/styles/CyberpunkPortfolio.module.css';

import { projects } from '@/data/projects';

import CyberpunkLayout from '@/components/layout/CyberpunkLayout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

const MotionLink = motion.create(UnstyledLink);

const experience = [
  {
    period: '2025 — NOW',
    company: 'REKU.ID',
    role: 'SOFTWARE DEVELOPER / FULL STACK',
    detail:
      'Owning product delivery across Next.js, Node.js, Go, REST APIs, business logic, and relational data.',
    active: true,
  },
  {
    period: '2022 — 2025',
    company: 'REKU.ID',
    role: 'SOFTWARE DEVELOPER / FRONTEND',
    detail:
      'Built resilient product interfaces, reusable systems, performance improvements, and production fixes.',
  },
  {
    period: '2023 — NOW',
    company: 'INDEPENDENT',
    role: 'FREELANCE SOFTWARE DEVELOPER',
    detail:
      'Shipped internal tools and public-facing products from requirements through testing and launch.',
    active: true,
  },
];

const systems = [
  {
    code: '01',
    icon: FiCode,
    title: 'INTERFACE SYSTEMS',
    skills: 'React.js / Next.js / TypeScript / Responsive UI',
  },
  {
    code: '02',
    icon: FiServer,
    title: 'SERVICE LAYER',
    skills: 'Node.js / Go / REST APIs / Business Logic',
  },
  {
    code: '03',
    icon: FiDatabase,
    title: 'DATA CORE',
    skills: 'PostgreSQL / MySQL / Supabase / Migrations',
  },
  {
    code: '04',
    icon: FiLayers,
    title: 'SHIP PROTOCOL',
    skills: 'Git / CI/CD / Docker / Observability',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionIndex}>
        <span>{index}</span>
        <i aria-hidden='true' />
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function FutureCore() {
  return (
    <div className={styles.futureCore} aria-hidden='true'>
      <span className={styles.coreOrbitOne} />
      <span className={styles.coreOrbitTwo} />
      <span className={styles.coreOrbitThree} />
      <span className={styles.coreGlow} />
      <span className={styles.coreMonogram}>NF</span>
    </div>
  );
}

export default function CyberpunkPage() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const skyY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const coreY = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 58]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.12]);
  const motionOff = Boolean(shouldReduceMotion);
  const revealProps = {
    initial: false,
    whileInView: 'visible',
    viewport: { once: true, amount: 0.18 },
    variants: reveal,
    transition: { duration: motionOff ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <CyberpunkLayout>
      <Seo
        templateTitle='Cyberpunk Portfolio'
        description='Enter Fikri Nadrian’s cyberpunk portfolio: full-stack product engineering, selected work, and systems built for the web.'
      />

      <main id='main-content' className={styles.site}>
        <div className={styles.scanlines} aria-hidden='true' />

        <section ref={heroRef} className={styles.hero}>
          <motion.div
            className={styles.heroAtmosphere}
            style={motionOff ? undefined : { y: skyY }}
            aria-hidden='true'
          >
            <div className={styles.starField} />
            <div className={styles.sun} />
            <div className={styles.skyline}>
              {Array.from({ length: 14 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
            <div className={styles.perspectiveGrid} />
          </motion.div>

          <div className={`layout ${styles.heroInner}`}>
            <motion.div
              className={styles.heroCopy}
              style={motionOff ? undefined : { y: copyY, opacity: heroOpacity }}
            >
              <div className={styles.signalBadge}>
                <span aria-hidden='true' />
                SYSTEM ONLINE / JAKARTA 06
              </div>
              <p className={styles.eyebrow}>FULL-STACK SOFTWARE ENGINEER</p>
              <h1>
                BUILDING
                <span data-text='DIGITAL FUTURES'>DIGITAL FUTURES</span>
              </h1>
              <p className={styles.heroIntro}>
                I&apos;m Fikri Nadrian. I engineer fast, dependable web products
                from the interface layer to APIs, data, and production.
              </p>
              <div className={styles.heroActions}>
                <MotionLink
                  href='#work'
                  className={`${styles.action} ${styles.actionPrimary}`}
                  whileTap={motionOff ? undefined : { scale: 0.98 }}
                >
                  Explore projects <FiArrowDownRight aria-hidden='true' />
                </MotionLink>
                <MotionLink
                  href='mailto:fikrinadrian@gmail.com'
                  className={`${styles.action} ${styles.actionSecondary}`}
                  whileTap={motionOff ? undefined : { scale: 0.98 }}
                >
                  Open channel <FiRadio aria-hidden='true' />
                </MotionLink>
              </div>
            </motion.div>

            <motion.aside
              className={styles.heroVisual}
              style={motionOff ? undefined : { y: coreY }}
              aria-label='Developer system overview'
            >
              <div className={styles.hudCorners} aria-hidden='true' />
              <div className={styles.hudTopline}>
                <span>CORE_ID // NF-022</span>
                <span className={styles.hudLive}>LIVE</span>
              </div>
              <FutureCore />
              <div className={styles.hudData}>
                <div>
                  <span>ROLE</span>
                  <strong>FULL STACK</strong>
                </div>
                <div>
                  <span>UPTIME</span>
                  <strong>04+ YEARS</strong>
                </div>
                <div>
                  <span>BASE</span>
                  <strong>INDONESIA</strong>
                </div>
              </div>
            </motion.aside>
          </div>

          <div className={styles.scrollCue} aria-hidden='true'>
            <span>SCROLL TO DESCEND</span>
            <i />
          </div>
        </section>

        <div className={styles.statusRail} aria-label='Current availability'>
          <div className='layout'>
            <span>
              <FiCheckCircle aria-hidden='true' /> Available for select projects
            </span>
            <span>React + Go</span>
            <span>Frontend → Backend</span>
            <span>UTC +07</span>
          </div>
        </div>

        <section id='profile' className={styles.profileSection}>
          <div className={`layout ${styles.profileGrid}`}>
            <motion.div {...revealProps}>
              <SectionHeading
                index='01'
                eyebrow='Profile'
                title='PRECISION IN EVERY LAYER.'
              />
              <div className={styles.profileMeta}>
                <FiMapPin aria-hidden='true' />
                6.2088° S / 106.8456° E
              </div>
            </motion.div>
            <motion.div className={styles.profileStatement} {...revealProps}>
              <p>
                From measuring physical terrain to mapping complex product
                systems, my work has always been about turning ambiguity into
                something precise.
              </p>
              <div className={styles.profileCards}>
                <article>
                  <span>PRODUCT MINDSET</span>
                  <strong>Build for the outcome, not just the ticket.</strong>
                </article>
                <article>
                  <span>END-TO-END RANGE</span>
                  <strong>Interfaces, services, data, and delivery.</strong>
                </article>
              </div>
            </motion.div>
          </div>
        </section>

        <section id='work' className={styles.workSection}>
          <div className='layout'>
            <motion.div {...revealProps}>
              <SectionHeading
                index='02'
                eyebrow='Selected work'
                title='PROJECT ARCHIVE'
                description='Live products, private tools, and digital identities engineered for real teams.'
              />
            </motion.div>

            <div className={styles.projectGrid}>
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className={`${styles.projectCard} ${
                    index === 0 ? styles.projectFeatured : ''
                  }`}
                  {...revealProps}
                  transition={{
                    ...revealProps.transition,
                    delay: motionOff ? 0 : index * 0.06,
                  }}
                >
                  <div className={styles.projectVisual} aria-hidden='true'>
                    <span>{project.number}</span>
                    <FiGlobe />
                    <div />
                  </div>
                  <div className={styles.projectBody}>
                    <div className={styles.projectMeta}>
                      <span>{project.category}</span>
                      <span>{index === 0 ? 'ACTIVE' : 'ARCHIVED'}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.projectTags}>
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight}>{highlight}</span>
                      ))}
                    </div>
                    {project.url ? (
                      <UnstyledLink
                        href={project.url}
                        className={styles.projectLink}
                        aria-label={`Visit ${project.title}`}
                      >
                        Launch project <FiArrowUpRight aria-hidden='true' />
                      </UnstyledLink>
                    ) : (
                      <span className={styles.projectLocked}>
                        <FiTerminal aria-hidden='true' /> Restricted access
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id='experience' className={styles.experienceSection}>
          <div className={`layout ${styles.experienceGrid}`}>
            <motion.div {...revealProps}>
              <SectionHeading
                index='03'
                eyebrow='Experience'
                title='MISSION LOG'
                description='A career trajectory from frontend craft to full-stack ownership.'
              />
            </motion.div>
            <div className={styles.timeline}>
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.role}`}
                  className={styles.timelineItem}
                  {...revealProps}
                  transition={{
                    ...revealProps.transition,
                    delay: motionOff ? 0 : index * 0.07,
                  }}
                >
                  <div className={styles.timelineRail} aria-hidden='true'>
                    <span className={item.active ? styles.activeNode : ''} />
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTop}>
                      <span>{item.period}</span>
                      {item.active ? <b>LIVE NODE</b> : null}
                    </div>
                    <h3>{item.role}</h3>
                    <h4>@ {item.company}</h4>
                    <p>{item.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.systemSection}>
          <div className='layout'>
            <motion.div {...revealProps}>
              <SectionHeading
                index='04'
                eyebrow='Capabilities'
                title='SYSTEM MODULES'
              />
            </motion.div>
            <div className={styles.systemGrid}>
              {systems.map((system, index) => {
                const Icon = system.icon;
                return (
                  <motion.article
                    key={system.code}
                    className={styles.systemCard}
                    {...revealProps}
                    transition={{
                      ...revealProps.transition,
                      delay: motionOff ? 0 : index * 0.05,
                    }}
                  >
                    <div>
                      <span>{system.code}</span>
                      <Icon aria-hidden='true' />
                    </div>
                    <h3>{system.title}</h3>
                    <p>{system.skills}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id='contact' className={styles.contactSection}>
          <div className='layout'>
            <motion.div className={styles.contactPanel} {...revealProps}>
              <div className={styles.contactSignal} aria-hidden='true'>
                <FiZap />
              </div>
              <p className={styles.eyebrow}>SECURE CHANNEL // OPEN</p>
              <h2>READY TO BUILD WHAT&apos;S NEXT?</h2>
              <p>
                Let&apos;s turn a hard product problem into a clear, resilient,
                production-ready system.
              </p>
              <div className={styles.contactActions}>
                <UnstyledLink
                  href='mailto:fikrinadrian@gmail.com'
                  className={`${styles.action} ${styles.actionPrimary}`}
                >
                  <FiMail aria-hidden='true' /> Send transmission
                </UnstyledLink>
                <UnstyledLink
                  href='https://linkedin.com/in/fikrinadrian'
                  className={styles.iconAction}
                  aria-label='Visit Fikri on LinkedIn'
                >
                  <FiLinkedin aria-hidden='true' />
                </UnstyledLink>
                <UnstyledLink
                  href='https://github.com/fikrinadrian'
                  className={styles.iconAction}
                  aria-label='Visit Fikri on GitHub'
                >
                  <FiGithub aria-hidden='true' />
                </UnstyledLink>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className='layout'>
            <span>© {new Date().getFullYear()} FIKRI NADRIAN</span>
            <span>BUILT WITH INTENT // SIGNAL END</span>
          </div>
        </footer>
      </main>
    </CyberpunkLayout>
  );
}
