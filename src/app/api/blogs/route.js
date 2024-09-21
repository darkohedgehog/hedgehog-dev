// app/api/blogs/route.js

import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'en';

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?locale=${locale}&populate=*`, {
      headers: {
        'Authorization': `Bearer ${process.env.REST_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Strapi API error! Status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
