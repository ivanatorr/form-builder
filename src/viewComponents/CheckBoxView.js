import React, { useState } from "react";
import { DnDBuilderHOC, useEditor, useActions } from "build-ui";
import { Button, Modal, Form } from "react-bootstrap";
import CheckBox from "../components/CheckBox.js";

const CheckBoxBuilder = DnDBuilderHOC(CheckBox);

export const CheckBoxView = ({ id, ...props }) => {
  const [show, setShow] = useState(false);
  const [labelChange, setLabel] = useState("Checkbox");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setLabel(event.target.value);
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
        <CheckBoxBuilder
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
          {...props}
        >
          {/* <CheckBox label={labelChange} /> */}

          {/* <Button variant="danger" onClick={() => handleDelete()}>
            x
          </Button> */}
        </CheckBoxBuilder>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CheckBox Style</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Label</Form.Label>
              <Form.Control
                autoFocus
                name="label"
                value={props.label}
                onChange={editor.handleUpdate}
              />
            </Form.Group>
          </Form>
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
  );
};
