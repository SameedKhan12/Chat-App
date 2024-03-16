import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
  const {loading,login}= useLogin()
  const [userName,setUserName] = useState("");
  const [password,setPassword]= useState("");
  const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(password,userName)
     login(userName,password)
  }
  return (
    <div className="flex flex-col items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <Link to={'/signup'} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account?
          </Link>
          <div>
            <button disabled={loading} className="btn btn-block btn-sm mt-2">{loading?<span className="loading loading-spinner"/>:"Login"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
