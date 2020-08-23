import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Home from './pages/Home/Home';

const HatsPage = () => {
return (
  <div>
    <h1>Hats Page</h1>
  </div>
)
}

function App() {
  return (
    <div>
      Hello Macedonia!!!!
      {/* <Home></Home> */}

      <Route exact path= '/' component={Home}/>
      <Route exact path= '/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
