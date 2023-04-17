import { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/worker/signup", {
        name: name,
        mobile: mobile,
        password: password,
      });
      alert("worker Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ paddingTop: "80px" }}
    >
      <div class="bg-white p-3 rounded w-25 ">
        <div class="card "
        >
          <h2 style={{ textAlign: "center" }}> Worker Sign-Up</h2>{" "}
          <form>
            <div class="form-group mb-3"
            >
              <label>worker name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
            </div>

            <div class="form-group mb-3">
              <label>mobile</label>
              <input
                type="mobile"
                class="form-control"
                id="mobile"
                placeholder="Enter mobile"
                value={mobile}
                onChange={(event) => {
                  setmobile(event.target.value);
                }}
              />
            </div>

            <div class="form-group mb-3">
              <label>password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <Link
              to="/seller-login"
              onClick={save}
              className="mb-3 btn btn-outline-primary border w-100  rounded-pill text-decoration-none"
            >
              Sign up
            </Link>
            <br />
            <Link
              to="/seller-login"
              className="mb-3 btn btn-success border w-100 rounded-pill text-light "
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
