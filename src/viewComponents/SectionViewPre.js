import React from "react";
import { useEditor, DnDBuilderHOC } from "build-ui";
import { Disable } from "react-disable";
import { Section } from "../components/Section";
import "../App.css";

const BuilderSection = DnDBuilderHOC(Section);
export const SectionViewPre = ({ id, ...props }) => {
  const [disableForm, setDisableForm] = React.useState(true);
  const editor = useEditor({
    id: id,
  });
  return (
    <>
      <div className="usePos">
        <BuilderSection onDrop={editor.handleDrop} {...props}></BuilderSection>
      </div>
    </>
  );
};
