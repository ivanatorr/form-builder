import React, { useState } from "react";
import { DnDBuilder, useEditor, useActions, DnDBuilderHOC } from "build-ui";
import Input from "../components/Input.js";
import { Button, Modal, Form, ButtonGroup } from "react-bootstrap";
const BuilderInput = DnDBuilderHOC(Input);
export const InputView = ({ id, props }) => {
  const [labelChange, setLabel] = useState("");
  const [show, setShow] = useState(false);
  const [typeInput, setType] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) => {
    setLabel(event.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  console.log(typeInput);
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
        <BuilderInput
          onDragStart={editor.handleDragStart}
          onDragEnd={editor.handleDragEnd}
          onDragLeave={editor.toDnDHandler}
          draggable={true}
          label={labelChange}
          type={typeInput}
        >
          {/* <Input  /> */}
          {/* <Button variant="danger" onClick={() => handleDelete()}>
            x
          </Button> */}
        </BuilderInput>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Style Input</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Change input label</Form.Label>
              <Form.Control onInput={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <ButtonGroup size="medium" className="mb-2">
          <div className="modulDropdown">
            <label>
              Change type of input
              <div class="dropdown">
                <select class="form-select" onChange={handleChangeType}>
                  <option>Pick type</option>
                  <option value={"text"}>Text</option>
                  <option value={"email"}>Email</option>
                  <option value={"password"}>Password</option>
                  <option value={"number"}>Number</option>
                </select>
              </div>
              {/* </select> */}
              {/* <select className="dropbtn" onChange={handleChange}>
                <option value="All">Все турниры</option>
                <option value="Текущий">Текущий</option>
                <option value="Будущий">Будущий</option>
              </select> */}
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
