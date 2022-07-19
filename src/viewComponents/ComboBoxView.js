import React, { useState } from "react";
import { DnDBuilderHOC, useEditor, useActions } from "build-ui";
import { Button, Modal, Form, ButtonGroup } from "react-bootstrap";
import ComboBox from "../components/ComboBox.js";

const ComboBoxBuilder = DnDBuilderHOC(ComboBox);

export const ComboBoxView = ({ id, ...props }) => {
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
  // const [inputFields, setInputFields] = useState([{ id: id }]);
  // const removeFields = (index) => {
  //   let data = [...inputFields];
  //   data.splice(index, 1);
  //   setInputFields(data);
  // };
  return (
    // <form>
    //   {inputFields.map((input, index) => {
    //     return (
    <>
      <div onClick={handleShow}>
        <ComboBoxBuilder
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          draggable={true}
          {...props}
        >
          {/* <ComboBox label={labelChange} size={sizeChange} /> */}
          {/* <Button variant="danger" onClick={() => handleDelete()}>
        x
      </Button> */}
        </ComboBoxBuilder>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Combobox Style</Modal.Title>
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
    //     );
    //   })}
    // </form>
  );
};
