
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../HatSlice';
import sppinergif from "../images/spinnergif.gif"
 

const SearchData=()=>{
    const {txtdata}= useParams();
    const [mydata, setMydata]=useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const dispatch= useDispatch();   
    const mynav=useNavigate(); 

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);

        setIsLoading(true);

    }, [txtdata])

  


    const loadData=()=>{
       let api=`http://localhost:3000/product`;
       axios.get(api).then((res)=>{
        setMydata(res.data);
       })
    }
    useEffect(()=>{
      loadData();
    }, [])

    const openDetail=(id)=>
      {
        mynav(`/opendetail/${id}`)
      }
    
    
    const addtocartdata=(id,nam,brand,category,price,description,image,discount)=>
        {
         dispatch(addtocart({id:id,name:nam,brand:brand,category:category,price:price,description:description,image:image,discount:discount,qnty:1}))
        }
     
    
    
      

        const ans=mydata.map((key)=>{
            const status=key.description.includes(txtdata) || key.category.includes(txtdata);
            let offerPrice= (key.price-(key.price*key.discount/100)).toFixed(0);
            if(status){
            return(
              <>
              {key.offer=="no"?
              <Card style={{ width: '18rem',marginTop:"30px"}}>
            <Card.Img style={{width:"100%",height:"250px",cursor:"pointer"}} onClick={()=>{openDetail(key.id)}} variant="top" src={key.image}/>
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
          <Card.Img style={{width:"100%",height:"250px",cursor:"pointer"}} onClick={()=>{openDetail(key.id)}} variant="top" src={key.image}/>
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
        }
          })
     return(
            <>
           <div id="proHeading">
            <h1> All Searched Hats</h1>
           </div>
           {isLoading ? (
             <center>
             <img src={sppinergif} style={{width:"200px", height:"200px"}} />
             </center>
           ) : (
            <div id="homeProduct">     
            {ans}        
         </div>
           )}
            </>
        )
    }
export default SearchData;