import React from 'react';
import './App.css';
import Header from './components/Header';
import HeaderPills from './components/HeaderPills';

function App() {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="main-section-container">
        <HeaderPills />
      </div>
    </div>
  );
}

export default App;
