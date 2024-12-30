import React from 'react';
import GeneralInfo from './GeneralInfo';
import EducationExperience from './EducationExperience';
import PracticalExperience from './PracticalExperience';
import '../styles/App.css';


const App = () => {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo />
      <EducationExperience />
      <PracticalExperience />
    </div>
  );
};

export default App;
