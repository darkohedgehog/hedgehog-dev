import React from 'react';
import { useTranslations } from 'next-intl';

const Privacy = () => {
    const t = useTranslations('Privacy');
  return (
    <div className='container  p-4 my-16 text-accentDark dark:text-gray bg-card-bg-light dark:bg-card-bg-dark rounded-md shadow-md shadow-accent dark:shadow-accentDark'>
    <h2 className='flex items-center justify-center text-accent font-bold uppercase text-2xl my-8'>
       {t('title1')}
    </h2>
     <p className='mt-4'>
     {t('paragraph1')}
     </p>
     <p className='mt-2'>
     {t('paragraph2')}
     </p>
     <h3 className='text-accent dark:text-accentDark mt-4 font-semibold uppercase'>
     {t('title2')}
     </h3>
     <p className='mt-2'>
     {t('paragraph3')}
     </p>
     <p className='mt-2'>
     {t('paragraph4')}
     </p>
     <p className='mt-2'>
     {t('paragraph5')}
     </p>
     <p className='mt-2'>
     {t('paragraph6')}
     </p>
     <h3 className='text-accent dark:text-accentDark my-4 font-semibold uppercase'>
     {t('title3')}
     </h3>
     <p className='mt-2'>
     {t('paragraph7')}
     </p>
     <p className='mt-2'>
     {t('paragraph8')}
     </p>
     <p className='mt-2'>
     {t('paragraph9')}
     </p>
     <p className='mt-2'>
     {t('paragraph10')}
     </p>
     <p className='mt-2'>
     {t('paragraph11')}
     </p>
     <p className='mt-2'>
     {t('paragraph12')}
     </p>
     <p className='mt-2'>
     {t('paragraph13')}
     </p>
     <p className='mt-2'>
     {t('paragraph14')}
     </p>
     <p className='mt-2'>
     {t('paragraph15')}
     </p>
     <p className='mt-2'>
     {t('paragraph16')}
     </p>
     <p className='mt-2'>
     {t('paragraph17')}
     </p>
     <p className='mt-2'>
     {t('paragraph18')}
     </p>
     <p className='mt-2'>
     {t('paragraph19')}
     </p>
     <p className='mt-2'>
     {t('paragraph20')}
     </p>
     <p className='mt-2'>
     {t('paragraph21')}
     </p>
    </div>
  )
}

export default Privacy;