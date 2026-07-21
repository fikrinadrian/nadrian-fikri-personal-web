import { GetStaticPaths, GetStaticProps } from 'next';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

import styles from '@/styles/PixelPortfolio.module.css';

import {
  BlogPost,
  BlogPostMeta,
  getAllBlogPosts,
  getBlogPostBySlug,
} from '@/lib/blog';

import PixelLayout from '@/components/layout/PixelLayout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

type PixelBlogPostPageProps = {
  post: BlogPost;
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
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllBlogPosts().map((post: BlogPostMeta) => ({
    params: { slug: post.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PixelBlogPostPageProps> = async ({
  params,
}) => ({
  props: { post: await getBlogPostBySlug(String(params?.slug)) },
});

export default function PixelBlogPostPage({ post }: PixelBlogPostPageProps) {
  return (
    <PixelLayout>
      <Seo
        templateTitle={`${post.title} — Pixel Art`}
        description={post.description}
        date={post.date}
        type='article'
      />

      <main id='main-content' className={cx('pixel-site pixel-article-page')}>
        <article>
          <header className={cx('pixel-article-hero')}>
            <div className={cx('layout pixel-article-hero-inner')}>
              <UnstyledLink
                href='/pixel-art/blog'
                className={cx('pixel-back-link')}
              >
                <FiArrowLeft aria-hidden='true' /> BACK TO JOURNAL
              </UnstyledLink>
              <div className={cx('pixel-article-meta')}>
                <span>{post.category}</span>
                <span>{formatDate(post.date).toUpperCase()}</span>
                <span>
                  <FiClock aria-hidden='true' />{' '}
                  {post.readingTime.toUpperCase()}
                </span>
              </div>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <div className={cx('pixel-tags pixel-article-tags')}>
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </header>

          <section className={cx('pixel-article-section')}>
            <div className={cx('layout')}>
              <div className={cx('pixel-article-window')}>
                <div className={cx('pixel-window-bar')}>
                  <span>JOURNAL_ENTRY.MD</span>
                  <div aria-hidden='true'>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div
                  className={cx('pixel-article-content')}
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
              </div>
              <div className={cx('pixel-article-footer')}>
                <UnstyledLink
                  href='/pixel-art/blog'
                  className={cx('pixel-button pixel-button-secondary')}
                >
                  <FiArrowLeft aria-hidden='true' /> ALL JOURNAL ENTRIES
                </UnstyledLink>
              </div>
            </div>
          </section>
        </article>
      </main>
    </PixelLayout>
  );
}
