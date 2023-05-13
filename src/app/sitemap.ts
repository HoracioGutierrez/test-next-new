import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://test-next-new.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://test-next-new.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://test-next-new.vercel.app/stars',
      lastModified: new Date(),
    },
    {
      url: 'https://test-next-new.vercel.app/stars/new',
      lastModified: new Date(),
    },
    {
      url: 'https://test-next-new.vercel.app/comments',
      lastModified: new Date(),
    },
    {
      url: 'https://test-next-new.vercel.app/comments/new',
      lastModified: new Date(),
    }
  ];
}