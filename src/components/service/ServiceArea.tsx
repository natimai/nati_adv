

import { Link } from 'react-router-dom';
 

export default function ServiceArea() {
  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>השירותים שלנו</p>
          </div>
          <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">מה אנחנו עושים בשבילכם?</h2>
        </div>

        {/* 1. קידום אורגני (SEO) */}
        <div className="wionservice-main-box card-sticky">
          <div className="row">
            <div className="col-lg-6">
              <div className="wionservice-d-thumb">
                <img src="assets/images/service/thumb6.png" alt="קידום אתרים אורגני (SEO) לעסקים בקריית גת והדרום" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="wiondefault-content pl-110">
                <h3 className="title">01. קידום אורגני (SEO)</h3>
                <p>לא קסמים, רק עבודה קשה. SEO זה לא פתרון מהיר. זה תהליך של חודשים, אבל התוצאות? נשארות לשנים. אני עובד על האתר שלכם כמו שהייתי עובד על שלי - עם תשומת לב לכל פרט.</p>
                <div className="mt-50">
                  <div className="wionservice-d-data">
                    <ul>
                      <li>
                        <h4>מחקר מילים ומתחרים מעמיק</h4>
                      </li>
                      <li>
                        <h4>אופטימיזציה טכנית (On-Page)</h4>
                      </li>
                      <li>
                        <h4>בניית פרופיל קישורים איכותי</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-50">
                  <Link className="wiondefault-btn" to="/contact">דברו איתי
                    <span className="wionbutton-icon">
                      <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                      <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. קמפיינים ממומנים (PPC) */}
        <div className="wionservice-main-box card-sticky mt-80">
          <div className="row">
            <div className="col-lg-6 order-lg-2">
              <div className="wionservice-d-thumb">
                <img src="assets/images/service/thumb7.png" alt="ניהול קמפיינים ממומנים בגוגל ופייסבוק - משרד פרסום בקריית גת" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="wiondefault-content pr-110">
                <h3 className="title">02. קמפיינים ממומנים (PPC)</h3>
                <p>כסף שמביא כסף. קמפיינים ממומנים יכולים להביא לקוחות כבר מחר - אבל רק אם עושים את זה נכון. לא זורקים כסף לאוויר, אלא משקיעים בחכמה ומודדים הכל.</p>
                <div className="mt-50">
                  <div className="wionservice-d-data">
                    <ul>
                      <li>
                        <h4>ניהול קמפיינים בגוגל (Google Ads)</h4>
                      </li>
                      <li>
                        <h4>פרסום בפייסבוק ואינסטגרם</h4>
                      </li>
                      <li>
                        <h4>רימרקטינג (שיווק מחדש) חכם</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-50">
                  <Link className="wiondefault-btn" to="/contact">דברו איתי
                    <span className="wionbutton-icon">
                      <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                      <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. מיתוג ועיצוב גרפי */}
        <div className="wionservice-main-box card-sticky mt-80">
          <div className="row">
            <div className="col-lg-6">
              <div className="wionservice-d-thumb">
                <img src="assets/images/service/thumb8.png" alt="מיתוג ועיצוב גרפי לעסקים - סטודיו למיתוג בדרום" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="wiondefault-content pl-110">
                <h3 className="title">03. מיתוג ועיצוב גרפי</h3>
                <p>אנחנו יוצרים יותר מסתם לוגו. אנחנו בונים זהות ויזואלית שלמה שמשקפת את הקול, הערכים והחזון של המותג שלכם.</p>
                <div className="mt-50">
                  <div className="wionservice-d-data">
                    <ul>
                      <li>
                        <h4>עיצוב לוגו ושפה מיתוגית</h4>
                      </li>
                      <li>
                        <h4>עיצוב חווית משתמש (UI/UX)</h4>
                      </li>
                      <li>
                        <h4>עיצוב לרשתות חברתיות ודפוס</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-50">
                  <Link className="wiondefault-btn" to="/contact">דברו איתי
                    <span className="wionbutton-icon">
                      <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                      <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. אנליטיקה ומדידה */}
        <div className="wionservice-main-box card-sticky mt-80">
          <div className="row">
            <div className="col-lg-6 order-lg-2">
              <div className="wionservice-d-thumb">
                <img src="assets/images/service/thumb9.png" alt="אנליטיקה ומדידה דיגיטלית - שיפור ביצועי שיווק" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="wiondefault-content pr-110">
                <h3 className="title">04. אנליטיקה ומדידה</h3>
                <p>אם לא מודדים, לא יודעים. אני לא מאמין בעבודה בעיוורון. כל מה שאני עושה - מדוד, מנותח, ומשופר. אתם תמיד יודעים בדיוק מה קורה עם הכסף שלכם.</p>
                <div className="mt-50">
                  <div className="wionservice-d-data">
                    <ul>
                      <li>
                        <h4>הטמעת Google Analytics 4</h4>
                      </li>
                      <li>
                        <h4>דוחות חודשיים ברורים ופשוטים</h4>
                      </li>
                      <li>
                        <h4>מעקב המרות ושיפור ביצועים</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-50">
                  <Link className="wiondefault-btn" to="/contact">דברו איתי
                    <span className="wionbutton-icon">
                      <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                      <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. תוכן שעובד */}
        <div className="wionservice-main-box card-sticky mt-80">
          <div className="row">
            <div className="col-lg-6">
              <div className="wionservice-d-thumb">
                <img src="assets/images/service/thumb10.png" alt="כתיבת תוכן שיווקי וניהול סושיאל - נתי פרסום ושיווק" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="wiondefault-content pl-110">
                <h3 className="title">05. תוכן שעובד</h3>
                <p>מילים שמוכרות. תוכן טוב זה לא רק מילים יפות. זה תוכן שגורם לאנשים לעצור, לקרוא, ולפעול. אני כותב תוכן שמדבר בשפה של הלקוחות שלכם.</p>
                <div className="mt-50">
                  <div className="wionservice-d-data">
                    <ul>
                      <li>
                        <h4>כתיבה שיווקית לאתרים</h4>
                      </li>
                      <li>
                        <h4>ניהול תוכן לרשתות חברתיות</h4>
                      </li>
                      <li>
                        <h4>כתיבת מאמרים ובלוגים</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-50">
                  <Link className="wiondefault-btn" to="/contact">דברו איתי
                    <span className="wionbutton-icon">
                      <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                      <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
