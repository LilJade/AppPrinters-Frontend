import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Inicio } from './components/inicio/inicio';
import { LoginPage } from './components/loginPage/loginPage';
import { PerfilEmpleado } from './components/perfilEmpleado/perfilEmpleado';
import { Navbar } from './components/navbar/navbar';
import { RegisterEmpleado } from './components/registerEmpleado/registerEmpleado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registerEmpleado" element={<RegisterEmpleado />} />
      <Route path="/perfilEmpleado" element={<PerfilEmpleado />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
