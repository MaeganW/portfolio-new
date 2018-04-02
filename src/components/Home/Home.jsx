import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navigation/Nav';
import landingIcon from '../../img/elements/medium-bluetree-icon_lit_crosshatch.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img className="home_icon" src={landingIcon} alt="brand-icon" />
        <header>
          <h1>Maegan Womble</h1>
          <p>UX/UI Web Developer</p>
        </header>
        <Nav />
      </div>
    );
  }
}

export default Home;