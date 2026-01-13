
import { Link } from "react-router-dom";
import Wrapper from "./layouts/Wrapper";
import HeaderThree from "./layouts/headers/HeaderThree";
import FooterOne from "./layouts/footers/FooterOne";
import SEO from "./common/SEO";

const NotFound = () => {
  return (
    <Wrapper>
      <SEO title="404 - עמוד לא נמצא" description="העמוד שחיפשתם לא נמצא. נסו לחזור לדף הבית או צרו קשר." />
      <HeaderThree />
      <div className="wion404-section wiondefault-bg" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="wion404-content">
            <h1 style={{ fontSize: '120px', fontWeight: 'bold', color: '#1d1d1b', lineHeight: 1 }}>404</h1>
            <h2 className="mb-4">אופס! העמוד לא נמצא</h2>
            <p className="mb-50">נראה שהלכתם לאיבוד. העמוד שאתם מחפשים הוסר, שמו שונה או שהוא לא זמין זמנית.</p>
            
            <div className="wion404-btn-group" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="wiondefault-btn">חזרה לדף הבית
                <span className="wionbutton-icon">
                  <img className="arry1" src="/assets/images/svg/arrow-right.webp" alt="" />
                  <img className="arry2" src="/assets/images/svg/arrow-right.webp" alt="" />
                </span>
              </Link>
              <Link to="/contact" className="wiondefault-btn white-outline" style={{ color: '#1d1d1b', borderColor: '#1d1d1b' }}>דווח על תקלה</Link>
            </div>

            <div className="mt-50">
              <h4>אולי חיפשתם את אחד השירותים שלנו?</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <li><Link to="/service" style={{ textDecoration: 'underline' }}>שירותים</Link></li>
                <li><Link to="/portfolio" style={{ textDecoration: 'underline' }}>תיק עבודות</Link></li>
                <li><Link to="/blog" style={{ textDecoration: 'underline' }}>בלוג</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </Wrapper>
  );
};

export default NotFound;
