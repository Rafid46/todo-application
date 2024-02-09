/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import ShowTask from "../Components/ShowTask";
import { IoIosAddCircleOutline } from "react-icons/io";
import CreateTask from "../Components/CreateTask";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const AllTasks = () => {
  const user = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    isLoading: loading,
    data: tasks = [],
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/todo/tasks");
      return res.data;
    },
  });

  return (
    <div>
      {loading ? (
        <div className="flex flex-row gap-2 items-center justify-center h-screen">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-red-700 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-green-400 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl mx-auto gap-10">
            {tasks?.map((task) => (
              <ShowTask task={task} refetch={refetch}></ShowTask>
            ))}
          </div>
        </div>
      )}
      <div className="">
        <div className="">
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn hover:text-gray-900 drawer-button rounded-full bg-purple-500 border-none z-50 rounded-tr-none rounded-br-none"
            style={{
              position: "fixed",
              right: "0px",
              bottom: "30px",
            }}
          >
            <span className="text-3xl text-white">
              <IoIosAddCircleOutline />
            </span>
            <p className=" text-white">create</p>
          </button>
        </div>
        <CreateTask></CreateTask>
      </div>
    </div>
  );
};

export default AllTasks;
