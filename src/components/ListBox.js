import React from "react";
import { ListGroup } from "react-bootstrap";
import { Text } from "./Text";

const ListBox = () => {
  return (
    <>
      <ListGroup horizontal className="mb-3 mt-3">
        <ListGroup.Item>
          Example
          {/* <Text text="Only texts" fontSize={20} data-cy="card-top-text-1" /> */}
        </ListGroup.Item>
        <ListGroup.Item>ListGroup</ListGroup.Item>
        <ListGroup.Item>renders</ListGroup.Item>
        <ListGroup.Item>horizontally!</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default ListBox;
