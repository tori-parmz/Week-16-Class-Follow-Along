import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import TestComponent from './Components/TestComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /***
   * SPA (Single Page Application)
   * 
   */
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/test" element={<TestComponent/>} />
    <Route
      path="*"
      element={<Navigate to="/" replace />}
      />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
