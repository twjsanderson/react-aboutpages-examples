import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import About1 from './components/About1'; 
import About2 from './components/About2'; 
import About3 from './components/About3'; 
import './index.css';


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">About1</Link>
      <Link className="p-3" to="/main2">About2</Link>
      <Link className="p-3" to="/main3">About3</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={About1} />
        <Route path="/main2" component={About2} />
        <Route path="/main3" component={About3} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
