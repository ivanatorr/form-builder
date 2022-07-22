//This file is HTML form with props for Section element
//that will be take draggble elements

import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";

export const Section = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <>
      <div className="mt-1">
        <div className="fontStyle">
          <div className="usePosTable" {...props} ref={ref}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
});
