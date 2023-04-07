import CartWidget from "../CartWidget/CartWidget";
/*import "./Navbar.css" forma de importar el css */
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>

        <div> 
        <Link to="/">
          <img src="https://res.cloudinary.com/duhogrmi9/image/upload/v1677364996/logofinal_pfb3cn.png" />
        </Link>
        </div>

        <ul className={styles.containerList}>
          <Button variant="outlined">
            <Link to="/" className={styles.navbarItem}>
              Todas{" "}
            </Link>
          </Button>
          <Button variant="outlined">
            <Link to="/category/urbanas" className={styles.navbarItem}>
              Urbanas{" "}
            </Link>
          </Button>
          <Button variant="outlined">
            <Link to="/category/deportivas" className={styles.navbarItem}>
              Deportivas{" "}
            </Link>
          </Button>
        </ul>

        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
