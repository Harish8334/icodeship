import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Workdata_2 } from "../Data/WorkData";
import { animateWorkCard } from "../Animation/animation";
import "../Pages/Home.css";
import { ChevronRight } from "lucide-react";

// Reusable Modal Component
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        className="modal-content rounded-5"
        style={{
          position: "relative",
          width: "87vw",
          height: "80vh",
          backgroundColor: "#fff",
          borderRadius: "90px",
          overflow: "visible",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
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

// WorkCard_2 Component
const WorkCard_2 = ({ index }) => {
  const data = Array.isArray(Workdata_2) ? Workdata_2[index] : Workdata_2;
  const imgRef = useRef(null);
  const cardRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (imgRef.current) animateWorkCard(imgRef.current);
    if (cardRef.current) animateWorkCard(cardRef.current);
  }, []);

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div className="" ref={cardRef}>
        <img
          ref={imgRef}
          src={data.img}
          alt={data.title}
          className="img-fluid mt-lg-5 mt-5 cursor-pointer"
          style={{ opacity: 0 ,  cursor: "pointer" }}
          onClick={() => setShowModal(true)}
        />
        <div className="ms-4">
          <p
            className="font-size-40 font_weight_600 d-inline-flex align-items-center gap-2 cursor-pointer"
            onClick={() => setShowModal(true)}              style={{ cursor: "pointer" }}
          >
            {data.title}
          </p>
          <p className="font-size-30">{data.description}</p>
          <div className="d-flex flex-wrap gap-4 font-size-30 font_color_light_grey">
            {data.tags.map((tag, i) => (
              <p key={i} className="text-center m-0">
                {tag}
              </p>
            ))}
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

export default WorkCard_2;
