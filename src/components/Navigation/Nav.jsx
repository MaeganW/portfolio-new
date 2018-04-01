import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const App = (props) => {
  const { pageHeading } = props;
  return (
    <div className="navigation">
      <h1 className="navigation__page-heading">{pageHeading}</h1>
      <nav>
        <p>
          <Link className="navigation__link" to="home">Home</Link> \
          <Link className="navigation__link" to="about">About</Link> \
          <Link className="navigation__link" to="projects">Projects</Link> \
          <Link className="navigation__link" to="contact">Contact</Link>
        </p>
      </nav>
    </div>
  )
}

export default App;