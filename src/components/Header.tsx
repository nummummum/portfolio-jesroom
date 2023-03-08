import { ShoppingCartOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
export default function Header() {
  const navigate = useNavigate();
  return (
    <section className="header">
      <ul className="header_menu">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("intro")}>ABOUT PAGE</li>
        <li onClick={() => navigate("room")}>ROOM</li>
        <li onClick={() => navigate("furniture")}>FURNITURE</li>
      </ul>
      <div className="cart_wrap" onClick={() => navigate("cart")}>
        <ShoppingCartOutlined className="cart" />
      </div>
    </section>
  );
}
