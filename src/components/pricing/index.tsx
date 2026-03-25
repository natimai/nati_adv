
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import PricingArea from './PricingArea'
import SEO from '../../common/SEO'


export default function Pricing() {
  return (
    <Wrapper>
      <SEO title="מחירים ותוכניות" description="חבילות שיווק דיגיטלי ופרסום לעסקים בכל הגדלים. מחירים שקופים, ללא הפתעות. בדקו מה מתאים לכם." />
      <HeaderThree />
      <PricingArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
