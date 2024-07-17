import React from 'react'
import Approach from './Approach'
import { useTranslations } from 'next-intl';

const ApproachWrapper = () => {
  const t = useTranslations('ApproachWrapper');
  return (
    <div className='py-16'>
       <p className='mb-4 text-center text-3xl'>
        <span className='mr-1'>{t('title1')}</span>
        <span className='mx-1 text-accent'>{t('title2')}</span>
        <span className='mr-1'>{t('title3')}</span>
     </p>
        <Approach />
    </div>
  )
}

export default ApproachWrapper