import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import getImg from "../../utils/getImg";
import "./myCard.css"

interface IBlog{title:string, description:string, thumbnail:string, link:string, "_id":string, createdAt:string, updatedAt:string}
export default function MyCard({blog}:{blog:IBlog}) {
  return (
    <CardGroup>
      <Card className='myCard' style={{minHeight:"400px"}} >
        <Card.Img variant="top" src={getImg(blog.thumbnail)} />
        <Card.Body>
          <Card.Title className="mainText">
            <h5>{blog.title}</h5>
          </Card.Title>
          <Card.Text>
            {blog.description}
          </Card.Text>
          <Button size="sm" className="mainBtn" onClick={()=>window.open(blog.link, "_blank")} >Get Resource</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
