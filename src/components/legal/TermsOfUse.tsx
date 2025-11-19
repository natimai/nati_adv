import React from 'react';
import Wrapper from '../../layouts/Wrapper';
import HeaderThree from '../../layouts/headers/HeaderThree';
import FooterOne from '../../layouts/footers/FooterOne';
import DividedArea from '../../common/DividedArea';
import SEO from '../../common/SEO';

const TermsOfUse = () => {
  return (
    <Wrapper>
      <SEO title="תנאי שימוש" description="תנאי השימוש באתר נתי פרסום ושיווק. גלישה באתר מהווה הסכמה לתנאים אלו." />
      <HeaderThree />
      <div className="wionabout-section1 wiondefault-bg">
        <div className="container">
          <div className="wionsection-title center">
            <h1 className="aos-init" data-aos="fade-up">תנאי שימוש</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="wiondefault-content aos-init" data-aos="fade-up">
                <h3>הקדמה</h3>
                <p>
                  השימוש באתר זה כפוף לתנאי השימוש המפורטים להלן. הגלישה באתר והשימוש בו מהווים הסכמה לתנאים אלו.
                </p>

                <h3>קניין רוחני</h3>
                <p>
                  כל התכנים המופיעים באתר, לרבות טקסטים, תמונות, גרפיקה, לוגו ועיצוב, הינם קניינו הבלעדי של בעלי האתר או צדדים שלישיים שהתירו לבעלי האתר להשתמש בהם.
                  אין להעתיק, להפיץ, לשדר או לעשות כל שימוש מסחרי בתכנים ללא אישור מראש ובכתב.
                </p>

                <h3>אחריות</h3>
                <p>
                  התכנים באתר ניתנים כמות שהם (AS IS). בעלי האתר לא ישאו באחריות לכל נזק, ישיר או עקיף, שייגרם כתוצאה מהשימוש באתר או מהסתמכות על התכנים המופיעים בו.
                  המידע באתר אינו מהווה ייעוץ מקצועי או תחליף לייעוץ כזה.
                </p>

                <h3>קישורים חיצוניים</h3>
                <p>
                  האתר עשוי להכיל קישורים לאתרים חיצוניים. בעלי האתר אינם אחראים לתוכן או למדיניות הפרטיות של אתרים אלו.
                </p>

                <h3>שינויים בתנאים</h3>
                <p>
                  בעלי האתר שומרים לעצמם את הזכות לשנות את תנאי השימוש בכל עת וללא הודעה מוקדמת.
                </p>

                <h3>סמכות שיפוט</h3>
                <p>
                  על השימוש באתר ועל תנאים אלו יחולו דיני מדינת ישראל, וסמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים.
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

export default TermsOfUse;

