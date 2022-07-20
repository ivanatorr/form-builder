import React from "react";
import { useEditor, DnDBuilderHOC } from "build-ui";
import { Section } from "../components/Section";
import { Table } from "react-bootstrap";
import "../App.css";
import { listItemTextClasses } from "@mui/material";

const BuilderSection = DnDBuilderHOC(Section);
export const SectionView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  const [backgroundColor, setBackgroundColor] = React.useState("#ffffff");
  const appStyles = {
    background: `${backgroundColor}`,
  };
  return (
    <>
      <div className="usePos">
        <div className="text-center">
          Drop zone <i class="far fa-hand-point-down"></i>
        </div>

        <BuilderSection
          // style={appStyles}
          onDrop={editor.handleDrop}
          // onDragEnter={() => setBackgroundColor("#0000ff")}
          // onDragLeave={() => setBackgroundColor("#ffffff")}
          // onMouseLeave={() => setBackgroundColor("#ffffff")}
          {...props}
        ></BuilderSection>
      </div>
    </>
  );
};
