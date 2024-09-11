import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Profile=()=>{
    const mynav=useNavigate();
    const name=window.localStorage.getItem("name");
    const email=window.localStorage.getItem("email");
    const contact=window.localStorage.getItem("contact");
    const Logout=()=>{
        window.localStorage.clear();
        message.success("Logged out successfully")
        mynav("/home");
    }
    return(
        <>
           <div id="profilediv">
            <h4 style={{textAlign:"center",marginBottom:"30px"}}>Your Information</h4>
            <div style={{margin:"auto",display:"flex",justifyContent:"space-between",background:"lightgray",padding:"5px 10px",marginBottom:"20px"}}>
                <h5>Name :  </h5>
                <h5> {name} </h5>
            </div>
            <div style={{margin:"auto",display:"flex",justifyContent:"space-between",background:"whitesmoke",padding:"5px 10px",marginBottom:"20px"}}>
                 <h5>Email : </h5>
                 <h5>{email}</h5>
            </div>
            <div style={{margin:"auto",display:"flex",justifyContent:"space-between",background:"lightgray",padding:"5px 10px",marginBottom:"20px"}}>
                 <h5>Contact :  </h5>
                 <h5>{contact}</h5>
            </div>
            <button onClick={Logout} style={{marginTop:"20px",padding:"5px 20px",fontSize:"20px",color:"white",backgroundColor:"black"}}>
                Logout
            </button>
           </div>
        </>
    )
}

export default Profile;