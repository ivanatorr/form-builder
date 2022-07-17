import React, { useState } from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import { Button, Modal, Form } from "react-bootstrap";
import RadioButtons from "../components/RadioButtons.js";

export const RadioButtonsView = ({ id }) => {
  const [show, setShow] = useState(false);
  const [sizeChange, setSize] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeSize = (event) =>{
    setSize(event.target.value)
  }
  
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
    <>
      <div onClick={handleShow}>
        <DnDBuilder
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
        >
          <RadioButtons size={sizeChange}/>
          {/* <Button variant="danger" onClick={() => handleDelete()}>
        x
      </Button> */}
        </DnDBuilder>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>RadioButtons Style</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Label</Form.Label>
              <Form.Control type="email" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <div class="dropdown">
                <select class="form-select" onChange={handleChangeSize}>
                  <option>Pick size</option>
                  <option value={""}>Medium</option>
                  <option value={"sm"}>Small</option>
                  <option value={"lg"}>Large</option>
                </select>
              </div>
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
  );
};
