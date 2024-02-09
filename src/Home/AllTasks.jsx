/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import ShowTask from "../Components/ShowTask";
const AllTasks = () => {
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
      {loading ? (
        <div className="flex flex-row gap-2 items-center justify-center h-screen">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-red-700 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-green-400 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl mx-auto gap-10">
            {tasks.map((task) => (
              <ShowTask task={task} refetch={refetch}></ShowTask>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTasks;
