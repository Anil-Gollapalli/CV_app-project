import React, { useState } from 'react';
import './EducationExperience.css';

const EducationExperience = () => {
  const [education, setEducation] = useState({
    school: '',
    title: '',
    date: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  return (
    <div className="education-experience">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <form>
          <input
            type="text"
            name="school"
            value={education.school}
            placeholder="School Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            value={education.title}
            placeholder="Title of Study"
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={education.date}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setIsEditing(false)}>Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Title:</strong> {education.title}</p>
          <p><strong>Date:</strong> {education.date}</p>
          <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationExperience;
