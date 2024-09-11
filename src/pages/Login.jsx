import { message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const mynav=useNavigate();
    const Register=()=>{
         mynav("/register")
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let url=`http://localhost:4000/User?email=${email}`;
        const response=await axios.get(url);
        console.log(response)
        if(response.data.length<1){
            message.warning("Please Enter Correct Email")
        }
        else{
            if(password==response.data[0].password)
            {
                message.success("Login successfully");
                window.localStorage.setItem("name",response.data[0].name)
                window.localStorage.setItem("email",response.data[0].email)
                window.localStorage.setItem("contact",response.data[0].contact)
                mynav("/home");
            }
            else{
                message.warning("Incorrect Password");
            }
        }
    }
    return(
        <>
          <div id='registerform'>
           <Form>
      <Form.Group className="mb-3">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
     <h4>Don't have a account <a href="" onClick={Register}>Register</a></h4>
    </div>
        </>
    )
}

export default Login;