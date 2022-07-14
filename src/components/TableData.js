import React from "react";
import "../App.css";

export const TableData = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <td {...props} ref={ref}>
      {children}
    </td>
  );
});
