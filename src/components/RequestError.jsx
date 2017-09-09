import React from 'react';

const RequestError = ({code, text}) => {
  return (
    <div className="error-modal">
      <div className="error-title">Error</div>
      <div className="error-description">Server responded with error <span className="error-status-code">{code}</span>:
        <p className="error-status-text">{text}</p>
      </div>
    </div>
  );
};

export default RequestError;
