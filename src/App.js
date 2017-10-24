import React, { Component } from 'react';
import './App.css';
import Title from './title.js';
import TextMovie from './titleMovie.js';


class Principal extends Component {
  render() {
    return (
      <div>
        <Title />
        <TextMovie />
      </div>
    );
  }
}

export default Principal;
