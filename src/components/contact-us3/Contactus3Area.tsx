import { useState } from 'react';

export default function Contactus3Area() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message from form data
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const whatsappMessage = `
שלום, אני ${fullName || 'לקוח מעוניין'}

📱 טלפון: ${formData.phone}
📧 אימייל: ${formData.email}
${formData.subject ? `📋 נושא: ${formData.subject}\n` : ''}
💬 הודעה:
${formData.message}
    `.trim();

    // WhatsApp phone number (from environment or fallback)
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '972544445567';

    // Create WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp in new window
    window.open(whatsappURL, '_blank');

    // Show success message and reset form
    setStatus('success');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="wionabout-section1 wiondefault-bg mb-00">
      <div className="container">
        <div className="wionsection-title center max-w715">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>אנחנו כאן לכל שאלה</p>
          </div>
          <h1 className="aos-init" data-aos-delay="400" data-aos="fade-up">בואו נדבר</h1>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="aos-init" data-aos-delay="400" data-aos="fade-up">
              <div className="wioncontact-info-box box1">
                <div className="wioncontact-info-icon">
                  <img src="assets/images/service/icon1.svg" alt="" />
                </div>
                <div className="wioncontact-info-content">
                  <h4>כתובתנו</h4>
                  <p>כרמי גת, קריית גת</p>
                </div>
              </div>
              <div className="wioncontact-info-box box2">
                <div className="wioncontact-info-icon">
                  <img src="assets/images/service/icon2.svg" alt="" />
                </div>
                <div className="wioncontact-info-content">
                  <h4>צרו קשר</h4>
                  <p>התקשרו אלינו ונשמח לעזור
                    <a href="tel:0544445567">054-444-5567</a>
                  </p>
                </div>
              </div>
              <div className="wioncontact-info-box box3">
                <div className="wioncontact-info-icon">
                  <img src="assets/images/service/icon3.svg" alt="" />
                </div>
                <div className="wioncontact-info-content">
                  <h4>עקבו אחרינו</h4>
                  <p>הישארו מעודכנים ברשתות החברתיות</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-7">
            <div className="wioncontact-box aos-init" data-aos-delay="400" data-aos="fade-up">
              <div className="wioncontact-title">
                <h4>יש לכם פרויקט בראש? מלאו את הטופס למטה:</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 ">
                    <div className="wionmain-field">
                      <h6>שם</h6>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="שם פרטי"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="wionmain-field">
                      <div className="mt-34">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="שם משפחה"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="wionmain-field">
                      <h6>אימייל</h6>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="האימייל שלך"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="wionmain-field">
                      <h6>טלפון</h6>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="מספר טלפון"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="wionmain-field">
                      <h6>נושא</h6>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="נושא הפנייה"
                      />
                    </div>
                  </div>
                </div>
                <div className="wionmain-field-textarea">
                  <h6>הודעה</h6>
                  <textarea
                    className="button-text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ספרו לנו על הפרויקט שלכם"
                    required
                  ></textarea>
                </div>

                <button className="wiondefault-btn submit-btn mt-50">שלח הודעה
                  <span className="wionbutton-icon">
                    <img className="arry1" src="assets/images/svg/arrow-right.webp" alt="" />
                    <img className="arry2" src="assets/images/svg/arrow-right.webp" alt="" />
                  </span>
                </button>

                {status === 'success' && (
                  <div className="alert alert-success mt-4" role="alert">
                    מעולה! וואטסאפ נפתח עם ההודעה שלכם. שלחו אותה ונחזור אליכם בהקדם!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
