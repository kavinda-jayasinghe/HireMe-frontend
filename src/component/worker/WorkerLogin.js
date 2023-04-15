import axios from "axios";

import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Validation from "./LoginValidation";

function WorkerLogin() {
  const [values, setValues] = useState({ mobile: "", password: "" });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState([]);
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (err.mobile === "" && err.password === "") {
      axios
        .post("localhost:8080/login", values)
        .then((res) => {
          if (res.data.errors) {
            setBackendError(res.data.errors);
          } else {
            setBackendError([]);
            if (res.data === "Success") {
              navigate("/home");
            } else {
              alert("No record existed");
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex  justify-content-center align-items-center  vh-100">
      <div
        className="bg-white p-4 rounded w-25"
        style={{ boxShadow: "rgba(150, 150, 151, 0.8) 0px 7px 29px 0px" }}
      >
        {" "}
        <h2 style={{ textAlign: "center", lineHeight: "2.3" }}>Worker Log-In</h2>
        {backendError ? (
          backendError.map((e) => <p className="text-danger">{e.msg}</p>)
        ) : (
          <span></span>
        )}{" "}
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="mobile">
              <strong>Mobile</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Mobile"
              name="text"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.mobile && (
              <span className="text-danger"> {errors.mobile}</span>
            )}
          </div>{" "}
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>{" "}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />{" "}
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}{" "}
          </div>{" "}
          <button type="submit" className="btn btn-success w-100 rounded-pill">
            {" "}
            Log in
          </button>{" "}
          <p>You are agree to aour terms and policies</p>{" "}
          <Link
            to="/seller-signup"
            className="btn btn-outline-primary border w-100  rounded-pill text-decoration-none"
          >
            Create Account
          </Link>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}
export default WorkerLogin;
