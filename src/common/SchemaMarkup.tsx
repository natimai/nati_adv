import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "נתי פרסום ושיווק",
    "image": "https://natiadv.co.il/assets/images/logo/fulllogo.svg",
    "@id": "https://natiadv.co.il",
    "url": "https://natiadv.co.il",
    "telephone": "054-444-5567",
    "priceRange": "₪₪",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "קריית גת",
      "addressLocality": "קריית גת",
      "addressCountry": "IL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.611, 
      "longitude": 34.769
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/natiadv",
      "https://www.instagram.com/natiadv",
      "https://www.linkedin.com/in/natiadv"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

