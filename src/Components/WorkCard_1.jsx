import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Workdata_1 } from "../Data/WorkData";
import { animateWorkCard } from "../Animation/animation";
import "../Pages/Home.css";
import { ChevronRight } from "lucide-react";
import Modal from "./Modal";

// Modal component using React Portal


const WorkCard_1 = ({ index }) => {
  const data = Workdata_1[index];
  const cardRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

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

  // Determine Chevron size based on window width
  const chevronSize =
    windowSize.width < 576
      ? 20
      : windowSize.width < 768
      ? 25
      : windowSize.width < 992
      ? 27
      : 45;

  if (!data) return null;

  return (
   <>
    <div ref={cardRef} className="col-md-6 mt-lg-5 mt-5">
      <div className={`rounded-4 ${index % 2 !== 0 ? "Work_Card" : ""}`}>
        <div
          className="d-flex justify-content-center mt-lg-2 pt-lg-3"
          onClick={() => setShowModal(true)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={data.img}
            alt={data.title}
            className="img-fluid pt-lg-5"
          />
        </div>
        <div className="ms-4">
          <p
            className="font-size-40 font_weight_600 d-inline-flex align-items-center gap-2"
            onClick={() => setShowModal(true)}
            style={{ cursor: "pointer" }}
          >
            {data.title}
          </p>
          <p className="font-size-30">{data.description}</p>
          <div className="d-flex gap-4 font-size-30 text-nowrap font_color_light_grey">
            {data.tags.map((tag, i) => (
              <p key={i}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </div>

    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <iframe
          className="rounded-5"
          src={data.link}
          title={data.title}
          style={{ width: "100%", height: "100%", border: "none" }}
          allowFullScreen
        />
      </Modal>
    )}
  </>
  );
};

export default WorkCard_1;
