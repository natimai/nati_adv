import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  image: string;
  keywords?: string[];
  url: string;
}

export default function ArticleSchema({
  title,
  description,
  datePublished,
  author,
  image,
  keywords = [],
  url
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "נתי פרסום ושיווק",
      "logo": {
        "@type": "ImageObject",
        "url": "https://natiadv.co.il/assets/Pictures/nati_logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": keywords.join(", ")
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
