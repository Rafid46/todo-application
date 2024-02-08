import AllTasks from "./AllTasks";
import banner from "../assets/images/banner.jpg";
const Home = () => {
  return (
    <div
      className="bg-cover bg-center  h-[1300px] rounded-lg"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <AllTasks></AllTasks>
    </div>
  );
};

export default Home;
