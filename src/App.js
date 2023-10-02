import NavBar from "./components/NavBar/NavBar";
import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(){
  return(
    <div>
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<h1>ERROR 404 NOT FOUND</h1>}/>
          
      </Routes>    
      </BrowserRouter>
    </div>
  )
}

export default App;
