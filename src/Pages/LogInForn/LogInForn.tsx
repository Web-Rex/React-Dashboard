import React from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../Firebase/Firebase.ini";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { is_logged_in, set_email } from "../../redux/actions";

const LogInForn = () => {
  // type RootState = ReturnType<typeof store.getState>
  // const user_data = useSelector((state: RootState) => state.user_reducer);

  // console.log(user_data);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const auth = getAuth(app);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        dispatch(is_logged_in());
        dispatch(set_email(email));
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <div className="mt-10 flex justify-center items-center flex-col">
        <h2 className="lg:text-5xl md:text-5xl sm:text-4xl text-2xl font-bold">
          Login account
        </h2>
        <p className="mt-6 text-[#262626]/50">Please login account detail</p>
      </div>

      <div className="flex lg:px-96 px-10 flex-col mt-8">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Email address
            </label>
            <input
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="email"
              name="email"
              placeholder="Email address"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Password
            </label>
            <input
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <input
              className="px-8 py-3 border border-[#262626] hover:bg-[#F57D4C] hover:text-[#fff] duration-300 cursor-pointer hover:border-transparent font-semibold uppercase text-sm tracking-widest"
              type="submit"
              value="sign in"
            />
            <p className="text-[#262626]/60 hover:text-[#F57D4C] duration-300 cursor-pointer">
              Forgot your password?
            </p>
          </div>
        </form>

        <div className="bg-[#262626] flex items-center justify-center gap-1 text-[#fff] py-7 mt-8">
          <h2>Don't have account?</h2>
          <Link
            to="/register"
            className="text-[#fff]/40 text-sm hover:text-[#F57D4C] cursor-pointer duration-300"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInForn;
