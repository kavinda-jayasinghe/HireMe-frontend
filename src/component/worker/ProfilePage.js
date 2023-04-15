import React, { useState } from "react";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    city: "",
    mobile: "",
    addedPhotos: "",
    charge: "",
    workingTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <label htmlFor="mobile">Mobile:</label>
      <input
        type="text"
        id="mobile"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
      />

      <label htmlFor="addedPhotos">Added Photos:</label>
      <input
        type="text"
        id="addedPhotos"
        name="addedPhotos"
        value={formData.addedPhotos}
        onChange={handleChange}
      />

      <label htmlFor="charge">Charge:</label>
      <input
        type="text"
        id="charge"
        name="charge"
        value={formData.charge}
        onChange={handleChange}
      />

      <label htmlFor="workingTime">Working Time:</label>
      <input
        type="text"
        id="workingTime"
        name="workingTime"
        value={formData.workingTime}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default ProfilePage;
