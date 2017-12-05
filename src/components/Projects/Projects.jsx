import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <img id="me" src="img/ProfilePic2%20(3).jpg" alt="profile picture"/>
                <section class="container">
                    <div class="float-left" id="about-left">
                        <h1 class="page-heading">About</h1>
                        <nav>
                            <p>
                                <a href="index.html">Home</a> \
                                <a href="projects.html">Projects</a> \
                                <a href="contact.html">Contact</a>
                            </p>
                        </nav>
                    </div>
                    <div class="float-right" id="about-right">
                        <article class="text-container">
                            <h2>Who am I?</h2>
                            <p>I am a front-end web developer with experience primarily in Javascript but with an interest in Node.js and the back-end of applications.</p>
                            <h2>My Story</h2>
                            <p>In a previous career, I was an English instructor in a Japanese English school in Osaka. When I started, the students didn't have a grasp of the fundamentals, but after identifying the problem, I developed curriculum and created projects to help my students master English. I use this same development process in my work today.</p>
                            <p>Since childhood I have been programming and creating animations as a hobby and have recently rekindled that passion into a career.</p>
                            <h2>What you can expect from me.</h2>
                            <p>A user-centered mindset and a sensitivity for effective design. From my former career as a teacher, I bring a tested work ethic and process well-suited for collaborating and developing solutions to problems together.</p>
                            <p>Here is a rough framework outlining my work process:</p>
                            <ol>
                                <li><strong class="em-text">Identify</strong> project's purpose and outline objectives</li>
                                <li><strong class="em-text">Define</strong> project scope and develop timelines</li>
                                <li><strong class="em-text">Research</strong> </li>
                                <li><strong class="em-text">Structure</strong> content and layout of the project</li>
                                <li><strong class="em-text">Create and Develop</strong> </li>
                                <li><strong class="em-text">Test</strong> project media and effectiveness</li>
                                <li><strong class="em-text">Launch</strong></li>
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