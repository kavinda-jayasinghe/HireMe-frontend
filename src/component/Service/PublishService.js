import axios from 'axios';
import React from 'react'
import { useState } from "react";
function PublishService() {
const [name, setName] = useState("");
const [title, setTitle] = useState("");
const [category, setCategory] = useState("");
const [city, setCity] = useState("");
const [mobile, setMobile] = useState("");
const [addedPhotos, setAddedPhotos] = useState("");
const [description, setDescription] = useState("");
const [charge, setCharge] = useState("");
const [workingTime, setWorkingTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

      axios.post("http://localhost:8080/api/v1/add/new-service", {
        name:name,
        title: title,
        category: category,
        city: city,
        mobile: mobile,
        addedPhotos: addedPhotos,
        description: description,
        charge: charge,
        workingTime: workingTime,
      });
console.log(title);
    alert('submitted')
  };

  return (
    <div className="container mt-2 ">
      <h2 className="text-center mb-6">New Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label for="cars">Category : </label>

          <select
            name="cars"
            id="cars"
            className="form-group my-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="null"> </option>
            <option value="CCTV">CCTV</option>
            <option value="Plumber">Plumber</option>
            <option value="Welder">Welder</option>
            <option value="Electrician">Electrician</option>
            <option value="Mechanic">Mechanic</option>
            <option value="Mason">Mason</option>
            <option value="Carpentor">Carpentor</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Driver">Driver</option>
            <option value="Landscape">Landscape</option>
          </select>
        </div>

        <div className="form-group my-3">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="addedPhotos">Add Photos</label>
          <input
            type="text"
            className="form-control"
            id="addedPhotos"
            value={addedPhotos}
            onChange={(e) => setAddedPhotos(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group my-3">
          <label htmlFor="charge">Charge</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="number"
              className="form-control"
              id="charge"
              placeholder="Hourly charge"
              value={charge}
              onChange={(e) => setCharge(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="workingTime" className="form-label my-3">
            Working Time
          </label>
          <input
            type="text"
            className="form-control"
            id="workingTime"
            placeholder="Time"
            value={workingTime}
            onChange={(e) => setWorkingTime(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>
    </div>
  );
  
}

export default PublishService