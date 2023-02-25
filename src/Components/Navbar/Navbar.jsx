import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"

const Navbar = () => {
return(
    <div className="container-navbar">
        <img src="https://res.cloudinary.com/duhogrmi9/image/upload/v1677364996/logofinal_pfb3cn.png" />
        
        <ul className="container-list">
            <li>Remeras</li>
            <li>Rinoneras</li>
            <li>Camperas</li>
        </ul>
        <CartWidget />
        <h3 className="carrito">Carrrito</h3>
    </div>
);
};

export default Navbar