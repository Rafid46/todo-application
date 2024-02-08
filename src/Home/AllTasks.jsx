/* eslint-disable react/jsx-key */
import useTanQuery from "../hooks/useTanQuery";

const AllTasks = () => {
  const tasks = useTanQuery();
  return (
    <div>
      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </div>
  );
};

export default AllTasks;
