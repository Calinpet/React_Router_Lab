// We Must Import the React Library
import React from 'react';
//Import route and our components
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Stocks from './components/stock-data';

import './App.css';

function App() {
  // We will use the Route component to specify each route

  // In this case we used the spread operator to expand each property in routerProps into its own prop.

  // The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url.
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        
        <Route 
        path="/stocks/:symbol"
        render={(routerProps) => <Stocks {...routerProps} />}
      />
        <Route path='/stocks'><Dashboard /></Route>
      </Switch>
    </div>
  );
}

export default App;