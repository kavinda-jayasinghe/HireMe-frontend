import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Validation from "./SignupValidation";

import axios from "axios";
import Button from '@mui/material/Button'

function WorkerSignUp() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

   const handleSubmit = (event) => {


    const err = Validation({ name, mobile, password });
    setErrors(err);

    if (
      err.name === "" &&
      err.mobile === "" &&
      err.password === ""
    ) {

   event.preventDefault();
    try {
       axios.post("http://localhost:8081/api/v1/worker/signup", {
        name: name,
        mobile: mobile,
        password: password,
      });
      alert("worker Registation Successfully");
    } catch (err) {
      alert(err);
    }
   
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ paddingTop: "80px" }}
    >
      {" "}
      <div
        className="bg-white p-3 rounded w-25"
        style={{ boxShadow: "rgba(150, 150, 151, 0.8) 0px 7px 29px 0px" }}
      >
        {" "}
        <h2 style={{ textAlign: "center" }}> Worker Sign-Up</h2>{" "}
        <form action="" onSubmit={handleSubmit}>
          {" "}
          {/* ======================================Name======================= */}
          <div className="mb-3">
            {" "}
            <label htmlFor="name">
              <strong>Name</strong>
            </label>{" "}
            <input
              type="text"
              placeholder="Enter Full Name"
              name="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="form-control rounded-0"
            />{" "}
            {errors.name && <span className="text-danger"> {errors.name}</span>}{" "}
          </div>
          {/* ======================================Mobile======================= */}
          <div className="mb-3">
            {" "}
            <label htmlFor="mobile">
              <strong>Mobile</strong>
            </label>{" "}
            <input
              type="text"
              placeholder="Enter Mobile"
              name="mobile"
              onChange={(event) => {
                setMobile(event.target.value);
              }}
              className="form-control rounded-0"
            />{" "}
            {errors.mobile && (
              <span className="text-danger"> {errors.mobile}</span>
            )}{" "}
          </div>{" "}
          {/* ======================================password======================= */}
          <div className="mb-3">
            {" "}
            <label htmlFor="password">
              <strong>Password</strong>
            </label>{" "}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="form-control rounded-0"
            />{" "}
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}{" "}
          </div>{" "}

            {" "}
            <Link
              to="/seller-login" onClick={handleSubmit}
              className="btn btn-outline-primary border w-100  rounded-pill text-decoration-none"
            >
              Sign up
            </Link><br/>
      {" "}
          <Link
            to="/seller-login"
            className="btn btn-success border w-100 rounded-pill text-light "
          >
            Login
          </Link>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}
export default WorkerSignUp;
