import { useCart } from "./cartContext";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { itemsInCart } = useCart();
  const location = useLocation();
  console.log(location.state);
  return (
    <nav className="head">
      <Link to="/">
        <div className="head__logo">Lingokart</div>
      </Link>
      <ul className="nav__menu">
        <li className="nav__item">
          <Link to="/">
            <div className="nav__link">Home</div>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/cart" state={{ itemsInCart }}>
            <div className="nav__link">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
            </div>
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
