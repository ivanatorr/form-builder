import React from "react";
import { DnDBuilderHOC, useEditor } from "build-ui";
import { TableData } from "../components/TableData";
import useDemoEditor from '../hooks/useDemoEditor'

const BuilderTableData = DnDBuilderHOC(TableData);

export const TableDataView = ({ id, ...props }) => {
  const editor = useDemoEditor({
    id: id,
  });
  return (
    <BuilderTableData
        {...props} 
        onDrop={editor.handleDrop}

        onDragEnter = {editor.handlePaintDropZone}
        onDragLeave = {editor.handleEraseDropZone}
    />
  );
};
