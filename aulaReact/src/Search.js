import React, { Component } from 'react';
import './Pesquisa.css';

class Search extends Component {
  render() {
    return (
		<form className="pesquisa">
			<input type="text"  placeholder="Buscar..."/>
		</form>
	 
    );
  }
}

export default Search;
