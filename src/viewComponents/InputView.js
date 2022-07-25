//This file cotains what user will be see
//when drop element input in dropable section
//and have madal window for editing styles

import React, { useState } from "react";
import { useEditor, useActions, DnDBuilderHOC } from "build-ui";
import Input from "../components/Input.js";
import { Button, Modal, Form, ButtonGroup } from "react-bootstrap";
import { Disable } from "react-disable";

const BuilderInput = DnDBuilderHOC(Input);
//renders input element
export const InputView = ({ id, ...props }) => {
  const [disableForm, setDisableForm] = useState(true);
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
        <Disable disabled={disableForm} disabledOpacity={1}>
          <BuilderInput
            onDragStart={editor.handleDragStart}
            onDragEnd={editor.handleDragEnd}
            draggable={true}
            {...props}
          ></BuilderInput>
        </Disable>
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
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
