import React, { useState } from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import { TableGrid } from "../components/TableGrid";
import { Button, Modal, CloseButton } from "react-bootstrap";
import { SectionLabel } from "../components/SectionLabel";

export const TableGridView = ({ id, ...props }) => {
    
const editor = useEditor({
id: id,
});

const handleMoveToBack = () => {
actions.timeBatched.triggerShift({
id: id,
// Send to last position
});
};
const handleMoveOneBack = () => {
actions.timeBatched.triggerShift({
id: id,
// Send to one position
// before
relative: -1,
});
};

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
<CloseButton onClick={() => handleDelete()} />
<TableGrid {...props} />


{/* <Button variant="danger" onClick={() => handleDelete()}>
x
</Button> */}
</DnDBuilder>
</>
);
};