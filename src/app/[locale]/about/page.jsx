import React from 'react'
import { useTranslations } from 'next-intl';
import AboutSection from '@/components/about/AboutSection';

const About = () => {
  const t = useTranslations('About');
  return (
    <>
       <AboutSection />
    </>
  )
}

export default About