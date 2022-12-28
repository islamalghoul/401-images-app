import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import "./Main.css"

export default function Cardes(props) {
  return (
    <Col key={props._id}>
    <Card >
    <Card.Img src={props.image_url} className='card'  onClick={()=>{props.handelclick(props._id)}} />  
      
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Number of likes: {props.likes}
        </Card.Text>
      </Card.Body>  
    </Card>
    
  </Col>
  )
}


