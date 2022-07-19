import React from "react";
import { Builder, Workspace, item, branch } from "build-ui";
import { ListGroup, Button, Modal, Form } from "react-bootstrap";

import { AlertView } from "./viewComponents/AlertView";
import { SectionView } from "./viewComponents/SectionView";

import { InputView } from "./viewComponents/InputView";

import { CheckBoxView } from "./viewComponents/CheckBoxView";

import { ListBoxView } from "./viewComponents/ListBoxView";

import { ComboBoxView } from "./viewComponents/ComboBoxView";

import { RadioButtonsView } from "./viewComponents/RadioButtonsView";
import { SectionLabelView } from "./viewComponents/SectionLabelView";

import { TableGridView } from "./viewComponents/TableGridView";

import { TableRowView } from "./viewComponents/TableRowView";
import { TableDataView } from "./viewComponents/TableDataView";
import { Disable } from "react-disable";
import "./App.css";

function MyWorkSpace({ disabled }) {
  const [disableForm, setDisableForm] = React.useState(true);
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
  return (
    <Disable disabled={disableForm} disabledOpacity={1}>
      <Workspace view={view} />
    </Disable>
  );
}

export default MyWorkSpace;
