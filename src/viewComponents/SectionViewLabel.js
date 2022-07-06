import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { DnDBuilder, useEditor } from "build-ui";
import { SectionLabel } from "../components/SectionLabel";

export const SectionViewLabel = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  console.log(id);
  return (
    <div>
      <DnDBuilder onDrop={editor.handleDrop}>
        <SectionLabel {...props} />
      </DnDBuilder>
    </div>
  );
};
