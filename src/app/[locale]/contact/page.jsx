import React from 'react'
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const ContactFormWrapper = dynamic(() => import('@/components/contact/ContactFormWrapper'), {
  suspense: true,
  });
const ContactIntro = dynamic(() => import('@/components/contact/ContactIntro'), {
  suspense: true,
});
const ContactMe = dynamic(() => import('@/components/contact/ContactMe'), {
  suspense: true,
  });

const Contact = () => {
  return (
    <Suspense fallback={<div>Učitavam...</div>}>
      <ContactIntro />
      <ContactMe />
      <ContactFormWrapper />
    </Suspense>
  )
}

export default Contact