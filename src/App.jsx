import { Routes, Route } from "react-router-dom";
//Page
import { Login, Register } from "./Page/index.jsx";
import { Nav } from "./Components/index.jsx";
import { useMeQuery } from "./store/service/endPoints/authEndPoint.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userModel } from "./model/userModel.js";
import { loginReducer, logOutReducer } from "./store/slicer/AuthSlicer.js";
import Loading from "./Components/Loading.jsx";

const App = () => {
  const response = useMeQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!response.isError) {
      if (localStorage.getItem("token")&& response.data) {
        const user = new userModel(
          response.data.result.username,
          response.data.result.email,
          localStorage.getItem("token")
        );
        dispatch(loginReducer({...user}));
      }
    } else {
      dispatch(logOutReducer());
    }
  }, [response]);

  if (response.isLoading) {
    return <Loading />;
  }

  console.log(response);
  return (
    <div>
      <Nav />
      <div className="container mx-auto h-[100vh]">
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
