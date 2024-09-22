import React from 'react'
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import siteMetadata from '@/app/utils/siteMetaData';
const ContactFormWrapper = dynamic(() => import('@/components/contact/ContactFormWrapper'), {
  suspense: true,
  });
const ContactIntro = dynamic(() => import('@/components/contact/ContactIntro'), {
  suspense: true,
});
const ContactMe = dynamic(() => import('@/components/contact/ContactMe'), {
  suspense: true,
  });

  export async function generateMetadata() {
    const pageTitle = "Kontakt";
    const pageDescription = "Kontaktirajte me za više informacija o mojim uslugama.";
  
    return {
      title: pageTitle,
      description: pageDescription,
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: `${siteMetadata.siteUrl}/contact`,
        siteName: siteMetadata.title,
        images: [`${siteMetadata.siteUrl}/social-media.png`],
        locale: "hr_HR",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: [`${siteMetadata.siteUrl}/social-media.png`], 
      },
      alternates: {
        canonical: `${siteMetadata.siteUrl}/contact`,
      },
    };
  }

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