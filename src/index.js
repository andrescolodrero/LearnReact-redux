import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, brownserHistory} from 'react-router'
import routes from './routes';
// We can add Styles on Webpack
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Main App Render
ReactDOM.render (
<Router history={brownserHistory} routes={routes} />,
document.getElementById('app')

);

