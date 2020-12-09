import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import './CSS/Dropdown.css'
function Dropdown() {
  return (
    <div className='dropdown'
      style={{
        position: "absolute",
        marginTop: 80,
        left: -12,
        textAlign: "center",
      }}
    >
      {MenuItems.map((item, index) => {
        return (
          <h6 className='drop-links'>
            <Link  style={{ color: "black" }} to={item.path} key={index}>
              {item.title}
            </Link>
          </h6>
        );
      })}
    </div>
  );
}

export default Dropdown;
