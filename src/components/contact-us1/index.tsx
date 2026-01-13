 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import Contactus1Area from './Contactus1Area'
import SEO from '../../common/SEO'
import Breadcrumb from '../../common/Breadcrumb'
 

export default function Contactus1() {
  return (
    <Wrapper>
      <SEO title="צור קשר" description="רוצים להזניק את העסק? דברו איתנו. זמינים בוואטסאפ, במייל ובטלפון." />
      <HeaderThree />
      <Breadcrumb title="צור קשר" />
      <Contactus1Area />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
