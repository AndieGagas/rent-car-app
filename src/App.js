// -------------------- Library React & Router --------------------
import React from 'react';
import { Routes, Route } from "react-router-dom";

// -------------------- Import Pages Route --------------------
import DetailPage from './Pages/User/DetailPage';
import ListCarUser from './Pages/User/ListCar';
import LandingPage from './Pages/User/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage'
import Dashboard from './Pages/Admin/Dashboard';
import ListCarAdmin from './Pages/Admin/ListCar';
import CreateNewCar from './Pages/Admin/CreateNewCar';
import InvoicePage from './Pages/User/InvoicePage';

function App() {

  return (
      <Routes>
          {/* --------------- Halaman Login --------------- */}
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* --------------- Halaman Admin --------------- */}
          <Route path='admin'>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="listCar" element={<ListCarAdmin />} />
              <Route path='addNewCar' element={<CreateNewCar />} />
          </Route>
          {/* --------------- Halaman User --------------- */}
          <Route path='user'>
              <Route path="landing" element={<LandingPage />} />
              <Route path="listCar" element={<ListCarUser />} />
              <Route path="detail/:id" element={<DetailPage />} />
              <Route path='invoice' element={<InvoicePage />} />
          </Route>
      </Routes>
  );
}

export default App;
