import { MenuItems } from "./MenuItems2";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <div
      style={{
        position: "absolute",
        marginTop: 80,
        left: 0,
        textAlign: "center",
      }}
    >
      {MenuItems.map((item, index) => {
        return (
          <h6>
            <Link style={{ color: "black" }} to={item.path} key={index}>
              {item.title}
            </Link>
          </h6>
        );
      })}
    </div>
  );
}

export default Dropdown;
