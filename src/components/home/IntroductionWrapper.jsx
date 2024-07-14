"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Introduction = dynamic(() => import('./Introduction').then(mod => mod.Introduction), {
  ssr: false,
  suspense: true,
});

const IntroductionWrapper = () => {
  return (
    <Suspense fallback={<div>Učitavam...</div>}>
      <Introduction />
    </Suspense>
  );
};

export default IntroductionWrapper;
