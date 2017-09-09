import React, { Component } from 'react'
import { FormInput } from 'react-form'

class FormImageInput extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      invalid: false,
      count: 0,
    };
  }

  validateImage(file) {
    return new Promise((resolve, reject) => {
      if (FileReader && file && file.size && !this.state.data[file.name]) {
        const { maxFileSize, accept, maxImageDimensions } = this.props;
        const { name, size, type } = file;
        const imageNode = new Image();
        const reader = new FileReader()
        reader.onload = () => {
          const imageData = reader.result;
          imageNode.src = imageData;
          imageNode.onload = () => {
            const dimensions = {
              width: imageNode.width,
              height: imageNode.height,
            };
            const { width, height } = dimensions;
            const valid = accept.includes(type) &&
              size <= maxFileSize &&
              width && width <= maxImageDimensions.width &&
              height && height <= maxImageDimensions.height;
            console.log(`${width}x${height}`);
            console.log(`${Math.round(size / 1024)} kB`);
            if (valid) {
              const data = this.state.data;
              data[name] = imageData;
              this.setState({
                data,
                count: this.state.count + 1,
                invalid: false,
              });
              resolve(file);
            } else {
              this.setState({
                invalid: true,
              });
              reject(file);
            }
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  renderImages(getValue, removeValue) {
    const images = getValue();
    if (images) {
      return images.map((image, i) => (
        <label key={image.name} className="form-label label-image">
          <div className="image-wrapper">
            <img
              className="image"
              src={this.state.data[image.name]}
              width={128}
              height={128}
              alt=""
            />
          </div>
          <button className="image-remove" onClick={() => {
            const data = this.state.data;
            data[image.name] = false;
            this.setState({
              data,
              count: this.state.count - 1,
            });
            removeValue(i)
          }}>Remove</button>
        </label>
      ));
    }
  }

  render() {
    const { field, maxFileSize, maxImageDimensions, accept, ...rest } = this.props;
    const count = this.state.count;
    return (
      <FormInput field={field}>
        {({ addValue, removeValue, getValue }) => {
          return (
            <div className="input-image-wrapper">
              { this.renderImages(getValue, removeValue) }
              {count < 5 ? (
                <label className="form-label label-image label-add">
                  <div className="label-title">Add photo</div>
                  <div className="label-text">Minimum size of 300x300 jpeg jpg png 5 MB</div>
                  {
                    this.state.invalid ? (
                      <div className="label-invalid">The photo does not meet the requirements</div>
                    ) : ('')
                  }
                  <input
                    {...rest}
                    type="file"
                    name="qwe"
                    id="blah"
                    onChange={event => {
                      const file = event.target.files[0];
                      this.validateImage(file)
                      .then(file => {
                        console.log('valid:', file.name);
                        addValue(file);
                      })
                      .catch(file => { console.log('validation failed:', file.name) })
                    }}
                  />
                </label>
              ) : ('')}
            </div>
          )
        }}
      </FormInput>
    )
  }
}

export default FormImageInput;
