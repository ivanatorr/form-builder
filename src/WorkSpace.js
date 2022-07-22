//this file for preview mode

import React from "react";
import { Workspace } from "build-ui";
import { AlertViewPre } from "./viewComponents/AlertViewPre";
import { SectionViewPre } from "./viewComponents/SectionViewPre";
import { InputViewPre } from "./viewComponents/InputViewPre";
import { CheckBoxViewPre } from "./viewComponents/CheckBoxViewPre";
import { ListBoxViewPre } from "./viewComponents/ListBoxViewPre";
import { ComboBoxViewPre } from "./viewComponents/ComboBoxViewPre";
import { RadioButtonsViewPre } from "./viewComponents/RadioButtonsViewPre";
import { SectionLabelView } from "./viewComponents/SectionLabelView";
import { TableGridViewPre } from "./viewComponents/TableGridViewPre";
import { TableRowViewPre } from "./viewComponents/TableRowViewPre";
import { TableDataViewPre } from "./viewComponents/TableDataViewPre";
import { Disable } from "react-disable";
import "./App.css";
//renders all elements in main dropable section
function WorkSpace() {
  const view = {
    Alert: AlertViewPre,
    Section: SectionViewPre,
    Input: InputViewPre,
    CheckBox: CheckBoxViewPre,
    ListBox: ListBoxViewPre,
    ComboBox: ComboBoxViewPre,
    RadioButtons: RadioButtonsViewPre,
    SectionLabel: SectionLabelView,
    TableGrid: TableGridViewPre,
    TableRow: TableRowViewPre,
    TableData: TableDataViewPre,
  };
  return <Workspace view={view} />;
}

export default WorkSpace;
