import { useRoute } from "./components/RouteContext";
export const Header = () => {
  const { setRoute } = useRoute();
  return (
    <nav class="head">
      <a href="index.html" class="head__logo">
        Lingokart
      </a>
      <ul class="nav__menu">
        <li class="nav__item">
          <a
            href="index.html"
            class="nav__link"
            onClick={() => setRoute("products")}
          >
            Home
          </a>
        </li>
        <li class="nav__item">
          <a href="/" class="nav__link" onClick={() => setRoute("cart")}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
          </a>
        </li>
        <li class="nav__item">
          <a href="/" class="nav__link">
            <i className="fa fa-heart wish-header" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
