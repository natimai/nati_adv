 
 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import FaqArea from './FaqArea'
import SEO from '../../common/SEO'

export default function Faq() {
  return (
    <Wrapper>
      <SEO title="שאלות ותשובות" description="כל התשובות לשאלות הנפוצות על שיווק דיגיטלי, תהליכי עבודה, מחירים ותוצאות." />
      <HeaderThree />
      <FaqArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
