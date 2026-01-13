import { Link } from 'react-router-dom';
 

interface SidebarProps {
  setOffCanvasOpen: (value: boolean) => void;
  offCanvasOpen?: boolean;
}

export default function Sidebar({ setOffCanvasOpen, offCanvasOpen }: SidebarProps) {

 

  return (
    <>
      <div className="wionsidemenu-wraper">
        <div className={`wionsidemenu-column2 ${offCanvasOpen ? 'active' : ''}`}>
          <div className="wionsidemenu-body">
            <div className="wionsidebar-wrap">
                <div className="wionsidebar-header-icon">
                  <Link to="/">
                    <img src="assets/Pictures/nati_logo.svg" alt="Icon" />
                  </Link>
                </div>
                <div className="mt-50">
                  <div className="wionsidebar-content">
                    <p>נתי פרסום ושיווק - משרד פרסום דיגיטלי המתמחה בקידום אורגני, ממומן, בניית אתרים ומיתוג.</p>
                    <img src="assets/Pictures/nati_magic.jpg" alt="Thumb" style={{ borderRadius: '10px' }} />
                  </div>
                <div className="wionsidebar-content2">
                  <h4>כתובתנו</h4>
                  <p>כרמי גת, קריית גת</p>
                </div>
                <div className="wionsidebar-content2">
                  <h4>צרו קשר</h4>
                  <p>התקשרו אלינו ונשמח לעזור
                    <a href="tel:0544445567">054-444-5567</a>
                  </p>
                </div>
                <div className="wionsidebar-content2 pb-0">
                  <h4>עקבו אחרינו</h4>
                  <p>הישארו מעודכנים ברשתות החברתיות</p>
                  <div className="wionsidebar-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/natiadv" target="_blank" rel="noopener noreferrer">
                          <img className="social-show" src="assets/images/svg/fb.svg" alt="" />
                          <img className="social-hide" src="assets/images/svg/fb.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/natiadv" target="_blank" rel="noopener noreferrer">
                          <img className="social-show" src="assets/images/svg/ins.svg" alt="" />
                          <img className="social-hide" src="assets/images/svg/ins.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/natiadv" target="_blank" rel="noopener noreferrer">
                          <img className="social-show" src="assets/images/svg/in.svg" alt="" />
                          <img className="social-hide" src="assets/images/svg/in.svg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-50 wionsidebar-content3">
                  <p>© Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus</p>
                </div>
              </div>
            </div>
            <span className="wionsidemenu-close" onClick={() => setOffCanvasOpen(false)}>
              <i className="ri-close-line"></i>
            </span>
          </div>
        </div>
      </div>
      <div className={`offcanvas-overlay ${offCanvasOpen ? 'active' : ''}`} onClick={() => setOffCanvasOpen(false)}></div>
    </>
  )
}
