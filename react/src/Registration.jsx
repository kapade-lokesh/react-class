import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isRegister } from "./reedux/UserSlice";
import { useDispatch } from "react-redux";

const Registration = () => {
  const redirect = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPasword] = useState("");

  const disptch = useDispatch();

  const data = {
    name,
    email,
    mobile,
    password,
  };

  return (
    <div className="d-flex justify-content-center align-item-center mt-5">
      <div className="w-25">
        <div>
          <label className="form-label">Enter Your Name: </label>
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

        <div>
          <label className="form-label">Enter Mobile No.: </label>
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            ></input>
          </div>
        </div>

        <div>
          <label className="form-label">Enter Email: </label>
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
        </div>

        <div>
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

        <div className="d-flex justify-content-center mt-4  ">
          <button
            className="btn btn-outline-success w-50"
            onClick={() => {
              disptch(isRegister(data));
              redirect("/login");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
