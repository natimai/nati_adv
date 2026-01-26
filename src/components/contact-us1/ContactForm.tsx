
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Build WhatsApp message from form data
    const whatsappMessage = `
שלום, אני ${formData.name}

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
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="wioncontact-box">
      <div className="wioncontact-title">
        <h4>יש לכם פרויקט בראש? מלאו את הטופס למטה:</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="wionmain-field">
              <h6>שם מלא</h6>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="שם מלא" 
                required 
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wionmain-field">
              <div className="mt-sm-0 mt-34">
                <h6>טלפון</h6>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="05X-XXXXXXX" 
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
                placeholder="כתובת האימייל שלכם" 
                required 
              />
            </div>
          </div>
          <div className="col-lg-6">
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
        
        <button 
          className="wiondefault-btn submit-btn mt-50" 
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'שולח...' : 'שלח הודעה'}
          {status !== 'submitting' && (
            <span className="wionbutton-icon">
              <img className="arry1" src="/assets/images/svg/arrow-right.webp" alt="" />
              <img className="arry2" src="/assets/images/svg/arrow-right.webp" alt="" />
            </span>
          )}
        </button>

        {status === 'success' && (
          <div className="alert alert-success mt-4" role="alert">
            מעולה! וואטסאפ נפתח עם ההודעה שלכם. שלחו אותה ונחזור אליכם בהקדם!
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
