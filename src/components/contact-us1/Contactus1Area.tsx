
import React from 'react';
import ContactForm from './ContactForm';

export default function Contactus1Area() {
  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title center">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>דברו איתנו, אנחנו כאן בשבילכם</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">צור קשר</h1>
        </div>
        
        <div className="aos-init" data-aos-delay="700" data-aos="fade-up">
          <ContactForm />
        </div>

        {/* Contact Info Section */}
         <div className="row mt-80 justify-content-center text-center">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="wioncontact-info-box" style={{padding: '30px', background: '#fff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                 <div className="icon mb-20">
                    <i className="ri-phone-line" style={{fontSize: '32px', color: '#000'}}></i>
                 </div>
                 <h5>טלפון</h5>
                 <p dir="ltr">054-444-5567</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
               <div className="wioncontact-info-box" style={{padding: '30px', background: '#fff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                 <div className="icon mb-20">
                    <i className="ri-map-pin-line" style={{fontSize: '32px', color: '#000'}}></i>
                 </div>
                 <h5>כתובת</h5>
                 <p>כרמי גת, קריית גת</p>
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-30">
               <div className="wioncontact-info-box" style={{padding: '30px', background: '#fff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                 <div className="icon mb-20">
                    <i className="ri-mail-line" style={{fontSize: '32px', color: '#000'}}></i>
                 </div>
                 <h5>אימייל</h5>
                 <p>netanel18999@gmail.com</p>
              </div>
            </div>
        </div>

      </div>
    </section>
  )
}
