// This file cotains what user will be see
// when drop element CheckBox in dropable section
// and have madal window for editing styles

import React, { useState } from "react";
import { DnDBuilderHOC, useEditor, useActions } from "build-ui";
import { Button, Modal, Form } from "react-bootstrap";
import CheckBox from "../components/CheckBox.js";
import { Disable } from "react-disable";

const CheckBoxBuilder = DnDBuilderHOC(CheckBox);
//renders checkboBox element
export const CheckBoxViewPre = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });

  return (
    <>
      <CheckBoxBuilder
        onDragStart={editor.handleDragStart}
        onDragEnd={editor.handleDragEnd}
        draggable={true}
        {...props}
      ></CheckBoxBuilder>
    </>
  );
};
