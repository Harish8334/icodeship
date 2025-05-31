import { useNavigate } from "react-router-dom";
// hooks/useLetsTalk.js

const useLetsTalk = () => {
  const navigate = useNavigate();

  const goToContact = () => {
     navigate("/contact", { state: { scrollToForm: true } });
  };

  return goToContact;
};

export default useLetsTalk;