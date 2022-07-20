import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";

export const Section = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <>
      <div className="mt-1">
        <div className="fontStyle">
          <Table striped hover>
            <tbody>
              <tr>
                <td className="usePosTable" {...props} ref={ref}>
                  {children}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
});
