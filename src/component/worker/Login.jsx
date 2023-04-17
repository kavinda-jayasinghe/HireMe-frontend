import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [mobile, setmobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/v1/worker/login", {
          mobile: mobile,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message == "Mobile num  not exits") {
              alert("Mobile num  not Registered");
            } else if (res.data.message == "Login Success") {
              navigate("/seller-signup/new-service");
            } else {
              alert("Incorrect mobile and Password not match");
            }
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div
        class="bg-white p-4 rounded w-25"
        style={{ boxShadow: "rgba(150, 150, 151, 0.8) 0px 7px 29px 0px" }}
      >
        <div class="row">
          <h2 style={{ textAlign: "center", lineHeight: "2.3" }}>
            Worker Log-In
          </h2>
          <hr />
        </div>

        <div class="row">
          <div class="col">
            <form>
              <div class="form-group mb-3">
                <label>mobile</label>
                <input
                  type="mobile"
                  class="form-control"
                  id="mobile"
                  placeholder="Enter Name"
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
                  placeholder="Enter Fee"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                class="mb-3 btn btn-success border w-100 rounded-pill text-light "
                onClick={login}
              >
                Login
              </button>
              <Link
                to="/seller-signup"
                className="btn btn-outline-primary border w-100  rounded-pill text-decoration-none"
              >
                Create Account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
