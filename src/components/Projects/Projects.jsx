import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navigation/Nav';

import jsClock from '../../img/projects/JSClock.png';
import cssVariables from '../../img/projects/CSSVariables.png';
import drumKit from '../../img/projects/DrumKit.png';
import flexPanel from '../../img/projects/Flex Panel.png';
import paintApp from '../../img/projects/Paint App.png';
import scroll from '../../img/projects/Scroll.png';
import shiftSelect from '../../img/projects/Shift Select Checkboxes.png';
import typeAhead from '../../img/projects/Type Ahead.png';
import colorGame from '../../img/projects/ColorGame.png';
import gamma from '../../img/projects/Gamma.png';
import metaVidz from '../../img/projects/MetaVidz.png';
import okCrime from '../../img/projects/OKCrime.png';
import pomodoro from '../../img/projects/Pomodoro.png';
import todo from '../../img/projects/Todo.png';
import trillo from '../../img/projects/Trillo.png';
import patatap from '../../img/projects/Patatap.png';


const projectImgs = [
  {
    src: trillo,
    title: 'Trillo',
    id: 'trillo',
    href: 'http://google.com',
    content: 'All-In-One responsive Travel Website built using Flexbox, SCSS, and custom css animations (Built by Maegan Womble - designed by Jonas Schmedtmann).'
  },
  {
    src: colorGame,
    title: 'Color Game',
    id: 'colorGame',
    href: 'http://google.com',
    content: "An RGB Color Game App utilizing animations and DOM manipulation for an interactive and colorful experience. Boasts two separate modes of difficulty that can be replayed endlesssly. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course."
  },
  {
    src: gamma,
    title: 'Gamma Photo App Site',
    id: 'gamma',
    href: 'http://google.com',
    content: "A responsive web design built for a fictional photo app utilizing the Bootstrap framework. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course."
  },
  {
    src: metaVidz,
    title: 'MetaVidz',
    id: 'metaVidz',
    href: 'http://google.com',
    content: "A working Youtube search engine with a simple and clean interface. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course."
  },
  {
    src: jsClock,
    title: 'JS Clock',
    id: 'jsClock',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: cssVariables,
    title: 'CSS Variables Manipulation',
    id: 'cssVariables',
    href: 'http://google.com',
    content: "A mini app demonstrating native css variable manipulation using javascript. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 3"
  },
  {
    src: drumKit,
    title: 'Drum Kit',
    id: 'drumKit',
    href: 'http://google.com',
    content: 'Hello.'
  },
  {
    src: flexPanel,
    title: 'Flex Panel Display',
    id: 'flexPanel',
    href: 'https://github.com/MaeganW/Flex-Panel-Gallery',
    content: "An exercise in responsive panels with css flexbox. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 5"
  },
  {
    src: paintApp,
    title: 'Canvas Paint App',
    id: 'paintApp',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: scroll,
    title: 'Image Slide in on Scroll',
    id: 'scroll',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: shiftSelect,
    title: 'Select with Shift',
    id: 'shiftSelect',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: patatap,
    title: 'Patatap Clone',
    id: 'patatap',
    href: 'http://google.com',
    content: "A light and fun patatap clone inspired by the original Patatap app. Functions, sounds, and animations are tied to keyboard keys to create a fun interactive experience. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course."
  },
  {
    src: typeAhead,
    title: 'Type Ahead Pokedex Search',
    id: 'typeAhead',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: pomodoro,
    title: 'Pomodoro Timer',
    id: 'pomodoro',
    href: 'http://google.com',
    content: 'A clean design work-flow timer based off of the famous "Pomodoro Technique" with adjustable session and break lengths. Keeps track of number of completed sessions. Employs stop and pause throughout sessions with a simple click of the mouse.'
  },
  {
    src: okCrime,
    title: 'OK Crime',
    id: 'okCrime',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: todo,
    title: 'Todos App',
    id: 'todo',
    href: 'http://google.com',
    content: "A productivity app for the everyday. Add and delete items at will or cross off already completed activities. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course."
  }
];

