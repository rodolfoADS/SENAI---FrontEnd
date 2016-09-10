import React, { Component } from 'react';
import './App.css';

import Search from './Search';

class App extends Component {
  render() {
    return (
      <nav className="navbar">
		<h1> To Do List </h1>
	  <Search/>
	  </nav>
	 
    );
  }
}

export default App;
