import { FiArrowUpRight, FiLock } from 'react-icons/fi';

import { Project } from '@/data/projects';

import UnstyledLink from '@/components/links/UnstyledLink';
import ProjectPreview from '@/components/projects/ProjectPreview';

type ProjectCardProps = {
  project: Project;
  detailed?: boolean;
};

export default function ProjectCard({
  project,
  detailed = false,
}: ProjectCardProps) {
  return (
    <article
      id={detailed ? project.id : undefined}
      className={`group overflow-hidden rounded border border-white/10 bg-white/[0.035] transition-colors duration-300 hover:border-primary-300/35 ${
        detailed
          ? 'scroll-mt-24 p-4 sm:p-5 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:p-7'
          : 'p-4'
      }`}
    >
      <ProjectPreview variant={project.preview} />

      <div
        className={
          detailed
            ? 'px-1 pb-1 pt-6 lg:flex lg:flex-col lg:py-2'
            : 'px-1 pb-1 pt-5'
        }
      >
        <div className='flex items-center justify-between gap-3'>
          <p className='text-xs font-medium uppercase tracking-[0.2em] text-primary-300'>
            {project.category}
          </p>
          <span className='font-mono text-xs text-zinc-600'>
            {project.number}
          </span>
        </div>

        <h3
          className={`mt-3 font-semibold text-white ${
            detailed ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        <p className='mt-1 text-xs text-zinc-500'>{project.client}</p>
        <p className='mt-4 text-sm leading-7 text-zinc-300'>
          {project.description}
        </p>

        {detailed && (
          <>
            <p className='mt-3 text-sm leading-7 text-zinc-400'>
              {project.details}
            </p>
            <div className='mt-5 flex flex-wrap gap-2'>
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className='rounded border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-300'
                >
                  {highlight}
                </span>
              ))}
            </div>
          </>
        )}

        <div className={detailed ? 'mt-6 lg:mt-auto lg:pt-6' : 'mt-5'}>
          {project.url ? (
            <UnstyledLink
              href={project.url}
              className='inline-flex items-center gap-2 text-sm font-semibold text-primary-300 transition-colors hover:text-primary-200'
              aria-label={`Visit ${project.title} website`}
            >
              Visit live site
              <FiArrowUpRight className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </UnstyledLink>
          ) : (
            <span className='inline-flex items-center gap-2 text-sm font-medium text-zinc-500'>
              <FiLock />
              Private project
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
