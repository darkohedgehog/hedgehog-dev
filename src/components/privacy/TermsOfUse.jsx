import React from 'react';
import { useTranslations } from 'next-intl';

const TermsOfUse = () => {
    const t = useTranslations('TermsOfUse');
  return (
    <div className='container p-4 my-16 text-accentDark dark:text-gray bg-card-bg-light dark:bg-card-bg-dark rounded-md shadow-md shadow-accent dark:shadow-accentDark'>
     <h2 className='flex items-center justify-center text-accent font-bold uppercase text-2xl my-8'>
        {t('title1')}
    </h2>
    <h3 className='flex items-center justify-center text-accent font-semibold uppercase text-xl my-4'>
        {t('title2')}
    </h3>
    <p className='mt-2'>
        {t('paragraph1')}
    </p>
    <p className='mt-2'>
        {t('paragraph2')}
    </p>
    <h3 className='flex items-center justify-center text-accent font-semibold uppercase text-xl my-4'>
        2{t('title3')}
    </h3>
    <p className='mt-2'>
        {t('paragraph3')}
    </p>
    <p className='mt-2'>
        {t('paragraph4')}
    </p>
    <p className='mt-2 font-bold'>
        {t('paragraph5')}
    </p>
    <p className='mt-2'>
        {t('paragraph6')}
    </p>
    <h3 className='flex items-center justify-center text-accent font-semibold uppercase text-xl my-4'>
       {t('title4')}
    </h3>
    <p className='mt-2 font-semibold'>
       {t('paragraph7')}
    </p>
    <p className='mt-2 font-semibold'>
       {t('paragraph8')}
    </p>
    <p className='mt-2 font-semibold'>
       {t('paragraph9')}
    </p>
    <p className='mt-2 font-semibold'>
       {t('paragraph10')}
    </p>
    <p className='mt-2 font-semibold'>
       {t('paragraph11')}
    </p>
    <h3 className='flex items-center justify-center text-accent font-semibold uppercase text-xl my-4'>
    {t('title5')}
    </h3>
    <p className='mt-2'>
       {t('paragraph12')}
    </p>
    <p className='mt-2'>
       {t('paragraph13')}
    </p>
    <p className='mt-2'>
       {t('paragraph14')}
    </p>
    <h3 className='flex items-center justify-center text-accent font-semibold uppercase text-xl my-4'>
        {t('title6')}
    </h3>
    <p className='mt-2'>
        {t('paragraph15')}
    </p>
    </div>
  )
}

export default TermsOfUse;