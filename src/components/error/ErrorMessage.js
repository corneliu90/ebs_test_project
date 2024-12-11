import React from "react";

function ErrorMessage({ message }) {
  if (!message) return null;

  return <div className="alert alert-danger">{message}</div>;
}

export default ErrorMessage;
