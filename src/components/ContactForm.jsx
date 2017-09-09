import React, { Component } from 'react';
import { Form, Text, Select, Textarea } from 'react-form';
import axios from 'axios';
import { validate } from 'email-validator';

import ContentLoading from './ContentLoading';
import FormImageInput from './FormImageInput';
import RequestError from './RequestError';

import { MAX_FILE_SIZE } from '../config';
import { MAX_IMAGE_DIMENSIONS } from '../config';

export default class ContactForm extends Component {
  constructor() {
    super()

    this.state = {
      types: [],
      otherTypeValue: 0,
      loaded: false,
      errorCode: 0,
      errorText: '',
    };
  }

  componentWillMount() {
    axios.get('http://504080.com/api/v1/directories/enquiry-types')
    .then((response) => {
      if (response.data.success) {
        const data = response.data.data.map((item, n) => {
          return {
            label: item.name,
            value: n,
          };
        });
        this.setState({
          types: data,
          loaded: true,
          otherTypeValue: data.length - 1,
        });
      }
    }).catch((error) => {
      if (error.response) {
        this.setState({
          errorCode: error.response.status,
          errorText: error.response.statusText,
        });
      }
    });
  }

  renderForm() {
    const { types } = this.state;
    return (
      <Form
        onSubmit={({ type, otherType, name, email, subject, description, photos }) => {
          const { types, otherTypeValue } = this.state;
          var data = new FormData();
          data.append('enquiry_type', type !== otherTypeValue && type < otherTypeValue ? types[type].label : otherType);
          data.append('user_name', name);
          data.append('email', email);
          data.append('subject', subject);
          data.append('description', description);
          photos && photos.length && photos.forEach((photo) => data.append('photo', photo));
          axios.post('http://504080.com/api/v1/support', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((response) => {
            console.log(response)
          }).catch((error) => {
            if (error.response) {
              this.setState({
                errorCode: error.response.status,
                errorText: error.response.statusText,
              });
            }
          });
        }}
        validate={({ type, otherType, name, email, subject, description }) => {
          return {
            otherType: type === this.state.otherTypeValue && !otherType ? 'Please enter type!' : undefined,
            name: !name ? 'Please enter a valid name!' : undefined,
            email: !email || !validate(email) ? 'Please enter a valid email!' : undefined,
            subject: !subject ? 'Please enter subject!' : undefined,
            description: !description || description.length > 1000 ? 'Please enter description!' : undefined,
          }
        }}
        defaultValues={{
          type: this.state.otherTypeValue,
        }}
        >
          {({ getValue, setValue, submitForm, resetForm }) => {
            return (
              <form onSubmit={submitForm}>
                <div className="form-content">
                  <div className="form-hint">
                    Fields marked &#8220;*&#8221; are required
                  </div>
                  <label className="form-label">
                    Enquiry Type *
                    <Select
                      field="type"
                      options={types}
                      className="form-select select-type"
                    />
                  </label>
                  {
                    getValue('type') === this.state.otherTypeValue ?
                    <Text
                      field="otherType"
                      placeholder="Other"
                      className="form-input input-type"
                      autoFocus={true}
                    /> :
                    <noscript />
                  }
                  <div className="form-horizontal-group">
                    <label className="form-label label-name">
                      Name *
                      <Text
                        field="name"
                        placeholder="Dentist"
                        className="form-input input-name"
                      />
                    </label>
                    <label className="form-label label-email">
                      Email *
                      <Text
                        field="email"
                        placeholder="rachelm@gmail.com"
                        className="form-input input-email"
                      />
                    </label>
                  </div>
                  <label className="form-label">
                    Subject *
                    <Text field="subject" className="form-input input-subject" />
                  </label>
                  <label className="form-label">
                    Description * <span className="text-counter">({(getValue('description') || '').length}/1000)</span>
                    <Textarea
                      maxLength={1000}
                      rows={7}
                      field="description"
                      className="form-input input-description"
                    />
                  </label>
                  <FormImageInput
                    field="photos"
                    className="form-input input-image"
                    maxFileSize={MAX_FILE_SIZE}
                    maxImageDimensions={MAX_IMAGE_DIMENSIONS}
                    accept={['image/png', 'image/jpg']}
                    >
                    </FormImageInput>
                  </div>
                  <button
                    type="submit"
                    onClick={() => {
                      submitForm();
                      resetForm();
                    }}
                    className="btn btn-submit"
                    >
                      Submit
                    </button>
                  </form>
                )
              }}
            </Form>
          );
  }

  render() {
    const { loaded, errorCode, errorText } = this.state;
    if (!loaded) {
      return (
        <div className="form-container">
          <div className="form-content">
            <ContentLoading />
          </div>
        </div>)
    } else {
      return (
        <div className="form-container">
        { this.renderForm() }
        { errorCode ? (
          <RequestError code={errorCode} text={errorText} />
        ) : ('')}
        </div>
      );
    }
  }
}
