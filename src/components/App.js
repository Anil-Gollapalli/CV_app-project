// import React from 'react';
// import GeneralInfo from './GeneralInfo';
// import EducationExperience from './EducationExperience';
// import PracticalExperience from './PracticalExperience';
// import '../styles/App.css';


// const App = () => {
//   return (
//     <div className="App">
//       <h1>CV Application</h1>
//       <GeneralInfo />
//       <EducationExperience />
//       <PracticalExperience />
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  const [editMode, setEditMode] = useState({
    generalInfo: true,
    education: true,
    experience: true,
  });

  // Validation function for different field types
  const handleValidation = (sectionData) => {
    return Object.values(sectionData).every((field) => field.trim() !== "");
  };

  const handleEmailValidation = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handlePhoneValidation = (phone) => {
    const phoneRegex = /^\d{10}$/; // Example for validating a 10-digit phone number
    return phoneRegex.test(phone);
  };

  const handleSubmit = (section) => {
    switch (section) {
      case "generalInfo":
        if (!handleValidation(generalInfo)) {
          alert("Please fill out all fields in General Information.");
        } else if (!handleEmailValidation(generalInfo.email)) {
          alert("Please enter a valid email address.");
        } else if (!handlePhoneValidation(generalInfo.phone)) {
          alert("Please enter a valid phone number (10 digits).");
        } else {
          setEditMode((prev) => ({ ...prev, generalInfo: false }));
        }
        break;
      case "education":
        if (handleValidation(education)) {
          setEditMode((prev) => ({ ...prev, education: false }));
        } else {
          alert("Please fill out all fields in Educational Experience.");
        }
        break;
      case "experience":
        if (handleValidation(experience)) {
          setEditMode((prev) => ({ ...prev, experience: false }));
        } else {
          alert("Please fill out all fields in Practical Experience.");
        }
        break;
      default:
        break;
    }
  };

  const handleEdit = (section) => {
    setEditMode((prev) => ({ ...prev, [section]: true }));
  };

  return (
    <div className="app-container">
      <h1>CV Application</h1>

      {/* General Information Section */}
      <div className="general-info">
        <h2>General Information</h2>
        {editMode.generalInfo ? (
          <form>
            <label>Name:</label>
            <input
              type="text"
              value={generalInfo.name}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, name: e.target.value })
              }
            />
            <label>Email:</label>
            <input
              type="email"
              value={generalInfo.email}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, email: e.target.value })
              }
            />
            <label>Phone:</label>
            <input
              type="text"
              value={generalInfo.phone}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, phone: e.target.value })
              }
            />
            <button
              type="button"
              className="btn submit"
              onClick={() => handleSubmit("generalInfo")}
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="section-preview">
            <p>Name: {generalInfo.name}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone: {generalInfo.phone}</p>
            <button
              type="button"
              className="btn edit"
              onClick={() => handleEdit("generalInfo")}
            >
              Edit
            </button>
          </div>
        )}
      </div>

      {/* Education Section */}
      <div className="education-experience">
        <h2>Educational Experience</h2>
        {editMode.education ? (
          <form>
            <label>School or College:</label>
            <input
              type="text"
              value={education.school}
              onChange={(e) =>
                setEducation({ ...education, school: e.target.value })
              }
            />
            <label>Title:</label>
            <input
              type="text"
              value={education.title}
              onChange={(e) =>
                setEducation({ ...education, title: e.target.value })
              }
            />
            <label>Date:</label>
            <input
              type="date"
              value={education.date}
              onChange={(e) =>
                setEducation({ ...education, date: e.target.value })
              }
            />
            <button
              type="button"
              className="btn submit"
              onClick={() => handleSubmit("education")}
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="section-preview">
            <p>School or College: {education.school}</p>
            <p>Title: {education.title}</p>
            <p>Date: {education.date}</p>
            <button
              type="button"
              className="btn edit"
              onClick={() => handleEdit("education")}
            >
              Edit
            </button>
          </div>
        )}
      </div>

      {/* Practical Experience Section */}
      <div className="practical-experience">
        <h2>Work Experience</h2>
        {editMode.experience ? (
          <form>
            <label>Company:</label>
            <input
              type="text"
              value={experience.company}
              onChange={(e) =>
                setExperience({ ...experience, company: e.target.value })
              }
            />
            <label>Position:</label>
            <input
              type="text"
              value={experience.position}
              onChange={(e) =>
                setExperience({ ...experience, position: e.target.value })
              }
            />
            <label>Responsibilities:</label>
            <input
              type="text"
              value={experience.responsibilities}
              onChange={(e) =>
                setExperience({
                  ...experience,
                  responsibilities: e.target.value,
                })
              }
            />
            <label>From:</label>
            <input
              type="date"
              value={experience.from}
              onChange={(e) =>
                setExperience({ ...experience, from: e.target.value })
              }
            />
            <label>To:</label>
            <input
              type="date"
              value={experience.to}
              onChange={(e) =>
                setExperience({ ...experience, to: e.target.value })
              }
            />
            <button
              type="button"
              className="btn submit"
              onClick={() => handleSubmit("experience")}
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="section-preview">
            <p>Company: {experience.company}</p>
            <p>Position: {experience.position}</p>
            <p>Responsibilities: {experience.responsibilities}</p>
            <p>From: {experience.from}</p>
            <p>To: {experience.to}</p>
            <button
              type="button"
              className="btn edit"
              onClick={() => handleEdit("experience")}
            >
              Edit
            </button>
          </div>
        )}
      </div>

      {/* CV Preview Section */}
      <div className="cv-preview">
        <h2>CV Preview</h2>
        <hr />
        <h3>General Information</h3>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>

        <h3>Educational Experience</h3>
        <p>School or College: {education.school}</p>
        <p>Title: {education.title}</p>
        <p>Date: {education.date}</p>

        <h3>Work Experience</h3>
        <p>Company: {experience.company}</p>
        <p>Position: {experience.position}</p>
        <p>Responsibilities: {experience.responsibilities}</p>
        <p>From: {experience.from}</p>
        <p>To: {experience.to}</p>
      </div>
    </div>
  );
};

export default App;

