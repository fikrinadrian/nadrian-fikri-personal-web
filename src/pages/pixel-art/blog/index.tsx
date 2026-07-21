import { GetStaticProps } from 'next';
import { FiArrowLeft, FiArrowRight, FiBookOpen } from 'react-icons/fi';

import styles from '@/styles/PixelPortfolio.module.css';

import { BlogPostMeta, getAllBlogPosts } from '@/lib/blog';

import PixelLayout from '@/components/layout/PixelLayout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

type PixelBlogPageProps = {
  posts: BlogPostMeta[];
};

function cx(...values: string[]) {
  return values
    .flatMap((value) => value.split(/\s+/))
    .filter(Boolean)
    .map((className) => styles[className] ?? className)
    .join(' ');
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
    .format(new Date(date))
    .toUpperCase();
}

export const getStaticProps: GetStaticProps<PixelBlogPageProps> = async () => ({
  props: { posts: getAllBlogPosts() },
});

export default function PixelBlogPage({ posts }: PixelBlogPageProps) {
  return (
    <PixelLayout>
      <Seo
        templateTitle='Pixel Art Blog'
        description='Engineering notes and product delivery lessons from Fikri Nadrian, presented in pixel-art mode.'
      />

      <main id='main-content' className={cx('pixel-site')}>
        <section className={cx('pixel-subpage-hero pixel-blog')}>
          <div className={cx('layout pixel-subpage-hero-inner')}>
            <UnstyledLink href='/pixel-art' className={cx('pixel-back-link')}>
              <FiArrowLeft aria-hidden='true' /> BACK TO BASE
            </UnstyledLink>
            <p className={cx('pixel-kicker')}>&#47;&#47; SAVE-POINT JOURNAL</p>
            <h1>FIELD NOTES</h1>
            <p className={cx('pixel-subpage-copy')}>
              Notes about frontend craft, maintainable systems, product
              decisions, and lessons collected while shipping software.
            </p>
            <div className={cx('pixel-journal-count')}>
              <FiBookOpen aria-hidden='true' /> {posts.length} ENTRIES FOUND
            </div>
          </div>
        </section>

        <section className={cx('pixel-section pixel-about')}>
          <div className={cx('layout')}>
            <div className={cx('pixel-blog-grid pixel-blog-grid-archive')}>
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className={cx(
                    `pixel-blog-card ${index === 0 ? 'pixel-blog-card-featured' : ''}`,
                  )}
                >
                  <div className={cx('pixel-blog-date')}>
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readingTime.toUpperCase()}</span>
                  </div>
                  <p className={cx('pixel-project-category')}>
                    {post.category}
                  </p>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div className={cx('pixel-tags')}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <UnstyledLink
                    href={`/pixel-art/blog/${post.slug}`}
                    className={cx('pixel-card-link')}
                  >
                    READ ENTRY <FiArrowRight aria-hidden='true' />
                  </UnstyledLink>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PixelLayout>
  );
}
