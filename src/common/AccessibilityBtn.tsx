import { useState, useEffect } from 'react';

export default function AccessibilityBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeFont, setIsLargeFont] = useState(false);
  const [isUnderlineLinks, setIsUnderlineLinks] = useState(false);

  useEffect(() => {
    if (isHighContrast) document.body.classList.add('accessibility-high-contrast');
    else document.body.classList.remove('accessibility-high-contrast');

    if (isLargeFont) document.body.classList.add('accessibility-large-font');
    else document.body.classList.remove('accessibility-large-font');

    if (isUnderlineLinks) document.body.classList.add('accessibility-underline-links');
    else document.body.classList.remove('accessibility-underline-links');
  }, [isHighContrast, isLargeFont, isUnderlineLinks]);

  return (
    <div className={`accessibility-widget ${isOpen ? 'open' : ''}`}>
      <button 
        className="accessibility-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="תפריט נגישות"
        title="תפריט נגישות"
      >
        <img 
          src="/accessibility-sign-svgrepo-com.svg" 
          alt="סמל נגישות" 
          style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} 
        />
      </button>

      <div className="accessibility-menu">
        <div className="accessibility-header">
          <h4>כלי נגישות</h4>
          <button onClick={() => setIsOpen(false)} className="close-btn"><i className="ri-close-line"></i></button>
        </div>
        <ul>
          <li>
            <button 
              className={isLargeFont ? 'active' : ''} 
              onClick={() => setIsLargeFont(!isLargeFont)}
            >
              <i className="ri-fontSize"></i>
              הגדלת טקסט
            </button>
          </li>
          <li>
            <button 
              className={isHighContrast ? 'active' : ''} 
              onClick={() => setIsHighContrast(!isHighContrast)}
            >
              <i className="ri-contrast-drop-line"></i>
              ניגודיות גבוהה
            </button>
          </li>
          <li>
            <button 
              className={isUnderlineLinks ? 'active' : ''} 
              onClick={() => setIsUnderlineLinks(!isUnderlineLinks)}
            >
              <i className="ri-links-line"></i>
              הדגשת קישורים
            </button>
          </li>
          <li>
             <button onClick={() => {
               setIsHighContrast(false);
               setIsLargeFont(false);
               setIsUnderlineLinks(false);
             }}>
              <i className="ri-restart-line"></i>
              איפוס
            </button>
          </li>
        </ul>
      </div>
      
      <style>{`
        .accessibility-widget {
          position: fixed;
          left: 20px;
          bottom: 20px;
          z-index: 9999;
          font-family: 'Assistant', sans-serif;
        }
        
        .accessibility-toggle-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #000;
          color: #fff;
          border: 2px solid #fff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .accessibility-toggle-btn:hover {
          transform: scale(1.1);
          background: #333;
        }

        .accessibility-menu {
          position: absolute;
          bottom: 70px;
          left: 0;
          width: 250px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          padding: 15px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .accessibility-widget.open .accessibility-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .accessibility-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }

        .accessibility-header h4 {
          font-size: 18px;
          margin: 0;
          color: #000;
        }

        .accessibility-header .close-btn {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #666;
        }

        .accessibility-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .accessibility-menu li {
          margin-bottom: 10px;
        }

        .accessibility-menu button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: #f5f5f5;
          border: 1px solid transparent;
          border-radius: 5px;
          cursor: pointer;
          text-align: right;
          font-size: 16px;
          color: #333;
          transition: all 0.2s;
        }

        .accessibility-menu button:hover {
          background: #e9e9e9;
        }

        .accessibility-menu button.active {
          background: #000;
          color: #fff;
          border-color: #000;
        }

        .accessibility-menu button i {
          font-size: 18px;
        }

        /* Accessibility Global Styles */
        body.accessibility-high-contrast {
          filter: contrast(120%);
          background-color: #000 !important;
          color: #fff !important;
        }
        
        body.accessibility-high-contrast * {
          background-color: #000 !important;
          color: #fff !important;
          border-color: #fff !important;
        }

        body.accessibility-high-contrast img {
          filter: grayscale(100%);
        }

        body.accessibility-large-font {
          font-size: 125% !important;
        }

        body.accessibility-large-font h1, 
        body.accessibility-large-font h2, 
        body.accessibility-large-font h3, 
        body.accessibility-large-font h4, 
        body.accessibility-large-font h5, 
        body.accessibility-large-font h6,
        body.accessibility-large-font p,
        body.accessibility-large-font span,
        body.accessibility-large-font a,
        body.accessibility-large-font li {
           font-size: 1.2em !important;
        }

        body.accessibility-underline-links a {
          text-decoration: underline !important;
        }
      `}</style>
    </div>
  );
}

