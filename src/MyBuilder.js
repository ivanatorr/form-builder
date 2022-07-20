import React, { useState } from "react";
import { Builder, Workspace, item, branch } from "build-ui";
import { ListGroup, Button, Modal, Form } from "react-bootstrap";
import AlertTools from "./components/AlterTools";
import { AlertView } from "./viewComponents/AlertView";
import { SectionView } from "./viewComponents/SectionView";
import InputTools from "./components/InputTools";
import { InputView } from "./viewComponents/InputView";
import CheckBoxTools from "./components/CheckBoxTools";
import { CheckBoxView } from "./viewComponents/CheckBoxView";
import ListBoxTools from "./components/ListBoxTools";
import { ListBoxView } from "./viewComponents/ListBoxView";
import ComboBoxTools from "./components/ComboBoxTools";
import { ComboBoxView } from "./viewComponents/ComboBoxView";
import RadioButtonsTools from "./components/RadioButtonsTools";
import { RadioButtonsView } from "./viewComponents/RadioButtonsView";
import { SectionLabelView } from "./viewComponents/SectionLabelView";
import SectionLabelTools from "./components/SectionLabelTools";
import { TableGridView } from "./viewComponents/TableGridView";
import TableGridTools from "./components/TableGridTools";
import TopBar from "./TopBar";
import { TableRowView } from "./viewComponents/TableRowView";
import { TableDataView } from "./viewComponents/TableDataView";
import MyWorkSpace from "./MyWorkSpace";
import "./App.css";

const MyBuilder = () => {
  const section = item({
    type: "Section",
    props: {},
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tree = branch(section);

  const view = {
    Alert: AlertView,
    Section: SectionView,
    Input: InputView,
    CheckBox: CheckBoxView,
    ListBox: ListBoxView,
    ComboBox: ComboBoxView,
    RadioButtons: RadioButtonsView,
    SectionLabel: SectionLabelView,
    TableGrid: TableGridView,
    TableRow: TableRowView,
    TableData: TableDataView,
  };
  //   const viewLabel = {
  //     Section: SectionViewLabel,
  //     CheckBox: CheckBoxView,
  //   };

  return (
    <>
      <Builder initialTree={tree}>
        <TopBar />
        <div className="previewButton">
          <Button variant="outline-secondary" onClick={handleShow}>
            Preview
          </Button>
        </div>

        <div className="modal">
          <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
              <h3> Preview</h3>
            </Modal.Header>

            <Modal.Body className="modulW">
              <MyWorkSpace />
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="danger" onClick={() => handleDelete()}>
            Delete
          </Button> */}
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <Workspace view={view} />

        <div className="notUse">
          <div className="mt-0">
            <ListGroup>
              <ListGroup.Item>
                <AlertTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <InputTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <CheckBoxTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <ListBoxTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <ComboBoxTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <RadioButtonsTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <TableGridTools />
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Builder>
    </>
  );
};

export default MyBuilder;
