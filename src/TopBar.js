//this file for unDo and reDo operations

import React from "react";
import { useBuilder } from "build-ui";
import { Button } from "react-bootstrap";
//renders unDo and reDo buttons
const TopBar = () => {
  const builder = useBuilder();
  const { canUndo, canRedo, handleRedo, handleUndo } = builder;

  return (
    <div>
      <Button
        size="sm"
        variant="black"
        disabled={!canUndo}
        onClick={handleUndo}
        className="unDo"
      >
        <i class="fas fa-undo"></i>
      </Button>
      <Button
        size="sm"
        variant="black"
        disabled={!canRedo}
        onClick={handleRedo}
        className="reDo"
      >
        <i class="fas fa-redo"></i>
      </Button>
    </div>
  );
};
export default TopBar;
