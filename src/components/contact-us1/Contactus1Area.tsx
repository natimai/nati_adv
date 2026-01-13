
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contactus1Area() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('idle');

    if (form.current) {
      // You'll need to replace these with your actual EmailJS Service ID, Template ID, and Public Key
      // For now, I'll put placeholders. The user will need to provide these or I can ask for them.
      // But standard practice is to put them in .env, but for this template we can hardcode or ask user.
      emailjs.sendForm('service_2cd33gc', 'template_waeu2l7', form.current, {
        publicKey: 'DE196_FDEbsLBJLue',
      })
        .then(
          () => {
            setIsSending(false);
            setStatus('success');
            if (form.current) form.current.reset();
          },
          (error) => {
            console.error('FAILED...', error.text);
            setIsSending(false);
            setStatus('error');
          },
        );
    }
  };

  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title center">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>דברו איתנו, אנחנו כאן בשבילכם</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">צור קשר</h1>
        </div>
        <div className="wioncontact-box aos-init" data-aos-delay="700" data-aos="fade-up">
          <div className="wioncontact-title">
            <h4>יש לכם פרויקט בראש? מלאו את הטופס למטה:</h4>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-lg-6 ">
                <div className="wionmain-field">
                  <h6>שם</h6>
                  <input type="text" name="user_name" placeholder="שם מלא" required />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="wionmain-field">
                   <div className="mt-sm-0 mt-34">
                    <h6>טלפון</h6>
                    <input type="text" name="user_phone" placeholder="05X-XXXXXXX" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="wionmain-field">
                  <h6>אימייל</h6>
                  <input type="email" name="user_email" placeholder="כתובת האימייל שלכם" required />
                </div>
              </div>
               <div className="col-lg-6">
                <div className="wionmain-field">
                  <h6>נושא</h6>
                  <input type="text" name="subject" placeholder="נושא הפנייה" />
                </div>
              </div>
            </div>
            <div className="wionmain-field-textarea">
              <h6>הודעה</h6>
              <textarea className="button-text" name="message" placeholder="ספרו לנו על הפרויקט שלכם" required></textarea>
            </div>
            <button className="wiondefault-btn submit-btn mt-50" disabled={isSending}>
              {isSending ? 'שולח...' : 'שלח הודעה'}
              {!isSending && (
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                </span>
              )}
            </button>
            {status === 'success' && (
              <div className="alert alert-success mt-4" role="alert">
                ההודעה נשלחה בהצלחה! נחזור אליכם בקרוב.
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-danger mt-4" role="alert">
                אירעה שגיאה בשליחת ההודעה. אנא נסו שוב מאוחר יותר או צרו קשר טלפונית.
              </div>
            )}
          </form>
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
