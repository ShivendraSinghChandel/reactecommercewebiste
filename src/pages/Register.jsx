import { message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Register=()=>{
    const [input,setInput]=useState({});
    const mynav=useNavigate();

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let url="http://localhost:4000/User"
        axios.post(url,input).then((res)=>{
            message.success("Registration Successful");
        })
    }

    const login=()=>{
        mynav("/login");
    }
    return(
        <>
        <div id='registerform'>
           <Form>
      <Form.Group className="mb-3">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' value={input.email} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Contact No</Form.Label>
        <Form.Control type="tel" name='contact' value={input.contact} onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name='password' value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <h4>Already have an account <a href="" onClick={login}>Login</a></h4>
    </div>
        </>
    )
}

export default Register;