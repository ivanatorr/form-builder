import React from "react";
import { Builder, Workspace, item, branch } from "build-ui";
import AlertTools from "./components/AlterTools";
import { AlertView } from "./viewComponents/AlertView";
import { SectionView } from "./viewComponents/SectionView";
import InputTools from "./components/InputTools";
import { InputView } from "./viewComponents/InputView";
import CheckBoxTools from "./components/CheckBoxTools";
import { CheckBoxView } from "./viewComponents/CheckBoxView";

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
  };
  return (
    <Builder initialTree={tree}>
      <Workspace view={view} />
      <AlertTools />
      <InputTools />
      <CheckBoxTools />
    </Builder>
  );
};

export default MyBuilder;
