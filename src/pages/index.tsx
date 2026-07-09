import { motion, useReducedMotion } from 'framer-motion';

import ContactSection from '@/components/home/ContactSection';
import EducationSection from '@/components/home/EducationSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import HeroSection from '@/components/home/HeroSection';
import { getPageMotion } from '@/components/home/motion';
import ProfileSection from '@/components/home/ProfileSection';
import SiteFooter from '@/components/home/SiteFooter';
import SkillsSection from '@/components/home/SkillsSection';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const isReducedMotion = Boolean(shouldReduceMotion);

  return (
    <Layout>
      <Seo />

      <motion.main
        className='relative overflow-hidden'
        {...getPageMotion(Boolean(shouldReduceMotion))}
      >
        <div className='ambient-grid pointer-events-none absolute inset-x-0 top-0 h-170 opacity-50' />

        <HeroSection shouldReduceMotion={isReducedMotion} />
        <ProfileSection shouldReduceMotion={isReducedMotion} />
        <ExperienceSection shouldReduceMotion={isReducedMotion} />
        <SkillsSection shouldReduceMotion={isReducedMotion} />
        <EducationSection shouldReduceMotion={isReducedMotion} />
        <ContactSection shouldReduceMotion={isReducedMotion} />
        <SiteFooter shouldReduceMotion={isReducedMotion} />
      </motion.main>
    </Layout>
  );
}
