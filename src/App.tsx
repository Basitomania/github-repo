import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeaderPills from './components/HeaderPills';
import Repositories from './components/Repositories';
import Developers from './components/Developers';

const App = (): JSX.Element => {
  const [toggleState, setToggleState] = useState(1);

  const handleClick = (index: number) => {
    setToggleState(index);
    console.log('clicked', index);
  };

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="main-section-container">
        <HeaderPills handleTabClick={handleClick} toggleState={toggleState} />
        <div className="repo-item-column">{toggleState === 1 ? <Repositories /> : <Developers />}</div>
      </div>
    </div>
  );
};

export default App;
