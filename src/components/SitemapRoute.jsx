import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { generateSitemap, sitemapPages } from '../utils/sitemap.xml';

const SitemapRoute = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/sitemap.xml') {
      const sitemap = generateSitemap(sitemapPages);
      
      // Create a blob and download it (for testing)
      const blob = new Blob([sitemap], { type: 'text/xml' });
      const url = URL.createObjectURL(blob);
      
      // For production, you would configure your server to serve this file
      console.log('Sitemap XML generated:', sitemap);
      console.log('Downloadable URL:', url);
      
      // In a real deployment, this would be handled server-side
      window.location.href = url;
    }
  }, [location]);

  return null;
};

export default SitemapRoute;