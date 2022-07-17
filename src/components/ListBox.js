import React from "react";
import { ListGroup } from "react-bootstrap";


const ListBox = (props) => {
  return (
    <>
      <ListGroup horizontal className="mb-3 mt-3">
        <ListGroup.Item>
          Example
        </ListGroup.Item>
        <ListGroup.Item>ListGroup</ListGroup.Item>
        <ListGroup.Item>renders</ListGroup.Item>
        <ListGroup.Item>horizontally</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default ListBox;
