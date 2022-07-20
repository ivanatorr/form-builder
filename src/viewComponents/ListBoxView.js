import React, { useState } from "react";
import { DnDBuilderHOC, useEditor, useActions } from "build-ui";
import ListBox from "../components/ListBox.js";
import { Button, Modal, Form } from "react-bootstrap";


const ListBoxBuilder = DnDBuilderHOC(ListBox);

export const ListBoxView = ({ id, ...props }) => {
  const [show, setShow] = useState(false);
  const [slider, setSlider] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getValue = (event, value) => {
    setSlider(value);
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
        <ListBoxBuilder
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
          {...props}
        >
          {/* <ListBox /> */}
          {/* <Button variant="danger" onClick={() => handleDelete()}>
        x
      </Button> */}
        </ListBoxBuilder>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ListBox Style</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Item 1 Label</Form.Label>
              <Form.Control
                autoFocus
                name="label1"
                value={props.label1}
                onChange={editor.handleUpdate}
              />
              <Form.Label>Item 2 Label</Form.Label>
              <Form.Control
                autoFocus
                name="label2"
                value={props.label2}
                onChange={editor.handleUpdate}
              />
              <Form.Label>Item 3 Label</Form.Label>
              <Form.Control
                autoFocus
                name="label3"
                value={props.label3}
                onChange={editor.handleUpdate}
              />
              <Form.Label>Item 4 Label</Form.Label>
              <Form.Control
                autoFocus
                name="label4"
                value={props.label4}
                onChange={editor.handleUpdate}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        {/* <Slider
          // defaultValue={50}
          aria-label="Change width"
          min={50}
          step={1}
          max={600}
          value={slider}
          onChange={editor.handleUpdate}
        /> */}
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
