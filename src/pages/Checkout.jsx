import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Checkout=()=>{
    const mynav=useNavigate();

    const payDone=()=>{
        mynav("/paydone")
    }
    return(
        <>
          <h1 style={{textAlign:"center"}}>Checkout Page</h1>
          <div id='checkoutpage'>
            <div>
                <h3>Enter Address</h3>
                <Form>
      <Form.Group className="mb-3">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" required name='name' />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Pin Code</Form.Label>
        <Form.Control type="text" maxLength="6" minLength="6"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Mobile No</Form.Label>
        <Form.Control type="tel" maxLength="10" minLength="10"/>
      </Form.Group>
    </Form>
            </div>
            <div>
                <h3>Select Payment Method</h3>
                <input type="radio" name='pay' /> Cash on Delievery
                <br /><br />
                <input type="radio" name='pay'/> Debit/Credit Card
                <br /><br />
                <input type="radio" name='pay'/> Upi Payment
                <br /><br />
                <input type="radio" name='pay'/> Net Banking
                <br /><br />
                <input type="radio" name='pay'/> Master Card
                <br /><br />
                <Button variant="dark" onClick={payDone} type="submit">
        Submit
      </Button>
            </div>
          </div>
        </>
    )
}

export default Checkout;