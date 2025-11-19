import Wrapper from '../../layouts/Wrapper';
import HeaderThree from '../../layouts/headers/HeaderThree';
import FooterOne from '../../layouts/footers/FooterOne';
import DividedArea from '../../common/DividedArea';
import SEO from '../../common/SEO';

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <SEO title="מדיניות פרטיות" description="מדיניות הפרטיות של נתי פרסום ושיווק - אנו מכבדים את הפרטיות שלכם ומחויבים לשמור עליה." />
      <HeaderThree />
      <div className="wionabout-section1 wiondefault-bg">
        <div className="container">
          <div className="wionsection-title center">
            <h1 className="aos-init" data-aos="fade-up">מדיניות פרטיות</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="wiondefault-content aos-init" data-aos="fade-up">
                <h3>כללי</h3>
                <p>
                  מדיניות זו מתארת את האופן בו אנו אוספים ומשתמשים במידע אישי באתר זה. 
                  השימוש באתר מעיד על הסכמתך למדיניות זו.
                </p>
                
                <h3>איסוף מידע</h3>
                <p>
                  אנו עשויים לאסוף מידע שאתה מספק לנו באופן פעיל, כגון שם, כתובת דואר אלקטרוני ומספר טלפון בעת יצירת קשר דרך האתר.
                  כמו כן, אנו עשויים לאסוף מידע סטטיסטי אנונימי אודות השימוש באתר באמצעות קבצי "Cookies".
                </p>

                <h3>שימוש במידע</h3>
                <p>
                  המידע שנאסף משמש לצורך יצירת קשר, מתן שירותים, שיפור חווית הגלישה וניתוח סטטיסטי.
                  איננו מוכרים או מעבירים את המידע האישי שלך לצדדים שלישיים למטרות שיווק ללא הסכמתך.
                </p>

                <h3>אבטחת מידע</h3>
                <p>
                  אנו נוקטים באמצעי אבטחה סבירים על מנת להגן על המידע שלך מפני גישה בלתי מורשית, אך איננו יכולים להבטיח הגנה מוחלטת.
                </p>

                <h3>שינויים במדיניות</h3>
                <p>
                  אנו רשאים לעדכן את מדיניות הפרטיות מעת לעת. השינויים יפורסמו בעמוד זה.
                </p>

                <h3>צור קשר</h3>
                <p>
                  בכל שאלה בנוגע למדיניות זו, ניתן לפנות אלינו באמצעות טופס יצירת הקשר באתר או במייל.
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

export default PrivacyPolicy;

