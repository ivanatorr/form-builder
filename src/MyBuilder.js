import React from "react";
import { Builder, Workspace, item, branch } from "build-ui";
import { ListGroup } from "react-bootstrap";
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

const MyBuilder = () => {
  const section = item({
    type: "Section",
    props: {},
  });
  const tree = branch(section);
  const view = {
    Section: SectionView,
    Alert: AlertView,
    Input: InputView,
    CheckBox: CheckBoxView,
    ListBox: ListBoxView,
    ComboBox: ComboBoxView,
    RadioButtons: RadioButtonsView,
  };
  return (
    <Builder initialTree={tree}>
      <Workspace view={view} />
      <div className="notUse">
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
        </ListGroup>
      </div>
    </Builder>
  );
};

export default MyBuilder;
