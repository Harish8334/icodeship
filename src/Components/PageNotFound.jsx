import pagenotfound from "../assets/images/pageNotFound.jpg";

export default function PageNotFound () {
  return (
    <div
      className="d-flex justify-content-center align-items-center v    bg-white mt-5"
    >
      <img
        src={pagenotfound}
        alt="Page Not Found"
        className="img-fluid w-50 mt-5 "
       
      />
    </div>
  );
};
