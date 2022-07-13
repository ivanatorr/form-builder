import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";

export const TableGrid = (props) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Drop element</th>
          <th>Drop element</th>
        </tr>
      </thead>
      <tbody {...props} />
    </Table>
  );
};
