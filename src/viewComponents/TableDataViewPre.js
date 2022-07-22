//file for dropable section in rows of table

import React from "react";
import { DnDBuilderHOC } from "build-ui";
import { TableData } from "../components/TableData";
import useDemoEditor from "../hooks/useDemoEditor";

const BuilderTableData = DnDBuilderHOC(TableData);
//renders tableData element and accep draggble elements
export const TableDataViewPre = ({ id, ...props }) => {
  const editor = useDemoEditor({
    id: id,
  });
  return (
    <BuilderTableData
      className="tableGridPre"
      {...props}
      onDrop={editor.handleDrop}
      onDragEnter={editor.handlePaintDropZone}
      onDragLeave={editor.handleEraseDropZone}
    />
  );
};
