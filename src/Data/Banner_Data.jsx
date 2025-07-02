import HomeImg from '../assets/images/Home/home_banner.webp';
import AboutImg from '../assets/images/About/about_banner.webp';
import WorkImg from '../assets/images/OurWorks/ourwork_banner.webp';
import CapableImg from '../assets/images/Capable/capability_banner.webp';
import SolutionImg from '../assets/images/Solutions/solution_banner.webp';
import ContactImg from '../assets/images/Contact/contact_banner.webp';

const BannerData = {
  home: {
    text: 'A global development company providing solutions for innovative brands.',
    image: HomeImg,
  },
  about: {
    text: 'Our passion for technology drives our business today.',
    image: AboutImg,
  },
  works: {
    text: 'We turn bold ideas into engaging digital experiences that elevate your brand.',
    image: WorkImg,
  },
  capable: {
    text: 'Our passion for technology pushes us to deliver effective solutions.',
    image: CapableImg,
  },
  solutions: {
    text: 'Our interest in technology inspires us to provide innovative software solutions.',
    image: SolutionImg,
  },
  contact: {
    text: 'We are committed to using technology to improve our business. We’d love to hear from you; reach out to us!',
    image: ContactImg,
  },
  // Add more pages here...
};

export default BannerData;
