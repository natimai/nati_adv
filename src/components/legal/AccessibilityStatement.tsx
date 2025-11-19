import Wrapper from '../../layouts/Wrapper';
import HeaderThree from '../../layouts/headers/HeaderThree';
import FooterOne from '../../layouts/footers/FooterOne';
import DividedArea from '../../common/DividedArea';
import SEO from '../../common/SEO';

const AccessibilityStatement = () => {
  return (
    <Wrapper>
      <SEO title="הצהרת נגישות" description="הצהרת נגישות של נתי פרסום ושיווק. אנו פועלים להנגשת האתר לכלל האוכלוסייה." />
      <HeaderThree />
      <div className="wionabout-section1 wiondefault-bg">
        <div className="container">
          <div className="wionsection-title center">
            <h1 className="aos-init" data-aos="fade-up">הצהרת נגישות</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="wiondefault-content aos-init" data-aos="fade-up">
                <h3>כללי</h3>
                <p>
                  אנו רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות והגולשים ובשיפור הנגישות באתר לאנשים עם מוגבלויות.
                  אנו משקיעים משאבים רבים בהנגשת האתר על מנת לאפשר חווית גלישה נוחה וקלה לכולם, בהתאם לתקן הישראלי (ת"י 5568) ברמת נגישות AA.
                </p>

                <h3>התאמות הנגישות באתר</h3>
                <ul>
                  <li>האתר מותאם לצפייה בדפדפנים הנפוצים (Chrome, Firefox, Safari, Edge).</li>
                  <li>תכני האתר נכתבו בשפה ברורה וקריאה.</li>
                  <li>מבנה האתר מאפשר ניווט פשוט ונוח.</li>
                  <li>האתר מותאם לגלישה במכשירים ניידים (רספונסיביות).</li>
                  <li>התמונות באתר כוללות תיאור טקסטואלי חלופי (Alt Text) היכן שנדרש.</li>
                  <li>ניתן לשנות את גודל הגופן באמצעות קיצורי המקלדת בדפדפן או באמצעות סרגל הנגישות.</li>
                  <li>האתר מאפשר ניווט באמצעות מקלדת.</li>
                </ul>

                <h3>סייגים לנגישות</h3>
                <p>
                  למרות מאמצנו להנגיש את כלל דפי האתר, ייתכן ויתגלו חלקים שטרם הונגשו במלואם או שנמצאים בתהליך הנגשה.
                  אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה.
                </p>

                <h3>רכז נגישות</h3>
                <p>
                  אם נתקלתם בבעיה בנושא נגישות או שיש לכם הצעה לשיפור, נשמח שתפנו אלינו:
                </p>
                <p>
                  <strong>שם:</strong> נתי מימון<br />
                  <strong>טלפון:</strong> 054-444-5567<br />
                  <strong>מייל:</strong> info@natiadv.co.il
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DividedArea />
      <FooterOne />
    </Wrapper>
  );
};

export default AccessibilityStatement;