class Projects extends Component {
  render() {
    const projectRows = projectImgs.map((img, index) => (
      <div className="projects_row">
        <h3>{img.title}</h3>
        {(index % 2 === 0) ? (
          <div className="projects_row_left">
            <div className="projects_row_proj">
              <img className="projects_row_proj_img" src={img.src} />
            </div>
            <div className="projects_row_info">
              <p>{img.content}</p>
              <button><Link to={img.href}>View Code</Link></button>
            </div>
          </div>
        ) : (
            <div className="projects_row_right">
              <div className="projects_row_info">
                <p>{img.content}</p>
                <button><Link to={img.href}>View Code</Link></button>
              </div>
              <div className="projects_row_proj">
                <img className="projects_row_proj_img" src={img.src} />
              </div>
            </div>
          )}
      </div>
    ));
    return (
      <div className="projects">
        <div className="projects_left">
          {projectRows}
        </div>
        <div className="projects_right">
          <h1 className="projects_right_heading">
            Projects
          </h1>
          <Nav />
        </div>
        {/* <div className="float-left" id="projects-left">

          <div className="projects-container">

            <div className="row">
              <h1 className="project-title">Gamma Photo App Website</h1>
              <div className="col-md-12 col-lg-6 padding-bottom project-unit">
                <img className="project-icon" id="gamma" src="#" alt="Gamma-Photo-App" />
              </div>
              <div className="col-md-12 col-lg-6 padding-left project-unit">
                <p>A responsive web design built for a fictional photo app utilizing the Bootstrap framework. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course.</p>
                <p className="skills-text"><strong>Showcase Skills:</strong> Bootstrap3, CSS3, HTML5</p>
                <a type="button" href="https://github.com/MaeganW/Photo-App-Website" className="btn btn-primary sharp" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i> View My Code</a>
                <a type="button" href="https://maeganw.github.io/Photo-App-Website/PROJECT%20Gamma%20Photo%20App/index.html" className="btn btn-primary sharp see" target="_blank"><i className="fa fa-eye fa-lg" aria-hidden="true"></i> See the Site</a>
              </div>
            </div>
            <div className="row">
              <h1 className="project-title">Color Game App</h1>
              <div className="col-md-12 col-lg-6 padding-bottom project-unit">
                <p>An RGB Color Game App utilizing animations and DOM manipulation for an interactive and colorful experience. Boasts two separate modes of difficulty that can be replayed endlesssly. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course.</p>
                <p className="skills-text"><strong>Showcase Skills:</strong> JavaScript, CSS3, HTML5</p>
                <a type="button" href="https://github.com/MaeganW/JS-Color-Game-App" className="btn btn-primary sharp" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i> View My Code</a>
                <a type="button" href="https://maeganw.github.io/JS-Color-Game-App/ColorGame.html" className="btn btn-primary sharp see" target="_blank"><i className="fa fa-eye fa-lg" aria-hidden="true"></i> See the App</a>
              </div>
              <div className="col-md-12 col-lg-6 padding-left project-unit">
                <img className="project-icon" src="../../img-projects/colorgame-2.png" alt="Pomodoro-timer" />
              </div>
            </div>
            <div className="row">
              <h1 className="project-title">Pomodoro Timer</h1>
              <div className="col-md-12 col-lg-6 padding-bottom project-unit">
                <img className="project-icon" src="../../img-projects/pomodoro-1.png" alt="Pomodoro-timer" />
              </div>
              <div className="col-md-12 col-lg-6 padding-left project-unit">
                <p>A clean design work-flow timer based off of the famous "Pomodoro Technique" with adjustable session and break lengths. Keeps track of number of completed sessions. Employs stop and pause throughout sessions with a simple click of the mouse.</p>
                <p className="skills-text"><strong>Showcase Skills:</strong> JavaScript, CSS3, HTML5</p>
                <a type="button" href="https://github.com/MaeganW/Pomodoro-Timer" className="btn btn-primary sharp" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i> View My Code</a>
                <a type="button" href="https://maeganw.github.io/Pomodoro-Timer/" className="btn btn-primary sharp see" target="_blank"><i className="fa fa-eye fa-lg" aria-hidden="true"></i> See the App</a>
              </div>
            </div>
            <div className="row">
              <h1 className="project-title">MetaVidz Search Engine</h1>
              <div className="col-md-12 col-lg-6 padding-bottom project-unit">
                <p>A working Youtube search engine with a simple and clean interface. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course.</p>
                <p className="skills-text"><strong>Showcase Skills:</strong> JavaScript, JQuery, CSS3, HTML5, Youtube V3 Data API, Fancybox</p>
                <a type="button" href="https://github.com/MaeganW/Meta-Vidz-Search-Engine" className="btn btn-primary sharp" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i> View My Code</a>
                <a type="button" href="https://maeganw.github.io/Meta-Vidz-Search-Engine/" className="btn btn-primary sharp see" target="_blank"><i className="fa fa-eye fa-lg" aria-hidden="true"></i> See the App</a>
              </div>
              <div className="col-md-12 col-lg-6 padding-left project-unit">
                <img className="project-icon" src="../../img-projects/metavidz-last.png" alt="Pomodoro-timer" />
              </div>
            </div>
            <div className="row">
              <h1 className="project-title">Content Slider</h1>
              <div className="col-md-12 col-lg-6 padding-bottom project-unit">
                <img className="project-icon" src="../../img-projects/slider-4.png" alt="Pomodoro-timer" />
              </div>
              <div className="col-md-12 col-lg-6 padding-left project-unit">
                <p>A content slider with an automatic slideshow that users can watch and enjoy. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course.</p>
                <p className="skills-text"><strong>Showcase Skills:</strong> JavaScript, CSS3, HTML5</p>
                <a type="button" href="https://github.com/MaeganW/jQuery-Content-Slider" className="btn btn-primary sharp" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i> View My Code</a>
                <a type="button" href="https://maeganw.github.io/jQuery-Content-Slider/" className="btn btn-primary sharp see" target="_blank"><i className="fa fa-eye fa-lg" aria-hidden="true"></i> See the App</a>
              </div>
            </div>
            <div className="row">
              <h1 className="project-title">To-Do List App</h1>
              <div className="col-md-12 col-lg-6 padding-bottom project-unit">
                <p>A productivity app for the everyday. Add and delete items at will or cross off already completed activities. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course.</p>
                <p className="skills-text"><strong>Showcase Skills:</strong> JavaScript, JQuery, CSS3, HTML5</p>
                <a type="button" href="https://github.com/MaeganW/JS-To-Do-List-App" className="btn btn-primary sharp" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i> View My Code</a>
                <a type="button" href="https://maeganw.github.io/JS-To-Do-List-App/TODO%20List%20MAJOR%20PROJECT/index.html" className="btn btn-primary sharp see" target="_blank"><i className="fa fa-eye fa-lg" aria-hidden="true"></i> See the App</a>
              </div>
              <div className="col-md-12 col-lg-6 padding-left project-unit">
                <img className="project-icon" src="../../img-projects/todo-1.png" alt="Pomodoro-timer" />
              </div>
            </div>
            <div className="row">
              <h1 className="project-title">Patatap Clone</h1>
              <div className="col-md-12 col-lg-6 padding-bottom project-unit">
                <img className="project-icon" src="../../img-projects/patatap-1.png" alt="Pomodoro-timer" />
              </div>
              <div className="col-md-12 col-lg-6 padding-left project-unit">
                <p>A light and fun patatap clone inspired by the original Patatap app. Functions, sounds, and animations are tied to keyboard keys to create a fun interactive experience. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course.</p>
                <p className="skills-text"><strong>Showcase Skills:</strong> JavaScript, Paper.js, Howler.js, CSS3, HTML5</p>
                <a type="button" href="https://github.com/MaeganW/Patatap-Clone" className="btn btn-primary sharp" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i> View My Code</a>
                <a type="button" href="https://maeganw.github.io/Patatap-Clone/index.html" className="btn btn-primary sharp see" target="_blank"><i className="fa fa-eye fa-lg" aria-hidden="true"></i> See the App</a>
              </div>
            </div>

          </div>
        </div>

        <div className="float-right" id="projects-right">
          <Nav pageHeading="Projects" />
        </div> */}

      </div>
    );
  }
}

export default Projects;