import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";
import { SectionViewLabel } from "../viewComponents/SectionViewLabel";
import { DnDBuilder, useEditor } from "build-ui";

export const TableGrid = ({ id, props }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Drop element</th>
          <th>Drop element</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <DnDBuilder onDrop={editor.handleDrop}> */}

          {/* </DnDBuilder> */}
          <td>
            <SectionViewLabel {...props} />
          </td>
          <td>
            {/* <DnDBuilder onDrop={editor.handleDrop}> */}
            {/* <SectionViewLabel {...props} /> */}
            {/* </DnDBuilder> */}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
