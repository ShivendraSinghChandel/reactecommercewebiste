import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../images/carousalthird.jpg';
import banner2 from '../images/carousalfirst.jpg';
import banner3 from '../images/carousalsecond.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addtocart } from '../HatSlice';
import { useNavigate } from 'react-router-dom';


const Home=()=>{
    const [mydata,setMydata]=useState([]);
    const dispatch=useDispatch();
    const mynav=useNavigate();
    const loadData=()=>{
      let url="http://localhost:3000/product";
      axios.get(url).then((res)=>{
        setMydata(res.data);
      })
    }
    useEffect(()=>{
      loadData();
    },[]);


const openDetail=(id)=>
{
  mynav(`/opendetail/${id}`)
}

    const ans=mydata.map((key)=>{
      let offerPrice= (key.price-(key.price*key.discount/100)).toFixed(0);
      return(
        <>
        {key.offer=="no"?
        <Card style={{ width: '18rem',marginTop:"30px"}}>
      <Card.Img style={{width:"100%",height:"250px",cursor:"pointer"}}  onClick={()=>{openDetail(key.id)}} variant="top" src={key.image}/>
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}   For - {key.category}
        </h4>
        <Card.Text style={{cursor:"pointer"}} onClick={()=>{openDetail(key.id)}}>
          {key.description}
        </Card.Text>
        <h6 style={{color:"red"}}>Price : {key.price} </h6>
        <Button variant="primary" onClick={()=>{addtocartdata(key.id,key.name,key.brand,key.category,key.price,key.description,key.image,key.discount)}}>Add to Cart</Button>
      </Card.Body>
    </Card>:
    <Card style={{ width: '18rem',marginTop:"30px"}}>
    <Card.Img style={{width:"100%",height:"250px",cursor:"pointer"}}  onClick={()=>{openDetail(key.id)}} variant="top" src={key.image}/>
    <Card.Body>
      <Card.Title> {key.name} </Card.Title>
      <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

       {" "}  For - {key.category}
      </h4>
      <Card.Text style={{cursor:"pointer"}} onClick={()=>{openDetail(key.id)}}>
        {key.description}
      </Card.Text>
      <h6 style={{color:"red",textDecoration:"line-through"}}>Price : {key.price} </h6>
      <h5>Offer : {key.discount}%</h5>
      <h6>Today's Price : {offerPrice} </h6>
      <Button variant="primary" onClick={()=>{addtocartdata(key.id,key.name,key.brand,key.category,offerPrice,key.description,key.image,key.discount)}}>Add to Cart</Button>
    </Card.Body>
  </Card>
    }
        </>
      )
    })


   const addtocartdata=(id,nam,brand,category,price,description,image,discount)=>
   {
    dispatch(addtocart({id:id,name:nam,brand:brand,category:category,price:price,description:description,image:image,discount:discount,qnty:1}))
   }


    return(
        <>
           <Carousel>
      <Carousel.Item>
        <img style={{width:"100%",height:"80vh"}} src={banner1} alt="" />
        <Carousel.Caption>
          <h3>HATSTORE EXCLUSIVE</h3>
          <p>only available at HatStore</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
           <img style={{width:"100%",height:"80vh"}} src={banner2} alt="" />
        <Carousel.Caption>
          <h3>FITTED WORLD</h3>
          <p>weekly exclusive drops of New Era</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img style={{width:"100%",height:"80vh"}} src={banner3} alt="" />
        <Carousel.Caption>
          <h3>MOOMIN FALL NEWS</h3>
          <p>
          Explore over 20 000 caps, hats & beanies in stock!
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