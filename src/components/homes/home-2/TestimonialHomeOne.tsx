 

 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import testimonial images
import testimonial_img_1 from "../../../../public/assets/images/testimonial/t1.png";
import testimonial_img_2 from "../../../../public/assets/images/testimonial/t2.png";
import testimonial_img_3 from "../../../../public/assets/images/testimonial/t3.png";
import testimonial_img_4 from "../../../../public/assets/images/testimonial/t4.png"; 

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  img: string;
}

// ✅ Testimonial Data
const testimonial_data: Testimonial[] = [
  {
    id: 1,
    text: "העבודה עם נתי ופרסום ושיווק הייתה חוויה מדהימה. הם הבינו את החזון שלי מיד והפכו אותו למותג אלגנטי ומרגיע שמדבר ישירות אל הקהל שלי. העיצוב והמיתוג העלו את המוצר לרמה חדשה לגמרי.",
    name: "שרה לוי",
    role: "מייסדת, אפליקציית מדיטציה",
    img: testimonial_img_1,
  },
  {
    id: 2,
    text: "הצוות סיפק זהות ויזואלית מעודנת ומצגת שהרשימה משקיעים. התרשמתי מהאיזון בין מקצועיות לאישיות במותג שלנו. הם הבינו את התחום הפיננסי אבל הפכו אותו לאנושי.",
    name: "דניאל כהן",
    role: "מנכ\"ל, חברת פינטק",
    img: testimonial_img_3,
  },
  {
    id: 3,
    text: "הוקסמתי מהאסתטיקה והזרימה של האתר שהם יצרו עבורי. הם תפסו את המהות של המותג שלי עם תחכום וחמימות. לקוחות עכשיו אומרים שהם בחרו בי בגלל כמה מקצועי ומזמין האתר נראה!",
    name: "מירב אברהם",
    role: "בעלים, סטודיו לעיצוב פנים",
    img: testimonial_img_2,
  },
  {
    id: 4,
    text: "מה שהרשים אותי הכי הרבה הייתה היכולת שלהם לשלב יצירתיות עם אסטרטגיה. הם סיפקו זהות מותג חזקה ועיצוב UX שלא רק נראה נהדר אלא גם הגביר את המעורבות. אמינים, חכמים ומוכשרים ברמה גבוהה.",
    name: "יוסי ברק",
    role: "מנכ\"ל, סטארטאפ SaaS",
    img: testimonial_img_4,
  },
];

// Slider Settings
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 1000,
  infinite: false,
  arrows: false,
  dots: false,
  centerMode: true,
  centerPadding: "0px",
  lazyLoad: "progressive" as const,

 
 

};

export default function TestimonialHomeOne() {
  return (
    <div className="wionsection-padding">
      <div className="container text-center">
        <div className="wionsection-title">
          <div
            className="wionsub-title aos-init"
            data-aos-delay="400"
            data-aos="fade-up"
          >
            <p>מה אומרים עלינו</p>
          </div>
          <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">
            המלצות לקוחות
          </h2>
        </div>
 
        <Slider {...settings} className="wiont-slider-init2">
          {testimonial_data.map((item) => (
            <div className="wiont-item2" key={item.id}>
              <div className="wiont-wrap2">
                <div className="wiont-content2">
                  <h4>“{item.text}”</h4>
                </div>
                <div className="wiont-author-wrap2">
                  <div className="wiont-author-thumb2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded-full mx-auto"
                      style={{ width: 60, height: 60, objectFit: "cover" }}
                    />
                  </div>
                  <div className="wiont-author-data">
                    <h6>{item.name}</h6>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
