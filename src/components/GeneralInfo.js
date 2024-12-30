import React, { useState } from 'react';
import './GeneralInfo.css';

const GeneralInfo = () => {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <form>
          <input
            type="text"
            name="name"
            value={info.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={info.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            value={info.phone}
            placeholder="Phone"
            onChange={handleChange}
          />
          <button type="button" onClick={() => setIsEditing(false)}>Submit</button>
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
