import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Home from './pages/Home/Home'
import Cate from './pages/Cate/Cate'
import Shopcart from './pages/Shopcart/Shopcart'
import User from './pages/User/User'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect from='/' to="/home" exact></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/cate" component={Cate}></Route>
          <Route path="/shopcart" component={Shopcart}></Route>
          <Route path="/user" component={User}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
