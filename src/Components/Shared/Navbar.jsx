import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <div>
      <div className="">
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between font-poppins">
          <li className="text-xl mr-10 font-semibold text-[#7F27FF]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-800" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl mr-10 font-semibold text-[#7F27FF]">
            <NavLink
              to="todo"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-400" : ""
              }
            >
              Todo
            </NavLink>
          </li>
          {/* <li className="text-xl font-semibold text-[#7F27FF]">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-800" : ""
              }
            >
              Login
            </NavLink>
          </li> */}
        </nav>
      </div>
    </div>
  );
  return (
    <div>
      <div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            {/* <div className="w-[100px]">
       
            </div> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal py-1">{links}</ul>
          </div>
          <div className="navbar-end text-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
