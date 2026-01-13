
import { useParams, Link } from "react-router-dom";
import Wrapper from "../../layouts/Wrapper";
import HeaderThree from "../../layouts/headers/HeaderThree";
import FooterOne from "../../layouts/footers/FooterOne";
import SEO from "../../common/SEO";
import Breadcrumb from "../../common/Breadcrumb";
import ContactForm from "../../components/contact-us1/ContactForm";

const cityData: Record<string, { name: string, desc: string, services: string[] }> = {
  "kiryat-gat": {
    name: "קריית גת",
    desc: "מחפשים משרד פרסום בקריית גת שמבין את השפה המקומית? נתי פרסום ושיווק כאן כדי לעזור לכם לצמוח.",
    services: ["קידום אתרים בקריית גת", "בניית אתרים לעסקים מקומיים", "ניהול סושיאל ופרסום ממומן"]
  },
  "ashkelon": {
    name: "אשקלון",
    desc: "שירותי שיווק דיגיטלי מתקדמים לעסקים באשקלון. בואו נהפוך את העסק שלכם למותג מוביל בעיר.",
    services: ["פרסום בפייסבוק באשקלון", "קידום בגוגל לעסקים באשקלון", "מיתוג עסקי מנצח"]
  },
  "beer-sheva": {
    name: "באר שבע",
    desc: "בירת הנגב צריכה שיווק חזק. משרד פרסום בבאר שבע שנותן תוצאות אמיתיות בשטח.",
    services: ["קידום אתרים בבאר שבע", "בניית חנויות וירטואליות", "קמפיינים ממומנים ללידים"]
  },
  "sderot": {
    name: "שדרות",
    desc: "עסקים בשדרות והעוטף - אנחנו איתכם. שירותי דיגיטל שמותאמים בדיוק לצרכים שלכם.",
    services: ["שיווק דיגיטלי בשדרות", "ניהול עמודי אינסטגרם וטיקטוק", "ייעוץ שיווקי לעסקים"]
  },
  "netivot": {
    name: "נתיבות",
    desc: "העיר המתפתחת של הדרום. זה הזמן לתפוס את המקום שלכם בדיגיטל עם שיווק חכם בנתיבות.",
    services: ["פרסום ממומן בנתיבות", "בניית אתרי תדמית", "עיצוב גרפי ומיתוג"]
  },
  "ofakim": {
    name: "אופקים",
    desc: "פתרונות פרסום יצירתיים לעסקים באופקים. בואו נגדיל את המכירות שלכם.",
    services: ["קידום עסקים באופקים", "ניהול קמפיינים בגוגל", "שיווק ברשתות החברתיות"]
  },
  "yavne": {
    name: "יבנה",
    desc: "עסקים ביבנה הירוקה והוותיקה - הגיע הזמן לשדרג את הנוכחות הדיגיטלית שלכם.",
    services: ["בניית אתרים ביבנה", "קידום אורגני לעסקים", "פרסום לקהל מקומי"]
  },
  "gan-yavne": {
    name: "גן יבנה",
    desc: "שירותי משרד פרסום בגן יבנה והסביבה. יחס אישי ותוצאות מקצועיות.",
    services: ["שיווק לעסקים בגן יבנה", "ניהול מדיה חברתית", "קידום ממומן בגוגל"]
  }
};

export default function CityPage() {
  const { city } = useParams<{ city: string }>();
  const data = city ? cityData[city] : null;

  if (!data) {
    return (
      <Wrapper>
        <HeaderThree />
        <div className="container py-5 text-center">
          <h1>העיר לא נמצאה</h1>
          <Link to="/service-areas" className="btn btn-primary mt-3">חזרה לאזורי שירות</Link>
        </div>
        <FooterOne />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SEO 
        title={`משרד פרסום ב${data.name} - קידום אתרים ושיווק דיגיטלי`}
        description={data.desc}
        keywords={`משרד פרסום ב${data.name}, קידום אתרים ב${data.name}, שיווק דיגיטלי ${data.name}, בניית אתרים ב${data.name}`}
      />
      <HeaderThree />
      <Breadcrumb title={data.name} />
      
      <section className="city-page-section wionsection-padding wiondefault-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="city-content">
                <h1 className="mb-4">שירותי שיווק ופרסום ב{data.name}</h1>
                <p className="lead mb-4">{data.desc}</p>
                <p>
                  בעלי עסקים ב{data.name} והסביבה? הגעתם למקום הנכון. 
                  אנחנו ב"נתי פרסום ושיווק" מתמחים במתן פתרונות דיגיטליים מקיפים לעסקים שרוצים לגדול.
                  אנחנו מכירים את השטח, את הקהל המקומי ואת האתגרים שלכם.
                </p>
                
                <h3 className="mt-5 mb-3">מה אנחנו מציעים לעסקים ב{data.name}?</h3>
                <ul className="check-list mb-5">
                  {data.services.map((service, index) => (
                    <li key={index} style={{ marginBottom: '10px', fontSize: '18px' }}>
                      <i className="ri-check-line text-success ms-2"></i>
                      {service}
                    </li>
                  ))}
                </ul>

                <div className="cta-box bg-light p-4 rounded-3 mt-5">
                  <h3>מוכנים להתחיל?</h3>
                  <p>בואו נקבע פגישת ייעוץ (אצלכם ב{data.name} או בזום) ונראה איך אפשר להזניק את העסק שלכם.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="sidebar-contact bg-white p-4 rounded-3 shadow-sm sticky-top" style={{ top: '100px' }}>
                <h4 className="mb-4">השאירו פרטים ונחזור אליכם</h4>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterOne />
    </Wrapper>
  );
}
