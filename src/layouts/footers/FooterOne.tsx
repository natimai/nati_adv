 
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import SEOFAQ from '../../common/SEOFAQ';


const setting1 = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 13000,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [{
    breakpoint: 1024,
    settings: {
      speed: 8000 
    }
  }, {
    breakpoint: 600,
    settings: {
      speed: 5000 
    }
  }]
}


const setting2 = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 13000,
  rtl: true,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [{
    breakpoint: 1024,
    settings: {
      speed: 8000 
    }
  }, {
    breakpoint: 600,
    settings: {
      speed: 5000 
    }
  }]
}

const FooterOne = () => {
  return (
    <footer className="wionfooter-section">
      <div className="wiondefault-bg wioncta-section bg-heading overflow-hidden">
        <div className="fixed-height">
          <Slider {...setting1} className="wioncta-slider-init">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="wioncta-slider-content">
                <h2>בואו ניצור משהו מדהים יחד</h2>
                <div className="wioncta-victor-icon">
                  <img src="assets/images/cta/icon1.svg" alt="Icon" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="fixed-height" dir="rtl">
          <Slider {...setting2} className="wioncta-slider-init">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="wioncta-slider-content">
                <h2>בואו ניצור משהו מדהים יחד</h2>
                <div className="wioncta-victor-icon">
                  <img src="assets/images/cta/icon1.svg" alt="Icon" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="wioncta-btn mt-80">
          <Link className="wiondefault-btn white-outline aos-init" data-aos-delay="500" data-aos="fade-up" to="/contact">קבעו פגישה
            <span className="wionbutton-icon">
              <img className="arry1" src="assets/images/svg/arrow-white.svg" alt="" />
              <img className="arry2" src="assets/images/svg/arrow-white.svg" alt="" />
            </span>
          </Link>
        </div>
      </div>
      <div className="footer-sticky">
        <div className="container">
          <div className="wionfooter-top">
            <div className="row">
              <div className="col-xl-6">
                <div className="wionfooter-textarea">
                  <div className="wionsub-title">
                    <p>צרו קשר</p>
                  </div>
                  <a href="mailto:info@natiadv.co.il">
                    <h2>info@natiadv.co.il</h2>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-1">
                <div className="wionfooter-menu-wraper pl-30">
                  <div className="wionfooter-menu">
                    <h4>ניווט מהיר</h4>
                    <ul>
                      <li>
                        <Link to="/">ראשי</Link>
                      </li>
                      <li>
                        <Link to="/portfolio">תיק עבודות</Link>
                      </li>
                      <li>
                        <Link to="/about">אודות</Link>
                      </li>
                      <li>
                        <Link to="/service">שירותים</Link>
                      </li>
                      <li>
                        <Link to="/blog">בלוג</Link>
                      </li>
                      <li>
                        <Link to="/faq">שאלות ותשובות</Link>
                      </li>
                      <li>
                        <Link to="/contact">צור קשר</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="wionfooter-menu">
                    <h4>עקבו אחרינו</h4>
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/natiadv" target="_blank" rel="noopener noreferrer">Instagram</a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/natiadv" target="_blank" rel="noopener noreferrer">Facebook</a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/natiadv" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      </li>
                    </ul>
                  </div>
                  <div className="wionfooter-menu">
                    <h4>משפטי</h4>
                    <ul>
                      <li>
                        <Link to="/accessibility-statement">הצהרת נגישות</Link>
                      </li>
                      <li>
                        <Link to="/terms-of-use">תנאי שימוש</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy">מדיניות פרטיות</Link>
                      </li>
                      <li>
                        <Link to="/service-areas">אזורי שירות</Link>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="wionfooter-bottom-wrap">
            <div className="wionfooter-logo">
              <Link to="/">
                <img src="assets/Pictures/nati_logo.svg" alt="Footer Logo" />
              </Link>
            </div>
            <div className="wionfooter-bottom-text">
              <p>© כל הזכויות שמורות {new Date().getFullYear()} נתי פרסום ושיווק</p>
            </div>
            <SEOFAQ />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;