import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Capable_service_layout = () => {
    
  return (
    <>
    <Outlet />
    <Footer/>
  </>
  );
};

export default Capable_service_layout;
