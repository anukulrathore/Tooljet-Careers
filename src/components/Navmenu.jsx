import { useNavigate } from "react-router-dom";

const Navmenu = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex">
      <div className="hidden md:flex mt-2">
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg focus:bg-secondary focus:text-primary"
          onClick={handleClick}
        >
          Platform
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg focus:bg-secondary focus:text-primary"
        >
          Pricing
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg focus:bg-secondary focus:text-primary"
        >
          Company
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg focus:bg-secondary focus:text-primary"
        >
          Resources
        </button>
      </div>
      <div className="flex m-4">
        <img src="github-icon.png" alt="" className="w-5 h-5 mr-2" />
        <p>25852 Stars </p>
      </div>
      <div className="hidden md:flex">
        <a href="" className="text-primary m-4">
          Log in
        </a>
        <button
          type="button"
          onClick={handleClick}
          className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm text-white bg-primary hover:bg-opacity-90 font-medium rounded-lg"
        >
          Try for free
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-primary  bg-white rounded-lg focus:bg-secondary focus:text-primary"
        >
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default Navmenu;
