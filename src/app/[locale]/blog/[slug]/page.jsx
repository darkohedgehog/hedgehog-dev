"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

// Funkcija za dohvatanje bloga po slug-u i jeziku
async function fetchBlogBySlug(slug, locale) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_REST_API_KEY}`, // Dodaj API token ovde
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    if (data?.data?.length === 0) {
      console.error(`No blog found for slug: ${slug} and locale: ${locale}`);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

const BlogDetail = () => {
  const t = useTranslations('BlogDetail');
  const [blog, setBlog] = useState(null);
  const { slug } = useParams(); // Uzmi slug iz URL-a
  const locale = useLocale(); // Koristimo useLocale iz next-intl da bismo uzeli jezik

  useEffect(() => {
    if (slug) {
      const getBlogDetail = async () => {
        const blogData = await fetchBlogBySlug(slug, locale); // Dohvati blog koristeći slug i jezik
        if (blogData?.data?.length > 0) {
          setBlog(blogData.data[0]); // Postavi blog
        } else {
          console.error(`No blog found for slug: ${slug} and locale: ${locale}`);
        }
      };

      getBlogDetail();
    }
  }, [slug, locale]);

  if (!blog) {
    return <div className='flex items-center justify-center text-accent'>
      {t('loading')}
      </div>;
  }

  const thumbnailUrl = blog?.thumbnail?.[0]?.formats?.thumbnail?.url;

 
  return (
    <div className='px-10 md:px-20 py-8'>
      <h1 className='text-[24px] uppercase font-bold mb-16 text-center text-accent'>
        {blog?.title}
      </h1>
      {thumbnailUrl ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${thumbnailUrl}`}
          alt={blog.title}
          width={200}
          height={200}
          priority={false}
          className='rounded-lg object-cover h-40 w-72 mx-auto shadow-lg'
        />
      ) : (
        <div className='w-full h-[300px] bg-gray-200 rounded-lg'></div>
      )}

      <div className='mt-12 text-gray dark:text-white flex justify-center items-center flex-col gap-4 bg-card-bg-light dark:bg-card-bg-dark rounded-md shadow-lg shadow-accent dark:shadow-accentDark'>
        {blog?.description ? (
          blog.description.map((descItem, index) => {
            if (descItem.type === "paragraph") {
              return (
                <p
                 className='mx-6 my-5'
                 key={index}>
                  {descItem.children?.map((child, childIndex) => (
                    <span key={childIndex}>{child.text}</span>
                  ))}
                </p>
              );
            }

            if (descItem.type === "image" && descItem.image) {
              const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${descItem.image.formats?.large?.url || descItem.image.url}`;
              const altText = descItem.alternativeText || "Image";

              return (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={altText}
                  height={100}
                  width={200}
                  priority={false}
                  className="my-4 w-1/3 rounded-lg"
                />
              );
            }

            return null; // Ako nije ni tekst ni slika, ne renderujemo ništa
          })
        ) : (
          <p className='flex items-center justify-center text-red-400'>
                  {t('available')}
           </p>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
