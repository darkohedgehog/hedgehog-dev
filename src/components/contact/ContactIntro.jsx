import React from 'react'
import { useTranslations } from 'next-intl';

const ContactIntro = () => {
    const t = useTranslations('ContactIntro');
  return (
    <div className='flex items-center justify-center flex-col gap-1 mt-3 lg:-mt-4'>
        <h1 className='text-2xl lg:text-4xl uppercase font-semibold text-accent'>
            {t('title')}
        </h1>
        <p className='text-xl lg:text-3xl font-semibold text-accentDark mb-4 lg:mb-0 md:mb-0'>
            {t('description')}
        </p>
    </div>
  )
}

export default ContactIntro