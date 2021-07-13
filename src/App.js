import './App.css';
import React from 'react';
import AppContent from "./component/Content";
import './component/header.css';


function App() {
  return (
    <div className="App">
        <header><img src={'logo.svg'} alt={'logo'}/></header>
        <AppContent></AppContent>
    </div>
  );
}

export default App;
