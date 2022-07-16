import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";

export const Section = (props) => {
  console.log(props);
  return (
    <div className="mt-1">
      <div className="fontStyle">
        <div className="text-center">Drop element</div>
        <Table  striped bordered hover>
         
          <tbody>
            <tr>
              <td className="usePosTable" {...props}></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
