"use client"
import Link from 'next/link'
import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { RiMessengerLine, RiLinkedinBoxFill, RiNextjsFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiSanity, SiGithub } from "react-icons/si";
import { GiHedgehog } from "react-icons/gi";
import Logo from './logo/Logo';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Footer = () => {

    const pathname = usePathname();
    const pathSegments = pathname.split('/');
    const currentLocale = pathSegments[1] || 'hr'; // Default to 'hr' if no locale is found
  
    const t = useTranslations('FooterData');
    // nav data
    const navData = [
      { name: `${t('privacy')}`, path: '/privacy' },
      { name: `${t('complaint')}`, path: '/complaint'},
      { name: `${t('contact')}`, path: '/contact'},
    ];
  return (
    <>
      <footer className="bg-card-bg-light dark:bg-card-bg-dark rounded-xl shadow bottom-0 w-full mx-1">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Logo />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-accentDark"></span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-accentDark">
                <li className='flex items-center gap-3'>
                   {navData.map((link, index) => {
                    const localizedPath = `/${currentLocale}${link.path === '/' ? '' : link.path}`;
                    return (
                        <Link
                        href={localizedPath}
                        key={index}
                        prefetch={true}
                        className={`${localizedPath === pathname}flex items-center hover:text-accent transition-all duration-300`}
                      >
                        {link.name}
                     </Link>
                    )
                   })}
                </li>
            </ul>  
        </div>
        <div className='flex items-center justify-center my-16 flex-col'>
            <h3 className='text-accent dark:text-accentDark text-sm mb-4 font-semibold'>
                {t('title')}
                </h3>
        <span className="inline-flex mx-4">
                  <Link 
                  className="text-blue-500" 
                  href={'https://github.com/darkohedgehog'} target='blank'>
                  <SiGithub className='h-6 w-6' />
                  </Link>
                  <Link 
                  className="text-blue-500 mx-2" 
                  href={'https://business.facebook.com/latest/inbox/messenger?asset_id=137597493551735&business_id=1133499703746344'}
                  target='blank'>
                  <RiMessengerLine className='h-6 w-6' />
                  </Link>
                  <Link 
                  className="mx-2 text-blue-500" 
                  href={'mailto:prodaja@zivic-elektro.com'} target='blank'>
                  <MdOutlineAlternateEmail className='h-6 w-6' />
                  </Link>
                  <Link 
                  className="text-blue-500 mx-2" 
                  href={'https://www.linkedin.com/in/darko-%C5%BEivi%C4%87/'} target='blank'>
                  <RiLinkedinBoxFill className='h-6 w-6' />
                  </Link>
                </span>
                </div>
        <div className="flex items-center justify-center gap-2 my-3 text-sm text-gray-500 sm:text-center dark:text-accentDark"> 
         Powered by 
         <Link href={'https://nextjs.org/'} target='blank'>
         <RiNextjsFill className='w-6 h-6' />
         </Link>
         &
         <Link href={'https://sanity.io/'} target='blank'>
         <SiSanity className='w-5 h-5' />
         </Link>
        </div>
        <div className="flex items-center justify-center gap-2 my-6 text-sm text-gray-500 sm:text-center dark:text-accentDark"> 
         Developed by Hedgehog
         <GiHedgehog className='w-6 h-6' />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-accentDark"> 
        © {new Date().getFullYear()} Hedgehog. Sva prava zadržana. 
        <Link href={"/"} className="hover:underline">
        </Link> 
        <div className="flex items-center justify-center gap-2 my-6 text-sm text-gray-500 sm:text-center dark:text-accentDark"> 
         <Link href={'/sitemap.xml'} target='blank'>
            sitemap.xml
         </Link>
        </div>
        </span>
    </div>
</footer>


    </>
  )
}

export default Footer