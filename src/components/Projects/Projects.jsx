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
    url: 'https://github.com/MaeganW/Trillo-Website',
    content: 'All-In-One responsive Travel Website built using Flexbox, SCSS, and custom css animations (Built by Maegan Womble - designed by Jonas Schmedtmann).'
  },
  {
    src: colorGame,
    title: 'Color Game',
    id: 'colorGame',
    url: 'https://github.com/MaeganW/JS-Color-Game-App',
    content: "An RGB Color Game App utilizing animations and DOM manipulation for an interactive and colorful experience. Boasts two separate modes of difficulty that can be replayed endlesssly. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course."
  },
  {
    src: gamma,
    title: 'Gamma Photo App Site',
    id: 'gamma',
    url: 'https://github.com/MaeganW/Photo-App-Website',
    content: "A responsive web design built for a fictional photo app utilizing the Bootstrap framework. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course."
  },
  {
    src: metaVidz,
    title: 'MetaVidz',
    id: 'metaVidz',
    url: 'https://github.com/MaeganW/Meta-Vidz-Search-Engine',
    content: "A working Youtube search engine with a simple and clean interface. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course."
  },
  {
    src: jsClock,
    title: 'JS Clock',
    id: 'jsClock',
    url: 'https://codepen.io/MaeganW/pen/dJRLPr',
    content: "A simple clock that tells time. Uses javascript and css. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 2"
  },
  {
    src: cssVariables,
    title: 'CSS Variables Manipulation',
    id: 'cssVariables',
    url: 'https://codepen.io/MaeganW/pen/ypbwXg',
    content: "A mini app demonstrating native css variable manipulation using javascript. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 3"
  },
  {
    src: drumKit,
    title: 'Drum Kit',
    id: 'drumKit',
    url: 'https://codepen.io/MaeganW/pen/VybRBR',
    content: "A drumkit application made using JavaScript and sound files to turn the keyboard into a responsive music board. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 1"
  },
  {
    src: flexPanel,
    title: 'Flex Panel Display',
    id: 'flexPanel',
    url: 'https://github.com/MaeganW/Flex-Panel-Gallery',
    content: "An exercise in responsive panels with css flexbox. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 5"
  },
  {
    src: scroll,
    title: 'Image Slide in on Scroll',
    id: 'scroll',
    url: 'https://codepen.io/MaeganW/pen/PEdqWO',
    content: "User scroll position is tracked, triggering images to slide into position when user scrolls past. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 13"
  },
  {
    src: patatap,
    title: 'Patatap Clone',
    id: 'patatap',
    url: 'https://github.com/MaeganW/Patatap-Clone',
    content: "A light and fun patatap clone inspired by the original Patatap app. Functions, sounds, and animations are tied to keyboard keys to create a fun interactive experience. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course."
  },
  {
    src: typeAhead,
    title: 'Type Ahead Pokedex Search',
    id: 'typeAhead',
    url: 'https://codepen.io/MaeganW/pen/zpPWWv',
    content: "An exercise in using the Pokemon API and RegEx to create a type ahead search field pokedex. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 6"
  },
  {
    src: pomodoro,
    title: 'Pomodoro Timer',
    id: 'pomodoro',
    url: 'https://github.com/MaeganW/Pomodoro-Timer',
    content: 'A clean design work-flow timer based off of the famous "Pomodoro Technique" with adjustable session and break lengths. Keeps track of number of completed sessions. Employs stop and pause throughout sessions with a simple click of the mouse.'
  },
  {
    src: todo,
    title: 'Todos App',
    id: 'todo',
    url: 'https://github.com/MaeganW/JS-To-Do-List-App',
    content: "A productivity app for the everyday. Add and delete items at will or cross off already completed activities. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course."
  },
  {
    src: okCrime,
    title: 'OK Crime',
    id: 'okCrime',
    url: 'https://github.com/MaeganW/Oklahoma_Crime_Data',
    content: 'A chart created using data from the FBI database detailing criminal activity in the state of Oklahoma in 2013 for over 40 cities. SHOWCASE SKILLS: ES6, React, C3js, CSS'
  },
  {
    src: shiftSelect,
    title: 'Select with Shift',
    id: 'shiftSelect',
    url: 'https://codepen.io/MaeganW/pen/zpWJZY',
    content: "An small exercise in programmatically recreating the hold and shift effect to select check boxes. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 10"
  },
  {
    src: paintApp,
    title: 'Canvas Paint App',
    id: 'paintApp',
    url: "https://codepen.io/MaeganW/pen/BJJMjy",
    content: "An exercise in using HTML canvas in conjunction with javascript. Allows users to draw images using their mouse. Created in response to Wes Bos' 30 Days of Javascript Challenge: Day 8"
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
              <button><a href={img.url}>View Code</a></button>
            </div>
          </div>
        ) : (
            <div className="projects_row_right">
              <div className="projects_row_info">
                <p>{img.content}</p>
                <button><a href={img.url}>View Code</a></button>
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
      </div>
    );
  }
}

export default Projects;