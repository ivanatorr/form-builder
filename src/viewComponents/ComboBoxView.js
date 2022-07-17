import React, { useState } from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import { Button, Modal, Form } from "react-bootstrap";
import ComboBox from "../components/ComboBox.js";

export const ComboBoxView = ({ id }) => {
  const [labelChange, setLabel] = useState("Combobox");
  const [sizeChange, setSize] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editor = useEditor({
    id: id,
  });
  const handleChangeSize = (event) =>{
    setSize(event.target.value)
  }
  const handleChange = (event) => {
    setLabel(event.target.value);
  };
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
    <>
      <div onClick={handleShow}>
        <DnDBuilder
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
        >
          <ComboBox label={labelChange} size={sizeChange}/>
          {/* <Button variant="danger" onClick={() => handleDelete()}>
        x
      </Button> */}
        </DnDBuilder>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Combobox Style</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Label</Form.Label>
              <Form.Control autoFocus onInput={handleChange}/>
            </Form.Group>
          </Form>
          <div class="dropdown">
                <select class="form-select" onChange={handleChangeSize}>
                  <option>Pick size</option>
                  <option value={""}>Medium</option>
                  <option value={"sm"}>Small</option>
                  <option value={"lg"}>Large</option>
                </select>
              </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDelete()}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    //     );
    //   })}
    // </form>
  );
};
