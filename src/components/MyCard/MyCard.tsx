import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { MyContext } from "../../App";
import getImg from "../../utils/getImg";
import "./myCard.css";

const API = process.env.REACT_APP_API;

interface IBlog {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
export default function MyCard({ blog }: { blog: IBlog }) {
  const { setIsDelete, isDelete, setEditThis, setShow } = useContext(MyContext);

  const deleteBlog = (id: string): void => {
    fetch(API + "/blog/" + id, {
      method: "DELETE",
    }).then(() => {
      setIsDelete(!isDelete);
    });
  };
  return (
    <CardGroup>
      <Card className="myCard" style={{ minHeight: "400px" }}>
        <Card.Img variant="top" src={getImg(blog.thumbnail)} />
        <Card.Body>
          <Card.Title className="mainText">
            <h5>{blog.title}</h5>
          </Card.Title>
          <Card.Text>{blog.description}</Card.Text>
          <div className="actionGroup">
            <div >
              <Button
                size="sm"
                className="mainBtn"
                onClick={() => window.open(blog.link, "_blank")}
              >
                Get Resource
              </Button>
            </div>
            <div >
              <Button
                size="sm"
                className="dangerBtn mx-2"
                onClick={() => deleteBlog(blog._id)}
              >
                Delete
              </Button>
              <Button
                size="sm"
                className="mainBtn"
                onClick={() => {
                  setEditThis(blog._id);
                  setShow(true);
                }}
              >
                Edit
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
