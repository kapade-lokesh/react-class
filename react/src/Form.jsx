import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");

  const formdata = {
    Name: username,
    Email: email,
    City: city,
    Pin: pin,
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <div>
        <div>
          <label htmlFor="" className="form-lable">
            username
          </label>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="" className="form-lable">
            email
          </label>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="" className="form-lable">
            city
          </label>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="" className="form-lable">
            pin
          </label>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-primary w-100 mt-3">submit</button>

        <div className="w-100 border border-2 border-danger">
          <h2>{formdata.Name}</h2>
          <h2>{formdata.Email}</h2>
          <h2>{formdata.City}</h2>
          <h2>{formdata.Pin}</h2>
        </div>

        <div>
            <a href="www.google.com">go to google</a>
        </div>
      </div>
    </div>
  );
};

export default Form;
