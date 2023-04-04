import CartWidget from "../CartWidget/CartWidget";
/*import "./Navbar.css" forma de importar el css */
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"

const Navbar = ({children}) => {
    let numero =12;
return(
    <div>
    <div className={styles.containerNavbar}>   
        <Link to="/">
        <img src="https://res.cloudinary.com/duhogrmi9/image/upload/v1677364996/logofinal_pfb3cn.png" />
        </Link>

        <ul className={styles.containerList}>
            <Link to="/" className={styles.navbarItem}>Todas </Link>
            <Link to="/category/urbanas" className={styles.navbarItem}>Urbanas </Link>
            <Link to="/category/deportivas" className={styles.navbarItem}>Deportivas </Link>
        </ul>
        <CartWidget numero={numero} />

    </div>
    {children}
    </div>
);
};

export default Navbar
