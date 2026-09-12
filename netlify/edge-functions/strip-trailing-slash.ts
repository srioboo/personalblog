import type { Config, Context } from '@netlify/edge-functions';

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url, 301);
  }

  return context.next();
};

export const config: Config = {
  path: '/*',
  excludedPath: '/_astro/*',
};
