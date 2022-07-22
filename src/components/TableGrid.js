//That HTML form needs for tableGrid layout and
//will be body of table

import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";

export const TableGrid = (props) => {
  return (
    <Table className="mb-2 mt-3">
      <tbody {...props} />
    </Table>
  );
};
