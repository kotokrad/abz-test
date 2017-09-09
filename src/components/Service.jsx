import React from 'react';

const Service = ({ item }) => {
  return (
    // eslint-disable-next-line jsx-a11y/href-no-hash
    <a href="#" className="service">
      <div className="service-icon">
        <img src={item.icon} alt={item.title} />
      </div>
      <div className="service-text">{item.title}</div>
    </a>
  )
};

export default Service;
