"use client"
import Image from 'next/image'
import React from 'react'
import { HomeFlipWords } from './HomeFlipWords'
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';


const image = 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1720819788/hedgehog-dev/hedgehogbanner2_fc1jvh.webp'

const HeroSection = () => {
  const t = useTranslations('HeroSection')
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const currentLocale = pathSegments[1] || 'hr'; // Default to 'hr' if no locale is found
  const localizedPath = `/${currentLocale}${'/contact'}`;

  return (
    <section className='lg:px-28'>
      <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="hedgehog working on the computer"
                src={image}
                width={400}
                height={400}
                priority={true}
                className="absolute inset-0 h-full lg:h-[520px] w-full object-cover rounded-md shadow-xl shadow-accent dark:shadow-accentDark"
              />
            </div>
          </div>

          <div className="relative flex items-center mt-6">
            <div className="p-8 sm:p-16 lg:p-24 -mt-72">
              <div className='flex justify-start items-start'>
              <HomeFlipWords />
              </div>
              <p className="text-accent dark:text-neutral-500 font-bold text-xl -mt-52">
              {t('title')}
              </p>
            <div className='flex items-center justify-start mt-4'>
            <Link href={localizedPath}>
            <button className="relative inline-flex h-12 w-[200px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-accent dark:text-accentDark backdrop-blur-3xl gap-3">
            {t('title2')}
              <FaLocationArrow />
            </span>
            </button>
            </Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
