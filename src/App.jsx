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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;