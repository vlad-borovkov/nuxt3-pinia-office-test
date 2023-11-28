import { IncomingMessage } from 'http'
export default [
  { UserAgent: '*' },
  { Disallow: '' },
  {
    Sitemap: (req: IncomingMessage) =>
      `https://${req.headers.host}/sitemap.xml`,
  },
]
