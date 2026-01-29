import React from "react";
import "../css/FormError.css";

export default function FormError({ message }) {
  if (!message) return null;

  return (
    <p className="form-error">
      {message}
    </p>
  );
}
