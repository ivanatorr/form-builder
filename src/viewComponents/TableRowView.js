import React from "react";
import { DnDBuilderHOC } from "build-ui";
import { TableRow } from "../components/TableRow";

const BuilderTableRow = DnDBuilderHOC(TableRow);

export const TableRowView = ({ id, ...props }) => {
  return (
    <BuilderTableRow {...props} />
  );
};
