import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutReducer } from "../store/slicer/AuthSlicer";

const Nav = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(auth.isAuthorization);
  return (
    <div
      className={
        "flex bg-white z-[1000] w-full absolute justify-between items-center py-3 px-10 shadow"
      }
    >
      <h1 className={"text-2xl "}>Reacter</h1>
      <ul className={"flex space-x-5"}>
        {auth.isAuthorization ? (
          <>
            <li>
              <p>{auth.user.username}</p>
            </li>
            <li>
              <button onClick={() => dispatch(logOutReducer())}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
