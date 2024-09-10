import { IoIosCloudDone } from "react-icons/io";
import gif from '../images/spinnergif.gif'
import { useState } from "react";
import { ImGift } from "react-icons/im";
const PaymentDone=()=>{
    const [loading ,setLoading]=useState(true);

    setTimeout(()=>{
        setLoading(false)
    },2000)
    return(
        <>
        {loading?(<div style={{textAlign:"center"}}> <img style={{width:"250px",height:"200px"}} src={gif} alt="" /></div>):(<div style={{textAlign:"center",height:"300px",alignContent:"center",color:"green"}}>
           <h3>Payment Done <IoIosCloudDone /></h3>
           <h4>Your order will be delievered within 7 working days.</h4>
           </div>)}
          
        </>
    )
}

export default PaymentDone;