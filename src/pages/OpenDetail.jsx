import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux";
import { addtocart } from "../HatSlice";
import gif from '../images/spinnergif.gif';

const OpenDetail=()=>{
    const {pid}=useParams();
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const dispatch=useDispatch();
    const loadData=()=>{
        let url=`http://localhost:3000/product?id=${pid}`;
        axios.get(url).then((res=>{
            setData(res.data);
            console.log(res.data);
        }))
    }
    useEffect(()=>{
        loadData();
    },[]);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    const addtocartdata=(id,nam,brand,category,price,description,image,discount)=>
        {
         dispatch(addtocart({id:id,name:nam,brand:brand,category:category,price:price,description:description,image:image,discount:discount,qnty:1}))
        }
    return(
        <>
        {loading?(<center>
             <img src={gif} style={{width:"200px", height:"200px"}} />
             </center>):
             (
            data.map((key)=>{
            let offerPrice= (key.price-(key.price*key.discount/100)).toFixed(0);
            return(
                <>
             {key.offer=="yes"?(
                <div id="detaildiv">
                    <div>
                         <img src={key.image} style={{width:"400px",height:"450px"}} alt="" />
                    </div>
                    <div style={{marginLeft:"5%"}}>
                        <h4> {key.description} </h4>
                        <h5 style={{marginTop:"15px",color:"gray"}}>Brand : {key.brand} </h5>
                        <h6 style={{marginTop:"15px"}}>Category : {key.category} </h6>
                        <h5 style={{color:"red",textDecoration:"line-through",marginTop:"15px"}}>Price : {key.price} </h5>
                        <h5 style={{marginTop:"15px"}}>Discount : <b>{key.discount}%</b> </h5>
                        <h5 style={{marginTop:"15px",color:"green"}}>Today's Price : {offerPrice} </h5>
                        <Button size="lg" style={{marginTop:"25px"}} onClick={()=>{addtocartdata(key.id,key.name,key.brand,key.category,offerPrice,key.description,key.image,key.discount)}}>Add to Cart</Button>
                    </div>
                </div>
             ):
             (
                <div id="detaildiv">
                    <div>
                    <img src={key.image} style={{width:"350px",height:"400px"}} alt="" />
                    </div>
                    <div style={{marginLeft:"5%"}}>
                        <h4> {key.description} </h4>
                        <h4 style={{marginTop:"15px",color:"gray"}}>Brand : {key.brand} </h4>
                        <h6 style={{marginTop:"15px"}}>Category : {key.category} </h6>
                        <h5 style={{color:"green",marginTop:"15px"}}>Price : {key.price} </h5>
                        <Button size="lg" style={{marginTop:"25px"}} onClick={()=>{addtocartdata(key.id,key.name,key.brand,key.category,key.price,key.description,key.image,key.discount)}}>Add to Cart</Button>
                    </div>
                </div>
             )}
             </>
            )
           })
        )}
        
           
    
        </>
    )
}

export default OpenDetail;