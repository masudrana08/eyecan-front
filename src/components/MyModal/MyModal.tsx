import React, {ReactNode, useContext} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MyContext } from "../../App";
import "./myModal.css"
interface IProps{
    children: ReactNode,
    btnName: String,
    header: String,
}
export default function MyModal(props:IProps) {
    const {setShow, show} = useContext(MyContext)
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div >
      <Button className="mainBtn createBlogBtn" onClick={handleShow}>
        {props.btnName}
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            {props.children}
        </Modal.Body>
      </Modal>
    </div>
  );
}


