import React, { useContext } from 'react';
import PatientContext from '../context/PatientContext'; // Importa el contexto

function Patients() {
  const { patients } = useContext(PatientContext); // Usa el contexto para acceder a los pacientes

  return (
    <div className="patients-page">
      <h1>All Patients</h1>
      <table className="patients-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.age}</td>
              <td>{patient.sex}</td>
              <td>{patient.dni}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patients;
