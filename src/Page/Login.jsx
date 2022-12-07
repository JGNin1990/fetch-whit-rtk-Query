import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Loading from "../Components/Loading";
import { userModel } from "../model/userModel";
import { useLoginMutation } from "../store/service/endPoints/authEndPoint";
import { loginReducer } from "../store/slicer/AuthSlicer";

const Login = () => {
  const formRef = useRef();
  const [login, respond] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (respond.isSuccess) {
      const user = new userModel(
        respond.data.result.username,
        respond.data.result.email,
        respond.data.result.token
      );
      dispatch(loginReducer({ ...user }));
    }
  }, [respond]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: formRef.current[0].value,
      password: formRef.current[1].value,
    };

    login(data);

    // console.log(data);
  };

  if (respond.isLoading) {
    return <Loading />;
  }

  return (
    <div className=" flex justify-center items-center h-full">
      <div className={"shadow-lg w-[400px] px-5 py-5"}>
        <h1 className="text-center text-2xl ">Login</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
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
              type="password"
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

export default Login;
