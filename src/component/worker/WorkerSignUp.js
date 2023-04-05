import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Validation from "./SignupValidation";

import axios from "axios";

function WorkerSignUp() {
  const [name, setName] = useState("");
  const [city, setcity] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation({ name, city, mobile, password });
    setErrors(err);

    if (
      err.name === "" &&
      err.city === "" &&
      err.mobile === "" &&
      err.password === ""
    ) {
      axios.post("http://localhost:8080/api/v1/worker/signup", {
        name:name,
        city:city,
        mobile:mobile,
        password:password,
        photo:photo,
      });
      <Link to="/registered-customer"></Link>;
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
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
          <div className="mb-2">
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
          {/* ======================================City======================= */}
          <div className="mb-2">
            {" "}
            <label htmlFor="city">
              <strong>City</strong>
            </label>{" "}
            <input
              type="text"
              placeholder="Enter City"
              name="city"
              onChange={(event) => {
                setcity(event.target.value);
              }}
              className="form-control rounded-0"
            />{" "}
            {errors.city && <span className="text-danger"> {errors.city}</span>}{" "}
          </div>{" "}
          <div className="mb-2">
            {" "}
            {/* ======================================Mobile======================= */}
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
          <div className="mb-2">
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
          {/* ======================================pro pic======================= */}
          <div className="mb-3">
            {" "}
            <label htmlFor="name">
              <strong>Photo</strong>
            </label>{" "}
            <input
              type="file"
              placeholder="Enter Full Name"
              name="name"
              onChange={(event) => {
                setPhoto(event.target.value);
              }}
              className="form-control rounded-0"
            />{" "}
            {errors.name && <span className="text-danger"> {errors.name}</span>}{" "}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill mb-2"
            style={{ borderRadius: "10px" }}
          >
            {" "}
            Sign up
          </button>{" "}
          <Link
            to="/seller-login"
            className="btn btn-primary border w-100 rounded-pill text-decoration-none "
          >
            Login
          </Link>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}
export default WorkerSignUp;
