import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import ShopPage from './pages/Shop/Shop.tsx';

function App() {
  return (
    <div>
      <Route exact path= '/' component={Home}/>
      <Route exact path= '/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
