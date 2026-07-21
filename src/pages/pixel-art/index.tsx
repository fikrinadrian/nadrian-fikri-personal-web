import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import * as React from 'react';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiServer,
} from 'react-icons/fi';

import styles from '@/styles/PixelPortfolio.module.css';

import { BlogPostMeta, getAllBlogPosts } from '@/lib/blog';

import { projects } from '@/data/projects';

import Layout from '@/components/layout/PixelLayout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

type HomePageProps = {
  posts: BlogPostMeta[];
};

const MotionLink = motion.create(UnstyledLink);

function cx(...values: string[]) {
  return values
    .flatMap((value) => value.split(/\s+/))
    .filter(Boolean)
    .map((className) => styles[className] ?? className)
    .join(' ');
}

const highlights = [
  {
    code: '01',
    title: 'Product minded',
    text: 'I care about the user journey and business outcome, not only the ticket.',
  },
  {
    code: '02',
    title: 'End-to-end',
    text: 'Comfortable moving from interface details to APIs, logic, and databases.',
  },
  {
    code: '03',
    title: 'Built to last',
    text: 'I optimize for readable systems, stable releases, and maintainable code.',
  },
];

const experiences = [
  {
    company: 'Reku.id',
    role: 'Software Developer — Full Stack',
    period: '2025 — NOW',
    description:
      'Building product features across Next.js, Node.js, Go, REST APIs, and relational databases.',
    active: true,
  },
  {
    company: 'Reku.id',
    role: 'Software Developer — Frontend',
    period: '2022 — 2025',
    description:
      'Shipped responsive product experiences, reusable components, performance improvements, and production fixes.',
  },
  {
    company: 'Freelance',
    role: 'Software Developer',
    period: '2023 — NOW',
    description:
      'Delivered internal tools and public websites from requirements through testing and launch.',
    active: true,
  },
  {
    company: 'Surveying Projects',
    role: 'Land & Cadastral Surveyor',
    period: '2017 — 2020',
    description:
      'Built a foundation in field precision, technical documentation, coordinates, and AutoCAD drafting.',
  },
];

const skillGroups = [
  {
    title: 'Frontend kit',
    icon: FiCode,
    color: 'yellow',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend kit',
    icon: FiServer,
    color: 'pink',
    skills: ['Node.js', 'Go / Golang', 'REST APIs', 'Business Logic'],
  },
  {
    title: 'Data & ship',
    icon: FiDatabase,
    color: 'blue',
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Docker', 'CI/CD'],
  },
  {
    title: 'Party skills',
    icon: FiBriefcase,
    color: 'green',
    skills: [
      'Problem Solving',
      'Collaboration',
      'Communication',
      'Adaptability',
    ],
  },
];

const featuredProjects = projects.slice(0, 3);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => ({
  props: {
    posts: getAllBlogPosts().slice(0, 2),
  },
});

function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
    .format(new Date(date))
    .toUpperCase();
}

