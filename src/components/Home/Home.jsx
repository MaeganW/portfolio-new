import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div class="container" id="landing-bkgd">
        <img id="landing-icon" src="img/medium-bluetree-icon_lit_crosshatch.png" alt="brand-icon">
        <header>
          <h1>Maegan Womble</h1>
          <p>UX/UI Web Developer</p>
        </header>
        <nav id="landing-nav">
          <p>
            <a href="about.html">About</a> \
            <a href="projects.html">Projects</a> \
            <a href="contact.html">Contact</a>
          </p>
        </nav>
      </div>
    );
  }
}

export default Home;