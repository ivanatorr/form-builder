//file for table rows when it come in main section

import React from "react";
import { DnDBuilderHOC } from "build-ui";
import { TableRow } from "../components/TableRow";

const BuilderTableRow = DnDBuilderHOC(TableRow);
//renders TableRow element
export const TableRowViewPre = ({ id, ...props }) => {
  return <BuilderTableRow className="tableRowPre" {...props} />;
};
