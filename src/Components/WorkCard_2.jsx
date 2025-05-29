import React, { useEffect, useRef , useState} from "react";
import { Workdata_2 } from "../Data/WorkData";
import { animateWorkCard } from "../Animation/animation";
import "../Pages/Home.css";
import { ChevronRight } from "lucide-react";

const WorkCard_2 = ({ index }) => {
  const data = Array.isArray(Workdata_2) ? Workdata_2[index] : Workdata_2;
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      animateWorkCard(imgRef.current);
    }
  }, []);

  if (!data) return null;

  const cardRef = useRef(null);
  
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      if (cardRef.current) {
        animateWorkCard(cardRef.current);
      }
    }, []);
    useEffect(() => {
      if (cardRef.current) {
        animateWorkCard(cardRef.current);
      }
    }, []);
     const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () =>
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    // Set size based on width
    const chevronSize =
      windowSize.width < 576
        ? 20
        : windowSize.width < 768
        ? 25
        : windowSize.width < 992
        ? 27
        : 45;
    
  

  const { img, title, description, tags } = data;

  return (
    <div className="">
      <img
        ref={imgRef}
        src={img}
        alt={title}
        className="img-fluid mt-lg-5 mt-5"
        style={{ opacity: 0 }}
      />
      <div className="ms-4">
              <p
             className="font-size-40 font_weight_600 cursor-pointer d-inline-flex align-items-center gap-2"
             onClick={() => setShowModal(true)}
             style={{ cursor: "pointer" }} // fallback in case class doesn't apply
           >
             {data.title}
             <ChevronRight size={chevronSize} strokeWidth={2.5} />
           </p>
        <p className="font-size-30">{data.description}</p>
        <div className="d-flex flex-wrap gap-4 font-size-30  font_color_light_grey">
          {data.tags.map((tag, i) => (
            <p key={i} className="text-center m-0">{tag}</p>
          ))}
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fullscreen-modal d-flex justify-content-center align-items-center">
          <div className="modal-header ">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </button>
          </div>
          <div className="modal-content-iframe  rounded-4 overflow-hidden">
            <iframe
              src={data.link}
              title={data.title}
              className="iframe-full w-100 h-100 border-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkCard_2;
