import AllTasks from "./AllTasks";
import banner from "../assets/images/banner.jpg";
const Home = () => {
  return (
    <div
      className="bg-cover bg-center w-full py-10 rounded-lg"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <AllTasks></AllTasks>
    </div>
  );
};

export default Home;
