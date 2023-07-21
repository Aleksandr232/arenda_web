import React, { useState } from 'react';
import './Alert.css';

const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return showAlert ? (
    <div className="styled-alert">
      <div className="alert-overlay">
        <div className="alert-wrapper">
          <p>{message}</p>
          <button onClick={handleClose}>Закрыть</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Alert;
