import React, { useState, useContext } from 'react';
import PatientContext from '../context/PatientContext'; // Importa el contexto

function NewPatient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    sex: 'F',
    dni: '',
  });

  const { addPatient } = useContext(PatientContext); // Usa el contexto

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient(formData); // Agrega el nuevo paciente al contexto
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      sex: 'F',
      dni: '',
    });
  };

  return (
    <div className="new-patient">
      <h1>Add New Patient</h1>
      <form onSubmit={handleSubmit} className="new-patient-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sex">Sex:</label>
          <select
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
          >
            <option value="F">F</option>
            <option value="M">M</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewPatient;
