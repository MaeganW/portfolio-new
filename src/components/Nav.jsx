import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const App = (props) => {
  const { pageHeading } = props;
  return (
    <div>
      <h1 className="page-heading">{ pageHeading }</h1>
      <nav>
        <p>
          <Link to="index">Home</Link> \
          <Link to="about">About</Link> \
          <Link to="projects">Projects</Link> \
          <Link to="contact">Contact</Link>
        </p>
      </nav>
    </div>
  )
}

export default App;