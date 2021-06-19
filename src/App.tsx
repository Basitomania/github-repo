import React from 'react';
import './App.css';
import Header from './components/Header';
import HeaderPills from './components/HeaderPills';
import Repositories from './components/Repositories';
import Developers from './components/Developers';

function App() {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="main-section-container">
        <HeaderPills />
        <div className="repo-item-column">
          {/* <Repositories /> */}
          <Developers />
        </div>
      </div>
    </div>
  );
}

export default App;
