import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div class="float-left" id="contact-left">
        <h1 class="page-heading">Contact</h1>
        <nav>
          <p>
            <a href="about.html">About</a> \
            <a href="projects.html">Projects</a> \
            <a href="index.html">Home</a>
          </p>
        </nav>
      </div>

      <div class="float-right" id="contact-right">
        <article class="text-container">
          <h2 class="contact-headers">Let's Stay in Touch!</h2>

          <div id="form-container">
            <form action="https://formspree.io/mdw.webcreations@gmail.com" method="POST">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="name" name="name" class="form-control" id="name" placeholder="Jane Doe">
              </div>
              <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" name="_replyto" class="form-control" id="email" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="phoneNumber">Phone Number:</label>
                <input type="telephone" name="phone" class="form-control" id="phoneNumber" placeholder="(000) 000-000">
              </div>
              <div class="form-group">
                <label for="message">Message Me:</label>
                <textarea class="form-control" name="message" rows="7" cols="45" id="message"></textarea>
              </div>
              <button type="submit" id="btn-submit" class="btn btn-default" value="Send">Submit Message</button>
            </form>
          </div>

          <h2 id="follow-me" class="contact-headers">Follow Me On</h2>
          <div id="social-media-container">
            <a class="contact-icon" href="https://www.linkedin.com/in/maegan-womble-292386138/" target="_blank"><i class="fa fa-linkedin-square fa-4x" aria-hidden="true"></i></a>
            <a class="contact-icon" href="https://github.com/MaeganW" target="_blank"><i class="fa fa-github fa-4x" aria-hidden="true"></i></a>
            <a class="contact-icon" href="https://www.youtube.com/channel/UCHtYv2eXd-2ML8QrAw6jS9w" target="_blank"><i class="fa fa-youtube fa-4x" aria-hidden="true"></i></a>
            <a class="contact-icon" href="https://twitter.com/maegan_womble" target="_blank"><i class="fa fa-twitter fa-4x" aria-hidden="true"></i></a>
          </div>
        </article>
      </div>
    );
  }
}

export default Contact;