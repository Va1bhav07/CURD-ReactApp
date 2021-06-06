import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function UserModal(props) {
    const {show,handleClose,modalTitle,modalText,modalAction}= props;
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalAction}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default UserModal;
