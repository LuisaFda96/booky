import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/home/Navbar';
import Router from './components/router/Router';
import Footer from './components/home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Router/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
