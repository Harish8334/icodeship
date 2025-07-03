import pagenotfound from "../assets/images/pageNotFound.jpg";

export default function PageNotFound () {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100  bg-white mt-5"
    >
      <img
        src={pagenotfound}
        alt="Page Not Found"
        className="img-fluid h-100 "
       
      />
    </div>
  );
};
