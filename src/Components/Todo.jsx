import { IoIosAddCircleOutline } from "react-icons/io";
// import { IoIosArrowDropright } from "react-icons/io";
import banner from "../assets/images/banner.jpg";
import CreateTask from "./CreateTask";

const Todo = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto bg-cover bg-center bg-blue-400"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-evenly">
        <div className="">
          <div className="">
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn drawer-button rounded-full bg-white z-50 rounded-tr-none rounded-br-none"
              style={{
                position: "fixed",
                right: "0px",
                bottom: "30px",
              }}
            >
              <span className="text-3xl">
                <IoIosAddCircleOutline />
              </span>
              create
            </button>
          </div>
          <CreateTask></CreateTask>
        </div>
      </div>
    </div>
  );
};

export default Todo;
