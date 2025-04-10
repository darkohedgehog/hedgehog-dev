"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

// icons
import {
  HiHome,
  HiUser,
  HiEnvelope,
} from 'react-icons/hi2';
import { TfiAnnouncement } from 'react-icons/tfi';


const Nav = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const currentLocale = pathSegments[1] || 'hr'; // Default to 'hr' if no locale is found

  const t = useTranslations('NavData');
  // nav data
  const navData = [
    { name: `${t('home')}`, path: '/', icon: <HiHome /> },
    { name: `${t('about')}`, path: '/about', icon: <HiUser /> },
    { name: `${t('blog')}`, path: '/blog', icon: <TfiAnnouncement /> },
    { name: `${t('contact')}`, path: '/contact', icon: <HiEnvelope /> },
  ];


  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl rounded-full text-gray'>
        {navData.map((link, index) => {
          const localizedPath = `/${currentLocale}${link.path === '/' ? '' : link.path}`;

          return (
            <Link
              href={localizedPath}
              key={index}
              prefetch={true}
              className={`${localizedPath === pathname && 'text-accent dark:text-accentDark'} relative flex items-center group hover:text-accent transition-all duration-300`}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-accent items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold'>{link.name}</div>
                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
