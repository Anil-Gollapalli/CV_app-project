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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPractical({ ...practical, [name]: value });
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form>
          <input
            type="text"
            name="company"
            value={practical.company}
            placeholder="Company Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            value={practical.position}
            placeholder="Position Title"
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            value={practical.responsibilities}
            placeholder="Main Responsibilities"
            onChange={handleChange}
          />
          <input
            type="date"
            name="from"
            value={practical.from}
            placeholder="From"
            onChange={handleChange}
          />
          <input
            type="date"
            name="to"
            value={practical.to}
            placeholder="Until"
            onChange={handleChange}
          />
          <button type="button" onClick={() => setIsEditing(false)}>Submit</button>
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
