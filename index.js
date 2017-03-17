import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Header from './header/Header';
import Panel from './panel/Panel';
import Comp2 from './registration/Comp2';
import { Router, Route, browserHistory } from 'react-router'
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="Header/:name/:email/:phone/:aadhar/:pan" component={Header} handler={Header} />
    <Route path="Panel" component={Panel} />
    <Route path="Header" component={Header} />
    <Route path="Comp2" component={Comp2} />
  </Router>,
  document.getElementById('root')
);
