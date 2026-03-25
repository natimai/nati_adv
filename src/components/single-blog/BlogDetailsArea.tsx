import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import blog_data from '../../data/blog-data';
import SEO from '../../common/SEO';

export default function BlogDetailsArea() {
  const { id } = useParams();
  const item = blog_data.find(p => p.id === Number(id));

  if (!item) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>המאמר לא נמצא</h2>
        <Link to="/blog" className="wiondefault-btn">חזרה לבלוג</Link>
      </div>
    );
  }

  return (
    <section className="wionabout-section1 wiondefault-bg">
      <SEO title={item.title} description={item.shortDesc || item.title} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": item.title,
            "description": item.shortDesc || item.title,
            "image": `https://natiadv.co.il${typeof item.img === 'string' ? item.img : ''}`,
            "datePublished": item.date,
            "dateModified": item.date,
            "author": {
              "@type": "Person",
              "name": "נתי מימון",
              "url": "https://natiadv.co.il/about",
              "jobTitle": "מנהל שיווק דיגיטלי",
              "worksFor": {
                "@type": "Organization",
                "name": "נתי פרסום ושיווק"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "נתי פרסום ושיווק",
              "logo": {
                "@type": "ImageObject",
                "url": "https://natiadv.co.il/assets/Pictures/nati_logo.svg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://natiadv.co.il/blog/${item.id}`
            },
            "articleSection": item.category,
            "inLanguage": "he"
          })}
        </script>
      </Helmet>
      <div className="container">
        <div className="wionsection-title center max-w100">
          <div className="wionsub-title title3 aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>{item.category}</p>
          </div>
          <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">{item.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-page-wrap aos-init" data-aos-delay="700" data-aos="fade-up">
              <div className="wionblog-single-thumb">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="wionblog-meta">
                <ul>
                  <li>
                    <Link to="#">{item.date} –</Link>
                  </li>
                  <li>{item.readTime}</li>
                </ul>
              </div>
              <div className="wionblog-author" style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '16px 0', padding: '12px 16px', background: '#f9f9f9', borderRadius: '8px' }}>
                <strong>נכתב על ידי:</strong>
                <span>נתי מימון — מנהל שיווק דיגיטלי | <a href="/about" style={{ textDecoration: 'underline' }}>נתי פרסום ושיווק</a></span>
              </div>
              
              {/* Dynamic Content Rendering - Sanitized with DOMPurify for XSS protection */}
              <div
                className="wionblog-single-data mt-30"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content || '') }}
              ></div>

              <div className="wionblog-d-content-wrap">
                <div className="wionblog-widgets widgets2">
                  <h4>תגיות</h4>
                  <div className="wionblog-tags">
                    <ul>
                      <li><Link to="/blog">{item.category}</Link></li>
                      <li><Link to="/blog">שיווק</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="tag-share-social">
                  <h4>שתפו:</h4>
                  <ul>
                    <li>
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="שתף בפייסבוק"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a 
                        href={`https://wa.me/?text=${encodeURIComponent(`${item.title} - ${window.location.href}`)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="שתף בוואטסאפ"
                      >
                        <i className="ri-whatsapp-line"></i>
                      </a>
                    </li>
                    <li>
                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(item.title)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                         title="שתף בלינקדאין"
                      >
                         <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wionblog-sidebar">
              <div className="wionblog-widgets">
                <h4>פוסטים נוספים</h4>
                 {blog_data.filter(p => p.id !== item.id).slice(0, 3).map((recent) => (
                   <div key={recent.id} className="wionrecent-post-item">
                    <div className="wionrecent-post-thumb">
                      <Link to={recent.link}>
                        <img src={recent.img} alt={recent.title} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                      </Link>
                    </div>
                    <div className="wionrecent-post-content">
                      <div className="wionblog-meta recent-post-meta">
                        <ul>
                          <li>
                            <Link to={recent.link}>{recent.date}</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="wionrecent-post">
                        <Link to={recent.link}>
                          <h4 style={{ fontSize: '16px', lineHeight: '1.4' }}>{recent.title}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
