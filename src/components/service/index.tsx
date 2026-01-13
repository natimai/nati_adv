 
import DividedArea from "../../common/DividedArea";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderThree from "../../layouts/headers/HeaderThree";
import Wrapper from "../../layouts/Wrapper";
import ServiceArea from "./ServiceArea"; 
import SEO from "../../common/SEO";
import Breadcrumb from "../../common/Breadcrumb";

export default function Service() {
	return (
		<Wrapper>
      <SEO title="שירותים" description="שירותי שיווק דיגיטלי: קידום אורגני (SEO), קמפיינים ממומנים (PPC), אנליטיקה, תוכן ומיתוג." />
			<HeaderThree />
      <Breadcrumb title="שירותים" />
			<ServiceArea />
      <DividedArea />
      <FooterOne />
		</Wrapper>
	);
}
