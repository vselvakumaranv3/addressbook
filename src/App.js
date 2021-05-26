import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Details from "./Pages/Details";
import RandomUser from "./Pages/RandomUser";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
            <Link to="/randomuser">Address book</Link>
        </nav>
      </div>
      <Switch>
        <Route path="/details/:pathParam1?/:pathParam2?/:pathParam3?" component={Details} />
        <Route path="/" component={RandomUser} />
      </Switch>
    </Router>
  );
}

export default App;
