import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/customers">Customers</Link><br />
          <Link to="/customers/30000000">Customers 30000000</Link>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
