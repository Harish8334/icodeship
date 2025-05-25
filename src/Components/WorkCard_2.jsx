import React, { useEffect, useRef } from "react";
import { Workdata_2 } from "../Data/WorkData";
import { animateWorkCard } from "../Animation/animation";
import "../Pages/Home.css";

const WorkCard_2 = ({ index }) => {
  const data = Array.isArray(Workdata_2) ? Workdata_2[index] : Workdata_2;
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      animateWorkCard(imgRef.current);
    }
  }, []);

  if (!data) return null;

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
        <p className="font-size-40 font_weight_600">{title}</p>
        <p className="font-size-30">{description}</p>
        <div className="d-flex gap-3 font-size-30 font_color_grey">
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard_2;
