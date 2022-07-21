//This file is HTML form with props for Section element
//that will be take draggble elements and can be dropable

import React from "react";
import "../App.css";

export const SectionLabel = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      Section Label
      {children}
    </div>
  );
});
