import React, { useEffect, useRef } from "react";
import { Workdata_1 } from "../Data/WorkData";
import { animateWorkCard } from "../Animation/animation";
import "../App.css";

const WorkCard_1 = ({ index }) => {
  const data = Workdata_1[index];
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      animateWorkCard(cardRef.current);
    }
  }, []);

  if (!data) return null;

  return (
    <div ref={cardRef} className="col-md-6 mt-lg-5 mt-5">
      <div className={`rounded-4 ${index % 2 !== 0 ? "Work_Card" : ""}`}>
        <div className="d-flex justify-content-center mt-lg-2 pt-lg-3">
          <img
            src={data.img}
            alt={data.title}
            className="img-fluid pt-lg-5"
          />
        </div>
        <div className="ms-4">
          <p className="font-size-40 font_weight_600">{data.title}</p>
          <p className="font-size-30">{data.description}</p>
          <div className="d-flex gap-3 font-size-30 font_color_grey">
            {data.tags.map((tag, i) => (
              <p key={i}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard_1;
