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
      <Button
        size="sm"
        variant="outline-secondary"
        disabled={!canRedo}
        onClick={handleRedo}
        className="reDo"
      >
        <i class="fas fa-redo"></i>
      </Button>
      <Button
        size="sm"
        variant="outline-secondary"
        disabled={!canUndo}
        onClick={handleUndo}
        className="unDo"
      >
        <i class="fas fa-undo"></i>
      </Button>
    </div>
  );
};
export default TopBar;
