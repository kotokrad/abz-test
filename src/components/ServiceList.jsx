import React, { Component } from 'react';
import axios from 'axios';

import Service from './Service';
import ContentLoading from './ContentLoading';
import RequestError from './RequestError';
import { TOKEN } from '../config.js';

export default class ServiceList extends Component {

  constructor() {
    super()

    this.state = {
      data: [],
      loaded: false,
      errorCode: 0,
      errorText: '',
    };
  }

  componentWillMount() {
    axios.get('http://504080.com/api/v1/services/categories', {
      headers: {
        'Authorization': TOKEN,
      },
    })
    .then((response) => {
      if (response.data.success) {
        const data = response.data.data;
        this.setState({
          data,
          loaded: true,
        });
      }
    })
    .catch((error) => {
      if (error.response) {
        this.setState({
          errorCode: error.response.status,
          errorText: error.response.statusText,
        });
      }
      console.log(error);
    });
  }

  renderServices() {
    const data = this.state.data;
    return data.map(item => (
      <Service key={item.id} item={item}/>
    ));
  }

  render() {
    const { loaded, errorCode, errorText } = this.state;
    if (!errorCode) {
      return loaded ? (
        <div id="services" className="services">
          <div className="services-container">
            {this.renderServices()}
          </div>
      </div>
      ) : (
        <ContentLoading />
      )
    } else {
      return <RequestError code={errorCode} text={errorText} />;
    }
  }
}
