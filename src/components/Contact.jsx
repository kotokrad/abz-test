/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';

import ContactForm from './ContactForm';
import '../styles/contact.scss';

export default class Contact extends Component {

  render() {
    return (
      <div className="contact">
        <header className="main-header">
          <div className="container">
            <div className="topline">
              <a href="#" className="header-logo">Denteez</a>
              <a href="" className="btn btn-log-in">Log In Now</a>
            </div>
            <h1 className="header-title">Home of Dentistry</h1>
            <p className="header-text">Denteez was created by dentists for dentistry in order to<br />make the life of everyone involved in dentistry easier.</p>
          </div>
        </header>
        <main className="main-content">
          <div className="container">
            <ContactForm />
          </div>
        </main>
        <div className="about">
          <div className="container">
            <div className="about-title">About Denteez</div>
            <div className="about-text">
              <div className="text-left">Why is it always so difficult to find what you are looking for in dentistry? Whether it is the latest advancement in technology or techniques or simply a review or understanding of the vast amount of products? Perhaps finding someone to just fix your broken equipment or simply hiring new staff or looking for that new job?</div>
              <div className="text-right">Our mission is to give every dental professional the possibility to discuss and share all aspects of their profession, their practice and their business. We aim to make the world of dentistry easy and accessible, so every dental professional can find what they are looking for quickly and easily all in one place.</div>
            </div>
          </div>
        </div>
        <footer className="main-footer">
          <div className="container">
            <div className="copy">Denteez Copyright 2015</div>
            <div className="footer-links">
              <a href="#" className="footer-support">Support</a>
              <a href="#" className="footer-policy">Privacy Policy</a>
              <a href="#" className="footer-terms">Terms of use</a>
            </div>
          </div>
        </footer>
      </div>
    );
  };
}
