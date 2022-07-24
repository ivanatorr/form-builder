//This file is HTML form with props for ListBox element

import React, {useState} from "react";
import { ListGroup, Sonnet, Col, Row, Tab } from "react-bootstrap";

const ListBox = React.forwardRef(({ ...props }, ref) => {
  const [activeButton, setActiveButton] = useState()
  return (
    <>
     
      <Tab.Container id="list-group-tabs-example" >


          <ListGroup className="mb-3 mt-3" ref={ref}>
            <ListGroup.Item action href="#link1">
            {props.label1}
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" >
            {props.label2}
            </ListGroup.Item>
          </ListGroup>

        {/* <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <Sonnet />
            </Tab.Pane>
          </Tab.Content>
        </Col> */}
 
    </Tab.Container>
    </>
  );
});

export default ListBox;
