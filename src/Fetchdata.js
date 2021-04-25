import React ,{useEffect, useState}from 'react'
import '..//node_modules/bootstrap/dist/css/bootstrap.min.css';
import '..//node_modules/bootstrap/dist/js/bootstrap.min.js';
import {CardColumns, Container,Row,Image,Col,Button,Card,CardGroup,CardImg ,Modal} from 'react-bootstrap';

function Fetchdata() {
  


    const [data,setdata]=useState();
    const sendata = async()=>{
   const res=await fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
   const resdata=await res.json();
   setdata(resdata);
    }

 useEffect(() => {
   sendata();
},[]);



    return (
        < >
  <Container fluid="sm" className="container">  
         <Row className="mt-5"  >
            

    {
      data.map((currentelement)=>{
          return(
          
            <Col   md={6}>
              
          
    <Card className="mt-5 shadow mb-5 bg-white rounded" >
    <Card.Img variant="top" src= {currentelement.thumbnail.small} width="50%" rounded />
      <Card.Body>
      <h3> {currentelement.title}</h3>
      <p>{currentelement.content} </p>
      </Card.Body>
     <Card.Footer className="author">
         <img src={currentelement.author.avatar} roundedCircle></img>
      <small className="text-muted">{currentelement.author.name}</small>
       <footer className="blockquote-footer float-right">
        <small className="text-right  ">
           {currentelement.author.role} 
        </small>
      </footer>
    </Card.Footer>
  </Card>
     </Col>
         )
        })
   }
    </Row>   
     
 </Container>
        
        </ >
    )
}

export default Fetchdata;
