
import { useParams, Link } from 'react-router-dom';
import portfolio_data from '../../data/portfolio-data';
import SEO from '../../common/SEO';

export default function PortfolioDetailsArea() {
  const { id } = useParams();
  const item = portfolio_data.find(p => p.id === Number(id));

  if (!item) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>הפרויקט לא נמצא</h2>
        <Link to="/portfolio" className="wiondefault-btn">חזרה לתיק העבודות</Link>
      </div>
    );
  }

  return (
    <section className="wionabout-section1 wiondefault-bg">
      <SEO title={item.title} description={`פרויקט ${item.title} - ${item.category}. ${item.details_overview}`} />
      <div className="container">
        <div className="wionsection-title">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>ההצלחה של הלקוחות שלנו היא ההצלחה שלנו</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">{item.title}</h1>
        </div>
        <div className="wionp-d-wrapper aos-init" data-aos-delay="700" data-aos="fade-up">
          <div className="wionp-d-thumb">
            <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          </div>
          <div className="wionp-d-data-wrap mt-50">
            <div className="wionp-d-data-text">
              <ul>
                <li><span>סוג פרויקט:</span>{item.project_type || item.category}</li>
                <li><span>תעשייה:</span>{item.industry || 'כללי'}</li>
                <li><span>זמן עבודה:</span>{item.timeline || 'לא צוין'}</li>
                <li>
                  <Link className="wiondefault-btn wionp-btn2" to="/contact">דברו איתי על פרויקט דומה
                    <span className="wionbutton-icon">
                      <i className="ri-arrow-left-line" style={{ marginLeft: '10px' }}></i>
                    </span>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
          <div className="wionp-single-wrap">
            {item.details_overview && (
              <div className="wionp-single-data mt-50">
                <h3>סקירה כללית</h3>
                <p>{item.details_overview}</p>
              </div>
            )}
            {item.details_challenge && (
              <div className="wionp-single-data pt-40">
                <h3>האתגר</h3>
                <p>{item.details_challenge}</p>
              </div>
            )}
            {item.details_approach && (
              <div className="wionp-single-data pt-40">
                <h3>הגישה שלנו</h3>
                <p>{item.details_approach}</p>
              </div>
            )}
          </div>
          
          {/* Optional secondary image if we had one, for now reusing main or removing */}
          {/* <div className="wionp-single-thumb pt-40">
            <img src="assets/images/portfolio/thumb12.png" alt="" />
          </div> */}

          <div className="wionp-single-wrap">
             {item.details_result && (
              <div className="wionp-single-data pt-40">
                <h3>התוצאה</h3>
                <p>{item.details_result}</p>
              </div>
            )}
            
            {/* Keeping Key Features static or removing if not relevant to all projects. 
                For now, I'll remove it as the specific text was very generic template text.
                If the user wants specific features per project, we can add a features array to the data.
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
