import Layout from "./Layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Sale from "./pages/Sale";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import MyCart from "./pages/MyCart";
import SearchData from "./pages/SearchData";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import PaymentDone from "./pages/PaymentDone";
import OpenDetail from "./pages/OpenDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="products" element={<Product/>}/>
          <Route path="sale" element={<Sale/>}/>
          <Route path="men" element={<Men/>}/>
          <Route path="women" element={<Women/>}/>
          <Route path="kids" element={<Kids/>}/>
          <Route path="mycart" element={<MyCart/>}/>
          <Route path="searchdata/:txtdata" element={<SearchData/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="paydone" element={<PaymentDone/>}/>
          <Route path="opendetail/:pid" element={<OpenDetail/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="profile" element={<Profile/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;