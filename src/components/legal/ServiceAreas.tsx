
import { Link } from "react-router-dom";
import Wrapper from "../../layouts/Wrapper";
import HeaderThree from "../../layouts/headers/HeaderThree";
import FooterOne from "../../layouts/footers/FooterOne";
import SEO from "../../common/SEO";
import Breadcrumb from "../../common/Breadcrumb";

const areas = [
  { name: "קריית גת", desc: "משרד פרסום בקריית גת והסביבה", link: "/contact" },
  { name: "אשקלון", desc: "קידום אתרים ושיווק באשקלון", link: "/contact" },
  { name: "באר שבע", desc: "מיתוג ופרסום לעסקים בבאר שבע", link: "/contact" },
  { name: "שדרות", desc: "שירותי דיגיטל לעסקים בשדרות", link: "/contact" },
  { name: "נתיבות", desc: "בניית אתרים בנתיבות והנגב", link: "/contact" },
  { name: "אופקים", desc: "פתרונות שיווק באופקים", link: "/contact" },
  { name: "יבנה", desc: "פרסום ממומן ביבנה והשפלה", link: "/contact" },
  { name: "גן יבנה", desc: "קידום עסקים בגן יבנה", link: "/contact" },
];

export default function ServiceAreas() {
  return (
    <Wrapper>
      <SEO title="אזורי שירות" description="נתי פרסום ושיווק מספקים שירותי דיגיטל, קידום אתרים ומיתוג לעסקים בכל אזור הדרום: קריית גת, אשקלון, באר שבע ועוד." />
      <HeaderThree />
      <Breadcrumb title="אזורי שירות" />
      
      <section className="service-areas-section wionsection-padding wiondefault-bg">
        <div className="container">
          <div className="wionsection-title center">
            <h1 className="aos-init" data-aos="fade-up">אנחנו מגיעים לכל מקום בדרום</h1>
            <p className="aos-init" data-aos="fade-up" data-aos-delay="200">למרות שהמשרד בקריית גת, הלב שלנו נמצא בכל עסק בדרום שרוצה לצמוח.</p>
          </div>

          <div className="row mt-50">
            {areas.map((area, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="area-box" style={{ background: '#fff', padding: '30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{area.name}</h3>
                  <p>{area.desc}</p>
                  <Link to={area.link} className="wiondefault-btn sm-btn mt-3">צרו קשר</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterOne />
    </Wrapper>
  );
}
