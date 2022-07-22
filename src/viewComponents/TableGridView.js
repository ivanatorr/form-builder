//file for view of table grid layout when it come in main section

import React from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import { TableGrid } from "../components/TableGrid";
import { CloseButton } from "react-bootstrap";

//renders TableGrid element
export const TableGridView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  const actions = useActions();
  const handleDelete = () => {
    actions.timeBatched.triggerDelete({
      id: id,
    });
  };

  return (
    <>
      <DnDBuilder
        onDragStart={editor.handleDragStart}
        onDragEnd={editor.handleDragEnd}
        draggable={true}
      >
        <CloseButton
          className="tableGridCloseButton"
          onClick={() => handleDelete()}
        />
        <TableGrid {...props} />
      </DnDBuilder>
    </>
  );
};
