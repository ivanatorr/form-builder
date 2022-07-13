import React from "react";
import { DnDBuilderHOC, useEditor } from "build-ui";
import { TableData } from "../components/TableData";

const BuilderTableData = DnDBuilderHOC(TableData);

export const TableDataView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <BuilderTableData
        {...props} 
        onDrop={editor.handleDrop}
    />
  );
};
