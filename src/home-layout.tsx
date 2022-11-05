import InterestGallery from './components/interest-gallery';
import ContactSection from './components/contact-section';
import pageStyle from './styles/page.module.css';
const Home = () => { 
  return (
    <div className={pageStyle.home}>
      <InterestGallery />
      <ContactSection />
    </div>
  );
};

export default Home;