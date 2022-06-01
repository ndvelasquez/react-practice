import './App.css';
import './index.css';
import './responsive.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import HomePage from './routes/homePage';

export default function App() {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
}