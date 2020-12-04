import "../CSS/Service.css";
import Location from "../Location";
import Form from "../Form";
import Footer from "../Footer";
import Photo1 from "../images/fix.png";
import React from "react";
import { Link } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";

function Services() {
  return (
    <div>
      <div class="home_button">
        <Link to="/">
          <p>
            <MdChevronLeft />
            home
          </p>
        </Link>
      </div>
      <div className="service-header">
        <p>SERVICES</p>
      </div>

      <div className="service1">
        <img className="fix" src={Photo1} alt="fix" />

        <div className="text-2">
          <h2 classname="container2-heading">
            <b>SITECORE IMPLEMENTATION</b>
          </h2>
          <br />
          <p>
            With over 66000 hours developing
            <br />
            some of the mpst complex Sitecore implementations in North America
            and <br />
            beyond, TechGuilds has the eperience <br />
            to make your project succeed.
          </p>
          <br />
          <p className="read">READ MORE</p>
        </div>
      </div>
      <div className="container-1">
        <div className="text-1">
          <h3>
            <b>SITECORE SUPPORT</b>
          </h3>
          <br />
          <p>
            Minimize impact and disruption to your <br />
            business with our end to end 24/7
            <br /> support & proactive monitoring.Our
            <br />
            knowledgeable experts can help by <br /> phone, online ticketing or
            email.
          </p>
          <br />
          <p className="read">READ MORE</p>
        </div>
        <img className="fix" src={Photo1} alt="fix" />
      </div>
      <div className="container-2">
        <img className="fix" src={Photo1} alt="fix" />

        <div className="text-2">
          <h2 classname="container2-heading">
            <b>SITECORE TRAINING</b>
          </h2>
          <br />
          <p>
            Get more value out of your Sitecore <br />
            platform by upgrading the skills of your
            <br /> team with custom tailored training for
            <br /> Content Authors, Marketing
            <br /> Professionals, DevOps and Developers
          </p>

          <br />
          <p className="read">READ MORE</p>
        </div>
      </div>
      <div className="container-1">
        <div className="text-1">
          <h3>
            <b>MARKETING DESIGN</b>
          </h3>
          <br />
          <p>
            Turn your digital platform into your
            <br /> company's best customer advocate
            <br /> with a design that orchestrates each
            <br /> stage of your customer experience <br />
            across any channel.
          </p>
          <br />
          <p className="read">READ MORE</p>
        </div>
        <img className="fix" src={Photo1} alt="fix" />
      </div>
      <div className="container-2">
        <img className="fix" src={Photo1} alt="fix" />

        <div className="text-2">
          <h2 classname="container2-heading">
            <b>MANAGED SERVICES</b>
          </h2>{" "}
          <br />
          <p>
            Enjoy the peace of mind that comes
            <br /> with knowing that every aspect of your
            <br /> Sitecore platform is managed by <br />
            Sitecore experts. From design & <br />
            implementation to ongoing
            <br />
            development and support, we can <br />
            design a managed services contract to
            <br /> do it for you.
          </p>
          <br />
          <p className="read">READ MORE</p>
        </div>
      </div>
      <div className="container-1">
        <div className="text-1">
          <h3>
            <b>TEAM AUGMENTATION </b>
          </h3>
          <br />
          <p>
            Push the envelope on Sitecore projects
            <br /> faster by augmenting your existing team
            <br />
            with one of our experts. We can bring
            <br /> your team up to speed on some of
            <br /> Sitecore's advanced features quickly or
            <br /> help you work through a critiacal code
            <br /> crunch{" "}
          </p>
          <br />
          <p className="read">READ MORE</p>
        </div>
        <img className="fix" src={Photo1} alt="fix" />
      </div>
      <div className="container-2">
        <img className="fix" src={Photo1} alt="fix" />

        <div className="text-2">
          <h2 classname="container2-heading">
            <b>SITECORE AUDIT</b>
          </h2>
          <br />
          <p>
            Gain a comprehensive review of your
            <br /> existing Sitecore implementation, a<br /> summary of all
            deficiencies, and a <br />
            prioritized action plan to correct them
            <br /> helping you realize the vision of better
            <br />
            customer experiences.
          </p>
          <br />
          <p className="read">READ MORE</p>
        </div>
      </div>

      <div className="button-wrap">
        <button className="action-button">
          <h2>Call To Action</h2>
        </button>
      </div>

      <div>
        <Location />
      </div>
      <div className="s-form">
        <div classname="service-form">
          <Form />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Services;
