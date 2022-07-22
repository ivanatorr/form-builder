//this file for preview mode

import React from "react";
import { Workspace } from "build-ui";
import { AlertView } from "./viewComponents/AlertView";
import { SectionViewPre } from "./viewComponents/SectionViewPre";
import { InputView } from "./viewComponents/InputView";
import { CheckBoxView } from "./viewComponents/CheckBoxView";
import { ListBoxView } from "./viewComponents/ListBoxView";
import { ComboBoxView } from "./viewComponents/ComboBoxView";
import { RadioButtonsView } from "./viewComponents/RadioButtonsView";
import { SectionLabelView } from "./viewComponents/SectionLabelView";
import { TableGridViewPre } from "./viewComponents/TableGridViewPre";
import { TableRowViewPre } from "./viewComponents/TableRowViewPre";
import { TableDataViewPre } from "./viewComponents/TableDataViewPre";
import { Disable } from "react-disable";
import "./App.css";
//renders all elements in main dropable section
function WorkSpace() {
  const [disableForm, setDisableForm] = React.useState(true);
  const view = {
    Alert: AlertView,
    Section: SectionViewPre,
    Input: InputView,
    CheckBox: CheckBoxView,
    ListBox: ListBoxView,
    ComboBox: ComboBoxView,
    RadioButtons: RadioButtonsView,
    SectionLabel: SectionLabelView,
    TableGrid: TableGridViewPre,
    TableRow: TableRowViewPre,
    TableData: TableDataViewPre,
  };
  return (
    <Disable disabled={disableForm} disabledOpacity={1}>
      <Workspace view={view} />
    </Disable>
  );
}

export default WorkSpace;
