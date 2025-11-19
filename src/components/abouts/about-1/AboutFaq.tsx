 import  { useState } from "react";

interface FaqItem {
  title: string;
  year: string;
  description: string;
  image: string;
}

const faqData: FaqItem[] = [
  {
    title: "למה אני כל כך ישיר?",
    year: "01",
    description:
      "כי אני לא מאמין בלמכור חלומות. אני מאמין לספר לכם בדיוק מה לצפות, כמה זה יעלה, וכמה זמן זה ייקח. ככה אתם יכולים להחליט בחכמה.",
    image: "/assets/images/svg/faq1.svg",
  },
  {
    title: "כמה זמן זה לוקח?",
    year: "02",
    description:
      "תלוי מה עושים. קמפיינים ממומנים? תוצאות תוך שבוע-שבועיים. SEO? 3-6 חודשים לפני שרואים תוצאות משמעותיות. מי שמבטיח לכם תוצאות SEO תוך חודש - משקר.",
    image: "/assets/images/svg/faq2.svg",
  },
  {
    title: "כמה כסף צריך להשקיע?",
    year: "03",
    description:
      "התשלום לי מתחיל מ-1,500₪ לחודש. אבל זה רק חלק מהסיפור. בקמפיינים ממומנים תקציב הפרסום עצמו צריך להיות לפחות 5,000₪ לחודש כדי לראות תוצאות.",
    image: "/assets/images/svg/faq3.svg",
  },
  {
    title: "מה אם זה לא עובד?",
    year: "04",
    description:
      "אני לא נועל אתכם בחוזה ל-3 שנים. אם אחרי 3 חודשים אנחנו לא רואים התקדמות - אנחנו מדברים על זה בכנות ומחליטים ביחד מה הלאה.",
    image: "/assets/images/svg/faq4.svg",
  },
];

export default function AboutFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="wionsection-padding bg-heading wiondefault-bg">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="wiondefault-content content2">
              <div
                className="wionsub-title title2 aos-init"
                data-aos-delay="400"
                data-aos="fade-up"
              >
                <p>שאלות שאתם בטח שואלים</p>
              </div>
              <h2
                className="pb-0 aos-init"
                data-aos-delay="500"
                data-aos="fade-up"
              >
                בואו נענה על השאלות האמיתיות
              </h2>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="col-lg-6">
            <div className="wionfaq-wrap1">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`wionfaq-item item2 ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <div
                    className="wionfaq-header header2"
                    onClick={() => toggleFaq(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{faq.title}</h3>
                    <h3>{faq.year}</h3>
                  </div>
                  {activeIndex === index && (
                    <div className="wionfaq-body body2">
                      <div className="wionfaq-data">
                        <p>{faq.description}</p>
                        <img src={faq.image} alt={faq.title} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
