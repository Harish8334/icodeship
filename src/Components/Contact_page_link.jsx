// hooks/useLetsTalk.js
import { useNavigate } from "react-router-dom";

const useLetsTalk = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact#contactForm');
  };

  return goToContact;
};

export default useLetsTalk;
