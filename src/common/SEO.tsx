import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  const defaultTitle = "נתי פרסום ושיווק - משרד פרסום דיגיטלי";
  const defaultDescription = "נתי פרסום ושיווק - מומחים בקידום אתרים, פרסום ממומן, מיתוג ואסטרטגיה דיגיטלית לעסקים.";
  const defaultKeywords = "שיווק דיגיטלי, קידום אתרים, פרסום ממומן, מיתוג, עיצוב גרפי, בניית אתרים";

  return (
    <Helmet>
      <title>{title ? `${title} | נתי פרסום ושיווק` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title ? `${title} | נתי פרסום ושיווק` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      {/* Add more meta tags as needed */}
    </Helmet>
  );
};

export default SEO;

