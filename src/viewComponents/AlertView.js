//This file cotains what user will be see
//when drop element Alert in dropable section
//and have madal window for editing styles

import React, { useState } from "react";
import { DnDBuilderHOC, useEditor, useActions } from "build-ui";
import { Button, Modal, Form, ButtonGroup } from "react-bootstrap";
import { Disable } from "react-disable";
import Alert from "../components/Alert.js";

const AlertBuilder = DnDBuilderHOC(Alert);
//renders alert element
export const AlertView = ({ id, ...props }) => {
  const [show, setShow] = useState(false);
  const [disableForm, setDisableForm] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const actions = useActions();
  const handleDelete = () => {
    actions.timeBatched.triggerDelete({
      id: id,
    });
  };

  const editor = useEditor({
    id: id,
  });

  return (
    <>
      <div onClick={handleShow}>
        <Disable disabled={disableForm} disabledOpacity={1}>
        <AlertBuilder
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
          {...props}
        ></AlertBuilder>
        </Disable>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert Style</Modal.Title>
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
              <Form.Label>Text Message</Form.Label>
              <Form.Control
                autoFocus
                name="message"
                value={props.message}
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
