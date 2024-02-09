/* eslint-disable react/no-unknown-property */
import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";
import { useContext } from "react";

import Swal from "sweetalert2";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);
  const from = location.state?.from?.pathname || "/";
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    // console.log(form);
    signIn(email, password).then((result) => {
      // const displayName = result.user?.displayName || "User";
      // console.log(user);
      swal("Welcome", "Logged in successfully", "success");
      navigate(from, { replace: true });
    });
    // .catch((error) => {
    //   console.error(error);
    //   swal("incorrect password or email");
    // });
  };
  return (
    <div className="flex items-center justify-center bg-cover bg-center my-32">
      <section className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center">
          <p className="text-center text-5xl font-bold mr-5 mb-10">Login</p>
          {/* <img className="w-[75px]" src={logo} alt="" /> */}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <main className="" data-aos="zoom-out" data-aos-delay="400">
            <div className="">
              <form onSubmit={handleLogin} className="">
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>{" "}
                  <input
                    type="email"
                    name="email"
                    className="mt-1 w-60 p-5 py-3 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    className="mt-1 border-2 p-5 py-3 w-60 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="mb-5">
                  <button className="inline-block shrink-0 rounded-md border  bg-[#02c39a] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Login
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Do not have an account?
                  <Link to="/register">
                    <span className="cursor-pointer hover:text-blue-600 ml-2 text-gray-700 underline">
                      Register
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Login;
