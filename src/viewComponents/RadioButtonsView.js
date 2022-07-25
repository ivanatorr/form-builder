//This file cotains what user will be see
//when drop element radioButtons in dropable section
//and have madal window for editing styles

import React, { useState } from "react";
import { DnDBuilderHOC, useEditor, useActions } from "build-ui";
import { Button, Modal, Form, ButtonGroup } from "react-bootstrap";
import { Disable } from "react-disable";
import RadioButtons from "../components/RadioButtons.js";

const RadioButtonsBuilder = DnDBuilderHOC(RadioButtons);
//function for renders radioButtons
export const RadioButtonsView = ({ id, ...props }) => {
  const [show, setShow] = useState(false);
  const [disableForm, setDisableForm] = useState(true);

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
        <RadioButtonsBuilder
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
          {...props}
        ></RadioButtonsBuilder>
        </Disable>
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
