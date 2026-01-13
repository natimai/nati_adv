
import { useParams } from 'react-router-dom';

const serviceData: any = {
  seo: {
    title: "קידום אורגני (SEO)",
    subtitle: "להיות ראשון בגוגל, באופן טבעי",
    overview: "קידום אתרים אורגני הוא המפתח לצמיחה יציבה לטווח ארוך. אנחנו לא מסתפקים רק בהבאת תנועה, אלא דואגים שהתנועה הזו תהיה איכותית ותהפוך ללקוחות משלמים. התהליך שלנו מבוסס על מחקר מעמיק, אסטרטגיה חכמה ועבודה טכנית קפדנית.",
    offer: [
      "מחקר מילים ומתחרים מקיף לאיתור הזדמנויות",
      "אופטימיזציה טכנית (Technical SEO) לשיפור מבנה האתר ומהירותו",
      "בניית אסטרטגיית תוכן שתמצב אתכם כאוטוריטה",
      "בניית פרופיל קישורים חיצוניים (Backlinks) איכותי ואמין",
      "שיפור חווית המשתמש (UX) להגדלת זמן השהייה וההמרות"
    ],
    whyNeed: [
      "נכס דיגיטלי מניב שנשאר שלכם לתמיד, לא כמו מודעות",
      "אחוזי המרה גבוהים יותר מתנועה ממומנת (כי אנשים סומכים על גוגל)",
      "חשיפה לקהל שמחפש אתכם אקטיבית ברגעים אלו ממש"
    ],
    process: [
      "שלב 1: מחקר וביקורת אתר מקיפה",
      "שלב 2: בניית תוכנית אסטרטגית ותיקון ליקויים טכניים",
      "שלב 3: כתיבת תוכן והעלאתו לאתר",
      "שלב 4: בניית קישורים וחיזוק הסמכות",
      "שלב 5: ניתוח תוצאות, דוחות חודשיים ושיפור מתמיד"
    ],
    faq: [
      { q: "כמה זמן לוקח לראות תוצאות?", a: "SEO הוא תהליך לטווח ארוך. בדרך כלל רואים שיפור ראשוני תוך 3-4 חודשים, ותוצאות משמעותיות תוך 6-12 חודשים." },
      { q: "האם אתם מתחייבים למקום ראשון?", a: "לא. אף מקדם מקצועי לא יכול להתחייב על המיקום המדויק, כי האלגוריתם של גוגל דינמי. אנחנו מתחייבים לעבודה מקצועית ושקופה שתביא לשיפור מתמיד." },
      { q: "מה ההבדל בין SEO ל-PPC?", a: "ב-PPC משלמים על כל קליק ומפסיקים להופיע כשנגמר התקציב. ב-SEO ההשקעה היא בבניית הנכס, והתנועה ממשיכה להגיע גם כשלא משלמים ישירות לגוגל." }
    ],
    image1: "/assets/images/service/thumb6.webp",
    image2: "/assets/images/service/thumb1.webp" 
  },
  ppc: {
    title: "קמפיינים ממומנים (PPC)",
    subtitle: "תוצאות מיידיות, לידים חמים",
    overview: "צריכים לקוחות כאן ועכשיו? קמפיינים ממומנים הם הפתרון. אנחנו מנהלים תקציבים חכמים בגוגל, פייסבוק, אינסטגרם וטיקטוק, ודואגים שכל שקל שאתם משקיעים יחזור אליכם עם ריבית בצורת לקוחות חדשים.",
    offer: [
      "הקמה וניהול של קמפיינים בגוגל (חיפוש, שופינג, יוטיוב)",
      "פרסום ממוקד ברשתות חברתיות (פייסבוק, אינסטגרם, טיקטוק)",
      "שיווק מחדש (Remarketing) להחזרת גולשים שלא רכשו",
      "קופירייטינג שיווקי ועיצוב מודעות ממירות",
      "בניית דפי נחיתה ייעודיים לכל קמפיין"
    ],
    whyNeed: [
      "שליטה מלאה בתקציב, במיקומים ובזמני החשיפה",
      "תוצאות מיידיות – הקמפיין עולה לאוויר והטלפון מתחיל לצלצל",
      "יכולת טרגוט כירורגית לפי גיל, מיקום, תחומי עניין ועוד"
    ],
    process: [
      "שלב 1: אפיון קהל היעד ומטרות הקמפיין",
      "שלב 2: מחקר מילות מפתח (בגוגל) או תחומי עניין (בסושיאל)",
      "שלב 3: הקמת הקמפיין, המודעות ודפי הנחיתה",
      "שלב 4: השקה ומעקב צמוד",
      "שלב 5: אופטימיזציה יומיומית לשיפור עלויות והמרות"
    ],
    faq: [
      { q: "כמה תקציב צריך להשקיע?", a: "זה תלוי בתחום ובתחרות. אנחנו ממליצים להתחיל עם תקציב ניסיוני, לראות מה העלות לליד, ואז להגדיל בהתאם לתוצאות." },
      { q: "איפה עדיף לפרסם, גוגל או פייסבוק?", a: "תלוי במוצר. אם אנשים מחפשים אותו אקטיבית (למשל אינסטלטור), גוגל עדיף. אם זה מוצר שצריך לעורר צורך (למשל אופנה), פייסבוק/אינסטגרם עדיפים." },
      { q: "תוך כמה זמן רואים תוצאות?", a: "מיידית. ברגע שהקמפיין מאושר ועולה לאוויר, המודעות מתחילות להופיע." }
    ],
    image1: "/assets/images/service/thumb7.webp",
    image2: "/assets/images/service/thumb2.webp"
  },
  analytics: {
    title: "אנליטיקה ומדידה",
    subtitle: "לקבל החלטות מבוססות נתונים",
    overview: "בעולם הדיגיטלי, הכל מדיד. אבל עודף נתונים יכול לבלבל. התפקיד שלנו הוא להפוך את המספרים לתובנות עסקיות ברורות. אנחנו נגיד לכם בדיוק איזה ערוץ שיווק הכי רווחי לכם ואיפה הכסף נוזל.",
    offer: [
      "הטמעה מתקדמת של Google Analytics 4 (GA4)",
      "הגדרת מעקב המרות (Conversions) מדויק – טפסים, שיחות, רכישות",
      "בניית דשבורדים ויזואליים ב-Looker Studio שמתעדכנים בזמן אמת",
      "ניתוח התנהגות גולשים ושיפור משפכי המרה",
      "חיבור מערכות CRM למערכות הפרסום"
    ],
    whyNeed: [
      "הבנה עמוקה של מסע הלקוח באתר",
      "חיסכון משמעותי בתקציב על ידי הפסקת פעילות לא יעילה",
      "יכולת לזהות הזדמנויות צמיחה חדשות"
    ],
    process: [
      "שלב 1: מיפוי הצרכים העסקיים והגדרת KPIs",
      "שלב 2: הטמעת קודים ותגיות (GTM)",
      "שלב 3: בדיקת תקינות הנתונים (QA)",
      "שלב 4: בניית דוחות מותאמים אישית",
      "שלב 5: ניתוח שוטף והמלצות לפעולה"
    ],
    faq: [
      { q: "האם אני צריך ידע טכני?", a: "ממש לא. אנחנו מטפלים בכל הצד הטכני ומגישים לכם דוחות פשוטים וברורים." },
      { q: "למה GA4 כל כך מסובך?", a: "הוא אכן כלי מורכב יותר מהקודם, אבל הוא נותן תמונה הרבה יותר מדויקת על המשתמשים בעידן של ריבוי מכשירים. אנחנו כאן כדי לפשט את זה." },
      { q: "האם זה משפר את השיווק?", a: "חד משמעית. כשיודעים מה עובד, אפשר להשקיע שם יותר ולהרוויח יותר." }
    ],
    image1: "/assets/images/service/thumb9.webp",
    image2: "/assets/images/service/thumb3.webp"
  },
  content: {
    title: "תוכן שעובד",
    subtitle: "מילים שמוכרות ובונות אמון",
    overview: "בעידן של הצפת מידע, רק תוכן איכותי באמת מצליח לחדור את הרעש. אנחנו לא כותבים 'סתם' מאמרים. אנחנו יוצרים נכסי תוכן שמשרתים את המטרות העסקיות שלכם, בונים אתכם כמומחים וגורמים ללקוחות להתאהב במותג.",
    offer: [
      "כתיבת מאמרים מקצועיים לבלוג ולקידום אורגני",
      "ניהול תוכן לרשתות חברתיות (פוסטים, סטוריז, רילס)",
      "קופירייטינג (כתיבה שיווקית) לאתרי תדמית ודפי נחיתה",
      "כתיבת ניוזלטרים וסדרות מסרים אוטומטיות",
      "כתיבת תסריטים לסרטוני תדמית ושיווק"
    ],
    whyNeed: [
      "מיצוב העסק כאוטוריטה מקצועית בתחומו",
      "יצירת קשר רגשי ואמון עם הלקוחות הפוטנציאליים",
      "דלק למנועי החיפוש ולרשתות החברתיות"
    ],
    process: [
      "שלב 1: מחקר מילות מפתח ונושאים חמים",
      "שלב 2: בניית גאנט תוכן חודשי",
      "שלב 3: כתיבה, עריכה ועיצוב גרפי",
      "שלב 4: פרסום והפצה",
      "שלב 5: ניתוח מעורבות ושיפור התוכן"
    ],
    faq: [
      { q: "מי כותב את התוכן?", a: "יש לנו צוות של כותבי תוכן מנוסים שמתמחים במגוון תחומים. אנחנו לומדים את העסק שלכם לעומק לפני שכותבים מילה אחת." },
      { q: "האם אתם עושים גם גרפיקה?", a: "כן, אנחנו מספקים מעטפת מלאה של טקסט + ויז'ואל." },
      { q: "האם תוכן עוזר ל-SEO?", a: "זה הדבר הכי חשוב ל-SEO. גוגל מדרג אתרים לפי איכות התוכן שלהם." }
    ],
    image1: "/assets/images/service/thumb10.webp",
    image2: "/assets/images/service/thumb4.webp"
  },
  branding: {
    title: "מיתוג ועיצוב גרפי",
    subtitle: "זהות ויזואלית שאי אפשר להתעלם ממנה",
    overview: "מיתוג הוא לא רק לוגו יפה. זו השפה שבה העסק שלכם מדבר עם העולם. אנחנו בונים מותגים שלמים שמספרים סיפור, משדרים את הערכים הנכונים, ומבדלים אתכם מהמתחרים בשבריר של שנייה.",
    offer: [
      "עיצוב לוגו וספר מותג מלא",
      "עיצוב ממשק משתמש (UI/UX) לאתרים ואפליקציות",
      "עיצוב תבניות (Templates) לרשתות חברתיות",
      "עיצוב מצגות עסקיות וחומרים שיווקיים לדפוס",
      "אסטרטגיה מיתוגית וגיבוש שפה תקשורתית"
    ],
    whyNeed: [
      "בידול חד וברור מול המתחרים בשוק רווי",
      "יצירת רושם ראשוני בלתי נשכח ומקצועי",
      "עלייה בערך הנתפס של המוצר או השירות שלכם"
    ],
    process: [
      "שלב 1: מחקר שוק והבנת ערכי המותג",
      "שלב 2: סיעור מוחות וסקיצות ראשוניות",
      "שלב 3: פיתוח השפה הויזואלית ובחירת צבעים/פונטים",
      "שלב 4: עיצוב האלמנטים הסופיים וספר מותג",
      "שלב 5: הטמעת המיתוג בכל הנכסים הדיגיטליים"
    ],
    faq: [
      { q: "כמה עולה מיתוג?", a: "המחיר משתנה בהתאם להיקף הפרויקט (רק לוגו מול חבילת מיתוג מלאה). נשמח לתת הצעת מחיר מותאמת אישית." },
      { q: "כמה סקיצות מקבלים?", a: "אנחנו בדרך כלל מציגים 3 כיוונים שונים לבחירה, ואז מתמקדים ומלטשים את הכיוון הנבחר." },
      { q: "האם אקבל את הקבצים הפתוחים?", a: "בוודאי. בסוף התהליך כל הקבצים עוברים לבעלותכם המלאה." }
    ],
    image1: "/assets/images/service/thumb8.webp",
    image2: "/assets/images/service/thumb5.webp"
  }
};

