import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <ul>
      <li><Link to="/services">Service Directory</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  );
};

export default Home;
