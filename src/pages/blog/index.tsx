import { motion, useReducedMotion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { FiArrowUpRight, FiBookOpen, FiClock, FiFeather } from 'react-icons/fi';

import { BlogPostMeta, getAllBlogPosts } from '@/lib/blog';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

type BlogIndexPageProps = {
  posts: BlogPostMeta[];
};

const enterTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
  return {
    props: {
      posts: getAllBlogPosts(),
    },
  };
};

export default function BlogIndexPage({ posts }: BlogIndexPageProps) {
  const shouldReduceMotion = useReducedMotion();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const regularPosts = posts.filter((post) => post.slug !== featuredPost?.slug);

  const revealMotion = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: enterTransition,
  };

  return (
    <Layout>
      <Seo
        templateTitle='Blog'
        description='Catatan pribadi Fikri Nadrian tentang software engineering, full-stack development, dan product delivery.'
      />

      <main className='relative overflow-hidden'>
        <div className='ambient-grid pointer-events-none absolute inset-x-0 top-0 h-120 opacity-50' />

        <section className='relative border-b border-white/10 py-16 sm:py-20'>
          <motion.div className='layout' {...revealMotion}>
            <div className='max-w-3xl'>
              <p className='inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-primary-300'>
                <FiFeather />
                Personal Blog
              </p>
              <h1 className='mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl'>
                Catatan engineering, produk, dan proses belajar.
              </h1>
              <p className='mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg'>
                Ruang untuk menulis pengalaman membangun aplikasi web, keputusan
                teknis, dan refleksi kerja sebagai software engineer.
              </p>
            </div>
          </motion.div>
        </section>

        {featuredPost && (
          <section className='relative border-b border-white/10 py-14'>
            <div className='layout'>
              <motion.article
                className='grid gap-8 rounded border border-primary-300/25 bg-primary-300/8 p-6 shadow-2xl shadow-black/20 sm:p-8 lg:grid-cols-[0.82fr_1.18fr]'
                {...revealMotion}
              >
                <div>
                  <p className='text-sm font-medium uppercase tracking-[0.24em] text-primary-200'>
                    Featured
                  </p>
                  <div className='mt-6 flex flex-wrap gap-2'>
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className='flex flex-wrap items-center gap-3 text-sm text-zinc-400'>
                    <span>{featuredPost.category}</span>
                    <span className='h-1 w-1 rounded-full bg-zinc-600' />
                    <span>{formatDate(featuredPost.date)}</span>
                    <span className='inline-flex items-center gap-1'>
                      <FiClock />
                      {featuredPost.readingTime}
                    </span>
                  </div>
                  <h2 className='mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl'>
                    {featuredPost.title}
                  </h2>
                  <p className='mt-4 text-sm leading-7 text-zinc-300'>
                    {featuredPost.description}
                  </p>
                  <UnstyledLink
                    href={`/blog/${featuredPost.slug}`}
                    className='mt-6 inline-flex items-center gap-2 rounded border border-primary-300/70 bg-primary-300 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-primary-200'
                  >
                    Read article
                    <FiArrowUpRight />
                  </UnstyledLink>
                </div>
              </motion.article>
            </div>
          </section>
        )}

        <section className='py-14'>
          <div className='layout'>
            <div className='mb-8 flex items-center gap-3'>
              <span className='flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-white/5 text-primary-300'>
                <FiBookOpen />
              </span>
              <h2 className='text-2xl font-semibold text-white'>All Posts</h2>
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  className='rounded border border-white/10 bg-white/[0.035] p-5 hover:border-primary-300/35 hover:bg-white/5'
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...enterTransition, delay: index * 0.06 }}
                >
                  <div className='flex flex-wrap items-center gap-3 text-xs text-zinc-500'>
                    <span>{post.category}</span>
                    <span className='h-1 w-1 rounded-full bg-zinc-700' />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className='mt-3 text-xl font-semibold leading-snug text-white'>
                    {post.title}
                  </h3>
                  <p className='mt-3 text-sm leading-7 text-zinc-400'>
                    {post.description}
                  </p>
                  <UnstyledLink
                    href={`/blog/${post.slug}`}
                    className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200'
                  >
                    Read article
                    <FiArrowUpRight />
                  </UnstyledLink>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
