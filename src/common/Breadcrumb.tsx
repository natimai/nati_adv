import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ title }: { title: string }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const translatePath = (path: string) => {
    switch (path) {
      case "about": return "אודות";
      case "service": return "שירותים";
      case "portfolio": return "תיק עבודות";
      case "blog": return "בלוג";
      case "contact": return "צור קשר";
      case "faq": return "שאלות ותשובות";
      case "pricing": return "מחירים";
      case "team": return "צוות";
      case "legal": return "משפטי";
      case "service-areas": return "אזורי שירות";
      default: return path;
    }
  };

  return (
    <div className="wionbreadcrumb-section" style={{ padding: '20px 0', background: '#f9f9f9' }}>
      <div className="container">
        <div className="wionbreadcrumb-title">
          <ul style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <Link to="/">ראשי</Link>
            </li>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <li key={to} className="active" style={{ color: '#666' }}>
                  <span> / </span> {title || translatePath(value)}
                </li>
              ) : (
                <li key={to}>
                  <span> / </span> <Link to={to}>{translatePath(value)}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
