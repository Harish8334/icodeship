import Header from '../Components/Header';
import  Banner from "../Components/Banner";
import Banner_Data from '../Data/Banner_Data';
import Brands from '../Components/Brands';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const { text, image } = Banner_Data.capable;
const Capable_service_layout = () => {
    
  return (
    <>
    <Header />
    <Banner text={text} image={image} />
    <Brands />
    <Outlet />
    <Footer/>
  </>
  );
};

export default Capable_service_layout;
