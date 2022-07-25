//This file cotains what user will be see
//when drop element listBox in dropable section
//and have modal window for editing styles

import React, { useState } from "react";
import { DnDBuilderHOC, useEditor, useActions } from "build-ui";
import ListBox from "../components/ListBox.js";
import { Button, Modal, Form } from "react-bootstrap";
import { Disable } from "react-disable";

const ListBoxBuilder = DnDBuilderHOC(ListBox);
//renders listBox element
export const ListBoxView = ({ id, ...props }) => {
  const [disableForm, setDisableForm] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
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
          <ListBoxBuilder
            onDragStart={editor.handleDragStart}
            onDragEnd={editor.handleDragEnd}
            draggable={true}
            {...props}
          ></ListBoxBuilder>
        </Disable>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ListBox Style</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>{props.label1} Label</Form.Label>
              <Form.Control
                autoFocus
                name="label1"
                value={props.label1}
                onChange={editor.handleUpdate}
              />
              <Form.Label>{props.label2} Label</Form.Label>
              <Form.Control
                autoFocus
                name="label2"
                value={props.label2}
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
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
