 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import BlogArea from './BlogArea'
import SEO from '../../common/SEO'
import Breadcrumb from '../../common/Breadcrumb'

export default function Blog() {
  return (
    <Wrapper>
      <SEO title="בלוג" description="מאמרים, טיפים ותובנות בנושאי שיווק דיגיטלי, קידום אתרים, וניהול עסק מצליח." />
      <HeaderThree />
      <Breadcrumb title="בלוג" />
      <BlogArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
