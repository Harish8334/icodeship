import { Workdata_1 } from "../Data/WorkData"
import "../App.css"

const WorkData_1 = () => {
  return (
<div className="row">
  {/* First Card */}
  <div className="col-md-6">
    <div className="rounded-4 mt-lg-5 mt-5">
      <div className="d-flex justify-content-center mt-lg-2 pt-lg-3">
        <img
          src={Workdata_1[0].img}
          alt="work 1"
          className="img-fluid pt-lg-5"
        />
      </div>
      <div className="ms-4">
        <p className="font-size-40 font_weight_600">{Workdata_1[0].title}</p>
        <p className="font-size-30">
          {Workdata_1[0].description}
        </p>
        <div className="d-flex gap-3 font-size-30 font_color_grey">
          {Workdata_1[0].tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Second Card */}
  <div className="col-md-6 mt-lg-5 mt-5 ">
    <div className="rounded-4 Work_Card ">
      <div className="d-flex justify-content-center mt-lg-2 pt-lg-3">
        <img
          src={Workdata_1[1].img}
          alt="work 2"
          className="img-fluid pt-lg-5"
        />
      </div>
      <div className="ms-4">
        <p className="font-size-40 font_weight_600">{Workdata_1[1].title}</p>
        <p className="font-size-30">
          {Workdata_1[1].description}
        </p>
        <div className="d-flex gap-3 font-size-30 font_color_grey">
          {Workdata_1[1].tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default WorkData_1;
