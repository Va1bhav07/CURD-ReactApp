import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ListGroup,ListGroupItem } from "react-bootstrap";

function UserCard(props) {
  const { BtnText, onClick, cardData } = props;

  return (
    <Card>
      <Card.Header as="h5">Empolyee Detail</Card.Header>
      <Card.Body>
        <Card.Title>{cardData.name}</Card.Title>
        {/* <Card.Text>
            {`UserName: ${cardData.username}, Phone: ${cardData.phone}, Email: ${cardData.email}`}
    </Card.Text> */}
        <ListGroup className="list-group-flush">
        <ListGroupItem>{`UserName :  ${cardData.username}`}</ListGroupItem>
        <ListGroupItem>{`Phone :  ${cardData.phone}`}</ListGroupItem>
        <ListGroupItem>{`Email :  ${cardData.email}`}</ListGroupItem>
          <ListGroupItem>{`Address : ${Object.values(cardData.address)} ${ delete cardData.address.geo && ''}`}</ListGroupItem>
          <ListGroupItem>{`Company :  ${cardData.company.name}`}</ListGroupItem>
          {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
        </ListGroup>
        <Button variant="primary" onClick={onClick}>
          {BtnText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
