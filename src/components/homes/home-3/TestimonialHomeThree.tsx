 
import  { useState } from "react";
 
import brand1 from "../../../../public/assets/images/brand/b1.svg";
import brand2 from "../../../../public/assets/images/brand/b2.svg";
import brand3 from "../../../../public/assets/images/brand/b3.svg";
import brand4 from "../../../../public/assets/images/brand/b4.svg";
import brand5 from "../../../../public/assets/images/brand/b5.svg";
import brand6 from "../../../../public/assets/images/brand/b6.svg";

import thumb1 from "../../../../public/assets/images/testimonial/thumb1.png";
import thumb2 from "../../../../public/assets/images/testimonial/thumb2.png";
import thumb3 from "../../../../public/assets/images/testimonial/thumb3.png";
import thumb4 from "../../../../public/assets/images/testimonial/thumb4.png";
import thumb5 from "../../../../public/assets/images/testimonial/thumb5.png";
import thumb6 from "../../../../public/assets/images/testimonial/thumb4.png";  
 

interface Testimonial {
  id: string;
  brandImg: string;
  thumb: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: "tab-1",
    brandImg: brand1,
    thumb: thumb1,
    name: "שרה לוי",
    role: "מייסדת, אפליקציית מדיטציה",
    text: "העבודה עם נתי פרסום ושיווק הייתה חוויה מדהימה. הם הבינו את החזון שלי מיד והפכו אותו למותג אלגנטי ומרגיע שמדבר ישירות אל הקהל שלי. העיצוב והמיתוג העלו את המוצר לרמה חדשה לגמרי.",
  },
  {
    id: "tab-2",
    brandImg: brand2,
    thumb: thumb2,
    name: "מירב אברהם",
    role: "בעלים, סטודיו לעיצוב פנים",
    text: "הוקסמתי מהאסתטיקה והזרימה של האתר שהם יצרו עבורי. הם תפסו את המהות של המותג שלי עם תחכום וחמימות. לקוחות עכשיו אומרים שהם בחרו בי בגלל כמה מקצועי ומזמין האתר נראה!",
  },
  {
    id: "tab-3",
    brandImg: brand3,
    thumb: thumb3,
    name: "דניאל כהן",
    role: "מנכ\"ל, חברת פינטק",
    text: "הצוות סיפק זהות ויזואלית מעודנת ומצגת שהרשימה משקיעים. התרשמתי מהאיזון בין מקצועיות לאישיות במותג שלנו. הם הבינו את התחום הפיננסי אבל הפכו אותו לאנושי.",
  },
  {
    id: "tab-4",
    brandImg: brand4,
    thumb: thumb4,
    name: "יוסי ברק",
    role: "מנכ\"ל, סטארטאפ SaaS",
    text: "מה שהרשים אותי הכי הרבה הייתה היכולת שלהם לשלב יצירתיות עם אסטרטגיה. הם סיפקו זהות מותג חזקה ועיצוב UX שלא רק נראה נהדר אלא גם הגביר את המעורבות. אמינים, חכמים ומוכשרים ברמה גבוהה.",
  },
  {
    id: "tab-5",
    brandImg: brand5,
    thumb: thumb5,
    name: "רונית שפירא",
    role: "שותפה-מייסדת, מותג אופנה",
    text: "הצוות הביא את מותג האופנה שלנו לחיים עם ויזואליה מרהיבה, מיתוג נועז וחוויית אתר חלקה. הם 'תפסו' את הקהל שלנו כמו אף אחד אחר. סופר רספונסיביים ומהנים לעבוד איתם!",
  },
  {
    id: "tab-6",
    brandImg: brand6,
    thumb: thumb6,
    name: "מיכאל תמיר",
    role: "מנהל מוצר, אפליקציית מוזיקה",
    text: "תהליך העיצוב שלהם היה גם מעורר השראה וגם אסטרטגי. הם עזרו לנו לבנות ממשק אלגנטי ואינטואיטיבי לאפליקציה שלנו, והעבודה על המיתוג נתנה לנו יתרון מקצועי בשוק צפוף. מומלץ בחום לסטארטאפים.",
  },
];

export default function TestimonialHomeThree() {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <div className="wiondefault-bg margin-30">
      <div className="wionsection-padding">
        <div className="container">
          <div className="wionsection-title center">
            <div className="wionsub-title">
              <p>מה אומרים עלינו</p>
            </div>
            <h2>המלצות לקוחות</h2>
          </div>
 
          <div className="wiontab-wrap">
            <ul className="tabs flex gap-4">
              {testimonials.map((t) => (
                <li
                  key={t.id}
                  className={`tab-link cursor-pointer ${activeTab === t.id ? "current" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  <img src={t.brandImg} alt="" />
                </li>
              ))}
            </ul>

            {testimonials.map((t) => (
              <div
                key={t.id}
                id={t.id}
                className={`wiontab-content mt-6 ${activeTab === t.id ? "current" : "hidden"}`}
              >
                <div className="wiont-wrap3">
                  <div className="row flex flex-wrap">
                    <div className="col-lg-5 w-full lg:w-5/12">
                      <div className="wiont-thumb3">
                        <img src={t.thumb} alt={t.name} />
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center">
                      <div className="wiont-content3">
                        <h4>{t.text}</h4> 
                        <div className="wiont-author-wrap3 mt-50">
                          <div className="wiont-author-data">
                            <h6>{t.name}</h6>
                            <p>{t.role}</p>
                          </div>
                          <div className="wiont-author-icon">
                            <img src={t.brandImg} alt="" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
