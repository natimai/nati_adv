
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 

const setting = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const TestimonialArea = () => {
  return (
    <div className="wiondefault-bg">
      <div className="wiont-section section" style={{ backgroundImage: 'url(/assets/images/testimonial/t-bg.png)' }}>
        <div className="container">
          <div className="wionsection-title">
            <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
              <p>מה אנשים אומרים עלינו</p>
            </div>
            <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">המלצות</h2>
          </div>
        </div>
        <div className="slick-wrapper">
          <Slider {...setting} className="slick-slide-active grid mcs-horizontal">
            <div className="element-item">
              <div className="wiont-wrap">
                <div className="wiont-content">
                  <h4>"נתי התקשר אליי ואמר: 'רן, הקמפיין לא עובד כמו שצריך. בוא נעצור אותו ונחשוב מחדש.' כמה אנשים מוכנים להגיד לך לא להוציא כסף?"</h4>
                </div>
                <div className="wiont-author-wrap mt-50">
                  <div className="wiont-author-thumb">
                    <img src="assets/images/testimonial/t1.png" alt="" />
                  </div>
                  <div className="wiont-author-data">
                    <h6>רן</h6>
                    <p>רשת חנויות בגדים</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-item">
              <div className="wiont-wrap">
                <div className="wiont-content">
                  <h4>"עבדתי עם 3 'מומחים' לפני נתי. כולם הבטיחו, אף אחד לא סיפק. נתי היה הראשון שאמר 'תני לי חודש לבדוק, ואז נדבר על תוצאות'."</h4>
                </div>
                <div className="wiont-author-wrap mt-50">
                  <div className="wiont-author-thumb">
                    <img src="assets/images/testimonial/t2.png" alt="" />
                  </div>
                  <div className="wiont-author-data">
                    <h6>שרה</h6>
                    <p>חנות אונליין</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-item">
              <div className="wiont-wrap">
                <div className="wiont-content">
                  <h4>"אמרתי לנתי שאני לא מבין כלום בשיווק דיגיטלי. הוא אמר: 'אתה לא צריך. אתה צריך להבין משפטים. אני אדאג לשאר'."</h4>
                </div>
                <div className="wiont-author-wrap mt-50">
                  <div className="wiont-author-thumb">
                    <img src="assets/images/testimonial/t1.png" alt="" />
                  </div>
                  <div className="wiont-author-data">
                    <h6>דוד</h6>
                    <p>משרד עורכי דין</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
 
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;