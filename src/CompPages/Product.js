import React,  { useState, useEffect }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';


export function Product()
{ 
  return(
    <div className="Product">
    <CardGroup>
      <Card className='card-container'>
        <a href = "/EBookShowByCard">
          <Card.Img className="Cardimg" variant="top" src= "/Images/EBOOKS.jpeg" />
        </a>
        <Card.Body>
          <Card.Title>eBooks</Card.Title>
          {/* <Card.Text>Id</Card.Text> */}
          <br/>
        </Card.Body>
      </Card>
      <Card className='card-container'>
        <a href = "/Music">
          <Card.Img className="Cardimg" variant="top" src= "/Images/Music.jpg" />
        </a>
        <Card.Body>
          <Card.Title>Music</Card.Title>
          {/* <Card.Text>Id</Card.Text> */}
          <br/>
        </Card.Body>
      </Card>
      <Card className='card-container'>
        <a href = "/Videos">
          <Card.Img className="Cardimg" variant="top" src= "/Images/Videos.jpg" />
        </a>
        <Card.Body>
          <Card.Title>Videos</Card.Title>
          {/* <Card.Text>Id</Card.Text> */}
          <br/>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}

export default Product;