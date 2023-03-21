import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Productos from "./Components/Productos/Productos.jsx";
import ItemCount from "./Components/ItemCount/ItemCount.jsx";

function App() {
  const onAdd = (cantidad) => {
    console.log("se agrego " + cantidad + " elementos al carrito");
  }
let stock =5
let initial= 1

  return (
    <div>
      <Navbar>
          <Footer>
          <ItemListContainer greeting={"Hola"} />
          <Productos title={"producto 1"} price={0} isGreen={true} />
          {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd} /> */}
          </Footer>
      </Navbar>
    </div>
  );
}

export default App;
