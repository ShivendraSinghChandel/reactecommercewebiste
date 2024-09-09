
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addtocart } from '../HatSlice';


const Men=()=>{
    const [mydata,setMydata]=useState([]);
    const dispatch=useDispatch();
    const loadData=()=>{
      let url="http://localhost:3000/product/?category=MEN";
      axios.get(url).then((res)=>{
        setMydata(res.data);
      })
    }
    useEffect(()=>{
      loadData();
    },[]);
    const ans=mydata.map((key)=>{
      let offerPrice= (key.price-(key.price*key.discount/100)).toFixed(0);
      return(
        <>
        {key.offer=="no"?
        <Card style={{ width: '18rem',marginTop:"30px"}}>
      <Card.Img style={{width:"100%",height:"250px"}} variant="top" src={key.image}/>
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}   For - {key.category}
        </h4>
        <Card.Text>
          {key.description}
        </Card.Text>
        <h6 style={{color:"red"}}>Price : {key.price} </h6>
        <Button variant="primary" onClick={()=>{addtocartdata(key.id,key.name,key.brand,key.category,key.price,key.description,key.image,key.discount)}}>Add to Cart</Button>
      </Card.Body>
    </Card>:
    <Card style={{ width: '18rem',marginTop:"30px"}}>
    <Card.Img style={{width:"100%",height:"250px"}} variant="top" src={key.image}/>
    <Card.Body>
      <Card.Title> {key.name} </Card.Title>
      <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

       {" "}  For - {key.category}
      </h4>
      <Card.Text>
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
    <div id='producttitle'>
      <h1>Men's Hats</h1>
    </div>
    <div id='products'>
    {ans}
    </div>
        </>
    )
}

export default Men;