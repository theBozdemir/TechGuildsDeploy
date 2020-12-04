import React from "react";
import { Button3 } from "./Button3";
import "./CSS/form.css";

function Form() {
  return (
    <div className="get_in_touch">
      <h2 className="getTouch">GET IN TOUCH</h2>
      <form action="#" className="contact">
        <input className="normal name" type="text" placeholder="full name" />
        <input className="normal mail" type="email" placeholder="email" />
        <br />
        <input
          className="normal number"
          type="number"
          placeholder="phone number(optional)"
        />
        <input className="normal subject" type="text" placeholder="subject" />
        <br />

        <textarea
          rows="1"
          cols="125"
          name="message"
          form="usrform"
          placeholder="message ..."
        ></textarea>

        <p className="attach">
          <i class="fas fa-paperclip"></i> Attach File
        </p>
        <br />
        <input type="checkbox" className="check" />
        <label className="subscribe">Subscribe to newsletter.</label>
        <br />
        <Button3 className="btn3" />
      </form>
    </div>
  );
}

export default Form;
