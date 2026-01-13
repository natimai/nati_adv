
 

export default function Contactus2Area() {
  return (
    <section className="wionabout-section1 wiondefault-bg mb-00">
      <div className="container">
        <div className="wionsection-title center max-w715">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>אנחנו כאן לכל שאלה</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">צור קשר</h1>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="wioncontact-thumb aos-init" data-aos-delay="600" data-aos="fade-up">
              <img src="assets/images/service/thumb13.webp" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="wioncontact-box aos-init" data-aos-delay="600" data-aos="fade-up">
              <div className="wioncontact-title">
                <h4>יש לכם פרויקט בראש? מלאו את הטופס למטה:</h4>
              </div>
              <form action="#">
                <div className="row">
                  <div className="col-lg-6 ">
                    <div className="wionmain-field">
                      <h6>שם</h6>
                      <input type="text" placeholder="שם פרטי" />
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="wionmain-field">
                      <div className="mt-34">
                        <input type="text" placeholder="שם משפחה" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="wionmain-field">
                      <h6>אימייל</h6>
                      <input type="email" placeholder="האימייל שלך" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="wionmain-field">
                      <h6>טלפון</h6>
                      <input type="text" placeholder="מספר טלפון" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="wionmain-field">
                      <h6>נושא</h6>
                      <input type="email" placeholder="נושא הפנייה" />
                    </div>
                  </div>
                </div>
                <div className="wionmain-field-textarea">
                  <h6>הודעה</h6>
                  <textarea className="button-text" name="textarea" placeholder="ספרו לנו על הפרויקט שלכם"></textarea>
                </div>

                <button className="wiondefault-btn submit-btn mt-50">שלח הודעה
                  <span className="wionbutton-icon">
                    <img className="arry1" src="assets/images/svg/arrow-right.webp" alt="" />
                    <img className="arry2" src="assets/images/svg/arrow-right.webp" alt="" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-50">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="wioncontact-info-bo aos-init" data-aos-delay="400" data-aos="fade-up">
                <div className="wioncontact-info-icon">
                  <img src="assets/images/service/icon1.svg" alt="" />
                </div>
                <div className="wioncontact-info-content">
                  <h4>כתובתנו</h4>
                  <p>כרמי גת, קריית גת</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="wioncontact-info-bo aos-init" data-aos-delay="500" data-aos="fade-up">
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
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="wioncontact-info-bo aos-init" data-aos-delay="600" data-aos="fade-up">
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
        </div>
      </div>
    </section>
  )
}
