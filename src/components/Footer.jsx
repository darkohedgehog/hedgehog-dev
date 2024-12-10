"use client";
import Link from 'next/link'
import { RiMessengerLine, RiLinkedinBoxFill, RiNextjsFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiStrapi, SiGithub } from "react-icons/si";
import { GiHedgehog } from "react-icons/gi";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const t = useTranslations("FooterData");
  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1] || "hr";


  return (
    <>
      <div className="w-full bg-card-bg-light dark:bg-card-bg-dark">
        <div className="flex items-center justify-center gap-8">
          <Link href={`/${currentLocale}/`} className="flex items-center mt-6 justify-center">
          <Image
            src={'/logo-transparent.png'}
            className="h-10 w-10 bg-cover"
            alt="Logo"
            width={40}
            height={40}
            priority={false}
          />
          </Link>
          <ul className="flex justify-center items-center font-semibold text-[16px] mt-6 text-gray dark:text-accentDark gap-6 min-w-32">
                <li>
                    <Link href={`/${currentLocale}/privacy`} className="hover:underline">
                        {t('privacy')}
                    </Link>
                </li>
                <li>
                    <Link href={`/${currentLocale}/complaint`} className="hover:underline">
                    {t('complaint')}
                    </Link>
                </li>
                <li>
                    <Link href={`/${currentLocale}/contact`} className="hover:underline">
                    {t('contact')}
                    </Link>
                </li>
            </ul>  
        </div>
        <div className='flex items-center justify-center my-12 flex-col'>
          <h3 className='text-accent dark:text-accentDark text-sm mb-4 font-semibold'>
            {t('title')}
          </h3>
          <span className="inline-flex mx-4 gap-2">
            <a 
              className="text-blue-500" 
              href='https://github.com/darkohedgehog' 
              target='_blank' 
              rel="noopener noreferrer"
            >
              <SiGithub className='h-6 w-6' />
            </a>
            <a
              className="text-blue-500" 
              href='https://www.facebook.com/messages/t/100074828598715/?locale=hr_HR'
              target='_blank'
              rel="noopener noreferrer"
            >
              <RiMessengerLine className='h-6 w-6' />
            </a>
            <a 
              className="text-blue-500" 
              href='mailto:zivic.darko79@gmail.com' 
              target='_blank'
              rel="noopener noreferrer"
            >
              <MdOutlineAlternateEmail className='h-6 w-6' />
            </a>
            <a 
              className="text-blue-500"
              href='https://www.linkedin.com/in/darko-%C5%BEivi%C4%87/' 
              target='_blank'
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxFill className='h-6 w-6' />
            </a>
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 my-3 text-sm text-gray text-center dark:text-accentDark"> 
          Powered by 
          <a href='https://nextjs.org/' target='_blank' rel="noopener noreferrer">
            <RiNextjsFill className='w-6 h-6' />
          </a>
          &
          <a href='https://strapi.io/' target='_blank' rel="noopener noreferrer">
            <SiStrapi className='w-5 h-5' />
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 my-6 text-sm text-gray text-center dark:text-accentDark"> 
          Developed by Hedgehog
          <GiHedgehog className='w-6 h-6' />
        </div>
        <hr className="my-6 border-gray mx-auto" />
        <div className="block text-sm text-gray text-center dark:text-accentDark"> 
          © {new Date().getFullYear()} Hedgehog. Sva prava zadržana.
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray text-center dark:text-accentDark"> 
            <a href='/sitemap.xml' target='_blank' rel="noopener noreferrer" className='mb-28'>
              sitemap.xml
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
