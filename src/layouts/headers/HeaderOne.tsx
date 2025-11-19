
import { useState } from "react";
import { Link } from "react-router-dom";
import menu_data from "../../data/menu-data";
import OffCanvas from "../../common/OffCanvas";

const HeaderOne = () => {
  // mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="site-header wionheader-section" id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo">
                <Link to="/">
                  <img src="assets/images/logo/fulllogo.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="wionmain-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <ul>
                    {menu_data.map((item, i) => (
                      <li key={i} className={item.has_dropdown ? "menu-item-has-children" : ""}>
                        <Link to={item.link}>{item.title}</Link>
                        {item.has_dropdown &&
                          <ul className="sub-menu">
                            {item.has_dropdown && item.sub_menus && item.sub_menus.map((sub_item, index) => (
                              <li key={index}
                                className={('has_sub_dropdown' in sub_item) && sub_item.has_sub_dropdown ? 'menu-item-has-children' : undefined}>
                                <Link to={sub_item?.link || "/"} className={('has_sub_dropdown' in sub_item) && sub_item.has_sub_dropdown ? 'no-border' : undefined}>{sub_item.title}</Link>
                                {('has_sub_dropdown' in sub_item) &&
                                  <ul className="sub-menu">
                                    {sub_item.sub_menus?.map((sub_inner_item, sub_index) => (
                                      <li key={sub_index}><Link to={sub_inner_item?.link || "/"}>{sub_inner_item.title}</Link></li>
                                    ))}
                                  </ul>
                                }
                              </li>
                            ))}
                          </ul>
                        }
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <a className="wiondefault-btn wionheader-btn" href="https://wa.me/972544445567?text=%D7%94%D7%99%D7%99%20%D7%A0%D7%AA%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%94%D7%A8%D7%99%D7%9D%20%D7%90%D7%AA%20%D7%94%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99%20%D7%9C%D7%A9%D7%9C%D7%91%20%D7%94%D7%91%D7%90" target="_blank" rel="noopener noreferrer">צור קשר
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                </span>
              </a>
              <div className="wionheader-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button onClick={toggleMenu} className="wionmenu-toggle d-inline-block d-lg-none">
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>

      </header>

      <OffCanvas menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default HeaderOne;