import React, { useState } from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import { TableGrid } from "../components/TableGrid";
import { Button, Table } from "react-bootstrap";
import { SectionLabel } from "../components/SectionLabel";

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
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Drop element</th>
            <th>Drop element</th>
            <th>Drop element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <DnDBuilder
              className="tableGrid"
              onDrop={editor.handleDrop}
              onDragStart={editor.handleDragStart}
              onDragEnd={editor.handleDragEnd}
              onDragLeave={editor.toDnDHandler}
              draggable={true}
              as="td"
              {...props}
            ></DnDBuilder>

            <DnDBuilder
              onDrop={editor.handleDrop}
              onDragStart={editor.handleDragStart}
              onDragEnd={editor.handleDragEnd}
              onDragLeave={editor.toDnDHandler}
              draggable={true}
              as="td"
              {...props}
            ></DnDBuilder>
             <DnDBuilder
              onDrop={editor.handleDrop}
              onDragStart={editor.handleDragStart}
              onDragEnd={editor.handleDragEnd}
              onDragLeave={editor.toDnDHandler}
              draggable={true}
              as="td"
              {...props}
            ></DnDBuilder>
          </tr>
        </tbody>
      </Table>
      <Button variant="danger" onClick={() => handleDelete()}>
        x
      </Button>

  
    </div>
  );
};
