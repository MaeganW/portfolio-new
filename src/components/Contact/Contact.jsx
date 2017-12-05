import React, { Component } from 'react';
import Nav from '../Nav';

class Contact extends Component {
  render() {
    return (
      <div>

        <div className="float-left" id="contact-left">
          <Nav pageHeading="Contact"/>
        </div>

        <div className="float-right" id="contact-right">
          <article className="text-container">

            <h2 className="contact-headers">Let's Stay in Touch!</h2>

            <div id="form-container">
              <form action="https://formspree.io/mdw.webcreations@gmail.com" method="POST">
                <div className="form-group">
                  <label for="name">Name:</label>
                  <input type="name" name="name" className="form-control" id="name" placeholder="Jane Doe"/>
                </div>
                <div className="form-group">
                  <label for="email">Email Address:</label>
                  <input type="email" name="_replyto" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <label for="phoneNumber">Phone Number:</label>
                  <input type="telephone" name="phone" className="form-control" id="phoneNumber" placeholder="(000) 000-000"/>
                </div>
                <div className="form-group">
                  <label for="message">Message Me:</label>
                  <textarea className="form-control" name="message" rows="7" cols="45" id="message"></textarea>
                </div>
                <button type="submit" id="btn-submit" className="btn btn-default" value="Send">Submit Message</button>
              </form>
            </div>

            <h2 id="follow-me" className="contact-headers">Follow Me On</h2>
            <div id="social-media-container">
              <a className="contact-icon" href="https://www.linkedin.com/in/maegan-womble-292386138/" target="_blank"><i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i></a>
              <a className="contact-icon" href="https://github.com/MaeganW" target="_blank"><i className="fa fa-github fa-4x" aria-hidden="true"></i></a>
              <a className="contact-icon" href="https://www.youtube.com/channel/UCHtYv2eXd-2ML8QrAw6jS9w" target="_blank"><i className="fa fa-youtube fa-4x" aria-hidden="true"></i></a>
              <a className="contact-icon" href="https://twitter.com/maegan_womble" target="_blank"><i className="fa fa-twitter fa-4x" aria-hidden="true"></i></a>
            </div>

          </article>
        </div>

      </div>
    );
  }
}

export default Contact;