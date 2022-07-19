import React, { useState } from "react";
import { DnDBuilderHOC, useEditor, useActions } from "build-ui";
import { Button, Modal, Form, ButtonGroup } from "react-bootstrap";
import RadioButtons from "../components/RadioButtons.js";

const RadioButtonsBuilder = DnDBuilderHOC(RadioButtons);

export const RadioButtonsView = ({ id, ...props }) => {
  const [show, setShow] = useState(false);
  const [sizeChange, setSize] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

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
        <RadioButtonsBuilder
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
          {...props}
        >
          {/* <RadioButtons size={sizeChange} /> */}
          {/* <Button variant="danger" onClick={() => handleDelete()}>
        x
      </Button> */}
        </RadioButtonsBuilder>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>RadioButtons Style</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Button1 Label</Form.Label>
              <Form.Control
                autoFocus
                name="label1"
                value={props.label1}
                onChange={editor.handleUpdate}
              />
              <Form.Label>Button2 Label</Form.Label>
              <Form.Control
                autoFocus
                name="label2"
                value={props.label2}
                onChange={editor.handleUpdate}
              />
              <Form.Label>Button3 Label</Form.Label>
              <Form.Control
                autoFocus
                name="label3"
                value={props.label3}
                onChange={editor.handleUpdate}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <ButtonGroup size="medium" className="mb-2">
          <div className="modulDropdown">
            <label>
              Pick Size
              <div class="dropdown">
                <select
                  name="size"
                  value={props.type}
                  onChange={editor.handleUpdate}
                  className="form-select"
                >
                  <option>Pick size</option>
                  <option value={""}>Medium</option>
                  <option value={"sm"}>Small</option>
                  <option value={"lg"}>Large</option>
                </select>
              </div>
            </label>
          </div>
        </ButtonGroup>
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
