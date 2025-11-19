import { useState } from 'react'

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
  {
    id: 1,
    question: "למה אני כל כך ישיר?",
    answer:
      "כי אני לא מאמין בלמכור חלומות. אני מאמין לספר לכם בדיוק מה לצפות, כמה זה יעלה, וכמה זמן זה ייקח. ככה אתם יכולים להחליט בחכמה.",
  },
  {
    id: 2,
    question: "כמה זמן זה לוקח?",
    answer:
      "תלוי מה עושים. קמפיינים ממומנים? תוצאות תוך שבוע-שבועיים. SEO? 3-6 חודשים לפני שרואים תוצאות משמעותיות. מי שמבטיח לכם תוצאות SEO תוך חודש - משקר.",
  },
  {
    id: 3,
    question: "כמה כסף צריך להשקיע?",
    answer:
      "התשלום לי מתחיל מ-1,500₪ לחודש. אבל זה רק חלק מהסיפור. בקמפיינים ממומנים תקציב הפרסום עצמו צריך להיות לפחות 5,000₪ לחודש כדי לראות תוצאות.",
  },
  {
    id: 4,
    question: "מה אם זה לא עובד?",
    answer:
      "אני לא נועל אתכם בחוזה ל-3 שנים. אם אחרי 3 חודשים אנחנו לא רואים התקדמות - אנחנו מדברים על זה בכנות ומחליטים ביחד מה הלאה.",
  },
  {
    id: 5,
    question: "איך מתחילים לעבוד יחד?",
    answer:
      "פשוט מאוד. משאירים פרטים או שולחים הודעה, קובעים שיחת היכרות קצרה (ללא עלות), בודקים התאמה ויוצאים לדרך.",
  },
  {
    id: 6,
    question: "היכן אתם נמצאים?",
    answer:
      "המשרד ממוקם בקריית גת, אבל השירות ניתן ללקוחות מכל הארץ (וגם מהעולם) בזום, בטלפון ובדיגיטל.",
  }
];




export default function FaqArea() {

  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };


  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title center max-width-1080">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>שואלים אותנו הרבה</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">שאלות ותשובות</h1>
        </div>
        <div className="wionfaq-wrap1 aos-init" data-aos-delay="700" data-aos="fade-up">

          {faq_data.map((faq) => (
            <div
              key={faq.id}
              className={`wionfaq-item ${activeId === faq.id ? "open" : ""
                }`}
            >
              <div
                className="wionfaq-header"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3>{faq.id < 10 ? '0' : ''}{faq.id}. {faq.question}</h3>
                <div className="wionactive-icon">
                  <img className="mynusicon" src="/assets/images/svg/plas.svg" alt="" />
                </div>
              </div>

              <div
                className="wionfaq-body"
                style={{
                  display: activeId === faq.id ? "block" : "none",
                }}
              >
                <p>{faq.answer}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
