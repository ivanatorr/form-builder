//This file is HTML form with props for ListBox element

import React from "react";
import { ListGroup } from "react-bootstrap";

const ListBox = React.forwardRef(({ ...props }, ref) => {
  console.log(props.width);
  return (
    <>
      <ListGroup horizontal className="mb-3 mt-3" ref={ref}>
        <ListGroup.Item style={{ width: `${props.width}px` }}>
          {props.label1}
        </ListGroup.Item>
        <ListGroup.Item style={{ width: `${props.width}px` }}>
          {props.label2}
        </ListGroup.Item>
        <ListGroup.Item style={{ width: `${props.width}px` }}>
          {props.label3}
        </ListGroup.Item>
        <ListGroup.Item style={{ width: `${props.width}px` }}>
          {props.label4}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
});

export default ListBox;
