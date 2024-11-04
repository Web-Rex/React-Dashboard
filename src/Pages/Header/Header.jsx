import { IoIosArrowForward } from "react-icons/io";
import { LuBell } from "react-icons/lu";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { is_logged_out } from "../../redux/actions";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const user_status = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();

  return (
    <div className="lg:px-20 md:px-16 px-12 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center justify-center gap-2">
          <p className="bg-[#3289EF] w-[40px] h-[40px] text-[#fff] rounded-xl flex items-center justify-center">
            <span className="text-xl font-extrabold">
              <IoIosArrowForward />
            </span>
          </p>
          <h2 className="font-semibold text-xl">tabler</h2>
        </Link>

        <div className="flex items-center justify-center gap-3">
          <button className="px-2 hidden lg:block py-1 rounded text-sm font-semibold border border-[#467FCF] text-[#467FCF] hover:bg-[#467FCF] hover:text-[#fff] duration-300 cursor-pointer">
            Source code
          </button>
          <div className="lg:flex items-center justify-center hidden">
            <p>
              <LuBell />
            </p>
            <p className="bg-[red] w-[8px] h-[8px] rounded-full mt-[-20px]"></p>
          </div>
          {/* <div className="flex items-center justify-center gap-2">
            <div>
              <img className="w-[35px]" src={user} alt="user" />
            </div>
            <div>
              <h2 className="font-semibold mt-1">Jone Pearson</h2>
              <p className="text-[#262626]/60 mt-[-4px] text-sm">
                Administrator
              </p>
            </div>
          </div> */}

          <div>
            {user_status?.is_logged_in === false ? (
              <Link
                to="/login"
                className="px-6 hover:bg-[#262626]/90 duration-300 cursor-pointer py-2 rounded bg-[#3289EF] text-[#fff] text-sm font-semibold"
              >
                Log In
              </Link>
            ) : (
              <div className="relative">
                <div
                  onClick={() => setDropDown((priv) => !priv)}
                  className="px-6 flex items-center hover:bg-[#262626]/90 duration-300 cursor-pointer py-2 rounded bg-[#3289EF] text-[#fff] text-sm font-semibold"
                >
                  {user_status?.user_email}{" "}
                  <RiArrowDropDownLine className="text-[1.5rem] translate-y-[2px]" />
                </div>
                <div
                  id="Log_Out_User"
                  className={`absolute left-0 ${
                    dropDown === false ? "top-0 z-[-1] opacity-0" : "top-[100%]"
                  } transition w-full px-2 py-1`}
                >
                  <div
                    onClick={() => {
                      dispatch(is_logged_out());
                      setDropDown((priv) => !priv);
                    }}
                    className="hover:bg-[#262626]/90 duration-300 cursor-pointer rounded px-2 py-2 bg-[#ef3271] text-[#fff] text-sm font-semibold"
                  >
                    Log Out
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
