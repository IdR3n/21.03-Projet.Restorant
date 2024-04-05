import React from "react";
import { Col, Card, CardTitle, CardText, Button, Container } from "reactstrap";
import "../Compenents/Compenents.css";

function Menuler(){
    return(
        <Container>
 <Col>
    <Card body className="CustomCard">
      <CardTitle tag="h5">
        Welcome Chef's Restaurant
      </CardTitle>
      <CardText>
      All you can eat is there!
      </CardText>
      <Button className="customButton">
        Menu
      </Button>
    </Card>
  </Col>
        </Container>
    )
}
export default Menuler;