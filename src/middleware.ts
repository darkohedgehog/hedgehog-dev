import createMiddleware from 'next-intl/middleware';
import {locales, /* ... */} from './config';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale: 'hr'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(hr|en)/:path*']
};