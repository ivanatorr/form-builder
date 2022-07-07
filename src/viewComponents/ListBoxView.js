import React, { useState } from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import ListBox from "../components/ListBox.js";
import { Button } from "react-bootstrap";

export const ListBoxView = ({ id }) => {
  const editor = useEditor({
    id: id,
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
    // <form>
    //   {inputFields.map((input, index) => {
    //     return (
    <DnDBuilder
      onDragStart={editor.handleDragStart}
      onDragEnd={editor.handleDragEnd}
      draggable={true}
    >
      <ListBox />
      <Button variant="danger" onClick={() => handleDelete()}>
        x
      </Button>
    </DnDBuilder>
    //     );
    //   })}
    // </form>
  );
};
