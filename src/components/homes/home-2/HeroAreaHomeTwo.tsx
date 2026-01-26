
import { Link } from 'react-router-dom';
 

export default function HeroAreaHomeTwo() {
  return (
    <section className="wiondefault-bg mb-0">
      <div className="wionhero-section2" style={{ backgroundImage: 'url(assets/images/hero/hero-bg2.png)' }}>
        <div className="container">
          <div className="wionhero-content2">
            <div className="wionsub-title title2 aos-init" data-aos-delay="200" data-aos="fade-up">
              <p>משרד פרסום מוביל בדרום</p>
            </div>
            <div className="aos-init" data-aos-delay="400" data-aos="fade-up">
              <h1>נביא את הרעיונות שלכם</h1>
              <h1>לחיים בצורה יצירתית!</h1>
            </div>

            <div className="mt-80">
              <Link className="wiondefault-btn white-btn aos-init" data-aos-delay="600" data-aos="fade-up" to="/portfolio">צפו בעבודות שלנו
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                </span>
              </Link>
            </div>
          </div>
          <div className="wionhero-data-wrap">
            <div className="wionhero-data-item aos-init" data-aos-delay="800" data-aos="fade-up">
              <h4>כרמי גת, קריית גת</h4>
            </div>
            <div className="wionhero-data-item item2 aos-init" data-aos-delay="1000" data-aos="fade-up">
              <h4>אנחנו מעצבים סיפורים שהופכים למותגים חזקים</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
