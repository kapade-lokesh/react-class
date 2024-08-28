import React from "react";
import { useNavigate } from "react-router-dom";
import { isLogin } from "./reedux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Login() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [password, setPasword] = useState("");

  const disptch = useDispatch();

  const data = {
    name,
    password,
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="w-25">
        <div>
          <label className="form-label">Enter Username: </label>
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="mt-3 mb-4">
          <label className="form-label">Enter Password: </label>
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setPasword(e.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-success w-50"
            onClick={() => {
              disptch(isLogin(data));
              nav("/profile");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
