/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { GoUpload } from "react-icons/go";
import Lottie from "lottie-react";
import ani from "../assets/animation/todo.json";
import ani2 from "../assets/animation/ongoing.json";
import ani3 from "../assets/animation/completed.json";
import ShowTask from "../Components/ShowTask";
const AllTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/todo/tasks");
      return res.data;
    },
  });
  //   const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
  //     type: "task",
  //     item: { id: task._id },
  //     collect: (monitor) => ({
  //       isDragging: !!monitor.isDragging(),
  //     }),
  //   }));
  //   console.log(inputValue);
  //   console.log(isDragging);

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <ShowTask task={task} refetch={refetch}></ShowTask>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
