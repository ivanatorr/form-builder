import React, { useState } from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import { Button } from "react-bootstrap";
import CheckBox from "../components/CheckBox.js";

export const CheckBoxView = ({ id }) => {
  const editor = useEditor({
    id: id,
    type: "checkbox",
  });
  const actions = useActions();
  const handleDelete = () => {
    actions.timeBatched.triggerDelete({
      id: id,
    });
  };
  // const [inputFields, setInputFields] = useState([{ id: id }]);
  // const removeFields = (index) => {
  //   let data = [...inputFields];
  //   data.splice(index, 1);
  //   setInputFields(data);
  // };
  return (
    <DnDBuilder
      onDragStart={editor.handleDragStart}
      onDragEnd={editor.handleDragEnd}
      draggable={true}
    >
      <CheckBox />
      <Button variant="danger" onClick={() => handleDelete()}>
        x
      </Button>
    </DnDBuilder>
  );
};
