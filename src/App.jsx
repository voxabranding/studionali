import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TrustStrip from './components/TrustStrip/TrustStrip';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Results from './components/Results/Results';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Location from './components/Location/Location';
import FinalCTA from './components/FinalCTA/FinalCTA';
import MobileBookingBar from './components/MobileBookingBar/MobileBookingBar';
import Footer from './components/Footer/Footer';
import ServicesMarquee from './components/ServicesMarquee/ServicesMarquee';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesMarquee />
        <TrustStrip />
        <Services />
        <Experience />
        <BeforeAfter />
        <Results />
        <About />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBookingBar />
      <FloatingWhatsApp />
    </>
  );
}