function PixelScene() {
  return (
    <svg
      viewBox='0 0 420 340'
      className={cx('h-auto w-full')}
      role='img'
      aria-labelledby='pixel-scene-title pixel-scene-description'
      shapeRendering='crispEdges'
    >
      <title id='pixel-scene-title'>Pixel art developer workstation</title>
      <desc id='pixel-scene-description'>
        A developer coding at a desk beside a window overlooking a pixel city.
      </desc>
      <rect width='420' height='340' fill='#8fd3ff' />
      <rect y='222' width='420' height='118' fill='#ffd95a' />
      <rect y='228' width='420' height='8' fill='#10182f' />

      <rect
        x='24'
        y='24'
        width='160'
        height='126'
        fill='#f9f4dc'
        stroke='#10182f'
        strokeWidth='8'
      />
      <rect x='40' y='40' width='128' height='94' fill='#5687ee' />
      <rect x='40' y='104' width='128' height='30' fill='#294fbf' />
      <rect x='52' y='86' width='28' height='48' fill='#182b67' />
      <rect x='88' y='70' width='34' height='64' fill='#10182f' />
      <rect x='132' y='94' width='24' height='40' fill='#f476ad' />
      <rect x='100' y='40' width='8' height='94' fill='#10182f' />
      <rect x='40' y='83' width='128' height='8' fill='#10182f' />

      <rect
        x='250'
        y='26'
        width='136'
        height='114'
        fill='#fff8de'
        stroke='#10182f'
        strokeWidth='8'
      />
      <rect x='266' y='42' width='104' height='16' fill='#10182f' />
      <rect x='266' y='68' width='72' height='10' fill='#294fbf' />
      <rect x='266' y='88' width='88' height='10' fill='#f476ad' />
      <rect x='266' y='108' width='54' height='10' fill='#5ecb83' />

      <rect x='60' y='210' width='310' height='22' fill='#10182f' />
      <rect x='76' y='232' width='18' height='76' fill='#10182f' />
      <rect x='338' y='232' width='18' height='76' fill='#10182f' />
      <rect x='224' y='148' width='120' height='72' fill='#10182f' />
      <rect x='234' y='158' width='100' height='50' fill='#294fbf' />
      <rect x='246' y='170' width='24' height='8' fill='#8fd3ff' />
      <rect x='278' y='170' width='38' height='8' fill='#ffd95a' />
      <rect x='246' y='188' width='50' height='8' fill='#f476ad' />
      <rect x='274' y='220' width='22' height='12' fill='#10182f' />

      <rect x='116' y='126' width='70' height='72' fill='#10182f' />
      <rect x='124' y='134' width='54' height='54' fill='#d98a54' />
      <rect x='116' y='126' width='70' height='18' fill='#3f271f' />
      <rect x='108' y='136' width='18' height='34' fill='#3f271f' />
      <rect x='178' y='138' width='16' height='28' fill='#3f271f' />
      <rect x='136' y='154' width='8' height='8' fill='#10182f' />
      <rect x='162' y='154' width='8' height='8' fill='#10182f' />
      <rect x='146' y='174' width='16' height='6' fill='#10182f' />
      <rect x='104' y='198' width='96' height='58' fill='#294fbf' />
      <rect x='96' y='210' width='24' height='46' fill='#294fbf' />
      <rect x='186' y='210' width='34' height='22' fill='#d98a54' />
      <rect x='120' y='256' width='30' height='52' fill='#10182f' />
      <rect x='164' y='256' width='30' height='52' fill='#10182f' />
      <rect x='112' y='304' width='42' height='12' fill='#f476ad' />
      <rect x='160' y='304' width='42' height='12' fill='#f476ad' />

      <rect
        x='32'
        y='282'
        width='48'
        height='34'
        fill='#fff8de'
        stroke='#10182f'
        strokeWidth='7'
      />
      <rect x='42' y='268' width='8' height='16' fill='#5ecb83' />
      <rect x='58' y='260' width='8' height='24' fill='#5ecb83' />
      <rect x='68' y='270' width='8' height='14' fill='#5ecb83' />
      <rect x='372' y='296' width='16' height='16' fill='#f476ad' />
      <rect x='390' y='278' width='10' height='10' fill='#294fbf' />
      <rect x='22' y='174' width='12' height='12' fill='#ffd95a' />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className={cx('pixel-section-heading')}>
      <p className={cx('pixel-kicker')}>
        {'// '}
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {text ? <p className={cx('pixel-section-copy')}>{text}</p> : null}
    </div>
  );
}

