import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Workdata_1 } from "../Data/WorkData";
import { animateWorkCard } from "../Animation/animation";
import "../Pages/Home.css";
import { ChevronRight } from "lucide-react";

// Modal component using React Portal
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="modal-overlay "
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        className="modal-content rounded-5 "
        style={{
          position: "relative",
          width: "87vw",
          height: "80vh",
          backgroundColor: "#fff",
          borderRadius: "90px",
          overflow: "visible", // allow button outside bounds
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 
          Removed iframe from here so that Modal is fully reusable 
          and renders whatever children passed in from parent 
        */}
        {children}

        {/* Close button as sibling, positioned absolutely relative to modal-content */}
        <button
          onClick={onClose} className="m-0"
          style={{
            position: "absolute",
            top: "-50px",
            right: "-20px",  // outside iframe box
            background: "white",
            border: "none",
            fontSize: "1.8rem",
            cursor: "pointer",
            color: "#333",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            zIndex: 100000, // super high
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            lineHeight: "36px",
            textAlign: "center",
            userSelect: "none",
          }}
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
};

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
