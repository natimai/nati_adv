 
import HeaderOne from '../../../layouts/headers/HeaderOne';
import FooterOne from '../../../layouts/footers/FooterOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import PortfolioAreaHomeOne from './PortfolioAreaHomeOne';
import BlogAreaHomeOne from './BlogAreaHomeOne';
import TestimonialArea from './TestimonialArea';
import HomeLayout from '../HomeLayout';
import Wrapper from '../../../layouts/Wrapper';
import AboutHistory from '../../abouts/about-1/AboutHistory';
import AboutFaq from '../../abouts/about-1/AboutFaq';
import SEO from '../../../common/SEO';

export default function HomeOne() {
  const sections = [
    <HeroAreaHomeOne />,
    <ServiceAreaHomeOne />,
    <PortfolioAreaHomeOne />,
    <AboutHistory />,
    <TestimonialArea />,
    <AboutFaq />,
    <BlogAreaHomeOne />,
  ];

  return (
    <Wrapper>
      <SEO title="" description="נתי פרסום ושיווק - משרד פרסום בקריית גת. מומחים בקידום אתרים, קמפיינים ממומנים, מיתוג ושיווק דיגיטלי לעסקים בדרום ובכל הארץ." />
      <HomeLayout header={<HeaderOne />} footer={<FooterOne />} sections={sections} />
    </Wrapper>
  );
}
