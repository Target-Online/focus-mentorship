import "./spinner.css";

import React from "react";

import LoadingOverlay from "react-loading-overlay";

// eslint-disable-next-line react/prop-types
export const Spinner = ({ isLoading, children }) => (
  <LoadingOverlay active={isLoading} spinner text={"In progresss..."}>
    {children}
  </LoadingOverlay>
);

export default Spinner;
