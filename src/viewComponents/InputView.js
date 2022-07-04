import React, { useState } from "react";
import { DnDBuilder, useEditor } from "build-ui";
import Input from "../components/Input.js";
import { Button } from "react-bootstrap";

export const InputView = ({ id }) => {
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
    <form>
      {inputFields.map((input, index) => {
        return (
          <DnDBuilder
            onDragStart={editor.handleDragStart}
            onDragEnd={editor.handleDragEnd}
            onDragLeave={editor.toDnDHandler}
            draggable={true}
          >
            <Input />
            <Button variant="danger" onClick={() => removeFields(index)}>
              x
            </Button>
          </DnDBuilder>
        );
      })}
    </form>
  );
};
