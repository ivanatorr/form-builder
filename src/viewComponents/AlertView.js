import React, { useState } from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import { Button, Modal, Form } from "react-bootstrap";
import Alert from "../components/Alert.js";

export const AlertView = ({ id, ...props }) => {
  const [show, setShow] = useState(false);

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
  const [inputFields, setInputFields] = useState([{ id: id }]);
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  return (
    <>
      <div onClick={handleShow}>
        <DnDBuilder
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
        >
          <Alert {...props} />
        </DnDBuilder>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Text</Form.Label>
              <Form.Control type="email" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleDelete()}>
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
