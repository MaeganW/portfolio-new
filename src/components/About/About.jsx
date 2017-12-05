import React, { Component } from 'react';
import Nav from '../Nav';

class About extends Component {
  render() {
    return (
      <div>
        <img id="me" src="../../img/ProfilePic2%20(3).jpg" alt="profile picture"/>
        <section className="container">
          <div className="float-left" id="about-left">
            <Nav pageHeading="About"/>
          </div>
          <div className="float-right" id="about-right">
            <article className="text-container">
              <h2>Who am I?</h2>
              <p>I am a front-end web developer with experience primarily in Javascript but with an interest in Node.js and the back-end of applications.</p>
              <h2>My Story</h2>
              <p>In a previous career, I was an English instructor in a Japanese English school in Osaka. When I started, the students didn't have a grasp of the fundamentals, but after identifying the problem, I developed curriculum and created projects to help my students master English. I use this same development process in my work today.</p>
              <p>Since childhood I have been programming and creating animations as a hobby and have recently rekindled that passion into a career.</p>
              <h2>What you can expect from me.</h2>
              <p>A user-centered mindset and a sensitivity for effective design. From my former career as a teacher, I bring a tested work ethic and process well-suited for collaborating and developing solutions to problems together.</p>
              <p>Here is a rough framework outlining my work process:</p>
              <ol>
                <li><strong className="em-text">Identify</strong> project's purpose and outline objectives</li>
                <li><strong className="em-text">Define</strong> project scope and develop timelines</li>
                <li><strong className="em-text">Research</strong> </li>
                <li><strong className="em-text">Structure</strong> content and layout of the project</li>
                <li><strong className="em-text">Create and Develop</strong> </li>
                <li><strong className="em-text">Test</strong> project media and effectiveness</li>
                <li><strong className="em-text">Launch</strong></li>
              </ol>
              <p>Communication and collaboration are fundamental parts of my working process and present throughout this entire process.</p>
              <p><strong>To accomplish the goal of developing designs that help others, I believe in teamwork, trust, and a passion for people.</strong></p>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default About;