export default function HomePage({ posts }: HomePageProps) {
  const reveal = (delay = 0) => ({
    initial: false as const,
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <Layout>
      <Seo templateTitle='Pixel Art Portfolio' />
      <main id='main-content' className={cx('pixel-site')}>
        <section id='home' className={cx('pixel-hero')}>
          <div
            className={cx('pixel-cloud pixel-cloud-one')}
            aria-hidden='true'
          />
          <div
            className={cx('pixel-cloud pixel-cloud-two')}
            aria-hidden='true'
          />
          <div className={cx('layout pixel-hero-grid')}>
            <motion.div className={cx('pixel-hero-copy')} {...reveal()}>
              <div className={cx('pixel-player-tag')}>
                <span className={cx('pixel-status-dot')} aria-hidden='true' />
                PLAYER 01 · AVAILABLE
              </div>
              <p className={cx('pixel-overline')}>
                SOFTWARE ENGINEER / INDONESIA
              </p>
              <h1>
                I BUILD
                <span>WEB WORLDS.</span>
              </h1>
              <p className={cx('pixel-intro')}>
                Hi, I&apos;m <strong>Fikri Nadrian</strong> — a full-stack
                developer turning complex product ideas into fast, dependable,
                and human-friendly web experiences.
              </p>
              <div className={cx('pixel-actions')}>
                <MotionLink
                  href='#projects'
                  className={cx('pixel-button pixel-button-primary')}
                >
                  VIEW MY QUESTS <FiArrowRight aria-hidden='true' />
                </MotionLink>
                <MotionLink
                  href='mailto:fikrinadrian@gmail.com'
                  className={cx('pixel-button pixel-button-secondary')}
                >
                  <FiMail aria-hidden='true' /> SEND A MESSAGE
                </MotionLink>
              </div>
            </motion.div>

            <motion.div className={cx('pixel-scene-shell')} {...reveal(0.1)}>
              <div className={cx('pixel-window-bar')}>
                <span>FIKRI.EXE</span>
                <div aria-hidden='true'>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <PixelScene />
              <div className={cx('pixel-hud')}>
                <span>
                  <b>LVL</b> 04+
                </span>
                <span>
                  <b>HP</b> 100/100
                </span>
                <span>
                  <b>CLASS</b> FULLSTACK
                </span>
              </div>
            </motion.div>
          </div>
          <div className={cx('pixel-ground')} aria-hidden='true' />
        </section>

        <section
          className={cx('pixel-status-bar')}
          aria-label='Quick profile facts'
        >
          <div className={cx('layout pixel-status-grid')}>
            <div>
              <FiMapPin aria-hidden='true' />
              <span>BASE</span>
              <strong>INDONESIA</strong>
            </div>
            <div>
              <FiCode aria-hidden='true' />
              <span>XP</span>
              <strong>4+ YEARS</strong>
            </div>
            <div>
              <FiServer aria-hidden='true' />
              <span>BUILD</span>
              <strong>REACT + GO</strong>
            </div>
            <div>
              <span className={cx('pixel-mini-heart')} aria-hidden='true' />{' '}
              <span>STATUS</span>
              <strong>OPEN TO TALK</strong>
            </div>
          </div>
        </section>

        <section id='about' className={cx('pixel-section pixel-about')}>
          <div className={cx('layout')}>
            <motion.div {...reveal()}>
              <SectionHeading
                eyebrow='Character profile'
                title='ABOUT THIS PLAYER'
                text='A frontend specialist who expanded the map into full-stack product engineering.'
              />
            </motion.div>
            <div className={cx('pixel-about-grid')}>
              <motion.div className={cx('pixel-dialogue')} {...reveal(0.05)}>
                <div className={cx('pixel-dialogue-title')}>FIKRI SAYS:</div>
                <p>
                  “I like making software feel simple on the outside, even when
                  the system behind it is anything but.”
                </p>
                <p>
                  My path started with field surveying, where precision matters.
                  Today I bring that same discipline to interfaces, APIs, data,
                  and the messy middle where products become real.
                </p>
              </motion.div>
              <div className={cx('pixel-trait-list')}>
                {highlights.map((item, index) => (
                  <motion.article
                    key={item.code}
                    className={cx('pixel-trait-card')}
                    {...reveal(index * 0.06)}
                  >
                    <span>{item.code}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id='projects' className={cx('pixel-section pixel-projects')}>
          <div className={cx('layout')}>
            <motion.div className={cx('pixel-heading-row')} {...reveal()}>
              <SectionHeading
                eyebrow='Featured quests'
                title='SELECTED MISSIONS'
                text='Real product work, business tools, and sites shipped for teams and clients.'
              />
              <MotionLink
                href='/pixel-art/projects'
                className={cx('pixel-text-link')}
              >
                ALL QUESTS <FiArrowUpRight aria-hidden='true' />
              </MotionLink>
            </motion.div>
            <div className={cx('pixel-project-grid')}>
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className={cx(
                    `pixel-project-card pixel-project-${index + 1}`,
                  )}
                  {...reveal(index * 0.07)}
                >
                  <div className={cx('pixel-project-top')}>
                    <span>QUEST {project.number}</span>
                    <span>{index === 0 ? 'IN PROGRESS' : 'COMPLETED'}</span>
                  </div>
                  <div className={cx('pixel-project-art')} aria-hidden='true'>
                    <span className={cx('pixel-art-sun')} />
                    <span
                      className={cx('pixel-art-building pixel-art-building-a')}
                    />
                    <span
                      className={cx('pixel-art-building pixel-art-building-b')}
                    />
                    <span className={cx('pixel-art-character')} />
                  </div>
                  <div className={cx('pixel-project-body')}>
                    <p className={cx('pixel-project-category')}>
                      {project.category}
                    </p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={cx('pixel-tags')}>
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight}>{highlight}</span>
                      ))}
                    </div>
                    {project.url ? (
                      <UnstyledLink
                        href={project.url}
                        className={cx('pixel-card-link')}
                      >
                        VISIT PROJECT <FiArrowUpRight aria-hidden='true' />
                      </UnstyledLink>
                    ) : (
                      <span
                        className={cx('pixel-card-link pixel-card-link-muted')}
                      >
                        PRIVATE BUILD
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id='experience'
          className={cx('pixel-section pixel-experience')}
        >
          <div className={cx('layout pixel-experience-grid')}>
            <motion.div {...reveal()}>
              <SectionHeading
                eyebrow='Career quest log'
                title='XP TIMELINE'
                text='A journey from measuring physical terrain to building digital products.'
              />
              <div className={cx('pixel-xp-panel')}>
                <p>NEXT LEVEL</p>
                <div>
                  <span style={{ width: '82%' }} />
                </div>
                <small>820 / 1000 XP</small>
              </div>
            </motion.div>
            <div className={cx('pixel-timeline')}>
              {experiences.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.role}`}
                  className={cx('pixel-timeline-item')}
                  {...reveal(index * 0.06)}
                >
                  <div
                    className={cx(
                      `pixel-timeline-node ${item.active ? 'is-active' : ''}`,
                    )}
                    aria-hidden='true'
                  />
                  <div className={cx('pixel-timeline-card')}>
                    <div className={cx('pixel-timeline-meta')}>
                      <span>{item.period}</span>
                      {item.active ? <b>LIVE</b> : null}
                    </div>
                    <h3>{item.role}</h3>
                    <h4>@ {item.company}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id='skills' className={cx('pixel-section pixel-skills')}>
          <div className={cx('layout')}>
            <motion.div {...reveal()}>
              <SectionHeading
                eyebrow='Inventory'
                title='TOOLS & POWER-UPS'
                text='A balanced kit for shipping modern web products from browser to database.'
              />
            </motion.div>
            <div className={cx('pixel-skill-grid')}>
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.article
                    key={group.title}
                    className={cx(
                      `pixel-skill-card pixel-skill-${group.color}`,
                    )}
                    {...reveal(index * 0.06)}
                  >
                    <div className={cx('pixel-skill-icon')}>
                      <Icon aria-hidden='true' />
                    </div>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.skills.map((skill) => (
                        <li key={skill}>
                          <span aria-hidden='true'>+</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id='blog' className={cx('pixel-section pixel-blog')}>
          <div className={cx('layout')}>
            <motion.div className={cx('pixel-heading-row')} {...reveal()}>
              <SectionHeading
                eyebrow='Save-point journal'
                title='LATEST NOTES'
                text='Field notes about frontend craft, systems, and shipping better software.'
              />
              <MotionLink
                href='/pixel-art/blog'
                className={cx('pixel-text-link')}
              >
                OPEN JOURNAL <FiBookOpen aria-hidden='true' />
              </MotionLink>
            </motion.div>
            <div className={cx('pixel-blog-grid')}>
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  className={cx('pixel-blog-card')}
                  {...reveal(index * 0.08)}
                >
                  <div className={cx('pixel-blog-date')}>
                    <span>{formatBlogDate(post.date)}</span>
                    <span>{post.readingTime.toUpperCase()}</span>
                  </div>
                  <p className={cx('pixel-project-category')}>
                    {post.category}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <UnstyledLink
                    href={`/pixel-art/blog/${post.slug}`}
                    className={cx('pixel-card-link')}
                  >
                    READ ENTRY <FiArrowRight aria-hidden='true' />
                  </UnstyledLink>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id='contact' className={cx('pixel-contact')}>
          <div className={cx('layout')}>
            <motion.div className={cx('pixel-contact-panel')} {...reveal()}>
              <div className={cx('pixel-contact-stars')} aria-hidden='true'>
                + · + · +
              </div>
              <p className={cx('pixel-kicker')}>&#47;&#47; CO-OP MODE</p>
              <h2>HAVE A QUEST IN MIND?</h2>
              <p>
                Let&apos;s turn a good idea into a fast, thoughtful,
                production-ready product.
              </p>
              <div className={cx('pixel-actions pixel-actions-center')}>
                <MotionLink
                  href='mailto:fikrinadrian@gmail.com'
                  className={cx('pixel-button pixel-button-yellow')}
                >
                  <FiMail aria-hidden='true' /> START A CONVERSATION
                </MotionLink>
                <MotionLink
                  href='https://linkedin.com/in/fikrinadrian'
                  className={cx('pixel-icon-link')}
                  aria-label='Visit Fikri on LinkedIn'
                >
                  <FiLinkedin aria-hidden='true' />
                </MotionLink>
                <MotionLink
                  href='https://github.com/fikrinadrian'
                  className={cx('pixel-icon-link')}
                  aria-label='Visit Fikri on GitHub'
                >
                  <FiGithub aria-hidden='true' />
                </MotionLink>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className={cx('pixel-footer')}>
          <div className={cx('layout')}>
            <p>© {new Date().getFullYear()} FIKRI NADRIAN</p>
            <p>
              DESIGNED & CODED WITH CARE <span aria-hidden='true'>♥</span>
            </p>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
