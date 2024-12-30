import React, { useState } from 'react';
import './GeneralInfo.css';

const GeneralInfo = () => {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
  const [isEditing, setIsEditing] = useState(true);
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  // Validation functions
  const validateName = (name) => {
    return name.trim() === '' ? 'Name is required' : '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) ? '' : 'Please enter a valid email';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Validates 10-digit phone numbers
    return phoneRegex.test(phone) ? '' : 'Please enter a valid 10-digit phone number';
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });

    // Validate field on change
    let errorMessage = '';
    if (name === 'name') {
      errorMessage = validateName(value);
    } else if (name === 'email') {
      errorMessage = validateEmail(value);
    } else if (name === 'phone') {
      errorMessage = validatePhone(value);
    }
    setErrors({ ...errors, [name]: errorMessage });
  };

  // Handle form submission (validation check)
  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(info.name);
    const emailError = validateEmail(info.email);
    const phoneError = validatePhone(info.phone);

    setErrors({ name: nameError, email: emailError, phone: phoneError });

    if (!nameError && !emailError && !phoneError) {
      setIsEditing(false);
    }
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={info.name}
              placeholder="Name"
              onChange={handleChange}
            />
            {errors.name && <p className="input-error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={info.email}
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && <p className="input-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={info.phone}
              placeholder="Phone"
              onChange={handleChange}
            />
            {errors.phone && <p className="input-error">{errors.phone}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
