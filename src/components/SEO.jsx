import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Muhammad Fuzail | MERN Stack Developer & Video Editor | Pakistan",
  description = "Professional MERN Stack Developer & Video Editor from Pakistan. Specializing in React, Node.js, MongoDB, and cinematic video editing with 3+ years experience.",
  keywords = "MERN stack developer, React developer, Node.js expert, MongoDB developer, video editor, Pakistan developer, full-stack portfolio, JavaScript expert, Tailwind CSS, frontend developer, cinematic video editing, CapCut expert, Premiere Pro editor",
  url = "https://fuzail-portfolio.vercel.app",
  image = "https://fuzail-portfolio.vercel.app/og-image.jpg",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Fuzail",
    "url": url,
    "sameAs": [
      "https://github.com/fuzail142",
      "https://www.linkedin.com/in/muhammad-fuzail-3980592aa/",
      "https://www.upwork.com/freelancers/~01de921c27a4bc514e"
    ],
    "jobTitle": "MERN Stack Developer & Video Editor",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "Pakistan"
    },
    "description": description,
    "image": image,
    "offers": {
      "@type": "Offer",
      "category": "WebDevelopment",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "USD",
        "price": "50-150"
      },
      "availableAtOrFrom": {
        "@type": "Country",
        "name": "Pakistan"
      }
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Muhammad Fuzail" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3a86ff" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="PK-SD" />
      <meta name="geo.placename" content="Karachi" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Muhammad Fuzail Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@yourtwitterhandle" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Favicons */}
      <link rel="icon" href="/src/assets/fuzail.png" />
      <link rel="apple-touch-icon" href="/src/assets/fuzail.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;