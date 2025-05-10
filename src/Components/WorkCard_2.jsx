import { Workdata_2 } from "../Data/WorkData"

const WorkData_2 = () => {
  const { img, title, description, tags } = Workdata_2;

  return (
    <div className="">
      <img src={img} alt="" className="img-fluid mt-lg-5 mt-5" />
      <div className="ms-4">
        <p className="font-size-40 font_weight_600">{title}</p>
        <p className="font-size-30">
          Integrating augmented reality to elevate <br /> social commence
        </p>
        <div className="d-flex gap-3 font-size-30 font_color_grey">
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkData_2;