export default function ServiceDetailsArea() {
  const { id } = useParams();
  const service = serviceData[id || 'seo'];

  if (!service) return <div>Service not found</div>;

  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>{service.subtitle}</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">{service.title}</h1>
        </div>
        
        <div className="wionservice-d-wrapper aos-init" data-aos-delay="700" data-aos="fade-up">
          
          {/* Main Image */}
          <div className="wionservice-d-thumb mb-50">
            <img src={service.image1} alt={service.title} style={{borderRadius: '20px', width: '100%', maxHeight: '500px', objectFit: 'cover'}} />
          </div>

          <div className="row">
            <div className="col-lg-8">
              {/* Overview */}
              <div className="wionservice-single-wrap mb-50">
                <div className="wionservice-single-data">
                  <h3 className="mb-20">סקירה כללית</h3>
                  <p className="lead">{service.overview}</p>
                </div>
              </div>

              {/* What We Offer */}
              <div className="wionservice-single-wrap mb-50 bg-light p-4 rounded-3">
                <div className="wionservice-single-data">
                  <h3 className="mb-30">מה כולל השירות?</h3>
                  <ul className="check-list-2">
                    {service.offer.map((item: string, index: number) => (
                      <li key={index} style={{marginBottom: '15px', display: 'flex', alignItems: 'center'}}>
                        <i className="ri-check-double-line text-primary ms-2" style={{fontSize: '20px'}}></i>
                        <span style={{fontSize: '18px', fontWeight: '500'}}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process */}
              <div className="wionservice-single-wrap mb-50">
                <div className="wionservice-single-data">
                  <h3 className="mb-30">איך זה עובד? (תהליך העבודה)</h3>
                  <div className="process-steps">
                    {service.process.map((step: string, index: number) => (
                      <div key={index} className="process-step mb-3 p-3 border rounded-3 d-flex align-items-center bg-white shadow-sm">
                        <span className="step-number bg-primary text-white rounded-circle d-flex justify-content-center align-items-center ms-3" style={{width: '40px', height: '40px', minWidth: '40px', fontWeight: 'bold'}}>{index + 1}</span>
                        <span style={{fontSize: '18px'}}>{step.replace(/^שלב \d+: /, '')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="wionservice-single-wrap mb-50">
                <h3 className="mb-30">שאלות נפוצות</h3>
                <div className="accordion" id="serviceFaq">
                  {service.faq.map((item: any, index: number) => (
                    <div className="accordion-item mb-3 border rounded overflow-hidden" key={index}>
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-light text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`}>
                          {item.q}
                        </button>
                      </h2>
                      <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#serviceFaq">
                        <div className="accordion-body bg-white">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="col-lg-4">
              <div className="sidebar-sticky" style={{position: 'sticky', top: '120px'}}>
                {/* Secondary Image */}
                <div className="wionservice-single-thumb mb-40">
                  <img src={service.image2} alt={service.title} style={{borderRadius: '20px', width: '100%'}} />
                </div>

                {/* Why Need Box */}
                <div className="wionservice-single-wrap mb-40 bg-dark text-white p-4 rounded-3">
                  <div className="wionservice-single-data">
                    <h3 className="text-white mb-30">למה דווקא עכשיו?</h3>
                    <ul className="list-unstyled">
                      {service.whyNeed.map((item: string, index: number) => (
                        <li key={index} className="mb-3 d-flex text-white-50">
                          <i className="ri-arrow-left-s-line text-white ms-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="cta-box text-center p-4 border rounded-3 bg-white shadow-sm">
                  <h4>מוכנים להזניק את העסק?</h4>
                  <p className="mb-4">השאירו פרטים ונחזור אליכם עם הצעה מותאמת אישית.</p>
                  <a className="wiondefault-btn w-100 justify-content-center" href="/contact">דברו איתנו
                    <span className="wionbutton-icon">
                      <img className="arry1" src="/assets/images/svg/arrow-right.webp" alt="" />
                      <img className="arry2" src="/assets/images/svg/arrow-right.webp" alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
