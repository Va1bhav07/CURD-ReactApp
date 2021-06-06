import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

function EmpForm(props) {
  const { onSubmitHandler, handleInputChange, userData, validated } = props;

  return (
    <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide email.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User name"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a username.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Website</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Website"
            name="website"
            value={userData.website}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide website.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Company</Form.Label>
        <Form.Control
          placeholder="Enter Company"
          name="name"
          value={userData.company.name}
          onChange={(event) => {
            handleInputChange(event, userData.company, "company");
          }}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide comapny name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            placeholder="Enter City"
            name="city"
            value={userData.address.city}
            onChange={(event) => {
              handleInputChange(event, userData.address, "address");
            }}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Street</Form.Label>
          <Form.Control
            placeholder="Enter Street"
            name="street"
            value={userData.address.street}
            onChange={(event) => {
              handleInputChange(event, userData.address, "address");
            }}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide street.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            placeholder="Enter Zip"
            name="zipcode"
            value={userData.address.zipcode}
            onChange={(event) => {
              handleInputChange(event, userData.address, "address");
            }}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide Zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EmpForm;
