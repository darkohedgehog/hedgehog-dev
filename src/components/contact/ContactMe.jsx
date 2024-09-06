import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import { useTranslations } from 'next-intl';

const image = 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1723480303/hedgehogbanner3_vhymsb.webp';

const ContactMe = () => {
    const t = useTranslations('ContactMe');

  return (

 <section className="relative flex flex-wrap lg:h-screen lg:items-center lg:py-10 lg:mx-24 mb-6 -mt-32 lg:mt-0">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl text-accent dark:text-accentDark uppercase">
        {t('title1')}
      </h1>
      <p className="mt-4 text-accentDark dark:text-accent font-semibold text-lg">
      {t('paragraph1')}
      </p>
    </div>

    <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <p className="mt-2 text-accentDark dark:text-accent font-semibold text-2xl text-center">
      {t('title2')}
      </p>
      <Link href={"mailto:zivic.darko79@gmail.com"} className="text-white hover:text-accent transition-all duration-300 flex gap-2 items-center justify-start mt-4">
        <AiOutlineMail className="w-6 h-6"  />
        Email: zivic.darko79@gmail.com
        </Link>
        <Link href={"tel:+385955074922"} className="text-white hover:text-accent transition-all duration-300 flex gap-2 items-center justify-start mt-4">
        <AiOutlinePhone className="w-6 h-6"  />
        {t('title3')} +385 95 507 4922
        </Link>
    </div>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <Image
      alt="Hedgehog contact image"
      src={image}
      width={500}
      height={500}
      className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-xl shadow-accent dark:shadow-accentDark"
      priority= {false}
    />
  </div>
</section>
  )
}

export default ContactMe