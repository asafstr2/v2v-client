import './App.css';
import React from 'react';
import AppContent from "./component/content/Content";
import './component/header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Bubble from "./component/bubble/Bubble";
import BubbleModal from "./component/bubble-modal/BubbleModal";

function App() {
  return (
      <Router>
        <div className="App">
            <header><img src={'logo.svg'} alt={'logo'}/></header>
            <AppContent></AppContent>
        </div>
        <Route path="/:id" component={BubbleModal}></Route>
      </Router>
  );
}

export default App;
