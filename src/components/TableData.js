//That HTML form needs for tableGrid layout and
//will be take all draggble elements

import React from "react";
import "../App.css";

export const TableData = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <td className="tableGrid" {...props} ref={ref}>
      {children}
    </td>
  );
});
