import { useCart } from "./cartContext";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { itemsInCart } = useCart();
  const location = useLocation();
  console.log(location.state);
  return (
    <nav className="head">
      <a href="index.html" className="head__logo">
        Lingokart
      </a>
      <ul className="nav__menu">
        <li className="nav__item">
          <Link to="/">
            <a href="index.html" className="nav__link">
              Home
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/cart" state={{ itemsInCart }}>
            <a href="/" className="nav__link">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            <i className="fa fa-heart wish-header" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
