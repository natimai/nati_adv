 
import HeroAbout from "./HeroAbout";
import AboutArea from "./AboutArea"; 
import AboutCounter from "./AboutCounter";
import AboutHistory from "./AboutHistory";
import AboutFaq from "./AboutFaq";
import Wrapper from "../../../layouts/Wrapper";
import HeaderThree from "../../../layouts/headers/HeaderThree";
import DividedArea from "../../../common/DividedArea";
import FooterOne from "../../../layouts/footers/FooterOne";
import SEO from "../../../common/SEO";

export default function AboutOne() {
	return (
		<Wrapper>
      <SEO title="אודות" description="נעים להכיר, אני נתי מימון. בעלים של משרד פרסום שנותן בראש ומביא תוצאות אמיתיות לעסקים." />
			<HeaderThree />
      <DividedArea />
			<HeroAbout />
      <DividedArea />
			<AboutArea />
      <DividedArea />
      <AboutCounter />
      <DividedArea />
			<AboutHistory />
			<AboutFaq />
      <DividedArea />
			<FooterOne />      
		</Wrapper>
	);
}
