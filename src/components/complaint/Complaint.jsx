import Link from 'next/link';
import React from 'react';
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { useTranslations } from 'next-intl';

const Complaint = () => {
    const t = useTranslations('Complaint');
  return (
    <div className='container p-4 my-16 text-accentDark dark:text-gray bg-card-bg-light dark:bg-card-bg-dark rounded-md shadow-md shadow-accent dark:shadow-accentDark'>
     <h2 className='flex items-center justify-center text-accent font-bold uppercase text-2xl my-8'>
        {t('title')}
    </h2>
    <p className='mt-4 text-xl font-semibold'>
        {t('paragraph1')}
    </p>
    <p className='my-6 text-darkpurple text-xl'> 
        {t('paragraph2')}
    </p>
    <ul className='list-disc list-outside text-accent dark:text-accentDark ml-4'>
      <li>{t('li1')}</li>
      <li>{t('li2')}</li>
      <li>{t('li3')}</li>
      <li>{t('li4')}</li>
      <li>{t('li5')}</li>
    </ul>
    <p className='my-6 flex items-center justify-center text-2xl text-center font-semibold'>
        {t('paragraph3')}
    </p>
    <div className='flex items-center justify-center'>
    <Link
    href={'mailto:zivic.darko79@gmail.com'} target='blank'
    className="flex items-center gap-5">
      <FiMail className="text-accent w-8 h-8" />
      <div>
        <p className='text-xl'>zivic.darko79@gmail.com</p>
      </div>
    </Link>
    </div>
    <p className='my-10 flex items-center justify-center text-2xl text-center font-semibold'>
       {t('paragraph4')}
    </p>
    <div className='flex items-center justify-center'>
    <div className="flex items-center gap-5">
      <FiPhoneCall className="text-accent w-8 h-8" />
      <div>
        <p className='text-xl'>+ 385 95 507 4922</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Complaint;