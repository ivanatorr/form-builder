import React, { useState } from "react";
import { DnDBuilder, useEditor } from "build-ui";
import { TableGrid } from "../components/TableGrid";
import { Button } from "react-bootstrap";

export const TableGridView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  const [inputFields, setInputFields] = useState([{ id: id }]);
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <div>
      {inputFields.map((input, index) => {
        return (
          <DnDBuilder
            onDragStart={editor.handleDragStart}
            onDragEnd={editor.handleDragEnd}
            onDragLeave={editor.toDnDHandler}
            onDrop={editor.handleDrop}
            draggable={true}
          >
            <TableGrid {...props} />
            <Button variant="danger" onClick={() => removeFields(index)}>
              x
            </Button>
          </DnDBuilder>
        );
      })}
    </div>
  );
};
