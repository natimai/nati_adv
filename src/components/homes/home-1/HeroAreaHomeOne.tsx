 
import { Link } from 'react-router-dom';
import Count from '../../../common/count';

 

interface CounterItem {
  value: number;
  suffix?: string;
  label: string;
}

const counter_data: CounterItem[] = [
  {
    value: 5,
    suffix: "+",
    label: "שנות ניסיון",
  },
  {
    value: 50,
    suffix: "+",
    label: "לקוחות פעילים",
  },
  {
    value: 120,
    suffix: "+",
    label: "פרויקטים שהושלמו",
  },
  {
    value: 98,
    suffix: "%",
    label: "אחוזי הצלחה",
  },
];




const HeroAreaHomeOne = () => {
  return (
    <>
      <section className="wionhero-section wiondefault-bg">
        <div className="container">
          <div className="wionhero-content">
            <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
              <p>משרד פרסום בקריית גת והדרום</p>
            </div>
            <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">שיווק שמוכר. לא שיווק שנראה טוב.</h1>
            <h2 className="aos-init h1-style" data-aos-delay="600" data-aos="fade-up" style={{ fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}>תוצאות אמיתיות לעסקים בקריית גת והדרום</h2>
            <div className="wionhero-btn aos-init" data-aos-delay="700" data-aos="fade-up" style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link className="wiondefault-btn" to="/contact">קבעו שיחת ייעוץ חינם
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.webp" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.webp" alt="" />
                </span>
              </Link>
              <a href="https://wa.me/972544445567" target="_blank" rel="noopener noreferrer" className="wiondefault-btn" style={{ background: 'transparent', border: '2px solid currentColor' }}>
                וואטסאפ מהיר
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.webp" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.webp" alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="wionhero-thumb">
            <div className="wionhero-thumb-item item3 aos-init" data-aos="fade-up">
              <div className="hero-thumb1">
                <img src="assets/Pictures/nati_magic.webp" alt="נתי פרסום ושיווק - משרד פרסום בקריית גת והדרום" style={{ borderRadius: '10px' }} />
              </div>
            </div>
            <div className="wionhero-thumb-item aos-init" data-aos="fade">
              <div className="hero-thumb">
                <img src="assets/Pictures/nati_profile_no_bg.webp" alt="נתי מימון - מומחה שיווק דיגיטלי בקריית גת" />
              </div>
            </div>
            <div className="wionhero-thumb-item item2 aos-init" data-aos="fade-up">
              <div className="hero-thumb3">
                <img src="assets/Pictures/nati_motek.webp" alt="בניית מותגים מנצחים בדרום" style={{ borderRadius: '10px' }} />
              </div>
            </div>
          </div>
          <div className="wionabout-content">
            <div className="row">
              <div className="col-xl-5 col-lg-4">
                <div className="wionsub-title aos-init" data-aos-delay="500" data-aos="fade-up">
                  <p>מי אנחנו</p>
                </div>
              </div>
              <div className="col-xl-7 col-lg-8">
                <div className="wionabout-content-data pl-30">
                  <h3>רוב משרדי הפרסום ימכרו לך חבילה. אנחנו נבנה לך אסטרטגיה. ההבדל? תרגיש אותו בקופה.</h3>
                  <div className="mt-50">
                    <Link className="wiondefault-btn aos-init" data-aos-delay="500" data-aos="fade-up" to="/about">ראו איך עובדים איתנו
                      <span className="wionbutton-icon">
                        <img className="arry1" src="assets/images/svg/arrow-right.webp" alt="" />
                        <img className="arry2" src="assets/images/svg/arrow-right.webp" alt="" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wioncounter-wraper">


            {counter_data.map((item, i) =>(
              <div key={i} className="wioncounter-box">
              <h2 className="wioncounter-item d-inline-flex align-items-center">
                <span className="odometer d-inline-block" data-odometer-final="12">
                <Count number={item.value} text={item.suffix} />
                </span> 
              </h2>
              <div className="wioncounter-data">
                <p>{item.label}</p>
              </div>
            </div>
            ))} 

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAreaHomeOne;