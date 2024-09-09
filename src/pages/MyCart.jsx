import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import  Button  from "react-bootstrap/Button";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { cartdecrement, cartdelete, cartincrement } from "../HatSlice";
import { useNavigate } from "react-router-dom";
const MyCart=()=>{
    const mydata=useSelector((state)=>state.ourcart.cart);
    const mynav=useNavigate();
    console.log(mydata[0])
    const dispatch=useDispatch();

    const cartincre=(id)=>{
        dispatch(cartincrement({id:id}))
    }

    const cartdecre=(id)=>{
        dispatch(cartdecrement({id:id}))
    }

    const cartdel=(id)=>{
        dispatch(cartdelete({id:id}))
    }

    let no=0;
    let grandtotal=0;
    const ans=mydata.map((key)=>{
        no+=1;
        grandtotal+=key.price*key.qnty;
        return(
            <>
            <tr>
                <td>{no}</td>
                <td> <img src={key.image} style={{width:"100px",height:"100px"}} alt="" /> </td>
                <td> {key.name} </td>
                <td> {key.brand} </td>
                <td> {key.category} </td>
                <td> {key.description} </td>
                <td> {key.price} </td>
                <th>
                    <div style={{display:"flex"}}>
                <FaMinusCircle onClick={()=>{cartdecre(key.id)}}  style={{cursor:"pointer",marginTop:"5px"}}/> 
                 <span style={{marginLeft:"5px", marginRight:"5px",marginBottom:"5px"}}> 
                    {key.qnty}   
                 </span>    
                <FaPlusCircle onClick={()=>{cartincre(key.id)}}  style={{cursor:"pointer",marginTop:"5px"}}/>
                </div>
                 </th>
                 <td> {key.price*key.qnty} </td>
                 <td>
                 <Button var="secondary" onClick={()=>{cartdel(key.id)}} >Remove</Button>    
                 </td>
            </tr>
            </>
        )
    })

    const checkout=()=>{
        mynav("/checkout");
    }
    return(
        <>
         <Table striped bordered hover>
            <thead>
                <th>Sno</th>
                <th>image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Description</th>
                <th>price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
                
            </thead>
            <tbody>
                {ans}
                <tr>
          <th>#</th>
          <th> </th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> </th>
          <th></th>
          <th width="200" style={{color:"green", fontSize:"20px"}}> Grand Total:  </th>
          <th style={{color:"green", fontSize:"20px"}}> {grandtotal} </th>
          <td> </td>
        </tr>
            </tbody>
         </Table>
         <div style={{display:"flex",justifyContent:"center"}}>
            <Button onClick={checkout}>Checkout</Button>
         </div>
        </>
    )
}

export default MyCart;