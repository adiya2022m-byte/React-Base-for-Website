import Navbar1 from '../Components/Navbar1'
import Hero1 from '../Components/Hero1'
import Aboutsection from '../Components/Aboutsection'
import ServicesSection from '../Components/ServicesSection'
import Footer1 from '../Components/Footer1'
import AccordionFaq from '../Components/AccordionFaq'

const Home = () => {
    return (
        <>
          <Navbar1 />
          <Hero1 />
          <Aboutsection />
          <ServicesSection />
          <AccordionFaq />
          <Footer1 />
        </>
    )
}

export default Home