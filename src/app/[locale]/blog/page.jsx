import siteMetadata from '@/app/utils/siteMetaData';
import Blog from '@/components/blog/Blog'
import React from 'react'



export async function generateMetadata() {
  const pageTitle = "Blog";
  const pageDescription = "Pročitajte najvovije vijesti sa mog bloga";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteMetadata.siteUrl}/blog`,
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
      canonical: `${siteMetadata.siteUrl}/blog`,
    },
  };
}


const BlogPage = () => {
  return (
    <>
    <Blog />
    </>
  )
}

export default BlogPage