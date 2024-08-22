import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import phonero from "../../assets/phoneroLogoSmall.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isHomePage = location.pathname === "/";

  return (
    <nav className="shadow-md">
      {" "}
      <div className="container mx-auto max-w-screen-lg px-4">
        {" "}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="">
              <img src={phonero} />
            </a>
          </div>

          <div className="hidden items-center space-x-6 md:flex font-medium text-xl">
            {isHomePage ? (
              <>
                <a
                  href="#Home"
                  className="gradient-hover bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out"
                >
                  Hjem
                </a>
                <a
                  href="#Praksis"
                  className="gradient-hover bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out"
                >
                  Praksis
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/#Home"
                  className="gradient-hover bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out"
                >
                  Hjem
                </Link>

                <Link
                  to="/#Phonero"
                  className="gradient-hover bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out"
                >
                  Praksis
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-600 focus:outline-none"
            >
              <i
                className={`fa-solid ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {isHomePage ? (
              <>
                <a
                  href="#Home"
                  className="flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100"
                >
                  <i className="fa-solid fa-house mr-2 text-xl"></i> Hjem
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/#Home"
                  className="flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100"
                >
                  <i className="fa-solid fa-house mr-2 text-xl"></i> Hjem
                </Link>
              </>
            )}
            <a href="/#Praksis">
              <button className="flex w-full items-center rounded-md px-3 py-2 text-left text-base font-medium hover:bg-gray-100">
                <i className="fa-solid fa-network-wired mr-2 text-xl"></i>
                Praksis
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
