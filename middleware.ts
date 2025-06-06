import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(pt-BR|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'] 
};
