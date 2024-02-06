import Hiddenmenu from "./Hiddenmenu";
import Navmenu from "./Navmenu";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between md:justify-center m-2 relative">
        <a href="" className="mr-2 w-20 mt-2">
          <img src="tooljet-icon.svg" alt="" />
        </a>
        <Navmenu />
        <Hiddenmenu />
      </div>
    </div>
  );
};

export default Navbar;
