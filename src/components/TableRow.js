//This file is HTML form with props for TableRow element
//it is a tr element of table layout

import React from "react";
import "../App.css";

export const TableRow = React.forwardRef(({ ...props }, ref) => {
  return <tr {...props} ref={ref} />;
});
