import React from 'react'
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('About');
  return (
    <div>
       <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}

export default About