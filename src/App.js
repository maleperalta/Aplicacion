import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import NewPatient from './pages/NewPatient'
import Signals from './pages/Signals'
import AnalyzeSignals from './pages/AnalyzeSignals';
import { PatientProvider } from './context/PatientContext'; // Importa el proveedor de contexto
import Patients from './pages/Patients'; // Importa la nueva página

function App ()  {
  return (
    <PatientProvider>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/signals' element={<Signals />}/>
            <Route path='/newpatient' element={<NewPatient />}/>
            <Route path='/analyzesignals' element={<AnalyzeSignals />}/>
            <Route path='/patients' element={<Patients />} /> 
          </Routes>
      </Router>
      </PatientProvider>
  );
}

export default App;

