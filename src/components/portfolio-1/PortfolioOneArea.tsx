
import { Link } from 'react-router-dom';
import portfolio_data from '../../data/portfolio-data';

export default function PortfolioOneArea() {
  // Split data into two columns
  const col1_items = portfolio_data.filter((_, i) => i % 2 === 0);
  const col2_items = portfolio_data.filter((_, i) => i % 2 !== 0);

  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title center max-width-750">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>העבודות שלנו מדברות בעד עצמן</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">תיק עבודות</h1>
        </div>
        <div className="wionp-wraper">
          <div className="wionp-item">
            {col1_items.map((item) => (
              <div key={item.id} className={`wionp-wrap ${item.cls} aos-init`} data-aos-delay={item.dataAosDelay} data-aos="fade-up">
                <div className="wionp-thumb">
                  <Link to={`/portfolio/${item.id}`}>
                    <img src={item.img} alt={item.title} />
                  </Link>
                </div>
                <div className="wionp-meta">
                  <ul>
                    <li>
                      <Link to={`/portfolio/${item.id}`}>{item.category}</Link>
                    </li>
                    <li>
                      <Link to={`/portfolio/${item.id}`}>{item.date}</Link>
                    </li>
                  </ul>
                </div>
                <div className="wionp-content-wrap aos-init" data-aos-delay="400" data-aos="fade-up">
                  <div className="wionp-title">
                    <Link to={`/portfolio/${item.id}`}>
                      <h3>{item.title}</h3>
                    </Link>
                  </div>
                  <div className="wionp-btn-icon">
                    <Link className="wionportfolio-btn" to={`/portfolio/${item.id}`}>
                      <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
                {item.description && (
                  <div className="wionp-desc" style={{ marginTop: '10px', color: '#666' }}>
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="wionp-item">
            {col2_items.map((item) => (
              <div key={item.id} className={`wionp-wrap ${item.cls} aos-init`} data-aos-delay={item.dataAosDelay} data-aos="fade-up">
                <div className="wionp-thumb">
                  <Link to={`/portfolio/${item.id}`}>
                    <img src={item.img} alt={item.title} />
                  </Link>
                </div>
                <div className="wionp-meta">
                  <ul>
                    <li>
                      <Link to={`/portfolio/${item.id}`}>{item.category}</Link>
                    </li>
                    <li>
                      <Link to={`/portfolio/${item.id}`}>{item.date}</Link>
                    </li>
                  </ul>
                </div>
                <div className="wionp-content-wrap aos-init" data-aos-delay="400" data-aos="fade-up">
                  <div className="wionp-title">
                    <Link to={`/portfolio/${item.id}`}>
                      <h3>{item.title}</h3>
                    </Link>
                  </div>
                  <div className="wionp-btn-icon">
                    <Link className="wionportfolio-btn" to={`/portfolio/${item.id}`}>
                      <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
                 {item.description && (
                  <div className="wionp-desc" style={{ marginTop: '10px', color: '#666' }}>
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
