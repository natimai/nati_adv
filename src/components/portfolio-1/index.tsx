 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import PortfolioOneArea from './PortfolioOneArea'
import SEO from '../../common/SEO'
import Breadcrumb from '../../common/Breadcrumb'


export default function PortfolioOne() {
  return (
    <Wrapper>
      <SEO title="תיק עבודות" description="הפרויקטים שלנו - קמפיינים מוצלחים, אתרים מרהיבים ומיתוגים שניצחו את המתחרים." />
      <HeaderThree />
      <Breadcrumb title="תיק עבודות" />
      <PortfolioOneArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
