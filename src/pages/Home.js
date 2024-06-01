import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientContext from '../context/PatientContext'; // Importa el contexto

function Home() {
  const { patients } = useContext(PatientContext); // Usa el contexto para acceder a los pacientes

  const navigate = useNavigate();

  const handleStartVisualization = () => {
    navigate('/signals');
  };

  return (
    <div className='home'>
      <h1>ECG | PCG Analysis</h1>
      <img src="path_to_user_image.jpg" alt="User" className="user-image" />
      <div className="patients-list">
        <h2>Patients</h2>
        <ul>
          {patients.map((patient, index) => (
            <li key={index}>{`${patient.firstName} ${patient.lastName}`}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleStartVisualization}>Start Visualizing</button>
    </div>
  );
}


export default Home;
