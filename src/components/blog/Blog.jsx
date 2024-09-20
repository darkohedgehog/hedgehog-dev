"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

async function fetchBlogs(locale) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?locale=${locale}&populate=*`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}


const Blog = () => {
  const t = useTranslations('Blog');
  const locale = useLocale(); // Uzimamo trenutni jezik
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      const blogData = await fetchBlogs(locale); // Fetch blogova na osnovu locale-a
      if (blogData?.data) {
        setBlogs(blogData.data);
      } else {
        console.error('No blogs available for locale:', locale);
      }
      setLoading(false);
    };

    getBlogs();
  }, [locale]); // Ponovo fetchuje blogove kada se locale promeni

  if (loading) {
    return <p>{t('loading')}</p>;
  }

  if (blogs.length === 0) {
    return <p>{t('no_blogs')}</p>;
  }

  return (
    <div className='px-10 md:px-20 mb-10'>
      <h1 className='text-2xl lg:text-3xl uppercase font-bold mb-8 flex items-center justify-center text-accent text-center'>
        {t('title')}
      </h1>
      <p className='text-xl font-semibold mb-8 flex items-center justify-center text-accent dark:text-white text-clip mx-auto'>
        {t('paragraph')}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {blogs.map((blog) => {
          const thumbnailUrl = blog?.thumbnail?.[0]?.formats?.thumbnail?.url
  
          return (
            <div key={blog.id} className='border-y-2 border-accent dark:border-accentDark rounded-lg shadow-xl shadow-slate-500 dark:shadow-gray p-5 h-[400px] w-full sm:w-[400px] overflow-auto mx-auto'>
              {blog?.slug ? (
                <Link href={`/${locale}/blog/${blog.slug}`} locale={locale} prefetch={false}>
                  {thumbnailUrl ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${thumbnailUrl}`}
                      alt={blog.title}
                      width={100}
                      height={100}
                      priority
                      className='rounded-lg object-cover h-40 w-72 mx-auto shadow-md shadow-accent'
                    />
                  ) : (
                    <div className='w-full h-[300px] bg-gray-200 rounded-lg'></div>
                  )}
                  <h2 className='text-[18px] font-semibold my-8 text-darkpurple flex items-center justify-center mx-auto text-center'>
                    {blog.title}
                  </h2>
                  <p className='text-sm font-semibold my-4 text-gray dark:text-white flex justify-start mx-auto'>
                    {blog.shortdesc}
                  </p>
                </Link>
              ) : (
                <p className='flex items-center justify-center text-red-400'>
                   {t('available')}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
