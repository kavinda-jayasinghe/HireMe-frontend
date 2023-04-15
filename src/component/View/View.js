import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiceDetails } from "../../api-helpers/api-helpers";
import { Box, Typography } from "@mui/material";
import './style.css';
function View() {
  const [service, setService] = useState();
  const idd = useParams();
  const idx = idd.id;


  useEffect(() => {
    getServiceDetails(idx)
      .then((res) => setService(res))
      .catch((err) => console.log(err));
  }, [idx]);
  return (
    <div>
      {service && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily="fantacy"
            variant="h4"
            textAlign={"center"}
          ></Typography>
          {/* =========================================profile */}

          <div class="container emp-profile">
            <form method="post">
              <div class="row">
                <div class="col-md-4">
                  <div class="profile-img">
                    <img src={service.addedPhotos} alt="img" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="profile-head">
                    <h2 style={{ fontWeight: "bold" }}>{service.category}</h2>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="/"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          About
                        </a>
                      </li>
                    </ul>
                    {service.description}.<br/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="profile-work">
                    <p>WORK LINK</p>
                    <a href="/">Website Link</a>
                    <br />
                    <a href="/">face book</a>

                    <p>SKILLS</p>
                    <a href="/">Communication </a>
                    <br />
                    <a href="/">Physical Strength </a>
                    <br />
                    <a href="/">Time Management</a>
                    <br />
                    <a href="/">Safety Awareness</a>
                    <br />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="tab-content profile-tab" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div class="row"></div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Name</label>
                        </div>
                        <div class="col-md-6">
                          <p>Kshiti Ghelani</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div class="col-md-6">
                          <p>{service.mobile}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div class="col-md-6">
                          <p>{service.title}.</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>City</label>
                        </div>
                        <div class="col-md-6">
                          <p>{service.city}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Working Hours</label>
                        </div>
                        <div class="col-md-6">
                          <p>{service.workingTime}h</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Hourly charge</label>
                        </div>
                        <div class="col-md-6">
                          <p>{service.charge}$</p>
                        </div>
                      </div>
                      <br />
                      <div class="row"></div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div class="row">
                        <div class="col-md-6">
                          <label>Experience</label>
                        </div>
                        <div class="col-md-6">
                          <p>Expert</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Hourly Rate</label>
                        </div>
                        <div class="col-md-6">
                          <p>10$/hr</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Total Projects</label>
                        </div>
                        <div class="col-md-6">
                          <p>230</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>English Level</label>
                        </div>
                        <div class="col-md-6">
                          <p>Expert</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Availability</label>
                        </div>
                        <div class="col-md-6">
                          <p>6 months</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <label>Your Bio</label>
                          <br />
                          <p>Your detail description</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default View;
