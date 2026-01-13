
import { Link } from 'react-router-dom';
import blog_data from '../../data/blog-data';

export default function BlogArea() {
  // Simple pagination or list for now, since we have ~12 items, we can show all or truncate.
  // Showing all for now as requested.

  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>רעיונות ותובנות יצירתיות</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">המאמרים שלנו</h1>
          
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-page-wrap">
              {blog_data.map((item, index) => (
                <div key={item.id} className={`wionblog-wrap mb-0 ${index > 0 ? 'mt-50' : ''} aos-init`} data-aos-delay={item.dataAosDelay || 400} data-aos="fade-up">
                  <div className="wionblog-thumb">
                    <Link to={item.link}>
                      <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
                    </Link>
                    <Link to={item.link}>
                      <div className="wionblog-btn">{item.category}</div>
                    </Link>
                  </div>
                  <div className="wionblog-meta">
                    <ul>
                      <li>
                        <Link to={item.link}>{item.date} –</Link>
                      </li>
                      <li>{item.readTime}</li>
                    </ul>
                  </div>
                  <div className="wionblog-title">
                    <Link to={item.link}>
                      <h3>{item.title}</h3>
                    </Link>
                    {item.shortDesc && <p style={{ marginTop: '10px', color: '#666' }}>{item.shortDesc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wionblog-sidebar">
              <div className="wionblog-widgets">
                <h4>חיפוש</h4>
                <form action="#">
                  <div className="wionsearch-box">
                    <input type="search" placeholder="הקלד מילת חיפוש..." />
                    <button id="wionsearch-btn" className="wiondefault-btn" type="button">
                      <span className="wionbutton-icon">
                        <i className="ri-search-line" style={{ color: 'white' }}></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="wionblog-widgets">
                <h4>קטגוריות</h4>
                <div className="wionblog-categorie">
                  <ul>
                    <li><Link to="/blog">שיווק דיגיטלי</Link></li>
                    <li><Link to="/blog">קידום אתרים (SEO)</Link></li>
                    <li><Link to="/blog">רשתות חברתיות</Link></li>
                    <li><Link to="/blog">מיתוג ועסקים</Link></li>
                    <li><Link to="/blog">איקומרס</Link></li>
                  </ul>
                </div>
              </div>
              <div className="wionblog-widgets">
                <h4>פוסטים אחרונים</h4>
                {blog_data.slice(0, 3).map((item) => (
                   <div key={item.id} className="wionrecent-post-item">
                    <div className="wionrecent-post-thumb">
                      <Link to={item.link}>
                        <img src={item.img} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                      </Link>
                    </div>
                    <div className="wionrecent-post-content">
                      <div className="wionblog-meta recent-post-meta">
                        <ul>
                          <li>
                            <Link to={item.link}>{item.date}</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="wionrecent-post">
                        <Link to={item.link}>
                          <h4 style={{ fontSize: '16px', lineHeight: '1.4' }}>{item.title}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="wionblog-widgets">
                <h4>תגיות</h4>
                <div className="wionblog-tags">
                  <ul>
                    <li><Link to="/blog">עסקים</Link></li>
                    <li><Link to="/blog">שיווק</Link></li>
                    <li><Link to="/blog">SEO</Link></li>
                    <li><Link to="/blog">PPC</Link></li>
                    <li><Link to="/blog">קריאייטיב</Link></li>
                    <li><Link to="/blog">AI</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
