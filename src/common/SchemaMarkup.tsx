import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "נתי פרסום ושיווק",
    "alternateName": "Nati Advertising & Marketing",
    "image": [
      "https://natiadv.co.il/assets/Pictures/nati_logo.svg",
      "https://natiadv.co.il/assets/Pictures/nati_pro.webp",
      "https://natiadv.co.il/assets/Pictures/nati_magic.webp"
    ],
    "description": "נתי פרסום ושיווק - משרד פרסום מוביל בקריית גת והדרום. שירותי שיווק דיגיטלי, בניית אתרים ומיתוג לעסקים שרוצים לגדול.",
    "@id": "https://natiadv.co.il",
    "url": "https://natiadv.co.il",
    "telephone": "054-444-5567",
    "priceRange": "₪₪",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "קריית גת",
      "addressLocality": "קריית גת",
      "postalCode": "8210000",
      "addressRegion": "דרום",
      "addressCountry": "IL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.611,
      "longitude": 34.769
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "קריית גת"
      },
      {
        "@type": "City",
        "name": "אשקלון"
      },
      {
        "@type": "City",
        "name": "באר שבע"
      },
      {
        "@type": "City",
        "name": "שדרות"
      },
      {
        "@type": "City",
        "name": "נתיבות"
      },
      {
        "@type": "City",
        "name": "אופקים"
      },
      {
        "@type": "City",
        "name": "יבנה"
      },
      {
        "@type": "City",
        "name": "גן יבנה"
      }
    ],
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
    ],
    "knowsAbout": [
      "SEO",
      "Search Engine Optimization",
      "קידום אתרים",
      "PPC",
      "Google Ads",
      "פרסום ממומן",
      "Digital Marketing",
      "שיווק דיגיטלי",
      "Content Marketing",
      "שיווק תוכן",
      "Branding",
      "מיתוג",
      "Web Design",
      "עיצוב אתרים",
      "Social Media Marketing",
      "שיווק ברשתות חברתיות"
    ],
    "potentialAction": {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://natiadv.co.il/contact",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "שירותי שיווק דיגיטלי",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "קידום אתרים אורגני (SEO)",
            "description": "קידום אתרים בגוגל לעסקים בקריית גת והדרום, שיפור מיקומים והגדלת תנועה אורגנית."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "קמפיינים ממומנים (PPC)",
            "description": "ניהול קמפיינים בגוגל ופייסבוק להשגת לידים ומכירות מיידיות."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "בניית אתרים ומיתוג",
            "description": "עיצוב ובניית אתרים מתקדמים, מיתוג עסקי ועיצוב גרפי."
          }
        }
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "למה כדאי לבחור במשרד פרסום מקומי בקריית גת?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "משרד פרסום בקריית גת מכיר את הקהל המקומי, את העסקים באזור ואת השפה הייחודית של הדרום. אנחנו נותנים יחס אישי וזמינות גבוהה שלא תקבלו במשרדים הגדולים במרכז."
          }
        },
        {
          "@type": "Question",
          "name": "כמה עולה קידום אתרים לעסקים בדרום?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "המחיר משתנה בהתאם לתחרות ולמטרות, אך אנו מציעים חבילות שיווק מותאמות אישית לעסקים קטנים ובינוניים, עם החזר השקעה (ROI) גבוה."
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

