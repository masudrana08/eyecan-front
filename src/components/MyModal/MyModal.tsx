import React, {ReactNode, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./myModal.css"
interface IProps{
    children: ReactNode,
    btnName: String,
    header: String,

}
export default function MyModal(props:IProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <Button className="mainBtn" onClick={handleShow}>
        {props.btnName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button className="dangerBtn" onClick={handleClose}>
            Close
          </Button>
          <Button className="successBtn" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


