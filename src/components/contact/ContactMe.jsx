import Link from 'next/link';
import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import LottieAnimation from '../ui/LottieAnimation';

const ContactMe = () => {
  const t = useTranslations('ContactMe');

  return (
    <section className="container relative flex flex-col gap-4 lg:flex-row lg:min-h-screen lg:items-center lg:py-10 px-4 sm:px-6 lg:px-8 mb-6 lg:-mt-20">
      {/* Prvi div */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[90vw] lg:max-w-[45vw] min-h-[300px] lg:min-h-[400px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 border-4 border-[#6C6C6C] bg-card-bg-light dark:bg-card-bg-dark rounded-[30px] shadow-2xl">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl text-accent dark:text-accentDark uppercase">
            {t('title1')}
          </h1>
          <p className="mt-4 text-accentDark dark:text-accent font-semibold text-lg">
            {t('paragraph1')}
          </p>
          <p className="mt-6 text-accentDark dark:text-accent font-semibold text-2xl">
            {t('title2')}
          </p>
        </div>

        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <Link
            href={"mailto:zivic.darko79@gmail.com"}
            className="text-accentDark hover:text-accent transition-all duration-300 flex gap-2 items-center justify-start mt-0"
          >
            <AiOutlineMail className="w-6 h-6" />
            Email: zivic.darko79@gmail.com
          </Link>
          <Link
            href={"tel:+385955074922"}
            className="text-accentDark hover:text-accent transition-all duration-300 flex gap-2 items-center justify-start mt-4"
          >
            <AiOutlinePhone className="w-6 h-6" />
            {t('title3')} +385 95 507 4922
          </Link>
        </div>
      </div>

      {/* Drugi div */}
      <div className="flex-1 relative min-h-[300px] lg:min-h-[400px] w-full max-w-[90vw] lg:max-w-[45vw] border-4 border-[#6C6C6C] bg-card-bg-light dark:bg-card-bg-dark rounded-[30px] shadow-2xl overflow-hidden flex items-center justify-center flex-col">
        <h1 className='flex items-center justify-center text-2xl lg:text-3xl font-semibold text-accent dark:text-accentDark uppercase mt-12 mb-4'>
        {t('title4')}
          </h1>
        <LottieAnimation className="object-contain" />
      </div>
    </section>
  );
}

export default ContactMe;
