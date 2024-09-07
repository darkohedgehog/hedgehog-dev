"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

async function fetchBlogs(locale) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?locale=${locale}&populate=*`);
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
    return <p>Loading blogs...</p>;
  }

  if (blogs.length === 0) {
    return <p>No blogs available for this locale.</p>;
  }

  return (
    <div className='px-10 md:px-20 py-28'>
      <h1 className='text-[24px] uppercase font-bold mb-8 flex items-center justify-center text-accent dark:text-accentDark text-center'>
        Blogovi na jeziku: {locale}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {blogs.map((blog) => {
          const thumbnailUrl = blog?.attributes?.thumbnail?.data?.[0]?.attributes?.url;

          return (
            <div key={blog.id} className='border-y-2 border-accent dark:border-accentDark rounded-lg shadow-xl shadow-slate-500 dark:shadow-gray p-5 h-[400px] w-full sm:w-[400px] overflow-auto mx-auto'>
              <Link href={`/${locale}/blog/${blog.attributes.slug}`} locale={locale} prefetch={false}>
                {thumbnailUrl ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${thumbnailUrl}`} // Lokalni URL za sliku
                    alt={blog.attributes.title}
                    width={400}
                    height={300}
                    priority
                    className='rounded-lg object-cover h-60 w-60 mx-auto shadow-md shadow-accent'
                  />
                ) : (
                  <div className='w-full h-[300px] bg-gray-200 rounded-lg'></div>
                )}
                <h2 className='text-[18px] font-semibold my-8 text-darkpurple dark:text-accentDark flex items-center justify-center mx-auto text-center'>
                  {blog.attributes.title}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
