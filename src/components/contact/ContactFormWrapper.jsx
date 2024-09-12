import React from 'react';
import ContactForm from './ContactForm';
import LottieAnimation from '../ui/LottieContactForm';
import { useTranslations } from 'next-intl';



const ContactFormWrapper = () => {

  const t = useTranslations('ContactFormWrapper');
  

  return (
    <section className="relative flex flex-col gap-4 lg:flex-row lg:min-h-screen lg:items-center lg:py-10 px-4 sm:px-6 lg:px-8 mb-6 lg:-mt-20">
      {/* Prvi div */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[90vw] lg:max-w-[45vw] min-h-[300px] lg:min-h-[400px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 border-4 border-[#6C6C6C] bg-card-bg-light dark:bg-card-bg-dark rounded-[30px] shadow-2xl">
        <div className="mx-auto max-w-lg text-center mt-4">
          <h1 className="text-2xl font-bold sm:text-3xl text-accent dark:text-accentDark uppercase">
          {t('title')}
          </h1>
          <p className="mt-4 text-accentDark dark:text-accent font-semibold text-lg">
          {t('paragraph1')}
          </p>
          <p className="mt-6 text-accentDark dark:text-accent font-semibold text-2xl">
          {t('paragraph2')}
          </p>
        </div>

        <div className="mx-auto my-24 max-w-md space-y-4">
        <LottieAnimation className="object-contain" />
        </div>
      </div>

      {/* Drugi div */}
      <div className="flex-1 relative min-h-[300px] lg:min-h-[400px] w-full max-w-[90vw] lg:max-w-[45vw] border-4 border-[#6C6C6C] bg-card-bg-light dark:bg-card-bg-dark rounded-[30px] shadow-2xl overflow-hidden flex items-center justify-center">
        < ContactForm className="object-contain" />
      </div>
    </section>
  );
}

export default ContactFormWrapper;
