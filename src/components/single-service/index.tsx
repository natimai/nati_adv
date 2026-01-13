
import SEO from "../../common/SEO";
import Breadcrumb from "../../common/Breadcrumb";
import ServiceDetailsArea from "./ServiceDetailsArea";
import Wrapper from "../../layouts/Wrapper";
import HeaderThree from "../../layouts/headers/HeaderThree";
import FooterOne from "../../layouts/footers/FooterOne";
import DividedArea from "../../common/DividedArea";

export default function SingleService() {
  return (
    <Wrapper>
      <SEO title="שירותים" description="שירותי שיווק דיגיטלי: קידום אורגני (SEO), קמפיינים ממומנים (PPC), אנליטיקה, תוכן ומיתוג." />
      <HeaderThree />
      <Breadcrumb title="שירותים" />
      <ServiceDetailsArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  );
}
