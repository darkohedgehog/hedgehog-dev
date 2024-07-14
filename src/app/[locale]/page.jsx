import React, { Suspense, lazy } from 'react';
import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

const HeroSection = lazy(() => import('@/components/home/HeroSection'));


export default function HomePage({params: {locale}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Home');

  return (
    <Suspense fallback={<div>Učitavam...</div>}>
      <HeroSection />
    </Suspense>
  );
}
