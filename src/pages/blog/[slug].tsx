import { motion, useReducedMotion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

import {
  BlogPost,
  BlogPostMeta,
  getAllBlogPosts,
  getBlogPostBySlug,
} from '@/lib/blog';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

type BlogPostPageProps = {
  post: BlogPost;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogPosts().map((post: BlogPostMeta) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  const slug = String(params?.slug);

  return {
    props: {
      post: await getBlogPostBySlug(slug),
    },
  };
};

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Layout>
      <Seo
        templateTitle={post.title}
        description={post.description}
        date={post.date}
        type='article'
      />

      <main className='relative overflow-hidden'>
        <div className='ambient-grid pointer-events-none absolute inset-x-0 top-0 h-120 opacity-50' />

        <motion.article
          className='layout relative z-10 py-14 sm:py-20'
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <UnstyledLink
            href='/blog'
            className='inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white'
          >
            <FiArrowLeft />
            Back to blog
          </UnstyledLink>

          <header className='mt-10 max-w-3xl border-b border-white/10 pb-10'>
            <div className='flex flex-wrap items-center gap-3 text-sm text-zinc-400'>
              <span className='rounded border border-primary-300/25 bg-primary-300/10 px-3 py-1 text-primary-200'>
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span className='inline-flex items-center gap-1'>
                <FiClock />
                {post.readingTime}
              </span>
            </div>
            <h1 className='mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl'>
              {post.title}
            </h1>
            <p className='mt-6 text-base leading-8 text-zinc-300 sm:text-lg'>
              {post.description}
            </p>
            <div className='mt-6 flex flex-wrap gap-2'>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className='rounded border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300'
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className='blog-content mt-10 max-w-3xl'
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </motion.article>
      </main>
    </Layout>
  );
}
