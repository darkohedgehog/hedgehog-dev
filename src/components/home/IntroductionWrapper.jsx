import React from 'react'
import { Introduction } from './Introduction'
import { useTranslations } from 'next-intl';

const IntroductionWrapper = () => {

  const t = useTranslations('IntroductionWrapper');

  return (
    <div className='lg:-mt-32'>
     <div className='flex items-center justify-center flex-col'>
     <p className='mb-4 text-center text-3xl'>
        <span className='mr-1'>{t('title1')}</span>
        <span className='mx-1 text-accent'>{t('title2')}</span>
        <span className='ml-1'>{t('title3')}</span>
     </p>
     <p className='mb-6 text-center text-2xl'>
        <span className='mr-1'>{t('title4')}</span>
        <span className='mx-1 text-accent'>{t('title5')}</span>
        <span className='ml-1'>{t('title6')}</span>
     </p>
    </div>
      <Introduction />
    </div>
  )
}

export default IntroductionWrapper