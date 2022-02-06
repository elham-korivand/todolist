import React, { useEffect } from "react";
import "./Alert.scss";

const Alert = ({ alert, showAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
};

export default Alert;
