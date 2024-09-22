import React from 'react'
import AboutSection from '@/components/about/AboutSection';
import siteMetadata from '@/app/utils/siteMetaData';

export async function generateMetadata() {
  const pageTitle = "O meni";
  const pageDescription = "Saznajte više o mojim radovima, vrijednostima i misiji.";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteMetadata.siteUrl}/about`,
      siteName: siteMetadata.title,
      images: [`${siteMetadata.siteUrl}/social-media.png`],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [`${siteMetadata.siteUrl}/social-media.png`],
    },
    alternates: {
      canonical: `${siteMetadata.siteUrl}/about`,
    },
  };
}

const About = () => {
  return (
    <>
       <AboutSection />
    </>
  )
}

export default About