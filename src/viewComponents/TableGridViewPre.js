//file for view of table grid layout when it come in main section
//preview mode

import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import { TableGrid } from "../components/TableGrid";
//renders TableGrid element
export const TableGridViewPre = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });

  return (
    <>
      <DnDBuilder
        onDragStart={editor.handleDragStart}
        onDragEnd={editor.handleDragEnd}
        draggable={true}
      >
        <TableGrid {...props} />
      </DnDBuilder>
    </>
  );
};
