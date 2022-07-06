import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";
import { SectionViewLabel } from "../viewComponents/SectionViewLabel";

export const TableGrid = (props) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Drop elemnt</th>
          <th>Drop elemnt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <SectionViewLabel {...props} />
          </td>
          <td>
            <SectionViewLabel {...props} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
