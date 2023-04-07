import ConsumientoApis from "./Components/ConsumientoApis/ConsumientoApis.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./Components/Cart/Cart.jsx";
import Form from "./Components/Form/Form.jsx";
import Login from "./Components/Login/Login.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import CartContextProvider from "./Context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer/> }   />
        <Route path="/category/:categoryName" element={<ItemListContainer/> }   />
        <Route path="/cart" element={ <Cart/> }   />
        <Route path="/login" element={ <Login />}   />
        <Route path="/itemDetail/:id" element={ <ItemDetailContainer />}   />
        <Route path="/formulario" element={<Form/> } />

        <Route path="*" element={<h1>error 404: not found</h1>}/>

      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
