import AllTasks from "./AllTasks";
import banner from "../assets/images/ara-star-constellation-night-sky-cluster-stars-deep-space-altar-constellation.jpg";
import banner2 from "../assets/images/beautiful-sky-full-stars-trona-ca.jpg";
const Home = () => {
  return (
    <div className="my-10">
      <div className="flex items-center">
        {" "}
        <p className="text-5xl my-10 font-bold text-[#7F27FF] mr-4">
          Todo <span className="font-thin">Application</span>
        </p>
        <hr className="border-[1px] w-[900px] border-gray-400" />
        <p className="bg-red-500 ml-2 w-[20px] h-[20px] rounded-full"></p>
        <p className="bg-[#7F27FF] ml-2 w-[20px] h-[20px] rounded-full"></p>
      </div>
      <div
        className="bg-cover bg-center py-10 rounded-lg"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <AllTasks></AllTasks>
      </div>
    </div>
  );
};

export default Home;
