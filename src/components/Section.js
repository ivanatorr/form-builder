import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";

export const Section = (props) => {
  console.log(props);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Drop element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="usePosTable" {...props}></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
