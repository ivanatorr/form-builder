import React, { useState } from "react";
import { useEditor, useActions, DnDBuilderHOC } from "build-ui";
import Input from "../components/Input.js";
import { Button, Modal, Form, ButtonGroup } from "react-bootstrap";

const BuilderInput = DnDBuilderHOC(Input);

export const InputView = ({ id, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editor = useEditor({
    id: id,
  });
  const actions = useActions();
  const handleDelete = () => {
    actions.timeBatched.triggerDelete({
      id: id,
    });
  };

  return (
    <>
      <div onClick={handleShow}>
        <BuilderInput
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
          {...props}
        ></BuilderInput>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Style Input</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Change input label</Form.Label>
              <Form.Control
                name="label"
                value={props.label}
                onChange={editor.handleUpdate}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <ButtonGroup size="medium" className="mb-2">
          <div className="modulDropdown">
            <label>
              Change type of input
              <div className="dropdown">
                <select
                  name="type"
                  value={props.type}
                  onChange={editor.handleUpdate}
                  className="form-select"
                >
                  <option>Pick type</option>
                  <option value={"text"}>Text</option>
                  <option value={"email"}>Email</option>
                  <option value={"password"}>Password</option>
                  <option value={"number"}>Number</option>
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
