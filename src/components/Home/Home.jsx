import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="container" id="landing-bkgd">
        <img id="landing-icon" src="#" alt="brand-icon"/>
        <header>
          <h1>Maegan Womble</h1>
          <p>UX/UI Web Developer</p>
        </header>
        <nav id="landing-nav">
          <p>
            <Link to="index">Home</Link> \
            <Link to="about">About</Link> \
            <Link to="projects">Projects</Link> \
            <Link to="contact">Contact</Link>
          </p>
        </nav>
      </div>
    );
  }
}

export default Home;