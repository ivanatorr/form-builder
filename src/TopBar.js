import { React, useState } from "react";
import { useBuilder } from "build-ui";
import { Button, Modal, Form } from "react-bootstrap";
import { SectionView } from "./viewComponents/SectionView";
import { Section } from "./components/Section";

const TopBar = (props) => {
  const builder = useBuilder();
  const {
    canUndo,
    canRedo,
    handleRedo,
    handleUndo,
    json,
    // Replot your workspace
    // with another tree with this
    // loading function below.
    loadTree,
  } = builder;
  const handleSave = () => {
    // Maybe let save your work
    // to a storage service?
    // Or a database? A file...?
    console.log(json());
  };
  return (
    <div>
      <Button variant="secondary" onClick={handleSave}>
        Save
      </Button>
      <Button variant="secondary" disabled={!canRedo} onClick={handleRedo}>
        Redo
      </Button>
      <Button variant="secondary" disabled={!canUndo} onClick={handleUndo}>
        Undo
      </Button>
    </div>
  );
};
export default TopBar;
