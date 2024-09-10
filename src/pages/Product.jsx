
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addtocart } from '../HatSlice';



const Product = () => {
  const [mydata, setMydata] = useState([]);
  const [pricemydata, setPriceMydata]=useState([]);
  const [catData,setCatData]=useState("");
  const [priceData,setPriceData]=useState("");
  const [displayState,setDisplayState]=useState(true);

  const dispatch = useDispatch();
  const loadData = () => {
    let url = "http://localhost:3000/product";
    axios.get(url).then((res) => {
      setMydata(res.data);
    })
  }
  useEffect(() => {
    loadData();
  }, []);


  const addtocartdata = (id, nam, brand, category, price, description, image, discount) => {
    dispatch(addtocart({ id: id, name: nam, brand: brand, category: category, price: price, description: description, image: image, discount: discount, qnty: 1 }))
  }

  const ans = mydata.map((key) => {
    let offerPrice = (key.price - (key.price * key.discount / 100)).toFixed(0);
    return (
      <>
        {key.offer == "no" ?
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}   For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red" }}>Price : {key.price} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, key.price, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card> :
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}  For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red", textDecoration: "line-through" }}>Price : {key.price} </h6>
              <h5>Offer : {key.discount}%</h5>
              <h6>Today's Price : {offerPrice} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, offerPrice, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        }
      </>
    )
  })

  const handleSubCategory=()=>{
    const api=`http://localhost:3000/product/?category=${catData}`;
    axios.get(api).then((res)=>{
      setMydata(res.data);
    })
    setDisplayState(true);
  }

  const handleSubPrice=()=>{
      let api="http://localhost:3000/product";
      axios.get(api).then((res)=>{
        setPriceMydata(res.data);
      })
      setDisplayState(false)
  }

  const ans1=pricemydata.map((key)=>{
    let offerPrice = (key.price - (key.price * key.discount / 100)).toFixed(0);
    if(priceData==200){
      if(key.price<200 && offerPrice<200){
    return (
      <>
        {key.offer == "no" ?
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}   For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red" }}>Price : {key.price} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, key.price, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card> :
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}  For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red", textDecoration: "line-through" }}>Price : {key.price} </h6>
              <h5>Offer : {key.discount}%</h5>
              <h6>Today's Price : {offerPrice} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, offerPrice, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        }
      </>
    )
      }
    }

    if(priceData==300){
      if(key.price<400 && key.price>=200 && offerPrice<400 && offerPrice>=200){
    return (
      <>
        {key.offer == "no" ?
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}   For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red" }}>Price : {key.price} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, key.price, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card> :
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}  For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red", textDecoration: "line-through" }}>Price : {key.price} </h6>
              <h5>Offer : {key.discount}%</h5>
              <h6>Today's Price : {offerPrice} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, offerPrice, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        }
      </>
    )
      }
    }

    if(priceData==400){
      if(key.price>=400 && key.price<500 && offerPrice<500 && offerPrice>=400){
    return (
      <>
        {key.offer == "no" ?
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}   For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red" }}>Price : {key.price} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, key.price, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card> :
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}  For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red", textDecoration: "line-through" }}>Price : {key.price} </h6>
              <h5>Offer : {key.discount}%</h5>
              <h6>Today's Price : {offerPrice} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, offerPrice, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        }
      </>
    )
      }
    }

    if(priceData==500){
      if(key.price>=500 && offerPrice>=500){
    return (
      <>
        {key.offer == "no" ?
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}   For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red" }}>Price : {key.price} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, key.price, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card> :
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>  Brand : {key.brand}

                {" "}  For - {key.category}
              </h4>
              <Card.Text>
                {key.description}
              </Card.Text>
              <h6 style={{ color: "red", textDecoration: "line-through" }}>Price : {key.price} </h6>
              <h5>Offer : {key.discount}%</h5>
              <h6>Today's Price : {offerPrice} </h6>
              <Button variant="primary" onClick={() => { addtocartdata(key.id, key.name, key.brand, key.category, offerPrice, key.description, key.image, key.discount) }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        }
      </>
    )
      }
    }
  })
  return (
    <>
      <div id="shoppage">
        <div style={{ width: "350px", paddingLeft: "20px", paddingTop: "20px", fontSize: "11px", fontWeight: "bold" }}>
          <h5> Search By Category</h5>
          <br />
          <input type="radio" value="MEN" name="cat" onChange={(e) => { setCatData(e.target.value) }} /> Mens Hats
          <br />
          <input type="radio" value="WOMEN" name="cat" onChange={(e) => { setCatData(e.target.value) }} /> Womens Hats
          <br />
          <input type="radio" value="KIDS" name="cat" onChange={(e) => { setCatData(e.target.value) }} /> Kids Hats
          <br />
          <Button size="sm" onClick={handleSubCategory}>Search</Button>
          <br /> <br />
          <h5> Search By Price</h5>

          <input type="radio" value="200" name="price"
            onChange={(e) => { setPriceData(e.target.value) }} /> Rs 200 & below
          <br />
          <input type="radio" value="300" name="price"
            onChange={(e) => { setPriceData(e.target.value) }} /> Rs 200 - 400
          <br />
          <input type="radio" value="4`00" name="price"
            onChange={(e) => { setPriceData(e.target.value) }} /> Rs 400 - 500
          <br />
          <input type="radio" value="500" name="price"
            onChange={(e) => { setPriceData(e.target.value) }} /> Rs 500 & above
          <br />

          <Button size="sm" onClick={handleSubPrice}>Search</Button>


        </div>
        <div>
          <div id='producttitle'>
            <h1>Our Premium Products</h1>
          </div>
          <div id='products'>
            {displayState?ans:ans1}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;