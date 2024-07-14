import React from 'react';
import Link from "next/link";
import Logo from '../logo/Logo';
import Socials from '../socials/Socials';
import { ModeToggle } from '../hooks/useThemeSwitch';

const HeaderTop = () => {
    return (
        <header className="w-full flex items-center px-4 sm:px-6 md:px-16 xl:px-0 top-6 lg:top-0 mt-3 md:pb-20 lg:pb-20">
          <div className="container mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4 md:gap-8">
              <Link href={'/'} prefetch={true}>
                <Logo />
              </Link>
              <div className="flex items-center gap-4 md:gap-8 text-accent dark:text-accentDark">
                <Socials />
                <ModeToggle />
              </div>
            </div>
          </div>
        </header>
    );
};

export default HeaderTop;
