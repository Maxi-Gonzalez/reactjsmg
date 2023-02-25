import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx"
import Productos from "./Components/Productos/Productos.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Productos />
      <Footer />
    </div>
  );
}

export default App;
