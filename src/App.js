import NavBar from "./components/NavBar/NavBar";
import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";


function App(){
  return(
      <BrowserRouter>
<<<<<<< HEAD
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="*" element={<h1>ERROR 404 NOT FOUND</h1>}/>
            </Routes>    
        </CartProvider>
=======
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<h1>ERROR 404 NOT FOUND</h1>}/>
      </Routes>
>>>>>>> e93711f2fb3209a82ce2105c16afd69df1ab8ac6
      </BrowserRouter>
  )
}

export default App;
