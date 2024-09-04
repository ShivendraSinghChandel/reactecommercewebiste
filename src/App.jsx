import Layout from "./Layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;