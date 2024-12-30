import React, { useState } from 'react';
import './PracticalExperience.css';

const PracticalExperience = () => {
  const [practical, setPractical] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    to: '',
  });
  const [isEditing, setIsEditing] = useState(true);
  const [errors, setErrors] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    to: '',
  });

  // Validation functions
  const validateCompany = (company) => {
    return company.trim() === '' ? 'Company name is required' : '';
  };

  const validatePosition = (position) => {
    return position.trim() === '' ? 'Position title is required' : '';
  };

  const validateResponsibilities = (responsibilities) => {
    return responsibilities.trim() === '' ? 'Responsibilities are required' : '';
  };

  const validateDate = (date) => {
    return date === '' ? 'Date is required' : '';
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPractical({ ...practical, [name]: value });

    // Validate field on change
    let errorMessage = '';
    if (name === 'company') {
      errorMessage = validateCompany(value);
    } else if (name === 'position') {
      errorMessage = validatePosition(value);
    } else if (name === 'responsibilities') {
      errorMessage = validateResponsibilities(value);
    } else if (name === 'from' || name === 'to') {
      errorMessage = validateDate(value);
    }
    setErrors({ ...errors, [name]: errorMessage });
  };

  // Handle form submission (validation check)
  const handleSubmit = (e) => {
    e.preventDefault();

    const companyError = validateCompany(practical.company);
    const positionError = validatePosition(practical.position);
    const responsibilitiesError = validateResponsibilities(practical.responsibilities);
    const fromError = validateDate(practical.from);
    const toError = validateDate(practical.to);

    setErrors({ 
      company: companyError,
      position: positionError,
      responsibilities: responsibilitiesError,
      from: fromError,
      to: toError,
    });

    if (!companyError && !positionError && !responsibilitiesError && !fromError && !toError) {
      setIsEditing(false);
    }
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="company"
              value={practical.company}
              placeholder="Company Name"
              onChange={handleChange}
            />
            {errors.company && <p className="input-error">{errors.company}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="position"
              value={practical.position}
              placeholder="Position Title"
              onChange={handleChange}
            />
            {errors.position && <p className="input-error">{errors.position}</p>}
          </div>

          <div className="form-group">
            <textarea
              name="responsibilities"
              value={practical.responsibilities}
              placeholder="Main Responsibilities"
              onChange={handleChange}
            />
            {errors.responsibilities && <p className="input-error">{errors.responsibilities}</p>}
          </div>

          <div className="form-group">
            <input
              type="date"
              name="from"
              value={practical.from}
              onChange={handleChange}
            />
            {errors.from && <p className="input-error">{errors.from}</p>}
          </div>

          <div className="form-group">
            <input
              type="date"
              name="to"
              value={practical.to}
              onChange={handleChange}
            />
            {errors.to && <p className="input-error">{errors.to}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {practical.company}</p>
          <p><strong>Position:</strong> {practical.position}</p>
          <p><strong>Responsibilities:</strong> {practical.responsibilities}</p>
          <p><strong>From:</strong> {practical.from}</p>
          <p><strong>Until:</strong> {practical.to}</p>
          <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
