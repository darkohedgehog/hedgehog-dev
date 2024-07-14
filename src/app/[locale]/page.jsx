import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';


const HeroSection = dynamic(() => import('@/components/home/HeroSection'), {
  ssr: false,
  suspense: true,
});
const IntroductionWrapper = dynamic(() => import('@/components/home/IntroductionWrapper'), {
  ssr: false,
  suspense: true,
});

export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Home');

  return (
    <Suspense fallback={<div>Učitavam...</div>}>
      <HeroSection />
      <IntroductionWrapper />
    </Suspense>
  );
}
