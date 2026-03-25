import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://natiadv.co.il/#business",
        "name": "נתי פרסום ושיווק",
        "alternateName": "Nati Advertising & Marketing",
        "image": "https://natiadv.co.il/assets/Pictures/nati_logo.svg",
        "description": "משרד פרסום מוביל בקריית גת והדרום. שירותי שיווק דיגיטלי, קידום אתרים, קמפיינים ממומנים ומיתוג לעסקים שרוצים לצמוח.",
        "url": "https://natiadv.co.il",
        "telephone": "+972544445567",
        "email": "info@natiadv.co.il",
        "priceRange": "₪₪",
        "currenciesAccepted": "ILS",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "כרמי גת",
          "addressLocality": "קריית גת",
          "addressRegion": "מחוז הדרום",
          "postalCode": "8200000",
          "addressCountry": "IL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 31.611,
          "longitude": 34.769
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/natiadv",
          "https://www.instagram.com/natiadv",
          "https://www.linkedin.com/in/natiadv"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47",
          "bestRating": "5",
          "worstRating": "1"
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
                "description": "קידום אתרים בגוגל לעסקים בקריית גת והדרום. שיפור מיקומים, הגדלת תנועה אורגנית והשגת לקוחות חדשים ממנועי חיפוש."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "קמפיינים ממומנים (PPC)",
                "description": "ניהול קמפיינים בגוגל, פייסבוק ואינסטגרם. תוצאות מהירות עם ROI מדיד ושקוף."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "אנליטיקה ומדידה",
                "description": "ניתוח נתונים, דוחות ביצועים ואופטימיזציה מבוססת נתונים לשיפור מתמיד."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "תוכן ומיתוג",
                "description": "בניית זהות מותג, עיצוב גרפי ויצירת תוכן שיווקי שמושך לקוחות ובונה אמון."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://natiadv.co.il/#website",
        "name": "נתי פרסום ושיווק",
        "url": "https://natiadv.co.il",
        "description": "משרד פרסום דיגיטלי בקריית גת — SEO, PPC, מיתוג ואסטרטגיה שיווקית",
        "inLanguage": "he",
        "publisher": {
          "@id": "https://natiadv.co.il/#business"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://natiadv.co.il/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://natiadv.co.il/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "למה כדאי לבחור במשרד פרסום בקריית גת?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "משרד פרסום בקריית גת מכיר את הקהל המקומי, את העסקים באזור ואת השפה הייחודית של הדרום. נתי פרסום ושיווק נותן יחס אישי וזמינות גבוהה שלא תקבלו במשרדים הגדולים במרכז."
            }
          },
          {
            "@type": "Question",
            "name": "כמה עולה שיווק דיגיטלי לעסקים?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "התשלום למשרד מתחיל מ-1,500₪ לחודש. בקמפיינים ממומנים נדרש תקציב פרסום נפרד של לפחות 2,000-5,000₪ לחודש. SEO מניב תוצאות לאחר 3-6 חודשים."
            }
          },
          {
            "@type": "Question",
            "name": "כמה זמן לוקח לראות תוצאות מקידום אורגני?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "קידום אורגני (SEO) מניב תוצאות תוך 3-6 חודשים. קמפיינים ממומנים (PPC) מביאים לידים תוך שבוע-שבועיים. מי שמבטיח תוצאות SEO תוך חודש — משקר."
            }
          },
          {
            "@type": "Question",
            "name": "האם אתם עובדים עם עסקים מחוץ לקריית גת?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כן. למרות שהמשרד ממוקם בקריית גת, אנו מספקים שירותים ללקוחות בכל רחבי הארץ בזום, בטלפון ובדיגיטל."
            }
          },
          {
            "@type": "Question",
            "name": "מה קורה אם השיווק לא עובד?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "אנחנו לא נועלים לקוחות בחוזה ל-3 שנים. אם אחרי 3 חודשים לא רואים התקדמות — מדברים על זה בכנות ומחליטים ביחד מה הלאה."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://natiadv.co.il/#how-we-work",
        "name": "איך עובדים עם נתי פרסום ושיווק?",
        "description": "תהליך העבודה של נתי פרסום ושיווק — מהשיחה הראשונה ועד לתוצאות",
        "totalTime": "PT1W",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "שיחה ישירה",
            "text": "שיחה של 15-20 דקות על העסק שלכם — מה עובד, מה לא, ולאן רוצים להגיע. ללא עלות."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "חפירה בנתונים",
            "text": "ניתוח מעמיק של הנתונים הקיימים — גוגל אנליטיקס, קמפיינים קודמים, SEO נוכחי."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "בניית האסטרטגיה",
            "text": "תכנית פעולה ספציפית לעסקכם — לא תבנית גנרית אלא משהו שמותאם בדיוק למצב שלכם."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "עבודה + בדיקה + שיפור",
            "text": "הרצת התכנית, בדיקה שבועית של ביצועים ושיפור מתמיד. דוח קצר כל שבוע, שיחה כל חודש."
          }
        ]
      }
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
