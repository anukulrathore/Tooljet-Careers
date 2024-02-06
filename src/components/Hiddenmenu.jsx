import { useState } from "react";

const Hiddenmenu = () => {
  const [menu, setmenu] = useState(false);

  const setMenu = () => {
    setmenu(!menu);
  };
  return (
    <div>
      <div className="md:hidden mt-2 pb-0">
        <button
          type="submit"
          className="focus:bg-primary p-2"
          onClick={setMenu}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 14"
          >
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
          </svg>
        </button>
        <div className="absolute left-0">
          {menu && (
            <div>
              <button
                type="button"
                className="block w-screen p-2.5 text-md bg-white rounded-lg focus:bg-secondary focus:text-primary"
              >
                Platform
              </button>
              <button
                type="button"
                className="block w-screen p-2.5 text-md bg-white rounded-lg focus:bg-secondary focus:text-primary"
              >
                Pricing
              </button>
              <button
                type="button"
                className="block w-screen p-2.5 text-md  bg-white rounded-lg focus:bg-secondary focus:text-primary"
              >
                Company
              </button>
              <button
                type="button"
                className="p-2.5 w-screen block text-md  bg-white rounded-lg focus:bg-secondary focus:text-primary"
              >
                Resources
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hiddenmenu;
