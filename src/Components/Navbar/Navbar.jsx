import CartWidget from "../CartWidget/CartWidget";
/*import "./Navbar.css" forma de importar el css */
import styles from "./Navbar.module.css"

const Navbar = ({children}) => {
return(
    <div>
    <div className={styles.containerNavbar}>   
        <img src="https://res.cloudinary.com/duhogrmi9/image/upload/v1677364996/logofinal_pfb3cn.png" />
        
        <ul className={styles.containerList}>
            <li>Remeras</li>
            <li>Rinoneras</li>
            <li>Camperas</li>
        </ul>
        <CartWidget />
        <h3 className="carrito" style={{padding: "10px"}}>Carrrito</h3>

    </div>
    {children}
    </div>
);
};

export default Navbar
