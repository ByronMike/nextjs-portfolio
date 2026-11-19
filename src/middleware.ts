import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Run the locale middleware on every path EXCEPT:
  //  - /api routes
  //  - Next internals (_next)
  //  - any path containing a dot (static files: images, fonts, cv.pdf,
  //    favicon, sitemap.xml, robots.txt, icon.png, …)
  // Getting this matcher right is critical: too broad and static assets get
  // locale-prefixed / 404, or you get redirect loops.
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
