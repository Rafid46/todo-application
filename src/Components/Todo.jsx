// import { IoIosArrowDropright } from "react-icons/io";

import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Todo = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/todo/tasks");
      return res.data;
    },
  });
  return (
    <div
      className="max-w-screen-xl mx-auto bg-cover bg-center"
      //   style={{
      //     backgroundImage: `url(${banner})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //   }}
    >
      <div>
        {tasks
          .filter((task) => task?.status === "Todo")
          .map((task) => (
            <p key={task.id} className="text-3xl text-black">
              {task?.length}
            </p>
          ))}
      </div>
      <div className="flex items-center justify-evenly"></div>
    </div>
  );
};

export default Todo;
