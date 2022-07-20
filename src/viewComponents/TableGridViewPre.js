import React from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import { TableGrid } from "../components/TableGrid";
import { CloseButton } from "react-bootstrap";

export const TableGridViewPre = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });

  // const [inputFields, setInputFields] = useState([{ id: id }]);
  // const removeFields = (index) => {
  // let data = [...inputFields];
  // data.splice(index, 1);
  // setInputFields(data);
  // };
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
        // onDrop={editor.handleDrop}
        draggable={true}
      >
        <TableGrid {...props} />

        {/* <Button variant="danger" onClick={() => handleDelete()}>
x
</Button> */}
      </DnDBuilder>
    </>
  );
};
