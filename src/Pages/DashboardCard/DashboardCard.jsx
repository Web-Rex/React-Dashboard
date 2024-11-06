import { useSelector } from "react-redux";
import Depertment from "../Depertment/Depertment";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const DashboardCard = () => {
  const user_data = useSelector((state) => state.user_reducer);
  const navigate = useNavigate();

  if (user_data?.is_logged_in === false) {
    // navigate("/login");
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:px-20 md:px-16 px-12 py-4">
        <h2 className="text-2xl font-semibold text-[#262626]/70 mt-4">
          Dashboard
        </h2>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-8">
          {user_data?.data?.counts?.map((val, ind) => (
            <div
              key={"ran_" + ind}
              className="border rounded shadow-md flex items-center justify-center text-center flex-col relative py-8"
            >
              <p className="right-4 top-4 absolute text-[#8ECF4D] font-medium">
                <span>+{val?.persen}%</span>
                <span></span>
              </p>
              <div>
                <h2 className="text-2xl font-semibold text-[#262626]/80">
                  {ind === 0 ? user_data?.market_price : val?.total}
                </h2>
                <p className="font-medium text-[#262626]/60">{val?.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Depertment></Depertment>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
