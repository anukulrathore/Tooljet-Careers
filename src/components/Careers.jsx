import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/opportunities");
  };
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/group-2.jpeg')" }}
    >
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-white text-5xl font-semibold">
          Here&apos;s your chance to be a changemaker
        </h1>
        <button
          type="submit"
          className="text-primary text-md border bg-white border-primary font-bold rounded p-2 mt-4 hover:opacity-75"
          onClick={handleChange}
        >
          Explore Opportunities
        </button>
      </div>
    </div>
  );
};

export default Careers;
