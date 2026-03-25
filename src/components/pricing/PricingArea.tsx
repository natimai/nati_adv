
import { Link } from 'react-router-dom';

export default function PricingArea() {
  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title center max-width-780">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>שקיפות מלאה — בלי הפתעות</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">תוכניות ומחירים</h1>
        </div>
        <div className="wionpricing-wraper">
          <div className="wionpricing-wrap wrap1 aos-init" data-aos-delay="400" data-aos="fade-up">
            <div className="wionpricing-header">
              <h3>בסיס — 1,500₪/חודש</h3>
              <p>מתאים לעסקים שרוצים להתחיל לבנות נוכחות דיגיטלית יציבה.</p>
            </div>
            <div className="wionpricing-body mt-50">
              <h4>כולל:</h4>
              <ul>
                <li>ייעוץ אסטרטגיה שיווקית</li>
                <li>ניהול קמפיין ממומן אחד (גוגל או מטא)</li>
                <li>דוח ביצועים חודשי</li>
                <li>זמינות בוואטסאפ בימי עסקים</li>
                <li>עד 2 פגישות חודשיות</li>
                <li className="pb-0">תקציב מודעות בנפרד (מינ׳ 2,000₪)</li>
              </ul>
              <div className="wionpricing-body-text">
                <p><span>מחויבות:</span>חודש לחודש</p>
                <p className="pb-0"><span>מתאים ל:</span>עסקים קטנים מתחילים</p>
              </div>
            </div>
            <div className="wionpricing-footer mt-50">
              <Link className="wiondefault-btn" to="/contact">בחרו תוכנית זו
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.webp" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.webp" alt="" />
                </span>
              </Link>
            </div>
          </div>
          <div className="wionpricing-wrap wrap2 aos-init" data-aos-delay="500" data-aos="fade-up">
            <div className="wionpricing-header">
              <h3>צמיחה — 3,500₪/חודש</h3>
              <p>לעסקים שרוצים לצמוח ברצינות ולהוביל את הענף שלהם.</p>
            </div>
            <div className="wionpricing-body mt-50">
              <h4>כולל הכל ב״בסיס״ ועוד:</h4>
              <ul>
                <li>ניהול 2 קמפיינים ממומנים</li>
                <li>קידום אורגני (SEO) בסיסי</li>
                <li>ניהול עמוד עסקי אחד ברשתות</li>
                <li>4 פוסטים חודשיים + עיצוב</li>
                <li>ניתוח מתחרים רבעוני</li>
                <li className="pb-0">תקציב מודעות בנפרד (מינ׳ 4,000₪)</li>
              </ul>
              <div className="wionpricing-body-text">
                <p><span>מחויבות:</span>3 חודשים</p>
                <p className="pb-0"><span>מתאים ל:</span>עסקים בצמיחה</p>
              </div>
            </div>
            <div className="wionpricing-footer mt-50">
              <Link className="wiondefault-btn" to="/contact">בחרו תוכנית זו
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.webp" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.webp" alt="" />
                </span>
              </Link>
            </div>
          </div>
          <div className="wionpricing-wrap wrap3 aos-init" data-aos-delay="600" data-aos="fade-up">
            <div className="wionpricing-header">
              <h3>מנהיגות — 6,500₪/חודש</h3>
              <p>מעטפת שיווקית מלאה לעסקים שרוצים להיות מספר 1 בתחומם.</p>
            </div>
            <div className="wionpricing-body mt-50">
              <h4>כולל הכל ב״צמיחה״ ועוד:</h4>
              <ul>
                <li>קידום SEO מלא ואגרסיבי</li>
                <li>ניהול כל הרשתות החברתיות</li>
                <li>בניית אסטרטגיה שיווקית שנתית</li>
                <li>דוחות שבועיים + שיחת ניתוח</li>
                <li>עיצוב גרפי ללא הגבלה</li>
                <li className="pb-0">תקציב מודעות בנפרד (מינ׳ 8,000₪)</li>
              </ul>
              <div className="wionpricing-body-text">
                <p><span>מחויבות:</span>6 חודשים</p>
                <p className="pb-0"><span>מתאים ל:</span>עסקים גדולים ורשתות</p>
              </div>
            </div>
            <div className="wionpricing-footer mt-50">
              <Link className="wiondefault-btn" to="/contact">בחרו תוכנית זו
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.webp" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.webp" alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-50" style={{ opacity: 0.7 }}>
          <p>לא בטוחים מה מתאים לכם? <Link to="/contact" style={{ textDecoration: 'underline' }}>דברו איתנו — הייעוץ הראשון חינם</Link></p>
        </div>
      </div>
    </section>
  )
}
