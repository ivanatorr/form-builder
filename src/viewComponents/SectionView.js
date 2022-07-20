import React, {useState, useEffect} from "react";
import { useActions, useEditor, DnDBuilderHOC } from "build-ui";
import { Section } from "../components/Section";
import { Table } from "react-bootstrap";
import useDemoEditor from '../hooks/useDemoEditor'
import "../App.css";
import { listItemTextClasses } from "@mui/material";

const BuilderSection = DnDBuilderHOC(Section);
export const SectionView = ({ id, ...props }) => {
  const actions = useActions();
  const editor = useDemoEditor({
    id: id,
  });
  
  
  return (
    <>
      <div className="usePos">
        <div className="text-center">
          Drop zone <i class="far fa-hand-point-down"></i>
        </div>

        <BuilderSection
          // style={appStyles}
          onDrop={editor.handleDrop}

          onDragEnter = {editor.handlePaintDropZone}
          onDragLeave = {editor.handleEraseDropZone}
          // onDragLeave={() => setBackgroundColor("#ffffff")}
          // onMouseLeave={() => setBackgroundColor("#ffffff")}
          {...props}
        ></BuilderSection>
      </div>
    </>
  );
};
