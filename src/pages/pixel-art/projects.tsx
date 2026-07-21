import { FiArrowLeft, FiArrowUpRight, FiMail } from 'react-icons/fi';

import styles from '@/styles/PixelPortfolio.module.css';

import { projects } from '@/data/projects';

import PixelLayout from '@/components/layout/PixelLayout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

function cx(...values: string[]) {
  return values
    .flatMap((value) => value.split(/\s+/))
    .filter(Boolean)
    .map((className) => styles[className] ?? className)
    .join(' ');
}

export default function PixelProjectsPage() {
  return (
    <PixelLayout>
      <Seo
        templateTitle='Pixel Art Projects'
        description='Explore Fikri Nadrian’s projects through the pixel-art portfolio experience.'
      />

      <main id='main-content' className={cx('pixel-site')}>
        <section className={cx('pixel-subpage-hero pixel-projects')}>
          <div className={cx('layout pixel-subpage-hero-inner')}>
            <UnstyledLink href='/pixel-art' className={cx('pixel-back-link')}>
              <FiArrowLeft aria-hidden='true' /> BACK TO BASE
            </UnstyledLink>
            <p className={cx('pixel-kicker')}>&#47;&#47; QUEST SELECT</p>
            <h1>MISSION ARCHIVE</h1>
            <p className={cx('pixel-subpage-copy')}>
              Browse product engineering, internal tools, and public websites
              shipped for real teams and businesses.
            </p>
            <div className={cx('pixel-archive-stats')}>
              <span>
                <b>04</b> TOTAL QUESTS
              </span>
              <span>
                <b>03</b> PUBLIC BUILDS
              </span>
              <span>
                <b>01</b> PRIVATE BUILD
              </span>
            </div>
          </div>
        </section>

        <section className={cx('pixel-section pixel-about')}>
          <div className={cx('layout')}>
            <div
              className={cx('pixel-project-grid pixel-project-grid-archive')}
            >
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={cx(
                    `pixel-project-card pixel-project-${index + 1}`,
                  )}
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
                    <h2>{project.title}</h2>
                    <p>{project.details}</p>
                    <div className={cx('pixel-tags')}>
                      {project.highlights.map((highlight) => (
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={cx('pixel-contact pixel-subpage-contact')}>
          <div className={cx('layout')}>
            <div className={cx('pixel-contact-panel')}>
              <p className={cx('pixel-kicker')}>&#47;&#47; NEW QUEST</p>
              <h2>BUILD SOMETHING TOGETHER?</h2>
              <p>
                Available for frontend, full-stack product work, and focused web
                builds.
              </p>
              <div className={cx('pixel-actions pixel-actions-center')}>
                <UnstyledLink
                  href='mailto:fikrinadrian@gmail.com'
                  className={cx('pixel-button pixel-button-yellow')}
                >
                  <FiMail aria-hidden='true' /> START A CONVERSATION
                </UnstyledLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PixelLayout>
  );
}
