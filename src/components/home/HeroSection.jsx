'use client'
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
    <div className="relative flex flex-col gap-4 lg:flex-row lg:min-h-screen lg:items-center lg:py-10 px-4 sm:px-6 lg:px-8 mb-16 lg:-mt-20">
       
        <div className="flex-1 flex items-center justify-center border-4 border-[#6C6C6C] bg-card-bg-light dark:bg-card-bg-dark rounded-[30px] shadow-2xl shadow-accent dark:shadow-accentDark overflow-hidden max-h-[550px]">
          <Image
            alt="hedgehog working on the computer"
            src={image}
            width={700}
            height={200}
            priority
            className="rounded-[15px] object-contain h-full w-full"
          />
        </div>

        <div className="flex-1 flex flex-col items-center text-center justify-center px-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 max-h-[550px] gap-3">
          <HomeFlipWords />
          <h1 className="text-2xl mb-8">
            {t('title')}
          </h1>
          <Link href={localizedPath}>
          <button className="relative mb-20 inline-flex h-12 w-[200px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-accent dark:text-accentDark backdrop-blur-3xl gap-3">
            {t('title2')}
              <FaLocationArrow />
            </span>
            </button>
          </Link>
        </div>
      
    </div>
  );
}

export default HeroSection;
