import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home';
import ShopPage from './pages/Shop/Shop.tsx';

import Header from './components/Header/Header.tsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
