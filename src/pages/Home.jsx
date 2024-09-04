import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=()=>{
      let url="http://localhost:3000/product";
      axios.get(url).then((res)=>{
        setMydata(res.data);
      })
    }
    useEffect(()=>{
      loadData();
    },[]);
    const ans=mydata.map((key)=>{
      return(
        <>
        <Card style={{ width: '18rem',marginTop:"30px"}}>
      <Card.Img style={{width:"100%",height:"250px"}} variant="top" src={key.image}/>
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <h6  style={{color:"darkgray"}}>Brand : {key.brand}</h6>
        <Card.Text>
          {key.description}
        </Card.Text>
        <h6 style={{color:"green"}}>Category : {key.category} </h6>
        <h6 style={{color:"red"}}>Price : {key.price} </h6>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
        </>
      )
    })
    return(
        <>
           <Carousel>
      <Carousel.Item>
        <img style={{width:"100%",height:"80vh"}} src={banner1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
           <img style={{width:"100%",height:"80vh"}} src={banner2} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img style={{width:"100%",height:"80vh"}} src={banner3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div id='producttitle'>
      <h1>Our Premium Products</h1>
    </div>
    <div id='products'>
    {ans}
    </div>
        </>
    )
}

export default Home;