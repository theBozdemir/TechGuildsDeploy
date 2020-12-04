import React, { useState } from "react";
import "../CSS/Home.css";
import { Button } from "../Button";
import { Button2 } from "../Button2";
import Footer from "../Footer";
import Form from "../Form";
import Icon from "../images/icon.png";
import william from "../images/william.png";
import Photo1 from "../images/photo-1.png";
import Glasses from "../images/glasses.png";
import Location from "../Location";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Hexagon } from "../Hexagon";
import Client from "../Logo/westpark.png";
import { AiOutlineLine } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homewrapper">
      <Carousel activeIndex={index} interval={null} onSelect={handleSelect}>
        <Carousel.Item>
          <div>
            <img className="icon" src={Icon} alt="icon" />
          </div>
        </Carousel.Item>

        <Carousel.Item></Carousel.Item>

        <Carousel.Item></Carousel.Item>
      </Carousel>
      <div className="general-container">
        <div className="container-1">
          <div className="text-1">
            <h1>
              <b>WHO WE ARE</b>
            </h1>
            <br />
            <p className="context1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim
              ad minim veniam
            </p>
            <Link to="/call-to-action" className="nav-links-mobile"></Link>
            <Button />
          </div>
          <img className="persons" src={Photo1} alt="persons" />
        </div>

        <div className="container-2">
          <div>
            <Hexagon />
          </div>
          <div className="text-2">
            <h1 classname="container2-heading">
              <b>
                TELL US WHAT <br />
                YOU'RE LOOKING FOR
              </b>
            </h1>
            <h3 className="service">SERVICE HEADING</h3>
            <br />
            <p className="context2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim
              ad minim veniam
            </p>

            <p className="read">
              READ MORE<i class="fas fa-angle-double-right"></i>
            </p>
          </div>
        </div>
        <div className="container-6">
          <div className="text-1">
            <h1>
              <b>GET STARTED</b>
            </h1>
            <br />
            <h4 className="health">HEALTHCARE</h4>
            <p className="canadian-nurse">
              Canadian Nurses <br />
              Association: Automated <br />
              Personalized Portal Built <br />
              on Sitecore
            </p>
          </div>

          <img className="nurse" src={Glasses} alt="persons" />
        </div>

        <div className="container-3">
          <h1 className="brands">SOME OF OUR CLIENTS</h1>
          <div className="client-grid">
            <div className="client1 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client2 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client3 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client4 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client5 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client6 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client7 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client8 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client9 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client10 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client11 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client12 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client13 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client14 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client15 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client16 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client17 client">
              <img src={Client} alt="amica" />
            </div>
            <div className="client18 client">
              <img src={Client} alt="amica" />
            </div>
          </div>
        </div>

        <div className="container-4">
          <h1 className="header4">GET RESULTS</h1>
          <blockquote>
            <i>
              <h3>
                "TechGuilds Consulting Inc. isn't just a vendor,
                <br /> they're our partners."
              </h3>
            </i>
          </blockquote>

          <Button2 />
        </div>
        <div className="container-5">
          <div className="user-icons">
            <div className="user1">
              <i class="user fas fa-sort-down fa-2x"></i>
              <i class="user fas fa-user-friends fa-3x"></i>
              <AiOutlineLine />
            </div>

            <div className="user2">
              <i class="user fas fa-sort-down fa-2x"></i>
              <i class="user fas fa-user-friends fa-3x"></i>
              <AiOutlineMinus />
            </div>

            <div className="user3">
              <i class="user fas user3 fas fa-user fa-3x "></i>
              <AiOutlineMinus />
            </div>
            <div className="user4">
              <i class="user fas fa-user fa-3x"></i>
              <AiOutlineMinus />
            </div>
            <div className="user5">
              <i class="user fas fa-user fa-3x"></i>
              <AiOutlineMinus />
            </div>
          </div>
          <div classname="text5">
            <h2>
              {" "}
              <b>KEEP LEARNING</b>
            </h2>
            <h6>BLOG | CATEGORY</h6>
            <h3>
              Optimizing Sitecore
              <br /> Experience Editor -<br /> Rendering Multiple Child
              <br /> Items in One Component
            </h3>
            <img className="william" src={william} alt="william" />
          </div>
        </div>
      </div>

      <div className="googlemaps">
        <Location />
      </div>

      <div>
        <Form />
      </div>

      <Footer />
    </div>
  );
}
export default Home;
