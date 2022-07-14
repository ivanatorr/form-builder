import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";

export const TableGrid = (props) => {
  return (
    <Table striped bordered hover className="mb-3 mt-3">
      <tbody {...props} />
    </Table>
  );
};
