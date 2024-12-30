import React, { useState } from 'react';
import './EducationExperience.css';

const EducationExperience = () => {
  const [education, setEducation] = useState({
    school: '',
    title: '',
    date: '',
  });
  const [isEditing, setIsEditing] = useState(true);
  const [errors, setErrors] = useState({
    school: '',
    title: '',
    date: '',
  });

  // Validation functions
  const validateSchool = (school) => {
    return school.trim() === '' ? 'School name is required' : '';
  };

  const validateTitle = (title) => {
    return title.trim() === '' ? 'Title of study is required' : '';
  };

  const validateDate = (date) => {
    return date === '' ? 'Date is required' : '';
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });

    // Validate field on change
    let errorMessage = '';
    if (name === 'school') {
      errorMessage = validateSchool(value);
    } else if (name === 'title') {
      errorMessage = validateTitle(value);
    } else if (name === 'date') {
      errorMessage = validateDate(value);
    }
    setErrors({ ...errors, [name]: errorMessage });
  };

  // Handle form submission (validation check)
  const handleSubmit = (e) => {
    e.preventDefault();

    const schoolError = validateSchool(education.school);
    const titleError = validateTitle(education.title);
    const dateError = validateDate(education.date);

    setErrors({ school: schoolError, title: titleError, date: dateError });

    if (!schoolError && !titleError && !dateError) {
      setIsEditing(false);
    }
  };

  return (
    <div className="education-experience">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="school"
              value={education.school}
              placeholder="School Name"
              onChange={handleChange}
            />
            {errors.school && <p className="input-error">{errors.school}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="title"
              value={education.title}
              placeholder="Title of Study"
              onChange={handleChange}
            />
            {errors.title && <p className="input-error">{errors.title}</p>}
          </div>

          <div className="form-group">
            <input
              type="date"
              name="date"
              value={education.date}
              onChange={handleChange}
            />
            {errors.date && <p className="input-error">{errors.date}</p>}
          </div>

          <button type="submit">Submit</button>
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
