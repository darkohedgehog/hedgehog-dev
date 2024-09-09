import Link from 'next/link';
import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import ContactGlobe from './ContactGlobe';

const ContactMe = () => {
  const t = useTranslations('ContactMe');

  return (
    <section className="relative flex flex-col lg:flex-row lg:h-screen lg:items-center lg:py-10 lg:mx-24 mb-6 lg:mt-0">
      {/* Prvi div */}
      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24 border border-gray min-h-full">
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
            className="text-white hover:text-accent transition-all duration-300 flex gap-2 items-center justify-start mt-4"
          >
            <AiOutlineMail className="w-6 h-6" />
            Email: zivic.darko79@gmail.com
          </Link>
          <Link
            href={"tel:+385955074922"}
            className="text-white hover:text-accent transition-all duration-300 flex gap-2 items-center justify-start mt-4"
          >
            <AiOutlinePhone className="w-6 h-6" />
            {t('title3')} +385 95 507 4922
          </Link>
        </div>
      </div>

      {/* Drugi div */}
      <div className="flex-1 relative h-64 lg:h-auto w-full border border-gray min-h-full">
        <ContactGlobe />
      </div>
    </section>
  );
}

export default ContactMe;
