import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  const defaultTitle = "נתי פרסום ושיווק - משרד פרסום בקריית גת והדרום";
  const defaultDescription = "נתי פרסום ושיווק - משרד פרסום דיגיטלי מוביל בקריית גת. מומחים בקידום אתרים, פרסום ממומן, מיתוג ואסטרטגיה דיגיטלית לעסקים בדרום ובכל הארץ.";
  const defaultKeywords = "משרד פרסום בקריית גת, פרסום בקריית גת, שיווק דיגיטלי בקריית גת, קידום אתרים בקריית גת, נתי פרסום ושיווק, בניית אתרים בקריית גת, מיתוג עסקים בדרום";

  return (
    <Helmet>
      <title>{title ? `${title} | נתי פרסום ושיווק` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title ? `${title} | נתי פרסום ושיווק` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="נתי פרסום ושיווק" />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:image" content="https://natiadv.co.il/assets/Pictures/nati_pro.webp" />
      <meta property="og:image:alt" content="נתי פרסום ושיווק - משרד פרסום בקריית גת" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | נתי פרסום ושיווק` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content="https://natiadv.co.il/assets/Pictures/nati_pro.webp" />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IL-D" />
      <meta name="geo.placename" content="Kiryat Gat" />
      <meta name="geo.position" content="31.611;34.769" />
      <meta name="ICBM" content="31.611, 34.769" />
      
      {/* Add more meta tags as needed */}
    </Helmet>
  );
};

export default SEO;

