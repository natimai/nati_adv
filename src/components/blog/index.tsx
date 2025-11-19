 
import DividedArea from '../../common/DividedArea'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import BlogArea from './BlogArea'
import SEO from '../../common/SEO'

export default function Blog() {
  return (
    <Wrapper>
      <SEO title="בלוג" description="מאמרים, טיפים ותובנות בנושאי שיווק דיגיטלי, קידום אתרים, וניהול עסק מצליח." />
      <HeaderThree />
      <BlogArea />
      <DividedArea />
      <FooterOne />
    </Wrapper>
  )
}
