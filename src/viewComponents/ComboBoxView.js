import React, { useState } from "react";
import { DnDBuilder, useEditor } from "build-ui";
import { Button } from "react-bootstrap";
import ComboBox from "../components/ComboBox.js";

export const ComboBoxView = ({ id }) => {
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
            draggable={true}
          >
            <ComboBox />
            <Button variant="danger" onClick={() => removeFields(index)}>
              x
            </Button>
          </DnDBuilder>
        );
      })}
    </form>
  );
};
