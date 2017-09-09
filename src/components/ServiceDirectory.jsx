/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery.dotdotdot';

import ServiceList from './ServiceList';
import '../styles/services.scss';

export default class ServiceDirectory extends Component {

  componentDidMount() {
    this.ellipsis();
  }

  ellipsis() {
    const $descrNode = $('.feat-list.products .item-descr');
    const lines = 5;
    $descrNode.dotdotdot({
      height: Number($descrNode.css('lineHeight').replace('px', '')) * lines,
      fallbackToLetter: true,
    });
    const $titleNode = $('.item-title');
    $titleNode.dotdotdot({
      height: Number($titleNode.css('lineHeight').replace('px', '')),
      wrap: 'letter',
    });
  }

  render() {
    return (
      <div className="service-directory">
        <header className="main-header">
          <div className="container">
            <a href="#" className="header-logo">Denteez</a>
            <div className="header-search">
              <div className="search-field">
                <form className="search-form" action="/search">
                  <input type="text" name="q" placeholder="Company Name" />
                </form>
              </div>
            </div>
            <div className="header-buttons">
              <a href="#" className="header-button button-messages">Messages</a>
              <a href="#" className="header-button button-notifications">Notifications</a>
              <a href="#" className="header-user">
                <div className="userpic"><img src="/images/userpic.png" width="32" height="32" alt="Userpic" /></div>
                <div className="username">Maximillian Beekeeper</div>
              </a>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <aside className="sidebar sidebar-left">
              <nav className="main-nav">
                <ul>
                  <li className="section main-nav-link nav-link-feed"><a href="#">Feed</a></li>
                  <li className="section main-nav-link nav-link-ask"><a href="#">Ask a Colleague</a></li>
                  <li className="section main-nav-link nav-link-companies"><a href="#">Companies</a></li>
                  <li className="section main-nav-link nav-link-service"><a href="#">Service Directory</a></li>
                </ul>
              </nav>
              <div className="section ad-section">
                <div className="ad-header section-title">Advertisement</div>
                <a href="#" className="ad-content"><img src="/images/ad-1.jpg" alt="" /></a>
                <a href="#" className="ad-footer">Ads By Denteez.com</a>
              </div>
              <div className="section feat-list companies">
                <div className="feat-list-header">
                  <a href="#" className="feat-list-all">See All</a>
                  <div className="feat-list-title section-title">Featured Companies</div>
                </div>
                <ul>
                  <li><div className="feat-list-item">
                      <a href="#" className="item-image">
                        <img src="/images/company-1.png" alt="Company" />
                      </a>
                      <a href="#" className="item-title">Oh Long Company Name</a>
                      <div className="item-descr">Manufacturer<br />Belgrade, Serbia</div>
                      <a href="#" className="item-action">Follow Now</a>
                    </div>
                  </li>
                  <li><div className="feat-list-item">
                      <a href="#" className="item-image">
                        <img src="/images/company-2.png" alt="Company" />
                      </a>
                      <a href="#" className="item-title">Long Company Name</a>
                      <div className="item-descr">Manufacturer<br />Belgrade, Serbia</div>
                      <a href="#" className="item-action">Follow Now</a>
                    </div>
                  </li>
                  <li><div className="feat-list-item">
                      <a href="#" className="item-image">
                        <img src="/images/company-3.png" alt="Company" />
                      </a>
                      <a href="#" className="item-title">Company Name</a>
                      <div className="item-descr">Manufacturer<br />Belgrade, Serbia</div>
                      <a href="#" className="item-action">Follow Now</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sidebar-footer">
                <div className="copy">Denteez Copyright 2015</div>
                <a href="#">Terms of use</a>
                <a href="#">Privacy Policy</a>
              </div>
            </aside>
            <div className="content">
              <header className="content-header">
                <h1 className="content-title">Service Directory</h1>
                <button className="btn btn-new-service">Add New Service</button>
              </header>
              <ServiceList />
            </div>
            <aside className="sidebar sidebar-right">
              <div className="section feat-list people">
                <div className="feat-list-header">
                  <a href="#" className="feat-list-all">See All</a>
                  <div className="feat-list-title section-title">People you may know</div>
                </div>
                <ul>
                  <li><div className="feat-list-item">
                      <a href="#" className="item-title">Dennis Adams</a>
                      <a href="#" className="item-image">
                        <img src="/images/people-1.png" alt="Dennis Adams" />
                      </a>
                      <div className="item-descr">Dentist (Practice Owner)<br />
                        London, England</div>
                      <a href="#" className="item-action">Add Friend</a>
                    </div>
                  </li>
                  <li><div className="feat-list-item">
                      <a href="#" className="item-title">Mary Carpenter</a>
                      <a href="#" className="item-image">
                        <img src="/images/people-2.png" alt="Mary Carpenter" />
                      </a>
                      <div className="item-descr">Dentist (Practice Owner)<br />
                        Belgrade, Serbia</div>
                      <a href="#" className="item-action">Add Friend</a>
                    </div>
                  </li>
                  <li><div className="feat-list-item">
                      <a href="#" className="item-title">Danielle Salazar</a>
                      <a href="#" className="item-image">
                        <img src="/images/people-3.png" alt="Danielle Salazar" />
                      </a>
                      <div className="item-descr">Dentist (Practice Owner)<br />
                        Paris, France</div>
                      <a href="#" className="item-action">Add Friend</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="section feat-list products">
                <div className="feat-list-header">
                  <a href="#" className="feat-list-all">See All</a>
                  <div className="feat-list-title section-title">Featured Products</div>
                </div>
                <ul>
                  <li><div className="feat-list-item">
                      <a href="#" className="item-title">Oh Long Product Name Lorem ipsum dolor</a>
                      <a href="#" className="item-image">
                        <img src="/images/product-1.png" alt="Product" />
                      </a>
                      <div className="item-descr">Product Short Description. The quick brown fox jumps over the lazy dog</div>
                    </div>
                  </li>
                  <li><div className="feat-list-item">
                      <a href="#" className="item-title">Product Name</a>
                      <a href="#" className="item-image">
                        <img src="/images/product-2.png" alt="Product" />
                      </a>
                      <div className="item-descr" title="Product Short Description. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet.">Product Short Description. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet.</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="ad-section">
                <div className="ad-header section-title">Advertisement</div>
                <a href="#" className="ad-content"><img src="/images/ad-2.jpg" alt="" /></a>
                <a href="#" className="ad-footer">Ads By Denteez.com</a>
              </div>
            </aside>
          </div>
        </main>
      </div>
    );
  }
}
