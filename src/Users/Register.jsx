/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      updateUserProfile(data.name, data.photoURL).then(() => {
        // console.log("user profile updated");
        // const userInfo = {
        //   name: data.name,
        //   email: data.email,
        //   photoURL: data.photoURL,
        //   role: "user",
        // };
        // axiosPublic.post("/users", userInfo).then((res) => {
        //   if (res.data.insertedId) {
        //     console.log("user added");
        //     reset();
        //     navigate("/");
        //   }
        // });
      });
      console.log(loggedUser);
    });
  };
  return (
    <div className="my-32">
      <p className="text-4xl font-bold text-center mb-10">Register</p>
      <main className="" data-aos="zoom-out" data-aos-delay="300">
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                placeholder="name"
                {...register("name")}
                type="text"
                className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Your photo
              </label>
              <input
                placeholder="photo"
                {...register("photoURL")}
                type="text"
                className="mt-1 w-60 p-4 py-2 border-2   rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                placeholder="email"
                type="email"
                {...register("email")}
                className="mt-1 w-60 p-4 py-2 border-2  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                {...register("password")}
                placeholder="password"
                type="password"
                className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="mb-5">
              <button className="inline-block shrink-0 rounded-md border  bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                Sign Up
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to="/login">
                <span className="cursor-pointer hover:text-blue-600 ml-2 text-gray-700 underline">
                  Login
                </span>
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
