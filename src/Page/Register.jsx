import { data } from "autoprefixer";
import { useEffect, useRef } from "react";
import { useRegisterMutation } from "../store/service/endPoints/authEndPoint";

import Loading from "../Components/Loading";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const formRef = useRef();
  const [register, res] = useRegisterMutation();
  const nav = useNavigate();

  // console.log(formRef);

  useEffect(() => {
    if (res.isSuccess) {
      nav('/')
    }
  },[res])

  const handleSubmit = (e) => {
    e.preventDefault();

    const regData = {
      username: formRef.current[0].value,
      email: formRef.current[1].value,
      password: formRef.current[2].value,
    };
    register(regData);
  };
  if (res.isLoading) {
    return <Loading />;
  }
  // console.log(res);
  return (
    <div className=" flex justify-center items-center h-full">
      <div className={"shadow-lg w-[400px] px-5 py-5"}>
        <h1 className="text-center text-2xl ">Register</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="username" className="block mt-4">
              Enter username
            </label>
            <input
              type="text"
              autoComplete={"off"}
              className="form-input"
              name="email"
              id="email"
            />
          </div>

          <div className="my-4">
            <label htmlFor="email" className="block mt-4">
              Email address
            </label>
            <input
              type="text"
              autoComplete={"off"}
              className="form-input"
              name="email"
              id="email"
            />
          </div>

          <div className="my-4">
            <label htmlFor="password" className="block">
              Enter your password
            </label>
            <input
              type="text"
              className={"form-input"}
              name="password"
              id="password"
              autoComplete={"off"}
            />
          </div>

          <div className="mt-5">
            <button className={"w-full py-2 bg-blue-500 text-white rounded"}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
