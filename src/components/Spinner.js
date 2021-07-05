import React from 'react'

export const Spinner = () => {
  return (
    <span>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"></span>
      <span className="visually-hidden">Loading...</span>
    </span>
  );
}
